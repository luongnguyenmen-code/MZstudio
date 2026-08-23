/**
 * LUMIERE STUDIO - HIGH PERFORMANCE VFX & PARTICLE CANVAS ENGINE
 */

class ParticleEngine {
    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.animationFrameId = null;
        this.isRunning = false;

        this.width = 0;
        this.height = 0;

        // Configuration state
        this.config = {
            type: 'sparkles', // sparkles, constellation, gold_dust, sakura, cyber_sparks, bokeh
            count: 80,
            speed: 1.0,
            color1: '#ffffff',
            color2: '#a5c9ff',
            interaction: 'repel', // repel, attract, spark
            mouseRadius: 160
        };

        this.mouse = {
            x: -1000,
            y: -1000,
            isHovered: false,
            clicks: []
        };

        this.resize = this.resize.bind(this);
        this.animate = this.animate.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
        this.onClick = this.onClick.bind(this);

        this.initEvents();
        this.resize();
    }

    initEvents() {
        window.addEventListener('resize', this.resize);
        this.canvas.addEventListener('mousemove', this.onMouseMove);
        this.canvas.addEventListener('mouseleave', this.onMouseLeave);
        this.canvas.addEventListener('click', this.onClick);
    }

    destroy() {
        this.stop();
        window.removeEventListener('resize', this.resize);
        this.canvas.removeEventListener('mousemove', this.onMouseMove);
        this.canvas.removeEventListener('mouseleave', this.onMouseLeave);
        this.canvas.removeEventListener('click', this.onClick);
    }

    resize() {
        const rect = this.canvas.parentElement ? this.canvas.parentElement.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
        this.width = this.canvas.width = rect.width || window.innerWidth;
        this.height = this.canvas.height = rect.height || window.innerHeight;
        this.initParticles();
    }

    onMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
        this.mouse.isHovered = true;

        if (this.config.type === 'cyber_sparks' && Math.random() < 0.3) {
            this.spawnSpark(this.mouse.x, this.mouse.y);
        }
    }

    onMouseLeave() {
        this.mouse.x = -1000;
        this.mouse.y = -1000;
        this.mouse.isHovered = false;
    }

    onClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const clickY = e.clientY - rect.top;
        for (let i = 0; i < 15; i++) {
            this.spawnSpark(clickX, clickY);
        }
    }

    spawnSpark(x, y) {
        if (this.particles.length > 250) this.particles.shift();
        this.particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 6 * this.config.speed,
            vy: (Math.random() - 0.5) * 6 * this.config.speed,
            size: Math.random() * 3 + 1,
            alpha: 1,
            decay: Math.random() * 0.03 + 0.02,
            color: Math.random() > 0.5 ? this.config.color1 : this.config.color2,
            angle: Math.random() * Math.PI * 2,
            spin: (Math.random() - 0.5) * 0.1
        });
    }

    updateConfig(newConfig) {
        let reinitNeeded = false;
        if (newConfig.type && newConfig.type !== this.config.type) reinitNeeded = true;
        if (newConfig.count !== undefined && newConfig.count !== this.config.count) reinitNeeded = true;

        this.config = { ...this.config, ...newConfig };

        if (reinitNeeded) {
            this.initParticles();
        }
    }

    initParticles() {
        this.particles = [];
        const count = Math.min(Math.max(this.config.count || 60, 10), 300);

        for (let i = 0; i < count; i++) {
            this.particles.push(this.createParticle());
        }
    }

    createParticle() {
        const type = this.config.type;
        const base = {
            x: Math.random() * this.width,
            y: Math.random() * this.height,
            vx: (Math.random() - 0.5) * 1.5 * this.config.speed,
            vy: (Math.random() - 0.5) * 1.5 * this.config.speed,
            size: Math.random() * 2 + 1,
            baseAlpha: Math.random() * 0.6 + 0.3,
            alpha: Math.random() * 0.6 + 0.3,
            phase: Math.random() * Math.PI * 2,
            color: Math.random() > 0.5 ? this.config.color1 : this.config.color2,
            angle: Math.random() * Math.PI * 2,
            spin: (Math.random() - 0.5) * 0.04
        };

        if (type === 'sakura') {
            base.vx = (Math.random() * 1.2 + 0.5) * this.config.speed;
            base.vy = (Math.random() * 1.8 + 1.0) * this.config.speed;
            base.size = Math.random() * 6 + 6;
            base.swing = Math.random() * 2 + 1;
            base.swingSpeed = Math.random() * 0.03 + 0.02;
        } else if (type === 'bokeh') {
            base.size = Math.random() * 20 + 10;
            base.vx = (Math.random() - 0.5) * 0.6 * this.config.speed;
            base.vy = (Math.random() * -1.0 - 0.3) * this.config.speed;
            base.baseAlpha = Math.random() * 0.3 + 0.15;
        } else if (type === 'gold_dust') {
            base.vy = (Math.random() * -1.2 - 0.4) * this.config.speed;
            base.vx = (Math.random() - 0.5) * 0.8 * this.config.speed;
            base.size = Math.random() * 2.5 + 1;
        } else if (type === 'constellation') {
            base.size = Math.random() * 2.5 + 1.5;
            base.vx = (Math.random() - 0.5) * 1.0 * this.config.speed;
            base.vy = (Math.random() - 0.5) * 1.0 * this.config.speed;
        } else if (type === 'cyber_sparks') {
            base.vx = (Math.random() - 0.5) * 3 * this.config.speed;
            base.vy = (Math.random() - 0.5) * 3 * this.config.speed;
            base.size = Math.random() * 2.5 + 1;
        }

        return base;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.animate();
        }
    }

    stop() {
        this.isRunning = false;
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    animate() {
        if (!this.isRunning) return;

        this.ctx.clearRect(0, 0, this.width, this.height);

        const type = this.config.type;

        // Draw Constellation link lines if enabled
        if (type === 'constellation') {
            this.drawConstellationLines();
        }

        // Update and draw each particle
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];

            // Decay for temporary click/hover sparks
            if (p.decay) {
                p.alpha -= p.decay;
                if (p.alpha <= 0) {
                    this.particles.splice(i, 1);
                    continue;
                }
            }

            p.phase += 0.04;
            p.angle += p.spin;

            // Physics movement
            if (type === 'sakura') {
                p.x += p.vx + Math.sin(p.phase * p.swingSpeed) * p.swing;
                p.y += p.vy;
            } else {
                p.x += p.vx;
                p.y += p.vy;
            }

            // Mouse interaction physics
            if (this.mouse.isHovered) {
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.config.mouseRadius) {
                    const force = (1 - dist / this.config.mouseRadius) * 4;
                    const angle = Math.atan2(dy, dx);

                    if (this.config.interaction === 'attract') {
                        p.x -= Math.cos(angle) * force;
                        p.y -= Math.sin(angle) * force;
                    } else {
                        // Repel
                        p.x += Math.cos(angle) * force;
                        p.y += Math.sin(angle) * force;
                    }
                }
            }

            // Wrap around screen borders
            if (!p.decay) {
                if (p.x < -20) p.x = this.width + 20;
                if (p.x > this.width + 20) p.x = -20;
                if (p.y < -20) p.y = this.height + 20;
                if (p.y > this.height + 20) p.y = -20;
            }

            // Render particle shape
            this.drawParticle(p, type);
        }

        this.animationFrameId = requestAnimationFrame(this.animate);
    }

    drawParticle(p, type) {
        const ctx = this.ctx;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        const currentAlpha = p.decay ? p.alpha : (p.baseAlpha + Math.sin(p.phase) * 0.25);
        ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        if (type === 'sakura') {
            // Draw 2D Petal
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, Math.PI * 2);
            ctx.fill();
        } else if (type === 'sparkles') {
            // 4-Pointed Star Glint
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 10;
            ctx.beginPath();
            const s = p.size * 2.2;
            ctx.moveTo(0, -s);
            ctx.quadraticCurveTo(0, 0, s, 0);
            ctx.quadraticCurveTo(0, 0, 0, s);
            ctx.quadraticCurveTo(0, 0, -s, 0);
            ctx.quadraticCurveTo(0, 0, 0, -s);
            ctx.fill();
        } else if (type === 'bokeh') {
            // Soft glowing orb
            const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
            grad.addColorStop(0, p.color);
            grad.addColorStop(0.6, p.color);
            grad.addColorStop(1, 'transparent');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();
        } else if (type === 'gold_dust' || type === 'cyber_sparks') {
            // Glimmering circle with glow
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 8;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Standard circle
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    drawConstellationLines() {
        const ctx = this.ctx;
        const count = this.particles.length;
        const maxDist = 120;

        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];

                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < maxDist) {
                    const alpha = (1 - dist / maxDist) * 0.35;
                    ctx.strokeStyle = this.config.color1;
                    ctx.globalAlpha = alpha;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }

            // Connect lines to mouse if nearby
            if (this.mouse.isHovered) {
                const p = this.particles[i];
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 150) {
                    const alpha = (1 - dist / 150) * 0.7;
                    ctx.strokeStyle = this.config.color2;
                    ctx.globalAlpha = alpha;
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(this.mouse.x, this.mouse.y);
                    ctx.stroke();
                }
            }
        }
    }
}
