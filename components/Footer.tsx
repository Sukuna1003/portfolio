export default function Footer() {
  return (
    <footer className="footer">
      <div className="status-bar">
        <span>Ln 42, Col 80 | UTF-8 | C++20 | Compiled Successfully</span>
        <span>© {new Date().getFullYear()} Your Name</span>
      </div>
    </footer>
  );
}