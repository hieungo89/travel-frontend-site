import { pageLinks, socialLinks } from "../data";

const Footer = () => (
  <footer className="section footer">
    <ul className="footer-links">
      {pageLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} className="footer-link">
            {link.text}
          </a>
        </li>
      ))}
    </ul>

    <ul className="footer-icons">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="nav-icon"
          >
            <i className={`fab fa-${link.icon}`}></i>
          </a>
        </li>
      ))}
    </ul>

    <p className="copyright">
      copyright &copy; Backroads travel tours company
      <span id="date"></span> all rights reserved
    </p>
  </footer>
);

export default Footer;
