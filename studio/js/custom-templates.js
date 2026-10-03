// Auto-generated from v1.html to v6.html
const CUSTOM_TEMPLATES = {
    'v1': (state) => `<!doctype html>
<html lang="vi">
 <head><script>window["__codeletBootstrap__"]=JSON.parse('{"A":"A","B":"20260929-05-baae6c9","C":{"Abril Fatface":"YACgEZbkUVE,0","Alfa Slab One":"YACgEYS9sJU,0","Anton":"YACgEcYqQ-A,0","Archivo":"YACgEZulLoA,0","Arial Narrow":"YAGyDvJ_4Ts,0","Arial Rounded MT Bold":"YAFcfoaHu-s,0","Arial":"YAGyDvJ_4Ts,0","Avenir Next":"YAFcfmNq6UY,0","Baloo 2":"YADK30bC6HQ,0","Bebas Neue":"YACgESME5ew,0","Bricolage Grotesque":"YAFyMcdwzpc,0","Broken Glyph":"YADZ-exUkv0,0","Canva Sans":"YAFdJjTk5UU,1","Caveat":"YALBs2ploWQ,0","Comic Sans MS":"YAFcfvtOAUY,1","Cormorant Garamond":"YAFdJhX-538,0","Courier New":"YAGzXiGs0_8,0","Courier Prime":"YAD1aFjegN8,0","DM Sans":"YAD1aU3sLnI,0","DM Serif Display":"YAD1aYG82rc,0","Forum":"YACgEcnnqB4,0","Fraunces":"YAFdJpU7Kkk,0","Georgia":"YAGzXkO0pEM,0","Ghost Mono":"YAHQutsX00Q,0","Hanken Grotesk":"YAFcfhwp99E,0","Helvetica Neue":"YAFcf6CtJfI,0","Helvetica":"YAFcf6CtJfI,0","IBM Plex Mono":"YAFdJkmvhGI,0","Impact":"YAFcfnjI7Vk,0","Instrument Serif":"YAHFeOnZNEk,0","Inter":"YAFdJvSyp_k,3","Iowan Old Style":"YAGNIFa8j9o,0","Jacques Francois":"YADK3zbC6RM,0","JetBrains Mono":"YAFdJksXcAk,0","Josefin Sans":"YAFdJjvw9Ps,0","Lato":"YAFdJuFCnaw,0","Libre Baskerville":"YACgEUFdPdA,0","Lobster":"YAD8SnSjSFI,0","Lora":"YACgEXvxf8Q,0","Merriweather":"YACgEXvHxxs,0","Montserrat":"YAFdtQi73Xs,0","Nunito":"YAFdJoNRMmU,1","Oleo Script":"YACgEQQ14jI,0","Oswald":"YACgEQY10lw,0","Pacifico":"YADLjORQ1u4,0","Phantom Sans":"YAFdJvgJ5TU,0","Playfair Display":"YAFdJhem5V8,1","Plus Jakarta Sans":"YAGvf3_u0_Q,0","Poppins":"YAFdJjbTu24,1","Press Start 2P":"YAFyGr-8pmQ,0","Quicksand":"YAFdJpYtCxE,1","Raleway":"YAFdJhmxbVQ,1","Roboto Slab":"YAFdJswIKAg,0","Rockwell":"YAFcfyVZnN0,0","Rye":"YACgEdQP21k,0","Segoe UI":"YAHNdRD1Klw,0","Source Sans 3":"YAG4lO1Mj10,0","Source Serif 4":"YACgEfdj394,0","Space Grotesk":"YADZ-dYEmhg,0","Space Mono":"YADW1-vpsoc,0","Times New Roman":"YAGzXW3gftg,0","Times":"YAGzXW3gftg,0","Trebuchet MS":"YAFcfrglpVA,0","UV Display":"YAEdVfSSpYo,0","UV Sans":"YAFdJvgJ5TU,0","Ubuntu":"YACgERDU--Q,0","Verdana":"YAGzXTctYtQ,0","Work Sans":"YAGXhLOKv44,0","Yellowtail":"YACgEYG4kG4,0","ui-monospace":"YAD1aFjegN8,0","ui-sans-serif":"YACkoD1yZN0,0"}}');<\/script><script src="/_sdk/6542d56fbfe7a3eb.telemetry_sdk.js" integrity="sha512-ECdM0nK7EkwDuOqho2qxgyRQXyBHk9hZqRKMBr+Xsu6zjeHlt+qkO2N2YRiHN7Kg4e1fEHDhjIp4bGJYVypv1g=="><\/script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Coverflow Slider</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&amp;family=Fraunces:opsz,wght@9..144,600;9..144,700&amp;display=swap" rel="stylesheet">
  <style>
    :root {
      --card-width: clamp(156px, 20vw, 264px);
      --card-height: calc(var(--card-width) * 1.3);
      --cyan: #7ee8ff;
      --ink: #080a10;
      --muted: #aabac8;
      --glass-border: rgba(213, 245, 255, 0.18);
      --ease: cubic-bezier(.16, 1, .3, 1);
    }

    * { box-sizing: border-box; }

    html { background: var(--ink); }

    body {
      width: 100%;
      min-height: 100%;
      margin: 0;
      overflow-x: hidden;
      color: #f4f8fb;
      font-family: "DM Sans", sans-serif;
    }

    button {
      font: inherit;
      -webkit-tap-highlight-color: transparent;
    }

    button:focus-visible,
    .coverflow-stage:focus-visible {
      outline: 2px solid #8deaff;
      outline-offset: 5px;
    }

    .app-shell {
      position: relative;
      isolation: isolate;
      width: 100%;
      min-height: calc(100 * min(var(--vh, 1vh), 1vh));
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .app-shell::before,
    .app-shell::after {
      position: absolute;
      z-index: -1;
      pointer-events: none;
      content: "";
    }

    .app-shell::before {
      top: -270px;
      left: 50%;
      width: min(920px, 100vw);
      height: 540px;
      transform: translateX(-50%);
      background: radial-gradient(ellipse, rgba(52, 135, 183, 0.35) 0%, rgba(16, 31, 53, 0.11) 44%, transparent 73%);
      filter: blur(12px);
    }

    .app-shell::after {
      bottom: -26%;
      left: -10%;
      width: 120%;
      height: 54%;
      background: radial-gradient(ellipse, rgba(30, 126, 151, 0.16), transparent 68%);
      filter: blur(20px);
    }

    .studio-grid {
      position: absolute;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      opacity: 0.28;
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px);
      background-size: 28px 28px;
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent 84%);
    }

    .page-header {
      width: min(1120px, calc(100% - 40px));
      margin: 0 auto;
      padding: 34px 0 0;
      text-align: center;
      animation: rise-in 800ms var(--ease) both;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      margin: 0 0 13px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .eyebrow::before,
    .eyebrow::after {
      width: 24px;
      height: 1px;
      background: currentColor;
      content: "";
      opacity: 0.75;
    }

    .hero-title {
      margin: 0;
      font-family: "Fraunces", serif;
      line-height: 1.05;
      letter-spacing: -0.045em;
    }

    .hero-copy {
      max-width: 590px;
      margin: 14px auto 0;
      line-height: 1.6;
    }

    .carousel-area {
      position: relative;
      display: grid;
      flex: 1;
      min-height: 530px;
      place-items: center;
      padding: 20px 18px 44px;
      animation: rise-in 900ms 110ms var(--ease) both;
    }

    .coverflow-stage {
      position: relative;
      width: min(1040px, 100%);
      height: 455px;
      perspective: 1250px;
      perspective-origin: 50% 43%;
      cursor: grab;
      touch-action: pan-y;
      user-select: none;
    }

    .coverflow-stage.is-dragging { cursor: grabbing; }

    .floor-glow {
      position: absolute;
      bottom: 13px;
      left: 50%;
      width: min(700px, 92%);
      height: 114px;
      border-radius: 50%;
      pointer-events: none;
      transform: translateX(-50%) rotateX(68deg);
      background: radial-gradient(ellipse, rgba(64, 221, 255, 0.23), rgba(28, 91, 124, 0.08) 44%, transparent 72%);
      filter: blur(9px);
    }

    .coverflow-track {
      position: absolute;
      inset: 0;
      transform-style: preserve-3d;
    }

    .cover-card {
      position: absolute;
      top: 50%;
      left: 50%;
      width: var(--card-width);
      height: var(--card-height);
      overflow: hidden;
      border: 1px solid var(--glass-border);
      border-radius: 20px;
      background: #101620;
      box-shadow:
        0 2px 0 rgba(255,255,255,.1) inset,
        0 0 0 1px rgba(120,220,255,.04),
        0 14px 32px rgba(0,0,0,.42),
        0 42px 72px rgba(0,0,0,.38);
      cursor: pointer;
      transform-style: preserve-3d;
      transition:
        transform 720ms var(--ease),
        opacity 580ms ease,
        filter 580ms ease;
      will-change: transform, opacity;
      -webkit-box-reflect: below 9px linear-gradient(to bottom, rgba(255,255,255,.16), rgba(255,255,255,0) 34%);
    }

    .cover-card::before {
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none;
      border-radius: inherit;
      background: linear-gradient(105deg, rgba(255,255,255,.22), transparent 27%);
      content: "";
      opacity: .9;
    }

    .cover-card::after {
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none;
      border-radius: inherit;
      background: linear-gradient(to top, rgba(0,0,0,.73), transparent 50%);
      content: "";
    }

    .cover-card img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
      filter: saturate(.84) contrast(1.06) brightness(.75);
      transform: scale(1.03);
      transition: transform 700ms var(--ease), filter 700ms ease;
    }

    .cover-card.is-active img {
      filter: saturate(1.08) contrast(1.04) brightness(1);
      transform: scale(1.07);
    }

    .cover-card:hover img {
      transform: scale(1.1);
    }

    .caption {
      position: absolute;
      right: 11px;
      bottom: 11px;
      left: 11px;
      z-index: 3;
      padding: 11px 12px;
      border: 1px solid rgba(255,255,255,.16);
      border-radius: 13px;
      background: rgba(7, 12, 18, .47);
      box-shadow: 0 8px 25px rgba(0,0,0,.2);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .caption-kicker {
      display: block;
      margin-bottom: 3px;
      letter-spacing: .15em;
      text-transform: uppercase;
    }

    .caption-title {
      display: block;
      letter-spacing: -.015em;
    }

    .navigation {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 30;
      display: flex;
      width: min(840px, 100%);
      align-items: center;
      justify-content: space-between;
      pointer-events: none;
      transform: translate(-50%, -50%);
    }

    .nav-button {
      display: inline-grid;
      width: 47px;
      height: 47px;
      place-items: center;
      border: 1px solid rgba(196,240,255,.25);
      border-radius: 999px;
      box-shadow: 0 10px 30px rgba(0,0,0,.24), inset 0 1px rgba(255,255,255,.1);
      cursor: pointer;
      pointer-events: auto;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transition: transform 220ms ease, background 220ms ease, border-color 220ms ease;
    }

    .nav-button:hover {
      border-color: rgba(134,233,255,.8);
      transform: scale(1.08);
    }

    .nav-button:active { transform: scale(.95); }

    .arrow-icon {
      width: 10px;
      height: 10px;
      border-top: 2px solid currentColor;
      border-right: 2px solid currentColor;
    }

    .arrow-left {
      transform: rotate(-135deg);
      margin-left: 4px;
    }

    .arrow-right {
      transform: rotate(45deg);
      margin-right: 4px;
    }

    .pagination {
      position: absolute;
      bottom: 26px;
      left: 50%;
      z-index: 40;
      display: flex;
      align-items: center;
      gap: 9px;
      transform: translateX(-50%);
    }

    .pagination-dot {
      width: 8px;
      height: 8px;
      padding: 0;
      border: 0;
      border-radius: 999px;
      cursor: pointer;
      transition: width 330ms var(--ease), transform 220ms ease, opacity 220ms ease;
    }

    .pagination-dot:hover { transform: scale(1.25); }

    .pagination-dot.is-active {
      width: 27px;
      opacity: 1 !important;
    }

    .instruction {
      position: absolute;
      bottom: 0;
      left: 50%;
      display: flex;
      width: max-content;
      max-width: calc(100% - 36px);
      align-items: center;
      gap: 8px;
      margin: 0;
      padding: 7px 13px;
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 999px;
      background: rgba(255,255,255,.025);
      letter-spacing: .025em;
      text-align: center;
      transform: translateX(-50%);
    }

    .drag-glyph {
      display: inline-flex;
      align-items: center;
      gap: 3px;
      color: #7ee8ff;
      font-size: 14px;
      line-height: 1;
    }

    @keyframes rise-in {
      from { opacity: 0; transform: translateY(16px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 640px) {
      :root { --card-width: clamp(150px, 51vw, 208px); }

      .page-header {
        width: min(1120px, calc(100% - 30px));
        padding-top: 25px;
      }

      .carousel-area {
        min-height: 478px;
        padding-right: 12px;
        padding-left: 12px;
      }

      .coverflow-stage { height: 405px; }

      .navigation { width: 100%; }

      .nav-button {
        width: 40px;
        height: 40px;
      }

      .pagination { bottom: 28px; }
      .instruction { bottom: -2px; }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        scroll-behavior: auto !important;
        transition-duration: .01ms !important;
      }
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.577.0/dist/umd/lucide.min.js" type="text/javascript"><\/script>
  <script src="https://cdn.tailwindcss.com/3.4.17" type="text/javascript"><\/script>
  <script src="/_sdk/6c2ecc939521f244.data_sdk.js" type="text/javascript" integrity="sha512-gRx8s+XsZDN6mSIQu2sivLZysbV0WHhb5kXNUWlgVb5lCMU1foJYukyMEDPv8Tnoocb8iwqB4XdRrWc7oEGzIQ=="><\/script>
  <script src="/_sdk/6bf4579cc4c25151.editing_sdk.js" type="text/javascript" integrity="sha512-12l4JxmokLfWaGAHNO68l5Ev8ahSshUKfuxnYUB8nkqSU1+WiCvimsPjHzPjw1k7DcHL+eZ+K9Bld04jnd5gkg=="><\/script>
  <script src="/_sdk/ddcab3e45959c817.resizing_sdk.js" type="text/javascript" integrity="sha512-VAviUKfZVzugWBSeULYjSljTX+nb84wc6Zzbx5GQaQgh6X2ISSjXi8eIiCDGdwDh10esJMY0+QFQgUy9NcrTlQ=="><\/script>
 </head>
 <body data-template-id="__page-root">
  <div class="app-shell">
   <div class="studio-grid" aria-hidden="true"></div>
   <header class="page-header">
    <p data-template-id="collection-label" class="canva-text eyebrow"></p>
    <h1 data-template-id="carousel-title" class="canva-text hero-title"></h1>
    <p data-template-id="carousel-description" class="canva-text hero-copy"></p>
   </header>
   <main class="carousel-area">
    <section id="coverflow-stage" class="coverflow-stage" tabindex="0" aria-label="Carousel ảnh Coverflow 3D. Kéo ngang, vuốt hoặc dùng phím mũi tên để điều hướng.">
     <div class="floor-glow" aria-hidden="true"></div>
     <div id="coverflow-track" class="coverflow-track">
      <article data-template-id="card-1" class="canva-card cover-card"><img data-template-id="carousel-image-1" class="canva-image" loading="lazy">
       <div class="caption"><span data-template-id="card-1-category" class="canva-text caption-kicker"></span> <span data-template-id="card-1-title" class="canva-text caption-title"></span>
       </div>
      </article>
      <article data-template-id="card-2" class="canva-card cover-card"><img data-template-id="carousel-image-2" class="canva-image" loading="lazy">
       <div class="caption"><span data-template-id="card-2-category" class="canva-text caption-kicker"></span> <span data-template-id="card-2-title" class="canva-text caption-title"></span>
       </div>
      </article>
      <article data-template-id="card-3" class="canva-card cover-card"><img data-template-id="carousel-image-3" class="canva-image" loading="lazy">
       <div class="caption"><span data-template-id="card-3-category" class="canva-text caption-kicker"></span> <span data-template-id="card-3-title" class="canva-text caption-title"></span>
       </div>
      </article>
      <article data-template-id="card-4" class="canva-card cover-card"><img data-template-id="carousel-image-4" class="canva-image" loading="lazy">
       <div class="caption"><span data-template-id="card-4-category" class="canva-text caption-kicker"></span> <span data-template-id="card-4-title" class="canva-text caption-title"></span>
       </div>
      </article>
      <article data-template-id="card-5" class="canva-card cover-card"><img data-template-id="carousel-image-5" class="canva-image" loading="lazy">
       <div class="caption"><span data-template-id="card-5-category" class="canva-text caption-kicker"></span> <span data-template-id="card-5-title" class="canva-text caption-title"></span>
       </div>
      </article>
      <article data-template-id="card-6" class="canva-card cover-card"><img data-template-id="carousel-image-6" class="canva-image" loading="lazy">
       <div class="caption"><span data-template-id="card-6-category" class="canva-text caption-kicker"></span> <span data-template-id="card-6-title" class="canva-text caption-title"></span>
       </div>
      </article>
     </div>
     <nav class="navigation" aria-label="Điều hướng carousel"><button data-template-id="previous-button" id="previous-button" class="canva-button nav-button" type="button" aria-label="Ảnh trước"> <span class="arrow-icon arrow-left" aria-hidden="true"></span> </button> <button data-template-id="next-button" id="next-button" class="canva-button nav-button" type="button" aria-label="Ảnh tiếp theo"> <span class="arrow-icon arrow-right" aria-hidden="true"></span> </button>
     </nav>
     <nav class="pagination" aria-label="Chọn ảnh"><button data-template-id="pagination-dot-1" class="canva-button pagination-dot" type="button" aria-label="Chuyển đến ảnh 1"></button> <button data-template-id="pagination-dot-2" class="canva-button pagination-dot" type="button" aria-label="Chuyển đến ảnh 2"></button> <button data-template-id="pagination-dot-3" class="canva-button pagination-dot" type="button" aria-label="Chuyển đến ảnh 3"></button> <button data-template-id="pagination-dot-4" class="canva-button pagination-dot" type="button" aria-label="Chuyển đến ảnh 4"></button> <button data-template-id="pagination-dot-5" class="canva-button pagination-dot" type="button" aria-label="Chuyển đến ảnh 5"></button> <button data-template-id="pagination-dot-6" class="canva-button pagination-dot" type="button" aria-label="Chuyển đến ảnh 6"></button>
     </nav>
    </section>
    <p class="instruction"><span class="drag-glyph" aria-hidden="true">← →</span> <span data-template-id="interaction-help" class="canva-text"></span></p>
   </main>
  </div>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const stage = document.getElementById("coverflow-stage");
      const cards = Array.from(document.querySelectorAll(".cover-card"));
      const dots = Array.from(document.querySelectorAll(".pagination-dot"));
      const previousButton = document.getElementById("previous-button");
      const nextButton = document.getElementById("next-button");
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      let activeIndex = 0;
      let startX = 0;
      let isDragging = false;
      let wheelLocked = false;

      function circularDistance(index) {
        let distance = index - activeIndex;
        const half = cards.length / 2;

        if (distance > half) distance -= cards.length;
        if (distance < -half) distance += cards.length;

        return distance;
      }

      function renderCoverflow() {
        cards.forEach((card, index) => {
          const distance = circularDistance(index);
          const absoluteDistance = Math.abs(distance);
          const direction = distance < 0 ? -1 : 1;

          let transform = "";
          let opacity = "0";
          let zIndex = "1";
          let pointerEvents = "none";

          if (distance === 0) {
            transform = "translate(-50%, -50%) translateX(0px) translateZ(80px) rotateY(0deg) scale(1.15)";
            opacity = "1";
            zIndex = "20";
            pointerEvents = "auto";
          } else if (absoluteDistance === 1) {
            const x = direction * 205;
            const rotation = direction < 0 ? 45 : -45;
            transform = \`translate(-50%, -50%) translateX(\${x}px) translateZ(-150px) rotateY(\${rotation}deg) scale(.91)\`;
            opacity = ".6";
            zIndex = "12";
            pointerEvents = "auto";
          } else if (absoluteDistance === 2) {
            const x = direction * 350;
            const rotation = direction < 0 ? 52 : -52;
            transform = \`translate(-50%, -50%) translateX(\${x}px) translateZ(-275px) rotateY(\${rotation}deg) scale(.75)\`;
            opacity = ".28";
            zIndex = "7";
          } else {
            const x = direction * 455;
            const rotation = direction < 0 ? 58 : -58;
            transform = \`translate(-50%, -50%) translateX(\${x}px) translateZ(-390px) rotateY(\${rotation}deg) scale(.62)\`;
            opacity = ".08";
            zIndex = "2";
          }

          card.style.transform = transform;
          card.style.opacity = opacity;
          card.style.zIndex = zIndex;
          card.style.pointerEvents = pointerEvents;
          card.classList.toggle("is-active", distance === 0);
          card.setAttribute("aria-hidden", distance === 0 ? "false" : "true");
        });

        dots.forEach((dot, index) => {
          const selected = index === activeIndex;
          dot.classList.toggle("is-active", selected);
          dot.setAttribute("aria-current", selected ? "true" : "false");
        });
      }

      function setActive(index) {
        activeIndex = (index + cards.length) % cards.length;
        renderCoverflow();
      }

      function move(direction) {
        setActive(activeIndex + direction);
      }

      cards.forEach((card, index) => {
        card.addEventListener("click", () => {
          if (!isDragging) setActive(index);
        });
      });

      dots.forEach((dot, index) => {
        dot.addEventListener("click", () => setActive(index));
      });

      previousButton.addEventListener("click", () => move(-1));
      nextButton.addEventListener("click", () => move(1));

      stage.addEventListener("wheel", (event) => {
        event.preventDefault();

        if (wheelLocked) return;
        if (Math.abs(event.deltaY) < 8 && Math.abs(event.deltaX) < 8) return;

        wheelLocked = true;
        move(event.deltaY > 0 || event.deltaX > 0 ? 1 : -1);

        window.setTimeout(() => {
          wheelLocked = false;
        }, reducedMotion ? 40 : 480);
      }, { passive: false });

      stage.addEventListener("pointerdown", (event) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;

        isDragging = false;
        startX = event.clientX;
        stage.setPointerCapture(event.pointerId);
        stage.classList.add("is-dragging");
      });

      stage.addEventListener("pointermove", (event) => {
        if (!stage.hasPointerCapture(event.pointerId)) return;
        if (Math.abs(event.clientX - startX) > 8) isDragging = true;
      });

      function endDrag(event) {
        if (!stage.hasPointerCapture(event.pointerId)) return;

        const distance = event.clientX - startX;
        stage.releasePointerCapture(event.pointerId);
        stage.classList.remove("is-dragging");

        if (Math.abs(distance) > 36) {
          move(distance < 0 ? 1 : -1);
        }

        window.setTimeout(() => {
          isDragging = false;
        }, 0);
      }

      stage.addEventListener("pointerup", endDrag);
      stage.addEventListener("pointercancel", endDrag);

      stage.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          move(-1);
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          move(1);
        }
      });

      renderCoverflow();
    });
  <\/script>
 </body>
</html>`,
    'v2': (state) => `<!doctype html>
<html lang="vi">
 <head><script>window["__codeletBootstrap__"]=JSON.parse('{"A":"A","B":"20260929-05-baae6c9","C":{"Abril Fatface":"YACgEZbkUVE,0","Alfa Slab One":"YACgEYS9sJU,0","Anton":"YACgEcYqQ-A,0","Archivo":"YACgEZulLoA,0","Arial Narrow":"YAGyDvJ_4Ts,0","Arial Rounded MT Bold":"YAFcfoaHu-s,0","Arial":"YAGyDvJ_4Ts,0","Avenir Next":"YAFcfmNq6UY,0","Baloo 2":"YADK30bC6HQ,0","Bebas Neue":"YACgESME5ew,0","Bricolage Grotesque":"YAFyMcdwzpc,0","Broken Glyph":"YADZ-exUkv0,0","Canva Sans":"YAFdJjTk5UU,1","Caveat":"YALBs2ploWQ,0","Comic Sans MS":"YAFcfvtOAUY,1","Cormorant Garamond":"YAFdJhX-538,0","Courier New":"YAGzXiGs0_8,0","Courier Prime":"YAD1aFjegN8,0","DM Sans":"YAD1aU3sLnI,0","DM Serif Display":"YAD1aYG82rc,0","Forum":"YACgEcnnqB4,0","Fraunces":"YAFdJpU7Kkk,0","Georgia":"YAGzXkO0pEM,0","Ghost Mono":"YAHQutsX00Q,0","Hanken Grotesk":"YAFcfhwp99E,0","Helvetica Neue":"YAFcf6CtJfI,0","Helvetica":"YAFcf6CtJfI,0","IBM Plex Mono":"YAFdJkmvhGI,0","Impact":"YAFcfnjI7Vk,0","Instrument Serif":"YAHFeOnZNEk,0","Inter":"YAFdJvSyp_k,3","Iowan Old Style":"YAGNIFa8j9o,0","Jacques Francois":"YADK3zbC6RM,0","JetBrains Mono":"YAFdJksXcAk,0","Josefin Sans":"YAFdJjvw9Ps,0","Lato":"YAFdJuFCnaw,0","Libre Baskerville":"YACgEUFdPdA,0","Lobster":"YAD8SnSjSFI,0","Lora":"YACgEXvxf8Q,0","Merriweather":"YACgEXvHxxs,0","Montserrat":"YAFdtQi73Xs,0","Nunito":"YAFdJoNRMmU,1","Oleo Script":"YACgEQQ14jI,0","Oswald":"YACgEQY10lw,0","Pacifico":"YADLjORQ1u4,0","Phantom Sans":"YAFdJvgJ5TU,0","Playfair Display":"YAFdJhem5V8,1","Plus Jakarta Sans":"YAGvf3_u0_Q,0","Poppins":"YAFdJjbTu24,1","Press Start 2P":"YAFyGr-8pmQ,0","Quicksand":"YAFdJpYtCxE,1","Raleway":"YAFdJhmxbVQ,1","Roboto Slab":"YAFdJswIKAg,0","Rockwell":"YAFcfyVZnN0,0","Rye":"YACgEdQP21k,0","Segoe UI":"YAHNdRD1Klw,0","Source Sans 3":"YAG4lO1Mj10,0","Source Serif 4":"YACgEfdj394,0","Space Grotesk":"YADZ-dYEmhg,0","Space Mono":"YADW1-vpsoc,0","Times New Roman":"YAGzXW3gftg,0","Times":"YAGzXW3gftg,0","Trebuchet MS":"YAFcfrglpVA,0","UV Display":"YAEdVfSSpYo,0","UV Sans":"YAFdJvgJ5TU,0","Ubuntu":"YACgERDU--Q,0","Verdana":"YAGzXTctYtQ,0","Work Sans":"YAGXhLOKv44,0","Yellowtail":"YACgEYG4kG4,0","ui-monospace":"YAD1aFjegN8,0","ui-sans-serif":"YACkoD1yZN0,0"}}');<\/script><script src="/_sdk/6542d56fbfe7a3eb.telemetry_sdk.js" integrity="sha512-ECdM0nK7EkwDuOqho2qxgyRQXyBHk9hZqRKMBr+Xsu6zjeHlt+qkO2N2YRiHN7Kg4e1fEHDhjIp4bGJYVypv1g=="><\/script>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>3D Rotating Image Carousel</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&amp;family=Fraunces:opsz,wght@9..144,600;9..144,700&amp;display=swap" rel="stylesheet">
  <style>
    :root {
      --card-width: clamp(172px, 22vw, 272px);
      --card-height: calc(var(--card-width) * 1.31);
      --cyan: #7ee8ff;
      --glass-border: rgba(213, 245, 255, 0.18);
    }

    * {
      box-sizing: border-box;
    }

    html {
      background: #080a10;
    }

    body {
      width: 100%;
      min-height: 100%;
      margin: 0;
      overflow-x: hidden;
      font-family: "DM Sans", sans-serif;
    }

    button {
      -webkit-tap-highlight-color: transparent;
    }

    button:focus-visible,
    .carousel-stage:focus-visible {
      outline: 2px solid #8deaff;
      outline-offset: 5px;
    }

    .app-shell {
      position: relative;
      isolation: isolate;
      display: flex;
      flex-direction: column;
      width: 100%;
      min-height: calc(100 * min(var(--vh, 1vh), 1vh));
      overflow: hidden;
    }

    .app-shell::before,
    .app-shell::after {
      position: absolute;
      z-index: -1;
      pointer-events: none;
      content: "";
    }

    .app-shell::before {
      top: -260px;
      left: 50%;
      width: min(920px, 100vw);
      height: 540px;
      transform: translateX(-50%);
      background: radial-gradient(ellipse, rgba(52, 135, 183, 0.34) 0%, rgba(16, 31, 53, 0.12) 42%, transparent 72%);
      filter: blur(12px);
    }

    .app-shell::after {
      bottom: -27%;
      left: -10%;
      width: 120%;
      height: 55%;
      background: radial-gradient(ellipse, rgba(30, 126, 151, 0.16), transparent 65%);
      filter: blur(20px);
    }

    .studio-grid {
      position: absolute;
      inset: 0;
      z-index: -1;
      pointer-events: none;
      opacity: 0.25;
      background-image:
        linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px);
      background-size: 28px 28px;
      mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.78), transparent 82%);
    }

    .page-header {
      width: min(1120px, calc(100% - 40px));
      margin: 0 auto;
      padding: 34px 0 0;
      text-align: center;
      animation: rise-in 800ms cubic-bezier(.16, 1, .3, 1) both;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 9px;
      margin: 0 0 13px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .eyebrow::before,
    .eyebrow::after {
      width: 24px;
      height: 1px;
      background: currentColor;
      content: "";
      opacity: 0.75;
    }

    .hero-title {
      margin: 0;
      font-family: "Fraunces", serif;
      line-height: 1.05;
      letter-spacing: -0.045em;
    }

    .hero-copy {
      max-width: 570px;
      margin: 14px auto 0;
      line-height: 1.6;
    }

    .carousel-area {
      position: relative;
      display: grid;
      flex: 1;
      min-height: 515px;
      place-items: center;
      padding: 22px 20px 58px;
      animation: rise-in 900ms 100ms cubic-bezier(.16, 1, .3, 1) both;
    }

    .carousel-stage {
      position: relative;
      display: grid;
      width: min(980px, 100%);
      height: 455px;
      place-items: center;
      perspective: 1250px;
      perspective-origin: 50% 45%;
      cursor: grab;
      touch-action: pan-y;
      user-select: none;
    }

    .carousel-stage.is-dragging {
      cursor: grabbing;
    }

    .floor-glow {
      position: absolute;
      bottom: 12px;
      width: min(690px, 90%);
      height: 110px;
      border-radius: 50%;
      background: radial-gradient(ellipse, rgba(64, 221, 255, 0.22), rgba(28, 91, 124, 0.08) 43%, transparent 72%);
      filter: blur(9px);
      pointer-events: none;
      transform: rotateX(68deg);
    }

    .carousel-ring {
      position: relative;
      width: var(--card-width);
      height: var(--card-height);
      transform-style: preserve-3d;
      will-change: transform;
    }

    .carousel-ring.is-snapping {
      transition: transform 760ms cubic-bezier(.16, 1, .3, 1);
    }

    .carousel-card {
      position: absolute;
      inset: 0;
      display: block;
      width: var(--card-width);
      height: var(--card-height);
      overflow: hidden;
      border: 1px solid var(--glass-border);
      border-radius: 20px;
      background: #101620;
      box-shadow:
        0 2px 0 rgba(255, 255, 255, 0.1) inset,
        0 0 0 1px rgba(120, 220, 255, 0.04),
        0 12px 25px rgba(0, 0, 0, 0.42),
        0 40px 70px rgba(0, 0, 0, 0.42);
      backface-visibility: hidden;
      transform-style: preserve-3d;
      will-change: transform;
      -webkit-box-reflect: below 9px linear-gradient(to bottom, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0) 34%);
    }

    .carousel-card::after {
      position: absolute;
      inset: 0;
      z-index: 1;
      border-radius: inherit;
      pointer-events: none;
      background:
        linear-gradient(135deg, rgba(255, 255, 255, 0.19), transparent 27%),
        linear-gradient(to top, rgba(0, 0, 0, 0.68), transparent 47%);
      content: "";
    }

    .carousel-card img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      pointer-events: none;
      filter: saturate(0.88) contrast(1.07) brightness(0.86);
      transform: scale(1.025);
      transition: transform 700ms cubic-bezier(.16, 1, .3, 1), filter 700ms ease;
    }

    .carousel-card:hover img {
      filter: saturate(1.12) contrast(1.04) brightness(1);
      transform: scale(1.09);
    }

    .caption {
      position: absolute;
      right: 11px;
      bottom: 11px;
      left: 11px;
      z-index: 2;
      padding: 11px 12px;
      border: 1px solid rgba(255, 255, 255, 0.16);
      border-radius: 13px;
      background: rgba(7, 12, 18, 0.44);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
    }

    .caption-kicker {
      display: block;
      margin-bottom: 3px;
      letter-spacing: 0.15em;
      text-transform: uppercase;
    }

    .caption-title {
      display: block;
      letter-spacing: -0.015em;
    }

    .navigation {
      position: absolute;
      z-index: 5;
      display: flex;
      width: min(770px, 100%);
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      pointer-events: none;
    }

    .nav-button {
      display: inline-grid;
      width: 46px;
      height: 46px;
      place-items: center;
      border: 1px solid rgba(196, 240, 255, 0.25);
      border-radius: 999px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.24), inset 0 1px rgba(255, 255, 255, 0.1);
      cursor: pointer;
      pointer-events: auto;
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      transition: transform 220ms ease, background 220ms ease, border-color 220ms ease;
    }

    .nav-button:hover {
      border-color: rgba(134, 233, 255, 0.8);
      background: rgba(32, 61, 79, 0.86);
      transform: scale(1.08);
    }

    .nav-button:active {
      transform: scale(0.95);
    }

    .nav-button svg {
      width: 20px;
      height: 20px;
      stroke-width: 1.8;
    }

    .instruction {
      position: absolute;
      bottom: 5px;
      left: 50%;
      display: flex;
      width: max-content;
      max-width: calc(100% - 40px);
      align-items: center;
      gap: 8px;
      margin: 0;
      padding: 7px 13px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.025);
      letter-spacing: 0.025em;
      text-align: center;
      transform: translateX(-50%);
    }

    .instruction svg {
      flex: 0 0 auto;
      width: 14px;
      height: 14px;
    }

    @keyframes rise-in {
      from {
        opacity: 0;
        transform: translateY(16px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 640px) {
      :root {
        --card-width: clamp(158px, 51vw, 212px);
      }

      .page-header {
        width: min(1120px, calc(100% - 30px));
        padding-top: 25px;
      }

      .carousel-area {
        min-height: 474px;
        padding-right: 14px;
        padding-left: 14px;
      }

      .carousel-stage {
        height: 408px;
      }

      .navigation {
        padding: 0;
      }

      .nav-button {
        width: 40px;
        height: 40px;
      }

      .instruction {
        bottom: 0;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      *,
      *::before,
      *::after {
        scroll-behavior: auto !important;
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
      }

      .carousel-ring.is-snapping,
      .carousel-card img {
        transition-duration: 0.01ms;
      }
    }
  </style>
  <script src="https://cdn.jsdelivr.net/npm/lucide@0.577.0/dist/umd/lucide.min.js" type="text/javascript"><\/script>
  <script src="https://cdn.tailwindcss.com/3.4.17" type="text/javascript"><\/script>
  <script src="/_sdk/6c2ecc939521f244.data_sdk.js" type="text/javascript" integrity="sha512-gRx8s+XsZDN6mSIQu2sivLZysbV0WHhb5kXNUWlgVb5lCMU1foJYukyMEDPv8Tnoocb8iwqB4XdRrWc7oEGzIQ=="><\/script>
  <script src="/_sdk/6bf4579cc4c25151.editing_sdk.js" type="text/javascript" integrity="sha512-12l4JxmokLfWaGAHNO68l5Ev8ahSshUKfuxnYUB8nkqSU1+WiCvimsPjHzPjw1k7DcHL+eZ+K9Bld04jnd5gkg=="><\/script>
  <script src="/_sdk/ddcab3e45959c817.resizing_sdk.js" type="text/javascript" integrity="sha512-VAviUKfZVzugWBSeULYjSljTX+nb84wc6Zzbx5GQaQgh6X2ISSjXi8eIiCDGdwDh10esJMY0+QFQgUy9NcrTlQ=="><\/script>
 </head>
 <body data-template-id="__page-root">
  <div class="app-shell">
   <div class="studio-grid" aria-hidden="true"></div>
   <header class="page-header">
    <p data-template-id="collection-label" class="canva-text eyebrow"></p>
    <h1 data-template-id="carousel-title" class="canva-text hero-title"></h1>
    <p data-template-id="carousel-description" class="canva-text hero-copy"></p>
   </header>
   <main class="carousel-area">
    <section id="carousel-stage" class="carousel-stage" tabindex="0" aria-label="Carousel ảnh ba chiều. Kéo ngang, vuốt hoặc sử dụng phím mũi tên để điều hướng.">
     <div class="floor-glow" aria-hidden="true"></div>
     <div id="carousel-ring" class="carousel-ring" aria-live="polite">
      <article data-template-id="card-1" class="canva-card carousel-card"><img data-template-id="carousel-image-1" class="canva-image" loading="lazy">
       <div class="caption"><span data-template-id="card-1-category" class="canva-text caption-kicker"></span> <span data-template-id="card-1-title" class="canva-text caption-title"></span>
       </div>
      </article>
      <article data-template-id="card-2" class="canva-card carousel-card"><img data-template-id="carousel-image-2" class="canva-image" loading="lazy">
       <div class="caption"><span data-template-id="card-2-category" class="canva-text caption-kicker"></span> <span data-template-id="card-2-title" class="canva-text caption-title"></span>
       </div>
      </article>
      <article data-template-id="card-3" class="canva-card carousel-card"><img data-template-id="carousel-image-3" class="canva-image" loading="lazy">
       <div class="caption"><span data-template-id="card-3-category" class="canva-text caption-kicker"></span> <span data-template-id="card-3-title" class="canva-text caption-title"></span>
       </div>
      </article>
      <article data-template-id="card-4" class="canva-card carousel-card"><img data-template-id="carousel-image-4" class="canva-image" loading="lazy">
       <div class="caption"><span data-template-id="card-4-category" class="canva-text caption-kicker"></span> <span data-template-id="card-4-title" class="canva-text caption-title"></span>
       </div>
      </article>
      <article data-template-id="card-5" class="canva-card carousel-card"><img data-template-id="carousel-image-5" class="canva-image" loading="lazy">
       <div class="caption"><span data-template-id="card-5-category" class="canva-text caption-kicker"></span> <span data-template-id="card-5-title" class="canva-text caption-title"></span>
       </div>
      </article>
      <article data-template-id="card-6" class="canva-card carousel-card"><img data-template-id="carousel-image-6" class="canva-image" loading="lazy">
       <div class="caption"><span data-template-id="card-6-category" class="canva-text caption-kicker"></span> <span data-template-id="card-6-title" class="canva-text caption-title"></span>
       </div>
      </article>
     </div>
     <nav class="navigation" aria-label="Điều hướng carousel"><button data-template-id="previous-button" id="previous-button" class="canva-button nav-button" type="button" aria-label="Ảnh trước"> <i data-lucide="chevron-left" aria-hidden="true"></i> </button> <button data-template-id="next-button" id="next-button" class="canva-button nav-button" type="button" aria-label="Ảnh tiếp theo"> <i data-lucide="chevron-right" aria-hidden="true"></i> </button>
     </nav>
    </section>
    <p class="instruction"><i data-lucide="move-horizontal" aria-hidden="true"></i> <span data-template-id="interaction-help" class="canva-text"></span></p>
   </main>
  </div>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      lucide.createIcons();

      const stage = document.getElementById("carousel-stage");
      const ring = document.getElementById("carousel-ring");
      const cards = Array.from(document.querySelectorAll(".carousel-card"));
      const previousButton = document.getElementById("previous-button");
      const nextButton = document.getElementById("next-button");
      const totalCards = cards.length;
      const angleStep = 360 / totalCards;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      let rotation = 0;
      let isDragging = false;
      let isHovering = false;
      let startX = 0;
      let rotationAtStart = 0;
      let velocity = 0;
      let lastPointerX = 0;
      let lastPointerTime = 0;
      let lastFrame = performance.now();
      let resumeAt = 0;

      function getRadius() {
        const cardWidth = cards[0].getBoundingClientRect().width;
        return (cardWidth / 2) / Math.tan(Math.PI / totalCards);
      }

      function renderRotation() {
        ring.style.transform = \`rotateY(\${rotation}deg)\`;
      }

      function placeCards() {
        const radius = getRadius();

        cards.forEach((card, index) => {
          const angle = index * angleStep;
          card.style.transform = \`rotateY(\${angle}deg) translateZ(\${radius}px)\`;
        });

        renderRotation();
      }

      function pauseAutoRotation(milliseconds = 1500) {
        resumeAt = performance.now() + milliseconds;
      }

      function snapToNearest(momentum = 0) {
        const projectedRotation = rotation + momentum;
        const nearestIndex = Math.round(-projectedRotation / angleStep);

        rotation = -nearestIndex * angleStep;
        ring.classList.add("is-snapping");
        renderRotation();
        pauseAutoRotation(1800);
      }

      function moveBy(direction) {
        const currentIndex = Math.round(-rotation / angleStep);
        rotation = -(currentIndex + direction) * angleStep;

        ring.classList.remove("is-snapping");
        requestAnimationFrame(() => {
          ring.classList.add("is-snapping");
          renderRotation();
        });

        pauseAutoRotation(1900);
      }

      function onPointerDown(event) {
        if (event.pointerType === "mouse" && event.button !== 0) return;

        isDragging = true;
        startX = event.clientX;
        rotationAtStart = rotation;
        lastPointerX = event.clientX;
        lastPointerTime = performance.now();
        velocity = 0;

        ring.classList.remove("is-snapping");
        stage.classList.add("is-dragging");
        stage.setPointerCapture(event.pointerId);
        pauseAutoRotation(999999);
      }

      function onPointerMove(event) {
        if (!isDragging) return;

        const now = performance.now();
        const deltaX = event.clientX - startX;
        const elapsed = Math.max(now - lastPointerTime, 1);
        const movement = event.clientX - lastPointerX;

        velocity = (movement / elapsed) * 0.34;
        rotation = rotationAtStart + deltaX * 0.34;
        lastPointerX = event.clientX;
        lastPointerTime = now;

        renderRotation();
      }

      function onPointerUp(event) {
        if (!isDragging) return;

        isDragging = false;
        stage.classList.remove("is-dragging");

        if (stage.hasPointerCapture(event.pointerId)) {
          stage.releasePointerCapture(event.pointerId);
        }

        const momentum = Math.max(-26, Math.min(26, velocity * 115));
        snapToNearest(momentum);
      }

      function animate(now) {
        const elapsed = now - lastFrame;
        lastFrame = now;

        const shouldAutoRotate =
          !reducedMotion &&
          !isDragging &&
          !isHovering &&
          now > resumeAt;

        if (shouldAutoRotate) {
          ring.classList.remove("is-snapping");
          rotation -= elapsed * 0.009;
          renderRotation();
        }

        requestAnimationFrame(animate);
      }

      stage.addEventListener("pointerdown", onPointerDown);
      stage.addEventListener("pointermove", onPointerMove);
      stage.addEventListener("pointerup", onPointerUp);
      stage.addEventListener("pointercancel", onPointerUp);

      stage.addEventListener("mouseenter", () => {
        isHovering = true;
      });

      stage.addEventListener("mouseleave", () => {
        isHovering = false;
      });

      stage.addEventListener("focusin", () => {
        isHovering = true;
      });

      stage.addEventListener("focusout", () => {
        isHovering = false;
      });

      previousButton.addEventListener("click", () => moveBy(-1));
      nextButton.addEventListener("click", () => moveBy(1));

      document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          moveBy(-1);
        }

        if (event.key === "ArrowRight") {
          event.preventDefault();
          moveBy(1);
        }
      });

      window.addEventListener("resize", placeCards);

      placeCards();
      requestAnimationFrame(animate);
    });
  <\/script>
 </body>
</html>`,
    'v3': (state) => `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
        body { margin: 0; padding: 2rem; background: transparent; font-family: 'Inter', sans-serif; display: flex; align-items: center; justify-content: center; height: 100vh; overflow: hidden; box-sizing: border-box; }
        .bento-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 1fr);
            gap: 1.5rem;
            width: 100%;
            max-width: 1400px;
            height: 90vh;
        }
        .bento-item {
            background: rgba(255, 255, 255, 0.03);
            border-radius: 32px;
            overflow: hidden;
            position: relative;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
        }
        .bento-item::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            border-radius: 32px;
            padding: 2px;
            background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            z-index: 2;
        }
        .bento-item:hover { transform: translateY(-10px) scale(1.02); z-index: 10; box-shadow: 0 30px 60px -15px rgba(0,240,255, 0.2); }
        .bento-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1); }
        .bento-item:hover img { transform: scale(1.15); }
        .item-1 { grid-column: span 2; grid-row: span 2; }
        .item-2 { grid-column: span 1; grid-row: span 1; }
        .item-3 { grid-column: span 1; grid-row: span 2; }
        .item-4 { grid-column: span 2; grid-row: span 1; }
        .item-5 { grid-column: span 1; grid-row: span 1; }
        .label { 
            position: absolute; bottom: 1.5rem; left: 1.5rem; 
            background: rgba(15, 23, 42, 0.6); padding: 0.7rem 1.5rem; 
            border-radius: 20px; color: white; font-weight: 600; 
            backdrop-filter: blur(12px); border: 1px solid rgba(255,255,255,0.1);
            transform: translateY(20px); opacity: 0; transition: all 0.4s;
            z-index: 3;
        }
        .bento-item:hover .label { transform: translateY(0); opacity: 1; }
    </style>
</head>
<body>
    <div class="bento-grid">
        <div class="bento-item item-1"><img src="image/v (1).png"><div class="label">Main Showcase</div></div>
        <div class="bento-item item-2"><img src="image/v (2).png"><div class="label">Vibes</div></div>
        <div class="bento-item item-3"><img src="image/v (3).png"><div class="label">Portrait</div></div>
        <div class="bento-item item-4"><img src="image/v (8).png"><div class="label">Cinematic</div></div>
        <div class="bento-item item-5"><img src="image/v (5).png"><div class="label">Details</div></div>
    </div>
</body>
</html>
`,
    'v4': (state) => `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet">
    <style>
        body { margin: 0; background: transparent; height: 100vh; overflow: hidden; display: flex; align-items: center; justify-content: center; font-family: 'Caveat', cursive; }
        .polaroid {
            position: absolute;
            width: 280px;
            background: #fff;
            padding: 15px 15px 65px 15px;
            box-shadow: 0 15px 35px rgba(0,0,0,0.4);
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            border-radius: 4px;
        }
        .polaroid img { width: 100%; height: 350px; object-fit: cover; border-radius: 2px; }
        .polaroid span { position: absolute; bottom: 15px; left: 0; width: 100%; text-align: center; color: #222; font-size: 28px; font-weight: bold; letter-spacing: 2px; }
        .p1 { transform: translate(-350px, -100px) rotate(-12deg); z-index: 1; }
        .p2 { transform: translate(-120px, 80px) rotate(8deg); z-index: 2; }
        .p3 { transform: translate(180px, -120px) rotate(15deg); z-index: 3; }
        .p4 { transform: translate(400px, 50px) rotate(-6deg); z-index: 4; }
        .polaroid:hover { transform: translate(0, 0) rotate(0deg) scale(1.3); z-index: 100; box-shadow: 0 30px 60px rgba(0,0,0,0.8); }
    </style>
</head>
<body>
    <div class="polaroid p1"><img src="image/v (2).png"><span>Summer Vibes</span></div>
    <div class="polaroid p2"><img src="image/v (3).png"><span>Good Times</span></div>
    <div class="polaroid p3"><img src="image/v (4).png"><span>Aesthetic</span></div>
    <div class="polaroid p4"><img src="image/v (5).png"><span>Memories</span></div>
</body>
</html>
`,
    'v5': (state) => `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <style>
        body { margin: 0; background: #000; height: 100vh; display: flex; align-items: center; font-family: sans-serif; overflow-x: auto; overflow-y: hidden; white-space: nowrap; scroll-behavior: smooth; }
        ::-webkit-scrollbar { height: 8px; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
        .filmstrip { display: flex; padding: 0 10vw; gap: 40px; }
        .frame { position: relative; width: 60vw; height: 65vh; flex-shrink: 0; border: 12px solid #111; border-radius: 4px; box-shadow: 0 30px 60px rgba(0,0,0,0.9); overflow: hidden; }
        .frame::before { content: ''; position: absolute; top:-50%; left:-50%; width:200%; height:200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 60%); z-index: 5; pointer-events: none; opacity: 0; transition: opacity 0.5s; }
        .frame::after { content: ''; position: absolute; top:0; left:0; width:100%; height:100%; background: linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 60%); pointer-events:none; z-index: 2; }
        .frame img { width: 100%; height: 100%; object-fit: cover; filter: grayscale(60%) contrast(1.2); transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1); cursor: ew-resize; }
        .frame:hover::before { opacity: 1; }
        .frame:hover img { filter: grayscale(0%) contrast(1.05); transform: scale(1.08); }
        .caption { position: absolute; bottom: 40px; left: 50px; color: #fff; font-size: 28px; font-weight: 800; letter-spacing: 8px; text-transform: uppercase; z-index: 10; opacity: 0; transform: translateY(30px); transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); }
        .frame:hover .caption { opacity: 1; transform: translateY(0); }
    </style>
</head>
<body>
    <div class="filmstrip">
        <div class="frame"><img src="image/v (1).png"><div class="caption">SCENE 01 // ORIGIN</div></div>
        <div class="frame"><img src="image/v (2).png"><div class="caption">SCENE 02 // NEON NIGHTS</div></div>
        <div class="frame"><img src="image/v (3).png"><div class="caption">SCENE 03 // AWAKENING</div></div>
        <div class="frame"><img src="image/v (4).png"><div class="caption">SCENE 04 // THE CHASE</div></div>
        <div class="frame"><img src="image/v (5).png"><div class="caption">SCENE 05 // HORIZON</div></div>
        <div class="frame"><img src="image/v (7).png"><div class="caption">SCENE 06 // FINALE</div></div>
    </div>
    <script>
        const scrollContainer = document.documentElement;
        scrollContainer.addEventListener('wheel', (evt) => {
            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY * 2.5; // Tăng tốc độ cuộn ngang
        });
    <\/script>
</body>
</html>
`,
    'v6': (state) => `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;800&display=swap" rel="stylesheet">
    <style>
        body { margin: 0; background: radial-gradient(circle at center, #1a1a24 0%, #050505 100%); height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; perspective: 1200px; font-family: 'Inter', sans-serif; }
        .card-container { width: 450px; height: 650px; position: relative; transform-style: preserve-3d; transition: transform 0.15s ease-out; cursor: crosshair; }
        .card { width: 100%; height: 100%; position: absolute; border-radius: 24px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.1); transform: translateZ(0); background: #000; }
        .card img { width: 100%; height: 100%; object-fit: cover; opacity: 0.8; transition: opacity 0.5s; }
        .card-container:hover .card img { opacity: 1; }
        .glare { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.4) 25%, transparent 30%); z-index: 10; pointer-events: none; opacity: 0; mix-blend-mode: overlay; }
        
        /* Particle floating effects inside card */
        .particles { position: absolute; top:0; left:0; width:100%; height:100%; transform: translateZ(40px); pointer-events: none; }
        .p-dot { position: absolute; width: 3px; height: 3px; background: #fff; border-radius: 50%; opacity: 0.5; box-shadow: 0 0 10px #fff; }

        /* Pop-out 3D Character */
        .popout-character { position: absolute; bottom: 0; left: 50%; width: 85%; height: auto; transform: translateX(-50%) translateZ(120px); pointer-events: none; filter: drop-shadow(0 40px 30px rgba(0,0,0,0.8)); z-index: 5; transition: transform 0.15s ease-out; }
    </style>
</head>
<body>
    <div class="card-container" id="card">
        <div class="card">
            <img src="image/v (8).png">
            <div class="glare" id="glare"></div>
            <div class="particles" id="particles"></div>
        </div>
        <img src="image/imgrm (8).png" class="popout-character" id="popout-char">
    </div>
    <script>
        const container = document.getElementById('card');
        const glare = document.getElementById('glare');
        const particles = document.getElementById('particles');

        // Sinh hạt bụi
        for(let i=0; i<20; i++) {
            let dot = document.createElement('div');
            dot.className = 'p-dot';
            dot.style.left = Math.random() * 100 + '%';
            dot.style.top = Math.random() * 100 + '%';
            dot.style.opacity = Math.random() * 0.5 + 0.2;
            particles.appendChild(dot);
        }

        document.addEventListener('mousemove', (e) => {
            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / -25;
            container.style.transform = \`rotateY(\${xAxis}deg) rotateX(\${yAxis}deg)\`;
            glare.style.opacity = 1;
            glare.style.transform = \`translateX(\${xAxis * -15}px) translateY(\${yAxis * 15}px)\`;
            const char = document.getElementById('popout-char');
            if (char) char.style.transform = \`translateX(calc(-50% + \${xAxis * -2}px)) translateY(\${yAxis * -2}px) translateZ(120px)\`;
        });
        document.addEventListener('mouseleave', () => {
            container.style.transition = "transform 0.5s ease-out";
            container.style.transform = \`rotateY(0deg) rotateX(0deg)\`;
            glare.style.opacity = 0;
            const char = document.getElementById('popout-char');
            if (char) char.style.transform = \`translateX(-50%) translateZ(120px)\`;
            setTimeout(() => container.style.transition = "transform 0.15s ease-out", 500);
        });
    <\/script>
</body>
</html>
`
};
