/**
 * LUMIERE STUDIO - EXPORT ENGINE (STANDALONE HTML GENERATOR & JSON PRESETS)
 */

class ExportEngine {
    static exportHTML(state) {
        const title = state.title || 'MZ Studio Custom Wallpaper';
        const subtitle = state.subtitle || '';
        const badge = state.badge || '';
        const showBadge = state.showBadge;
        const showClock = state.showClock;
        const textAlign = state.textAlign || 'center';
        const fontFamily = state.fontFamily || "'Great Vibes', cursive";
        const fontSize = state.fontSize || 5;
        const letterSpacing = state.letterSpacing || 2;
        const colorStart = state.colorStart || '#ffffff';
        const colorEnd = state.colorEnd || '#a5c9ff';
        const glowColor = state.glowColor || '#64b4ff';
        const glowBlur = state.glowBlur || 25;
        const textPosY = state.textPosY || 50;
        const textPosX = state.textPosX || 50;

        const bgType = state.bgType || 'image';
        const iframeSrc = state.iframeSrc || '';
        const videoSrc = state.videoSrc || '';
        const imageSrc = state.imageSrc || '';
        const brightness = state.brightness || 1;
        const contrast = state.contrast || 1;
        const vignette = state.vignette || 0.6;

        const frameStyle = state.frameStyle || 'frame-none';
        const frameColor = state.frameColor || '#00f0ff';
        const frameWidth = state.frameWidth || 2;

        const particleType = state.particleType || 'sparkles';
        const particleCount = state.particleCount || 75;
        const particleSpeed = state.particleSpeed || 1.0;
        const particleColor = state.particleColor || '#ffffff';
        const particleColor2 = state.particleColor2 || '#a5c9ff';

        const showAvatar = state.showAvatar;
        const avatarSrc = state.avatarSrc || '';
        const avatarScale = state.avatarScale || 1.0;
        const avatarPosX = state.avatarPosX || 50;
        const avatarPosY = state.avatarPosY || 50;
        const avatarFloating = state.avatarFloating;

        const audioEnabled = state.audioEnabled;
        const audioSrc = state.audioSrc || '';

        const slidesJson = JSON.stringify(state.slides || []);
        const parallaxLayersJson = JSON.stringify(state.parallaxLayers || []);

        const cssContent = `:root {
            --frame-color: ${frameColor};
            --frame-glow: ${frameColor}66;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body, html {
            width: 100%; height: 100%;
            overflow: hidden;
            background-color: #000;
            font-family: 'Montserrat', sans-serif;
            user-select: none;
        }
        .main-stage {
            position: relative;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        /* Background Media */
        #bg-video, #bg-image {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            object-fit: cover;
            z-index: 1;
            filter: brightness(${brightness}) contrast(${contrast});
            ${bgType === 'video' ? 'display: block;' : (bgType === 'image' ? 'display: block;' : 'display: none;')}
        }
        /* Parallax Wrap */
        .parallax-wrap {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 1;
            display: ${bgType === 'parallax' ? 'block' : 'none'};
        }
        .parallax-layer-item {
            position: absolute;
            top: -5%; left: -5%; width: 110%; height: 110%;
            background-size: cover;
            background-position: center;
            transition: transform 0.1s ease-out;
        }
        /* Ambient blur for 3D sliders */
        .ambient-bg {
            position: absolute;
            top: -10%; left: -10%; width: 120%; height: 120%;
            background-size: cover;
            background-position: center;
            filter: blur(20px) brightness(0.5);
            z-index: 1;
            display: ${bgType === 'slider_3d' ? 'block' : 'none'};
        }
        /* Overlay Dark */
        .overlay-dark {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: radial-gradient(circle at center, rgba(0,0,0,${vignette * 0.2}) 0%, rgba(0,0,0,${vignette}) 100%);
            z-index: 2;
            pointer-events: none;
        }
        /* 60FPS Canvas */
        #fx-canvas {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            z-index: 3;
        }
        /* Digital Clock */
        .clock-box {
            position: absolute;
            top: 30px; left: 50%;
            transform: translateX(-50%);
            z-index: 9;
            text-align: center;
            pointer-events: none;
            display: ${showClock ? 'block' : 'none'};
        }
        .clock-time {
            font-family: 'Orbitron', monospace;
            font-size: 2.2rem;
            font-weight: 700;
            color: #fff;
            text-shadow: 0 0 20px rgba(0, 240, 255, 0.7);
            letter-spacing: 4px;
        }
        .clock-date {
            font-size: 0.85rem;
            color: #a5c9ff;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-top: 4px;
        }
        /* Text Container */
        .text-box {
            position: absolute;
            z-index: 8;
            top: ${textPosY}%;
            left: ${textPosX}%;
            transform: translate(-50%, -50%);
            text-align: ${textAlign};
            width: 90%;
            pointer-events: none;
        }
        .badge-tag {
            display: ${showBadge && badge ? 'inline-block' : 'none'};
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 3px;
            text-transform: uppercase;
            padding: 4px 12px;
            border-radius: 20px;
            margin-bottom: 12px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            backdrop-filter: blur(8px);
        }
        .title-main {
            font-family: ${fontFamily};
            font-size: ${fontSize}rem;
            margin: 0;
            font-weight: 700;
            line-height: 1.4;
            letter-spacing: ${letterSpacing}px;
            padding: 0.2em 0.4em;
            background: linear-gradient(135deg, ${colorStart} 20%, ${colorEnd} 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 ${glowBlur}px ${glowColor}, 0 0 ${glowBlur * 1.5}px ${glowColor};
        }
        .title-sub {
            font-family: 'Montserrat', sans-serif;
            font-size: 1rem;
            letter-spacing: 8px;
            text-transform: uppercase;
            margin-top: 12px;
            color: ${colorEnd};
            text-shadow: 0 2px 10px rgba(0,0,0,0.8), 0 0 15px ${glowColor};
        }
        /* Frame Customization */
        .frame-wrapper {
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            pointer-events: none;
            z-index: 10;
        }
        .frame-luxury-gold {
            border: ${frameWidth}px solid #e2b755;
            border-image: linear-gradient(135deg, #ffe082 0%, #d4af37 50%, #8c6d23 100%) 1;
            box-shadow: 0 0 30px rgba(212, 175, 55, 0.35), inset 0 0 20px rgba(212, 175, 55, 0.15);
        }
        .frame-cyber-hud {
            border: ${frameWidth}px solid var(--frame-color);
            background: rgba(0, 15, 30, 0.2);
            box-shadow: 0 0 25px var(--frame-glow), inset 0 0 15px var(--frame-glow);
            clip-path: polygon(0 20px, 20px 0, calc(100% - 20px) 0, 100% 20px, 100% calc(100% - 20px), calc(100% - 20px) 100%, 20px 100%, 0 calc(100% - 20px));
        }
        .frame-glass-luxe {
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(16px);
            border: ${frameWidth}px solid rgba(255, 255, 255, 0.18);
            border-radius: 24px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
        }
        .frame-holographic {
            border-radius: 20px;
            border: ${frameWidth}px solid transparent;
            background: linear-gradient(135deg, rgba(20, 20, 35, 0.4), rgba(10, 10, 20, 0.6)) padding-box,
                        linear-gradient(45deg, #ff007f, #7928ca, #0070f3, #00dfd8, #7928ca, #ff007f) border-box;
            background-size: 300% 300%;
            animation: holo-border 8s linear infinite;
        }
        @keyframes holo-border { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .frame-anime-glow {
            border-radius: 28px;
            border: ${frameWidth}px solid #ff7bcf;
            box-shadow: 0 0 35px rgba(255, 123, 207, 0.4);
        }
        /* Avatar Overlay */
        .avatar-wrap {
            position: absolute;
            top: ${avatarPosY}%;
            left: ${avatarPosX}%;
            transform: translate(-50%, -50%) scale(${avatarScale});
            z-index: 12;
            pointer-events: none;
            display: ${showAvatar && avatarSrc ? 'block' : 'none'};
            ${avatarFloating ? 'animation: float-avatar 4s ease-in-out infinite alternate;' : ''}
        }
        @keyframes float-avatar {
            0% { transform: translate(-50%, -50%) scale(${avatarScale}) translateY(0px); }
            100% { transform: translate(-50%, -50%) scale(${avatarScale}) translateY(-16px); }
        }
        .avatar-wrap img {
            max-width: 350px;
            filter: drop-shadow(0 15px 30px rgba(0,0,0,0.7));
        }
        /* 3D Slider Container */
        .slider-3d-wrap {
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            width: 100%; height: 480px;
            z-index: 5;
            display: ${bgType === 'slider_3d' ? 'flex' : 'none'};
            align-items: center; justify-content: center;
            perspective: 1800px;
        }
        .slide-card {
            position: absolute; width: 250px; height: 400px;
            border-radius: 20px; overflow: hidden; cursor: pointer;
            box-shadow: 0 25px 50px rgba(0,0,0,0.6);
            border: 1px solid rgba(255,255,255,0.2);
            transition: all 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .slide-card img { width: 100%; height: 100%; object-fit: cover; }
        .slide-card.active { z-index: 20; transform: translateZ(220px) scale(1.12); border: 2px solid ${glowColor}; box-shadow: 0 0 40px ${glowColor}66; }
        .slide-card.prev { z-index: 10; transform: translateX(-260px) translateZ(0) rotateY(35deg) scale(0.9); filter: brightness(0.6) blur(1px); }
        .slide-card.next { z-index: 10; transform: translateX(260px) translateZ(0) rotateY(-35deg) scale(0.9); filter: brightness(0.6) blur(1px); }
        .slide-card.hidden { opacity: 0; pointer-events: none; transform: translateZ(-300px); }`;

        const jsContent = `
        // Particle Simulation Engine
        (function() {
            const canvas = document.getElementById('fx-canvas');
            const ctx = canvas.getContext('2d');
            let w = canvas.width = window.innerWidth;
            let h = canvas.height = window.innerHeight;
            const config = {
                type: '${particleType}',
                count: ${particleCount},
                speed: ${particleSpeed},
                color1: '${particleColor}',
                color2: '${particleColor2}'
            };
            let particles = [];
            const mouse = { x: -1000, y: -1000, active: false };

            window.addEventListener('resize', () => {
                w = canvas.width = window.innerWidth;
                h = canvas.height = window.innerHeight;
                init();
            });

            window.addEventListener('mousemove', (e) => {
                mouse.x = e.clientX;
                mouse.y = e.clientY;
                mouse.active = true;
            });
            window.addEventListener('mouseleave', () => { mouse.active = false; });

            // Clock update
            function updateClock() {
                const now = new Date();
                const timeEl = document.getElementById('clock-time');
                const dateEl = document.getElementById('clock-date');
                if (timeEl) timeEl.innerText = String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0') + ':' + String(now.getSeconds()).padStart(2, '0');
                if (dateEl) dateEl.innerText = now.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
            }
            updateClock();
            setInterval(updateClock, 1000);

            // Autoplay sound on first interaction
            const audio = document.getElementById('bg-audio');
            if (audio) {
                window.addEventListener('click', () => { audio.play().catch(()=>{}); }, { once: true });
            }

            function init() {
                particles = [];
                for (let i = 0; i < config.count; i++) {
                    particles.push({
                        x: Math.random() * w,
                        y: Math.random() * h,
                        vx: (Math.random() - 0.5) * 1.5 * config.speed,
                        vy: (Math.random() - 0.5) * 1.5 * config.speed,
                        size: Math.random() * 3 + 1,
                        alpha: Math.random() * 0.6 + 0.3,
                        phase: Math.random() * Math.PI * 2,
                        color: Math.random() > 0.5 ? config.color1 : config.color2,
                        angle: Math.random() * Math.PI * 2,
                        spin: (Math.random() - 0.5) * 0.04
                    });
                }
            }

            function animate() {
                ctx.clearRect(0, 0, w, h);
                particles.forEach(p => {
                    p.x += p.vx;
                    p.y += p.vy;
                    p.phase += 0.04;
                    p.angle += p.spin;

                    if (mouse.active) {
                        const dx = p.x - mouse.x;
                        const dy = p.y - mouse.y;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < 140) {
                            const f = (1 - dist / 140) * 4;
                            p.x += (dx / dist) * f;
                            p.y += (dy / dist) * f;
                        }
                    }

                    if (p.x < -20) p.x = w + 20;
                    if (p.x > w + 20) p.x = -20;
                    if (p.y < -20) p.y = h + 20;
                    if (p.y > h + 20) p.y = -20;

                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.rotate(p.angle);
                    ctx.globalAlpha = p.alpha + Math.sin(p.phase) * 0.2;
                    ctx.fillStyle = p.color;
                    ctx.shadowColor = p.color;
                    ctx.shadowBlur = 10;
                    ctx.beginPath();
                    ctx.arc(0, 0, p.size, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                });
                requestAnimationFrame(animate);
            }
            init();
            animate();

            // 3D Slider Logic if present
            const slides = ${slidesJson};
            const sliderWrap = document.getElementById('slider-3d');
            const ambientBg = document.getElementById('ambient-bg');
            if (sliderWrap && slides.length > 0) {
                let activeIdx = 0;
                function render3D() {
                    sliderWrap.innerHTML = '';
                    if (ambientBg) ambientBg.style.backgroundImage = 'url(' + slides[activeIdx] + ')';
                    slides.forEach((src, i) => {
                        const card = document.createElement('div');
                        card.className = 'slide-card ' + (i === activeIdx ? 'active' : (i === (activeIdx - 1 + slides.length) % slides.length ? 'prev' : (i === (activeIdx + 1) % slides.length ? 'next' : 'hidden')));
                        const img = document.createElement('img');
                        img.src = src;
                        card.appendChild(img);
                        card.onclick = () => { activeIdx = i; render3D(); };
                        sliderWrap.appendChild(card);
                    });
                }
                render3D();
            }

            // Parallax Logic if present
            const parallaxWrap = document.getElementById('parallax-wrap');
            const parallaxLayers = ${parallaxLayersJson};
            if (parallaxWrap && parallaxLayers.length > 0) {
                parallaxLayers.forEach((l, i) => {
                    if (l.img) {
                        const item = document.createElement('div');
                        item.className = 'parallax-layer-item';
                        item.style.backgroundImage = 'url(' + l.img + ')';
                        item.dataset.speed = l.speed;
                        parallaxWrap.appendChild(item);
                    }
                });
                window.addEventListener('mousemove', (e) => {
                    const relX = e.clientX / window.innerWidth - 0.5;
                    const relY = e.clientY / window.innerHeight - 0.5;
                    parallaxWrap.querySelectorAll('.parallax-layer-item').forEach(layer => {
                        const sp = parseFloat(layer.dataset.speed || 0.05);
                        layer.style.transform = 'translate(' + (-relX * sp * 600) + 'px, ' + (-relY * sp * 600) + 'px) scale(1.1)';
                    });
                });
            }
        })();`;

        let htmlContent = '';
        
        if (bgType === 'custom_html' && typeof CUSTOM_TEMPLATES !== 'undefined' && CUSTOM_TEMPLATES[state.htmlTemplate]) {
            htmlContent = CUSTOM_TEMPLATES[state.htmlTemplate](state);
        } else {
            htmlContent = `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - ${subtitle}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Dancing+Script:wght@700&family=Great+Vibes&family=Inter:wght@300;400;600;700&family=Montserrat:ital,wght@0,300;0,400;0,600;0,800;1,300&family=Orbitron:wght@400;700;900&family=Outfit:wght@300;400;600;700;800&family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Press+Start+2P&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <div class="main-stage">
        ${bgType === 'video' ? `<video id="bg-video" autoplay loop muted playsinline src="${videoSrc}"></video>` : ''}
        ${bgType === 'image' ? `<img id="bg-image" src="${imageSrc}" alt="Wallpaper">` : ''}
        ${bgType === 'iframe' ? `<iframe id="bg-iframe" src="${iframeSrc}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; z-index: 1;"></iframe>` : ''}
        <div class="parallax-wrap" id="parallax-wrap"></div>
        <div class="ambient-bg" id="ambient-bg"></div>
        <div class="overlay-dark"></div>
        <canvas id="fx-canvas"></canvas>

        <div class="clock-box">
            <div class="clock-time" id="clock-time">00:00:00</div>
            <div class="clock-date" id="clock-date"></div>
        </div>

        <div class="slider-3d-wrap" id="slider-3d"></div>

        <div class="frame-wrapper ${frameStyle}"></div>

        <div class="avatar-wrap">
            <img src="${avatarSrc}" alt="Avatar">
        </div>

        <div class="text-box">
            <div class="badge-tag">${badge}</div>
            <h1 class="title-main">${title}</h1>
            <p class="title-sub">${subtitle}</p>
        </div>
    </div>

    ${audioEnabled && audioSrc ? `<audio id="bg-audio" loop src="${audioSrc}"></audio>` : ''}

    <script src="assets/script.js"></script>
</body>
</html>`;
        }

        if (typeof JSZip !== 'undefined') {
            const zip = new JSZip();
            zip.file("index.html", htmlContent);
            const assets = zip.folder("assets");
            assets.file("style.css", cssContent);
            assets.file("script.js", jsContent);

            const generateAndDownloadZip = () => {
                zip.generateAsync({type:"blob"}).then(function(content) {
                    const url = URL.createObjectURL(content);
                    const a = document.createElement('a');
                    a.href = url;
                    const filename = `${(title || 'custom-wallpaper').toLowerCase().replace(/[^a-z0-9]/g, '-')}-bundle.zip`;
                    a.download = filename;
                    document.body.appendChild(a);
                    a.click();
                    document.body.removeChild(a);
                    URL.revokeObjectURL(url);
                });
            };

            if (bgType === 'iframe' && iframeSrc) {
                fetch(iframeSrc).then(res => res.text()).then(iframeHTML => {
                    zip.file(iframeSrc, iframeHTML);
                    generateAndDownloadZip();
                }).catch(err => {
                    console.error("Error fetching iframe source", err);
                    generateAndDownloadZip();
                });
            } else {
                generateAndDownloadZip();
            }
        } else {
            alert('Lỗi: Thư viện JSZip chưa được tải!');
        }
    }

    static exportJSON(state) {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
        const a = document.createElement('a');
        a.href = dataStr;
        a.download = `lumiere-preset-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}
