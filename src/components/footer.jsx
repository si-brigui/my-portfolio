import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">
          © {new Date().getFullYear()} Mohamed Radhi Brigui. Full-Stack
          Developer. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
