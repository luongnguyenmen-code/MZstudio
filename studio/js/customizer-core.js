/**
 * LUMIERE STUDIO - CUSTOMIZER CORE REACTIVE STATE & RENDERING ENGINE
 */

class CustomizerCore {
    constructor() {
        this.state = {
            currentPresetId: 'cyber_samurai',
            // Text & Typography
            title: 'CYBER SAMURAI',
            subtitle: 'NEON PROTOCOL // NIGHT CITY',
            badge: 'CYBERPUNK 8K',
            showBadge: true,
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 4.5,
            letterSpacing: 6,
            colorStart: '#00f0ff',
            colorEnd: '#ff007f',
            glowColor: '#00f0ff',
            glowBlur: 30,
            textPosY: 75,
            textPosX: 50,
            textAlign: 'center',

            // Clock & Date Widget
            showClock: false,
            clockTime: '',
            clockDate: '',

            // Media Background
            bgType: 'image', // 'video', 'image', 'slider_3d', 'parallax'
            videoSrc: 'video/holy.mp4',
            imageSrc: 'image/cyber_samurai_city.jpg',
            posterImg: 'image/cyber_samurai_city.jpg',
            slides: [
                'image/cyber_samurai_city.jpg',
                'image/mystic_dragon_shrine.jpg',
                'image/cosmic_galaxy_nebula.jpg',
                'image/v (1).png',
                'image/v (2).png',
                'image/v (3).png',
                'image/v (4).png',
                'image/v (5).png'
            ],
            activeSlideIndex: 0,
            brightness: 1.05,
            contrast: 1.1,
            saturation: 1.0,
            hueRotate: 0,
            blur: 0,
            vignette: 0.6,

            // Parallax Layers
            parallaxLayers: [
                { img: 'https://images.unsplash.com/photo-1508624217470-5ef0f947d8be?q=80&w=2070&auto=format&fit=crop', speed: 0.02 },
                { img: 'https://png.pngtree.com/png-clipart/20230913/ourmid/pngtree-foggy-mountain-forest-landscape-png-image_10096122.png', speed: 0.06 },
                { img: '', speed: 0.12 }
            ],

            // Frame & Border
            frameStyle: 'frame-cyber-hud', // 'frame-none', 'frame-luxury-gold', 'frame-cyber-hud', 'frame-glass-luxe', 'frame-holographic', 'frame-anime-glow', 'frame-minimalist'
            frameColor: '#00f0ff',
            frameWidth: 2,

            // Character Avatar Overlay
            showAvatar: false,
            avatarSrc: '',
            avatarScale: 1.0,
            avatarPosX: 50,
            avatarPosY: 50,
            avatarFloating: true,

            // Particles VFX
            particleType: 'cyber_sparks',
            particleCount: 85,
            particleSpeed: 1.5,
            particleColor: '#00f0ff',
            particleColor2: '#ff007f',
            particleInteraction: 'repel',

            // Audio BGM
            audioEnabled: false,
            audioSrc: '',
            audioVolume: 0.7,
            audioPlaying: false,

            // Device View
            deviceView: 'desktop' // desktop, ultrawide, laptop, tablet, mobile
        };

        this.listeners = [];
        this.particleEngine = null;
        this.audioElement = null;
        this.clockTimer = null;

        this.initClock();
        this.initParallaxMouse();
    }

    init(particleCanvasElement, audioElement) {
        this.particleEngine = new ParticleEngine(particleCanvasElement);
        this.particleEngine.start();
        this.audioElement = audioElement;

        this.applyStateToDOM();
    }

    initClock() {
        const update = () => {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const mins = String(now.getMinutes()).padStart(2, '0');
            const secs = String(now.getSeconds()).padStart(2, '0');
            this.state.clockTime = `${hours}:${mins}:${secs}`;
            this.state.clockDate = now.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

            const clockEl = document.getElementById('live-clock-time');
            const dateEl = document.getElementById('live-clock-date');
            if (clockEl) clockEl.innerText = this.state.clockTime;
            if (dateEl) dateEl.innerText = this.state.clockDate;
        };
        update();
        this.clockTimer = setInterval(update, 1000);
    }

