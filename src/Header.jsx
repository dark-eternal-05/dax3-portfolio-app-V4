export default function Header({ theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
    <header className="app-header">
      <div className="header-logo">LOGO</div>

      <div className="header-right">
        <button
          type="button"
          className={`theme-toggle ${isDark ? "theme-toggle-dark" : ""}`}
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        >
          <span className="theme-icon theme-icon-sun">
            <svg viewBox="0 0 24 24">
              <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2M5.64 5.64 4.22 4.22M19.78 19.78l-1.42-1.42M18.36 5.64l1.42-1.42M4.22 19.78l1.42-1.42" />
              <circle cx="12" cy="12" r="4" />
            </svg>
          </span>

          <span className="theme-icon theme-icon-moon">
            <svg viewBox="0 0 24 24">
              <path d="M21 14.8A8.5 8.5 0 0 1 9.2 3a7 7 0 1 0 11.8 11.8Z" />
            </svg>
          </span>

          <span className="theme-toggle-thumb" />
        </button>

        <div className="header-avatar">DB</div>
        <span className="header-title">Digital Department</span>
      </div>
    </header>
  );
}