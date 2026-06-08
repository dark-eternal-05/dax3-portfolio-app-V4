const globalStyles = `
  :root {
    --header-height: 56px;
    --marquee-height: 40px;
    --footer-height: 32px;
    --sidebar-width: 64px;

    --bg-main: linear-gradient(160deg, #0b1628 0%, #0d1f3c 45%, #0a1a30 100%);
    --text-main: #e2e8f0;
    --panel-bg: rgba(11, 22, 40, 0.88);
    --panel-border: rgba(255, 255, 255, 0.16);
    --accent: #00e5ff;

    --card-bg: rgba(255, 255, 255, 0.12);
    --card-border: rgba(255, 255, 255, 0.1);
    --card-shadow: none;
    --card-title: #ffffff;
    --card-desc: rgba(255, 255, 255, 0.68);
    --product-icon-bg-opacity: 0.12;

    --dropdown-bg: rgba(11, 22, 40, 0.96);
    --dropdown-text: #e2e8f0;
    --dropdown-shadow: 0 12px 40px rgba(0,0,0,0.45), 0 0 20px rgba(0,229,255,0.08);

    --arrow-bg: rgba(11, 22, 40, 0.82);
    --arrow-color: #00e5ff;
    --dot-inactive-bg: rgba(255,255,255,0.2);

    --home-bg: #ffffff;
    --home-color: #000000;
  }

  [data-theme="light"] {
    --bg-main: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 50%, #ffffff 100%);
    --text-main: #0f172a;
    --panel-bg: rgba(255, 255, 255, 0.82);
    --panel-border: rgba(15, 23, 42, 0.08);
    --accent: #2563eb;

    --card-bg: rgba(255, 255, 255, 0.86);
    --card-border: rgba(255, 255, 255, 0.95);
    --card-shadow: 0 18px 45px rgba(15, 23, 42, 0.08);
    --card-title: #0f172a;
    --card-desc: #64748b;
    --product-icon-bg-opacity: 0.08;

    --dropdown-bg: rgba(255, 255, 255, 0.96);
    --dropdown-text: #0f172a;
    --dropdown-shadow: 0 16px 40px rgba(15,23,42,0.12);

    --arrow-bg: rgba(255, 255, 255, 0.95);
    --arrow-color: #0f172a;
    --dot-inactive-bg: rgba(15,23,42,0.12);

    --home-bg: #000000;
    --home-color: #ffffff;
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background: var(--bg-main);
  }

  * {
    box-sizing: border-box;
  }

  button,
  select {
    font-family: inherit;
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }

  .app-shell {
    min-height: 100vh;
    padding-top: var(--header-height);
    padding-bottom: var(--footer-height);
    background: var(--bg-main);
    background-attachment: fixed;
    font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
    color: var(--text-main);
    position: relative;
    overflow-x: hidden;
    transition: background 0.3s ease, color 0.3s ease;
  }

  #particles-js {
    position: fixed;
    inset: 0;
    z-index: 1;
    pointer-events: none;
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(24px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes dropIn {
    from {
      opacity: 0;
      transform: translateY(-6px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes marqueeScroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .app-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--header-height);
    z-index: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem 0 5rem;
    background: var(--panel-bg);
    border-bottom: 1px solid var(--panel-border);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
  }

  .header-logo {
    width: 120px;
    height: 34px;
    border-radius: 8px;
    background: rgba(255,255,255,0.08);
    border: 1px dashed var(--panel-border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    color: var(--text-main);
    opacity: 0.65;
    letter-spacing: 0.06em;
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .header-avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: rgba(255,255,255,0.08);
    border: 1px dashed var(--panel-border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    color: var(--text-main);
    opacity: 0.7;
  }

  .header-title {
    font-size: 13px;
    color: var(--text-main);
    opacity: 0.75;
  }

  .theme-toggle {
    position: relative;
    width: 64px;
    height: 32px;
    border-radius: 999px;
    border: 1px solid rgba(15, 23, 42, 0.12);
    background: #e5e7eb;
    padding: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: background 0.25s ease, border-color 0.25s ease;
  }

  .theme-toggle-dark {
    background: rgba(0, 229, 255, 0.16);
    border-color: rgba(0, 229, 255, 0.35);
  }

  .theme-toggle-thumb {
    position: absolute;
    left: 4px;
    top: 4px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0 3px 10px rgba(15, 23, 42, 0.25);
    transform: translateX(0);
    transition: transform 0.25s ease, background 0.25s ease;
    z-index: 2;
  }

  .theme-toggle-dark .theme-toggle-thumb {
    transform: translateX(32px);
    background: #00e5ff;
  }

  .theme-icon {
    position: relative;
    z-index: 3;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .theme-icon svg {
    width: 14px;
    height: 14px;
    fill: none;
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .theme-icon-sun {
    color: #f59e0b;
  }

  .theme-icon-moon {
    color: #64748b;
  }

  .theme-toggle-dark .theme-icon-sun {
    color: rgba(255,255,255,0.55);
  }

  .theme-toggle-dark .theme-icon-moon {
    color: #001018;
  }

  .whats-new-marquee {
    width: 100%;
    height: var(--marquee-height);
    display: flex;
    align-items: center;
    overflow: hidden;

    margin-top: 12px;

    border: 1px solid var(--panel-border);
    border-radius: 14px;

    background: var(--panel-bg);

    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);

    position: relative;
    z-index: 50;
  }

  .whats-new-label {
    flex: 0 0 auto;
    height: 100%;
    padding: 0 20px;
    display: flex;
    align-items: center;
    color: var(--accent);
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    border-right: 1px solid var(--panel-border);
    background: rgba(37, 99, 235, 0.08);
    white-space: nowrap;
  }

  .whats-new-scroll {
    flex: 1;
    overflow: hidden;
  }

  .whats-new-track {
    display: flex;
    align-items: center;
    width: max-content;
    gap: 3rem;
    padding: 10px 0;
    white-space: nowrap;
    will-change: transform;
    animation: marqueeScroll 35s linear infinite;
  }

  .whats-new-marquee:hover .whats-new-track {
    animation-play-state: paused;
  }

  .whats-new-track span {
    flex-shrink: 0;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-main);
    opacity: 0.82;
  }

  .whats-new-track span::before {
    content: "•";
    color: var(--accent);
    margin-right: 12px;
  }

  .app-main {
    position: relative;
    z-index: 10;
    min-height: calc(100vh - var(--header-height) - var(--footer-height));
    padding: 0rem 2rem 2rem calc(var(--sidebar-width) + 2rem);
  }

  .content-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 0rem;
    width: 100%;
  }

  .video-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
  }

  .video-card {
    width: 100%;
    max-width: 100%;
    height: 460px;
    margin: 0;
    border-radius: 24px;
    overflow: hidden;
    background: rgba(255,255,255,0.08);
    border: 1px solid var(--panel-border);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.12);
  }

  .theme-dark .video-card {
    background: #000;
    box-shadow: 0 0 40px rgba(0, 229, 255, 0.07);
  }

  .video-player {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .video-thumbnail {
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000;
  }

  .video-thumbnail img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.82;
  }

  .theme-dark .video-thumbnail img {
    object-fit: contain;
    opacity: 0.7;
  }

  .play-button {
    position: relative;
    z-index: 2;
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: var(--home-bg);
    color: var(--home-color);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 12px 32px rgba(15, 23, 42, 0.18);
  }

  .play-button svg {
    fill: currentColor;
  }
  
  .below-video-marquee {
    width: 100%;
  }

  .carousel-section {
    width: 100%;
    max-width: 1600px;
    margin-top: 24px;
  }

  .sidebar {
    position: fixed;
    top: var(--header-height);
    left: 0;
    bottom: var(--footer-height);
    width: var(--sidebar-width);
    z-index: 590;
    background: var(--panel-bg);
    border-right: 1px solid var(--panel-border);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    transition: width 0.25s ease;
    overflow: hidden;
    padding-top: 18px;
  }

  .sidebar-open {
    width: 180px;
  }

  .sidebar-link {
    width: calc(100% - 16px);
    margin: 0 8px;
    height: 46px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 0 13px;
    color: var(--home-color);
    background: var(--home-bg);
    text-decoration: none;
    font-weight: 700;
    box-shadow: 0 0 18px rgba(0, 229, 255, 0.18);
    transition: background 0.25s ease, color 0.25s ease;
  }

  .sidebar-link svg {
    flex-shrink: 0;
    color: currentColor;
  }

  .sidebar-label {
    opacity: 0;
    white-space: nowrap;
    transition: opacity 0.2s ease;
  }

  .sidebar-open .sidebar-label {
    opacity: 1;
  }

  .carousel-root {
    width: 100%;
  }

  .circular-carousel-root {
    position: relative;
  }

  .filter-row {
    position: relative;
    z-index: 50;
    display: flex;
    justify-content: flex-end;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .filter-wrapper {
    position: relative;
    min-width: 220px;
  }

  .filter-button {
    width: 100%;
    padding: 12px 16px;
    border-radius: 16px;
    border: 1px solid var(--panel-border);
    background: var(--dropdown-bg);
    color: var(--dropdown-text);
    font-size: 13px;
    font-weight: 700;
    cursor: pointer;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: var(--card-shadow);
  }

  .filter-arrow {
    color: var(--accent);
    font-size: 12px;
    transition: transform 0.25s ease;
  }

  .filter-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    width: 100%;
    background: var(--dropdown-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--panel-border);
    border-radius: 16px;
    overflow: hidden;
    box-shadow: var(--dropdown-shadow);
    animation: dropIn 0.18s ease;
    z-index: 999;
  }

  .filter-option {
    width: 100%;
    border: none;
    background: transparent;
    color: var(--dropdown-text);
    padding: 12px 16px;
    text-align: left;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    transition: all 0.15s ease;
  }

  .filter-option:hover,
  .filter-option-active {
    background: rgba(37, 99, 235, 0.1);
    color: var(--accent);
  }

  .carousel-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    width: 100%;
    max-width: 1700px;
    margin: -22px auto 0;
    padding: 0 0.5rem;
  }

  .circular-gallery-frame {
    position: relative;
    flex: 1;
    min-width: 0;
    width: 100%;
    max-width: 1550px;
    height: 390px;
    margin: 0 auto;
    overflow: hidden;
  }

  .circular-gallery-canvas {
    width: 100%;
    height: 100%;
    overflow: hidden;
    transform: translateY(-15px);
  }

  .circular-gallery-canvas canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
  }

  .gallery-arrow {
    position: relative;
    z-index: 20;
    width: 48px;
    height: 48px;
    min-width: 48px;
    border-radius: 50%;
    border: 1px solid var(--panel-border);
    background: var(--arrow-bg);
    color: var(--arrow-color);
    font-size: 32px;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    box-shadow: 0 8px 24px rgba(15, 23, 42, 0.12);
    transition: transform 0.2s ease, opacity 0.2s ease, background 0.2s ease;
  }

  .gallery-arrow:hover {
    transform: scale(1.06);
  }

  .gallery-arrow:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  .gallery-arrow:disabled:hover {
    transform: none;
  }

  .gallery-hint {
    position: absolute;
    left: 50%;
    bottom: 14px;
    transform: translateX(-50%);
    padding: 7px 14px;
    border-radius: 999px;
    border: 1px solid var(--panel-border);
    background: var(--panel-bg);
    color: var(--text-main);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    opacity: 0.65;
    pointer-events: none;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  }

  .empty-state {
    min-height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--card-desc);
  }

  .app-footer {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: var(--footer-height);
    z-index: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--panel-bg);
    border-top: 1px solid var(--panel-border);
    color: var(--text-main);
    opacity: 0.72;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
  }

  @media (max-width: 1100px) {
    .video-section {
      width: min(650px, 100%);
    }

    .carousel-section {
      width: 100%;
    }

    .circular-gallery-frame {
      height: 390px;
    }
  }

  @media (max-width: 768px) {
    .app-header {
      padding: 0 1rem 0 4.5rem;
    }

    .video-section {
      width: 100%;
    }

    .video-card {
      max-width: 100%;
    }

    .header-title {
      display: none;
    }

    .app-main {
      padding: 1rem 1rem 2rem calc(var(--sidebar-width) + 1rem);
    }

    .filter-row {
      padding: 0 0.5rem 0.75rem;
    }

    .filter-wrapper {
      min-width: 180px;
    }

    .carousel-wrapper {
      gap: 8px;
      padding: 0;
    }

    .circular-gallery-frame {
      height: 300px;
    }

    .gallery-arrow {
      width: 40px;
      height: 40px;
      min-width: 40px;
      font-size: 28px;
    }

    .gallery-hint {
      display: none;
    }
  }
`;

export default globalStyles;