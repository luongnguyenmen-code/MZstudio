/**
 * LUMIERE STUDIO - MAIN APPLICATION CONTROLLER
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Core Engine
    const canvas = document.getElementById('live-canvas');
    const audio = document.getElementById('studio-audio');
    const customizer = new CustomizerCore();
    customizer.init(canvas, audio);

    // 2. DOM Elements
    const templatesList = document.getElementById('templates-list');
    const filterTabs = document.getElementById('filter-tabs');
    const searchInput = document.getElementById('template-search');

    // Inspector Tabs
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanels = document.querySelectorAll('.tab-panel');

    // Header Actions
    const btnFullscreen = document.getElementById('btn-fullscreen');
    const btnExportHtml = document.getElementById('btn-export-html');
    const btnExportJson = document.getElementById('btn-export-json');
    const btnImportJson = document.getElementById('btn-import-json');
    const jsonFileInput = document.getElementById('json-file-input');

    // Device Switcher
    const deviceButtons = document.querySelectorAll('.device-btn');

    // Toast Container
    const toastContainer = document.getElementById('toast-container');

    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = 'toast';
        if (type === 'success') toast.style.borderLeftColor = '#10b981';
        if (type === 'error') toast.style.borderLeftColor = '#ef4444';
        toast.innerText = message;
        toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }

    // Helper: Normalize Vietnamese text for flexible search
    function normalizeSearchStr(str) {
        return (str || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .trim();
    }

    // 3. Render Template Library
    function renderTemplates(filter = 'all', searchQuery = '') {
        templatesList.innerHTML = '';
        const cleanQuery = normalizeSearchStr(searchQuery);

        const filtered = TEMPLATE_PRESETS.filter(item => {
            const matchFilter = (filter === 'all') || (item.category === filter);
            const nameNorm = normalizeSearchStr(item.name);
            const descNorm = normalizeSearchStr(item.desc);
            const tagNorm = normalizeSearchStr(item.tag);
            const matchSearch = !cleanQuery || nameNorm.includes(cleanQuery) || descNorm.includes(cleanQuery) || tagNorm.includes(cleanQuery);
            return matchFilter && matchSearch;
        });

        if (filtered.length === 0) {
            templatesList.innerHTML = `
                <div style="text-align: center; padding: 40px 10px; color: var(--text-muted); font-size: 13px;">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 8px; opacity: 0.5;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    <p>Không tìm thấy mẫu phù hợp với "<strong>${searchQuery}</strong>"</p>
                </div>
            `;
            return;
        }

        filtered.forEach(preset => {
            const card = document.createElement('div');
            card.className = `template-card ${preset.id === customizer.state.currentPresetId ? 'active' : ''}`;
            card.dataset.id = preset.id;

            card.innerHTML = `
                <div class="template-thumb">
                    <img src="${preset.posterImg || 'image/v (1).jpg'}" alt="${preset.name}" loading="lazy" onerror="this.onerror=null;this.src='image/v (1).jpg';">
                    <span class="template-badge">${preset.tag}</span>
                </div>
                <div class="template-info">
                    <div class="template-name">
                        <span>${preset.name}</span>
                    </div>
                    <p class="template-desc">${preset.desc}</p>
                </div>
            `;

            card.addEventListener('click', () => {
                document.querySelectorAll('.template-card').forEach(c => c.classList.remove('active'));
                card.classList.add('active');
                customizer.loadPreset(preset.id);
                syncControlsFromState();
                showToast(`Đã tải giao diện: ${preset.name}`, 'success');
            });

            templatesList.appendChild(card);
        });
    }

    // Filter Tabs handler
    filterTabs.querySelectorAll('.filter-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            filterTabs.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            renderTemplates(tag.dataset.filter, searchInput.value);
        });
    });

    // Search Input Realtime handler
    searchInput.addEventListener('input', (e) => {
        const activeFilter = filterTabs.querySelector('.filter-tag.active') ? filterTabs.querySelector('.filter-tag.active').dataset.filter : 'all';
        renderTemplates(activeFilter, e.target.value);
    });

    // 4. Tab Navigation
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanels.forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            const target = document.getElementById(btn.dataset.tab);
            if (target) target.classList.add('active');
        });
    });

    // 5. Populate Media Preset Grids
    const videoPresetGrid = document.getElementById('video-preset-grid');
    if (videoPresetGrid) {
        videoPresetGrid.innerHTML = '';
        LOCAL_VIDEOS.forEach(vid => {
            const item = document.createElement('div');
            item.className = 'preset-thumb-item';
            item.title = vid.name;
            item.innerHTML = `<video src="${vid.src}" muted playsinline loop onmouseover="this.play()" onmouseout="this.pause();this.currentTime=0;"></video>`;
            item.addEventListener('click', () => {
                videoPresetGrid.querySelectorAll('.preset-thumb-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                customizer.setState({ bgType: 'video', videoSrc: vid.src });
                document.getElementById('input-video-url').value = vid.src;
                document.getElementById('select-bg-type').value = 'video';
                showToast(`Đã đổi video nền: ${vid.name}`, 'info');
            });
            videoPresetGrid.appendChild(item);
        });
    }

    const imagePresetGrid = document.getElementById('image-preset-grid');
    if (imagePresetGrid) {
        imagePresetGrid.innerHTML = '';
        LOCAL_IMAGES.forEach(img => {
            const item = document.createElement('div');
            item.className = 'preset-thumb-item';
            item.title = img.name;
            item.innerHTML = `<img src="${img.thumb || img.src}" alt="${img.name}">`;
            item.addEventListener('click', () => {
                imagePresetGrid.querySelectorAll('.preset-thumb-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                customizer.setState({ bgType: 'image', imageSrc: img.src });
                document.getElementById('input-image-url').value = img.src;
                document.getElementById('select-bg-type').value = 'image';
                showToast(`Đã đổi hình nền: ${img.name}`, 'info');
            });
            imagePresetGrid.appendChild(item);
        });
    }

    // 6. Bind Inspector Controls to State
    function bindInput(id, stateKey, parser = v => v, event = 'input') {
        const el = document.getElementById(id);
        if (!el) return;
        el.addEventListener(event, (e) => {
            const val = el.type === 'checkbox' ? el.checked : parser(e.target.value);
            const patch = {};
            patch[stateKey] = val;
            customizer.setState(patch);

            // Update badge if exists
            const badge = document.getElementById(`${id}-val`);
            if (badge) badge.innerText = val;

            // Update color hex text span if color input
            if (el.type === 'color') {
                const hexSpan = el.parentElement ? el.parentElement.querySelector('.color-hex') : null;
                if (hexSpan) hexSpan.innerText = val;
            }
        });
    }

    // Text & Typography bindings
    bindInput('input-title', 'title');
    bindInput('input-subtitle', 'subtitle');
    bindInput('input-badge', 'badge');
    bindInput('input-show-badge', 'showBadge', v => v, 'change');
    bindInput('input-show-clock', 'showClock', v => v, 'change');
    bindInput('select-font', 'fontFamily', v => v, 'change');
    bindInput('slider-font-size', 'fontSize', parseFloat);
    bindInput('slider-letter-spacing', 'letterSpacing', parseFloat);
    bindInput('color-start', 'colorStart');
    bindInput('color-end', 'colorEnd');
    bindInput('color-glow', 'glowColor');
    bindInput('slider-glow-blur', 'glowBlur', parseInt);
    bindInput('slider-text-y', 'textPosY', parseInt);
    bindInput('slider-text-x', 'textPosX', parseInt);

    // Text Alignment buttons
    const alignButtons = document.querySelectorAll('.align-btn');
    alignButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            alignButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            customizer.setState({ textAlign: btn.dataset.align });
        });
    });

    // Media bindings
    bindInput('select-bg-type', 'bgType', v => v, 'change');
    bindInput('input-video-url', 'videoSrc');
    bindInput('input-image-url', 'imageSrc');
    bindInput('slider-brightness', 'brightness', parseFloat);
    bindInput('slider-contrast', 'contrast', parseFloat);
    bindInput('slider-saturation', 'saturation', parseFloat);
    bindInput('slider-hue', 'hueRotate', parseInt);
    bindInput('slider-blur', 'blur', parseInt);
    bindInput('slider-vignette', 'vignette', parseFloat);

    // Parallax Layer URL bindings
    const layerInputs = [
        document.getElementById('input-parallax-layer-0'),
        document.getElementById('input-parallax-layer-1'),
        document.getElementById('input-parallax-layer-2')
    ];
    layerInputs.forEach((inp, idx) => {
        if (inp) {
            inp.addEventListener('input', (e) => {
                const layers = [...(customizer.state.parallaxLayers || [])];
                if (layers[idx]) {
                    layers[idx].img = e.target.value;
                    customizer.setState({ parallaxLayers: layers });
                }
            });
        }
    });

    // Frame bindings
    bindInput('select-frame-style', 'frameStyle', v => v, 'change');
    bindInput('color-frame', 'frameColor');
    bindInput('slider-frame-width', 'frameWidth', parseInt);

    // Avatar bindings
    bindInput('input-show-avatar', 'showAvatar', v => v, 'change');
    bindInput('slider-avatar-scale', 'avatarScale', parseFloat);
    bindInput('slider-avatar-x', 'avatarPosX', parseInt);
    bindInput('slider-avatar-y', 'avatarPosY', parseInt);
    bindInput('input-avatar-floating', 'avatarFloating', v => v, 'change');

    // Particle bindings
    bindInput('select-particle-type', 'particleType', v => v, 'change');
    bindInput('slider-particle-count', 'particleCount', parseInt);
    bindInput('slider-particle-speed', 'particleSpeed', parseFloat);
    bindInput('color-particle-1', 'particleColor');
    bindInput('color-particle-2', 'particleColor2');
    bindInput('select-particle-interaction', 'particleInteraction', v => v, 'change');

    // Audio bindings
    bindInput('input-audio-enabled', 'audioEnabled', v => v, 'change');
    bindInput('input-audio-url', 'audioSrc');
    bindInput('slider-audio-volume', 'audioVolume', parseFloat);

    // 7. Custom File Upload Handlers (ObjectURL)
    function setupFileUpload(dropzoneId, inputId, callback) {
        const dropzone = document.getElementById(dropzoneId);
        const fileInput = document.getElementById(inputId);
        if (!dropzone || !fileInput) return;

        dropzone.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            if (e.target.files && e.target.files[0]) {
                const file = e.target.files[0];
                const objectUrl = URL.createObjectURL(file);
                callback(objectUrl, file.name);
            }
        });

        dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.style.borderColor = 'var(--primary)'; });
        dropzone.addEventListener('dragleave', () => { dropzone.style.borderColor = ''; });
        dropzone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropzone.style.borderColor = '';
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                const file = e.dataTransfer.files[0];
                const objectUrl = URL.createObjectURL(file);
                callback(objectUrl, file.name);
            }
        });
    }

    // Video Upload
    setupFileUpload('dropzone-video', 'file-video-input', (url, name) => {
        customizer.setState({ bgType: 'video', videoSrc: url });
        document.getElementById('input-video-url').value = url;
        document.getElementById('select-bg-type').value = 'video';
        showToast(`Đã tải lên video: ${name}`, 'success');
    });

    // Image Upload
    setupFileUpload('dropzone-image', 'file-image-input', (url, name) => {
        customizer.setState({ bgType: 'image', imageSrc: url });
        document.getElementById('input-image-url').value = url;
        document.getElementById('select-bg-type').value = 'image';
        showToast(`Đã tải lên hình ảnh: ${name}`, 'success');
    });

    // Avatar Upload
    setupFileUpload('dropzone-avatar', 'file-avatar-input', (url, name) => {
        customizer.setState({ showAvatar: true, avatarSrc: url });
        document.getElementById('input-show-avatar').checked = true;
        showToast(`Đã tải lên Avatar/Khung nhân vật: ${name}`, 'success');
    });

    // Audio Upload
    setupFileUpload('dropzone-audio', 'file-audio-input', (url, name) => {
        customizer.setState({ audioEnabled: true, audioSrc: url, audioPlaying: true });
        document.getElementById('input-audio-enabled').checked = true;
        document.getElementById('input-audio-url').value = url;
        showToast(`Đã tải lên bài hát: ${name}`, 'success');
    });

    // 8. Device Viewport Switcher
    deviceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            deviceButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            customizer.setState({ deviceView: btn.dataset.view });
        });
    });

    // 9. Fullscreen Mode
    btnFullscreen.addEventListener('click', () => {
        document.body.classList.toggle('fullscreen-mode');
        if (document.body.classList.contains('fullscreen-mode')) {
            showToast('Nhấn phím ESC hoặc phím F để thoát Toàn màn hình', 'info');
        }
        if (customizer.particleEngine) {
            setTimeout(() => customizer.particleEngine.resize(), 200);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'f' || e.key === 'F') {
            document.body.classList.toggle('fullscreen-mode');
            if (customizer.particleEngine) {
                setTimeout(() => customizer.particleEngine.resize(), 200);
            }
        }
        if (e.key === 'Escape' && document.body.classList.contains('fullscreen-mode')) {
            document.body.classList.remove('fullscreen-mode');
            if (customizer.particleEngine) {
                setTimeout(() => customizer.particleEngine.resize(), 200);
            }
        }
    });

    // 10. Export Engine Triggers
    btnExportHtml.addEventListener('click', () => {
        ExportEngine.exportHTML(customizer.state);
        showToast('Đã xuất file HTML tùy chỉnh thành công!', 'success');
    });

    btnExportJson.addEventListener('click', () => {
        ExportEngine.exportJSON(customizer.state);
        showToast('Đã tải xuống cấu hình JSON Preset!', 'success');
    });

    btnImportJson.addEventListener('click', () => {
        jsonFileInput.click();
    });

    jsonFileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (evt) => {
                try {
                    const parsed = JSON.parse(evt.target.result);
                    customizer.setState(parsed);
                    syncControlsFromState();
                    showToast('Đã nạp thành công cấu hình từ file JSON!', 'success');
                } catch (err) {
                    showToast('File JSON không hợp lệ!', 'error');
                }
            };
            reader.readAsText(file);
        }
    });

    // 11. Sync inspector controls when preset or state is loaded
    function syncControlsFromState() {
        const s = customizer.state;

        const setVal = (id, val) => {
            const el = document.getElementById(id);
            if (el) {
                if (el.type === 'checkbox') el.checked = !!val;
                else el.value = val;

                if (el.type === 'color' && el.parentElement) {
                    const hex = el.parentElement.querySelector('.color-hex');
                    if (hex) hex.innerText = val;
                }
            }
            const valBadge = document.getElementById(`${id}-val`);
            if (valBadge) valBadge.innerText = val;
        };

        setVal('input-title', s.title);
        setVal('input-subtitle', s.subtitle);
        setVal('input-badge', s.badge);
        setVal('input-show-badge', s.showBadge);
        setVal('input-show-clock', s.showClock);
        setVal('select-font', s.fontFamily);
        setVal('slider-font-size', s.fontSize);
        setVal('slider-letter-spacing', s.letterSpacing);
        setVal('color-start', s.colorStart);
        setVal('color-end', s.colorEnd);
        setVal('color-glow', s.glowColor);
        setVal('slider-glow-blur', s.glowBlur);
        setVal('slider-text-y', s.textPosY);
        setVal('slider-text-x', s.textPosX);

        alignButtons.forEach(b => {
            if (b.dataset.align === (s.textAlign || 'center')) b.classList.add('active');
            else b.classList.remove('active');
        });

        setVal('select-bg-type', s.bgType);
        setVal('input-video-url', s.videoSrc);
        setVal('input-image-url', s.imageSrc);
        setVal('slider-brightness', s.brightness);
        setVal('slider-contrast', s.contrast);
        setVal('slider-saturation', s.saturation);
        setVal('slider-hue', s.hueRotate);
        setVal('slider-blur', s.blur);
        setVal('slider-vignette', s.vignette);

        if (s.parallaxLayers) {
            if (layerInputs[0] && s.parallaxLayers[0]) layerInputs[0].value = s.parallaxLayers[0].img || '';
            if (layerInputs[1] && s.parallaxLayers[1]) layerInputs[1].value = s.parallaxLayers[1].img || '';
            if (layerInputs[2] && s.parallaxLayers[2]) layerInputs[2].value = s.parallaxLayers[2].img || '';
        }

        setVal('select-frame-style', s.frameStyle);
        setVal('color-frame', s.frameColor);
        setVal('slider-frame-width', s.frameWidth);

        setVal('input-show-avatar', s.showAvatar);
        setVal('slider-avatar-scale', s.avatarScale);
        setVal('slider-avatar-x', s.avatarPosX);
        setVal('slider-avatar-y', s.avatarPosY);
        setVal('input-avatar-floating', s.avatarFloating);

        setVal('select-particle-type', s.particleType);
        setVal('slider-particle-count', s.particleCount);
        setVal('slider-particle-speed', s.particleSpeed);
        setVal('color-particle-1', s.particleColor);
        setVal('color-particle-2', s.particleColor2);
        setVal('select-particle-interaction', s.particleInteraction);

        setVal('input-audio-enabled', s.audioEnabled);
        setVal('input-audio-url', s.audioSrc);
        setVal('slider-audio-volume', s.audioVolume);
    }

    // Audio floating pill click to toggle play/pause
    const audioPill = document.getElementById('live-audio-pill');
    if (audioPill) {
        audioPill.addEventListener('click', () => {
            const isPlaying = !customizer.state.audioPlaying;
            customizer.setState({ audioPlaying: isPlaying });
            showToast(isPlaying ? 'Đang phát âm thanh BGM' : 'Đã tạm dừng âm thanh', 'info');
        });
    }

    // Initial render
    renderTemplates('all');
    syncControlsFromState();
});