    initParallaxMouse() {
        const stage = document.getElementById('live-screen');
        if (!stage) return;

        stage.addEventListener('mousemove', (e) => {
            if (this.state.bgType !== 'parallax') return;
            const rect = stage.getBoundingClientRect();
            const relX = (e.clientX - rect.left) / rect.width - 0.5;
            const relY = (e.clientY - rect.top) / rect.height - 0.5;

            const layers = stage.querySelectorAll('.parallax-layer-item');
            layers.forEach(layer => {
                const speed = parseFloat(layer.dataset.speed || 0.05);
                const moveX = -relX * speed * 600;
                const moveY = -relY * speed * 600;
                layer.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.1)`;
            });
        });
    }

    subscribe(callback) {
        this.listeners.push(callback);
    }

    notify() {
        for (const cb of this.listeners) {
            cb(this.state);
        }
    }

    setState(partialState, emitNotify = true) {
        this.state = { ...this.state, ...partialState };
        this.applyStateToDOM();
        if (emitNotify) this.notify();
    }

    loadPreset(presetId) {
        const preset = TEMPLATE_PRESETS.find(p => p.id === presetId);
        if (!preset) return;

        this.setState({
            currentPresetId: preset.id,
            title: preset.title || this.state.title,
            subtitle: preset.subtitle || this.state.subtitle,
            badge: preset.badge || this.state.badge,
            fontFamily: preset.fontFamily || this.state.fontFamily,
            fontSize: preset.fontSize || this.state.fontSize,
            letterSpacing: preset.letterSpacing !== undefined ? preset.letterSpacing : this.state.letterSpacing,
            colorStart: preset.colorStart || this.state.colorStart,
            colorEnd: preset.colorEnd || this.state.colorEnd,
            glowColor: preset.glowColor || this.state.glowColor,
            glowBlur: preset.glowBlur !== undefined ? preset.glowBlur : this.state.glowBlur,
            textPosY: preset.textPosY !== undefined ? preset.textPosY : this.state.textPosY,
            textPosX: preset.textPosX !== undefined ? preset.textPosX : this.state.textPosX,

            bgType: preset.bgType || 'video',
            videoSrc: preset.videoSrc || '',
            imageSrc: preset.imageSrc || preset.posterImg || this.state.imageSrc,
            slides: preset.slides || this.state.slides,
            activeSlideIndex: 0,
            brightness: preset.brightness !== undefined ? preset.brightness : 1.0,
            contrast: preset.contrast !== undefined ? preset.contrast : 1.0,
            vignette: preset.vignette !== undefined ? preset.vignette : 0.6,

            parallaxLayers: preset.parallaxLayers || this.state.parallaxLayers,

            frameStyle: preset.frameStyle || 'frame-none',
            frameColor: preset.frameColor || '#00f0ff',
            frameWidth: preset.frameWidth || 2,

            particleType: preset.particleType || 'sparkles',
            particleCount: preset.particleCount || 75,
            particleSpeed: preset.particleSpeed || 1.0,
            particleColor: preset.particleColor || '#ffffff',
            particleColor2: preset.particleColor2 || '#a5c9ff'
        });
    }

    applyStateToDOM() {
        const s = this.state;
        const liveScreen = document.getElementById('live-screen');
        if (!liveScreen) return;

        // 1. Text & Typography
        const mainTitle = document.getElementById('live-main-title');
        const subTitle = document.getElementById('live-sub-title');
        const badgeTag = document.getElementById('live-badge-tag');
        const textContainer = document.getElementById('live-text-container');
        const clockContainer = document.getElementById('live-clock-container');

        if (mainTitle) {
            mainTitle.innerText = s.title;
            mainTitle.style.fontFamily = s.fontFamily;
            mainTitle.style.fontSize = `${s.fontSize}rem`;
            mainTitle.style.letterSpacing = `${s.letterSpacing}px`;
            mainTitle.style.background = `linear-gradient(135deg, ${s.colorStart} 20%, ${s.colorEnd} 100%)`;
            mainTitle.style.webkitBackgroundClip = 'text';
            mainTitle.style.webkitTextFillColor = 'transparent';
            mainTitle.style.filter = `drop-shadow(0 0 ${s.glowBlur}px ${s.glowColor})`;
        }

        if (subTitle) {
            subTitle.innerText = s.subtitle;
            subTitle.style.color = s.colorEnd;
            subTitle.style.textShadow = `0 2px 10px rgba(0,0,0,0.8), 0 0 15px ${s.glowColor}`;
        }

        if (badgeTag) {
            badgeTag.innerText = s.badge;
            badgeTag.style.display = s.showBadge && s.badge ? 'inline-block' : 'none';
        }

        if (textContainer) {
            textContainer.style.top = `${s.textPosY}%`;
            textContainer.style.left = `${s.textPosX}%`;
            textContainer.style.textAlign = s.textAlign || 'center';
        }

        if (clockContainer) {
            clockContainer.style.display = s.showClock ? 'block' : 'none';
        }

        // 2. Media Backgrounds
        const videoEl = document.getElementById('live-bg-video');
        const imgEl = document.getElementById('live-bg-image');
        const slider3d = document.getElementById('live-slider-3d');
        const parallaxWrap = document.getElementById('live-parallax-wrap');
        const ambientBackdrop = document.getElementById('live-ambient-backdrop');
        const thumbNavBar = document.getElementById('live-thumb-nav');

        const filterCss = `brightness(${s.brightness}) contrast(${s.contrast}) saturate(${s.saturation}) hue-rotate(${s.hueRotate}deg) blur(${s.blur}px)`;

        // Reset visibility
        if (videoEl) videoEl.style.display = 'none';
        if (imgEl) imgEl.style.display = 'none';
        if (slider3d) slider3d.style.display = 'none';
        if (parallaxWrap) parallaxWrap.style.display = 'none';
        if (ambientBackdrop) ambientBackdrop.style.display = 'none';
        if (thumbNavBar) thumbNavBar.style.display = 'none';

        if (s.bgType === 'video') {
            if (videoEl) {
                videoEl.style.display = 'block';
                videoEl.style.filter = filterCss;
                if (videoEl.getAttribute('src') !== s.videoSrc && s.videoSrc) {
                    videoEl.src = s.videoSrc;
                    videoEl.play().catch(() => {});
                }
            }
        } else if (s.bgType === 'image') {
            if (imgEl) {
                imgEl.style.display = 'block';
                imgEl.style.filter = filterCss;
                if (imgEl.getAttribute('src') !== s.imageSrc && s.imageSrc) {
                    imgEl.src = s.imageSrc;
                }
            }
        } else if (s.bgType === 'slider_3d') {
            if (slider3d) {
                slider3d.style.display = 'flex';
                this.render3DSlider();
            }
            if (ambientBackdrop) {
                ambientBackdrop.style.display = 'block';
                const curSlide = s.slides[s.activeSlideIndex] || s.slides[0];
                ambientBackdrop.style.backgroundImage = `url('${curSlide}')`;
            }
            if (thumbNavBar) {
                thumbNavBar.style.display = 'flex';
                this.renderThumbnails();
            }
        } else if (s.bgType === 'parallax') {
            if (parallaxWrap) {
                parallaxWrap.style.display = 'block';
                this.renderParallaxLayers();
            }
        }

        // 3. Dark Overlay & Vignette
        const overlay = document.getElementById('live-overlay');
        if (overlay) {
            overlay.style.background = `radial-gradient(circle at center, rgba(0, 0, 0, ${s.vignette * 0.2}) 0%, rgba(0, 0, 0, ${s.vignette}) 100%)`;
        }

        // 4. Frame & Border
        const frameContainer = document.getElementById('live-frame-container');
        if (frameContainer) {
            frameContainer.className = 'custom-frame-container ' + s.frameStyle;
            frameContainer.style.setProperty('--frame-color', s.frameColor);
            frameContainer.style.setProperty('--frame-glow', s.frameColor + '66');
            if (s.frameStyle !== 'frame-none') {
                frameContainer.style.borderWidth = `${s.frameWidth}px`;
            } else {
                frameContainer.style.borderWidth = '0px';
            }
        }

        // 5. Character Avatar Overlay
        const avatarWrapper = document.getElementById('live-avatar-wrapper');
        const avatarImg = document.getElementById('live-avatar-img');
        if (avatarWrapper && avatarImg) {
            if (s.showAvatar && s.avatarSrc) {
                avatarWrapper.style.display = 'block';
                avatarImg.src = s.avatarSrc;
                avatarWrapper.style.left = `${s.avatarPosX}%`;
                avatarWrapper.style.top = `${s.avatarPosY}%`;
                avatarWrapper.style.transform = `translate(-50%, -50%) scale(${s.avatarScale})`;
                if (s.avatarFloating) {
                    avatarWrapper.classList.add('avatar-floating');
                } else {
                    avatarWrapper.classList.remove('avatar-floating');
                }
            } else {
                avatarWrapper.style.display = 'none';
            }
        }

        // 6. Particle Engine Configuration
        if (this.particleEngine) {
            this.particleEngine.updateConfig({
                type: s.particleType,
                count: s.particleCount,
                speed: s.particleSpeed,
                color1: s.particleColor,
                color2: s.particleColor2,
                interaction: s.particleInteraction
            });
        }

        // 7. Device Viewport Wrapper
        const viewportWrapper = document.getElementById('viewport-wrapper');
        if (viewportWrapper) {
            viewportWrapper.className = `viewport-wrapper viewport-${s.deviceView}`;
            if (this.particleEngine) {
                setTimeout(() => this.particleEngine.resize(), 100);
            }
        }

        // 8. Audio updates
        if (this.audioElement) {
            if (s.audioEnabled && s.audioSrc) {
                if (this.audioElement.getAttribute('src') !== s.audioSrc) {
                    this.audioElement.src = s.audioSrc;
                }
                this.audioElement.volume = s.audioVolume;
                if (s.audioPlaying) {
                    this.audioElement.play().catch(() => {});
                } else {
                    this.audioElement.pause();
                }
            } else {
                this.audioElement.pause();
            }
        }
    }

    render3DSlider() {
        const container = document.getElementById('live-slider-3d');
        if (!container) return;
        container.innerHTML = '';

        const slides = this.state.slides || [];
        const activeIdx = this.state.activeSlideIndex || 0;

        slides.forEach((src, idx) => {
            const card = document.createElement('div');
            card.className = 'slide-card-3d';

            if (idx === activeIdx) {
                card.classList.add('active');
            } else if (idx === (activeIdx - 1 + slides.length) % slides.length) {
                card.classList.add('prev');
            } else if (idx === (activeIdx + 1) % slides.length) {
                card.classList.add('next');
            } else {
                card.classList.add('hidden');
            }

            const img = document.createElement('img');
            img.src = src;
            card.appendChild(img);

            card.addEventListener('click', () => {
                this.setState({ activeSlideIndex: idx });
            });

            container.appendChild(card);
        });
    }

    renderThumbnails() {
        const nav = document.getElementById('live-thumb-nav');
        if (!nav) return;
        nav.innerHTML = '';

        const slides = this.state.slides || [];
        slides.forEach((src, idx) => {
            const thumb = document.createElement('img');
            thumb.className = `thumb-item ${idx === this.state.activeSlideIndex ? 'active' : ''}`;
            thumb.src = src;
            thumb.addEventListener('click', () => {
                this.setState({ activeSlideIndex: idx });
            });
            nav.appendChild(thumb);
        });
    }

    renderParallaxLayers() {
        const wrap = document.getElementById('live-parallax-wrap');
        if (!wrap) return;
        wrap.innerHTML = '';

        (this.state.parallaxLayers || []).forEach((layer, idx) => {
            if (layer.img) {
                const item = document.createElement('div');
                item.className = 'parallax-layer-item';
                item.style.backgroundImage = `url('${layer.img}')`;
                item.dataset.speed = layer.speed;
                item.id = `parallax-layer-${idx}`;
                wrap.appendChild(item);
            }
        });
    }
}
