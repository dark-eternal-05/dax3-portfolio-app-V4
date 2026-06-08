import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`sidebar ${open ? "sidebar-open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href="/" className="sidebar-link" aria-label="Home">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 10.8L12 3L21 10.8V21H14.5V14.5H9.5V21H3V10.8Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="sidebar-label">Home</span>
      </a>
    </aside>
  );
}