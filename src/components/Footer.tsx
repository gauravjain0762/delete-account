import Link from "next/link";
import Image from "next/image";
import "@/app/landing.css";

export default function Footer() {
  return (
    <footer className="landing-page lp-footer" role="contentinfo">
      <div className="lp-container">
        <div className="footer-grid">
          <div>
            <Link href="/" className="nav-logo" style={{ display: "inline-flex", marginBottom: 0 }}>
              <div className="nav-logo-icon">
                <Image src="/queuetoken-logo.png" alt="QueueToken logo" width={36} height={36} />
              </div>
              Queue<span>Token</span>
            </Link>
            <p className="footer-brand-desc">
              Smart Doctor Appointment &amp; Queue Token Management System. Built for Indian clinics by
              Codetown Technologies.
            </p>
            <div className="footer-social">
              <div className="social-btn" aria-label="LinkedIn">in</div>
              <div className="social-btn" aria-label="Twitter">𝕏</div>
              <div className="social-btn" aria-label="Instagram">▣</div>
            </div>
          </div>
          <div className="footer-col">
            <h4>Product</h4>
            <ul>
              <li><Link href="/#doctor-features">Doctor App</Link></li>
              <li><Link href="/#patient-features">Patient App</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
              <li><Link href="/#onboarding">How It Works</Link></li>
              <li><Link href="/#onboarding">Onboarding</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><Link href="/#contact">About Us</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
              <li><Link href="/#contact">Request Demo</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li><Link href="/patient/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/patient/terms-and-conditions">Terms &amp; Conditions</Link></li>
              <li><a href="#">Refund Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Codetown Technologies. All rights reserved.</span>
          <div className="footer-bottom-links">
            <Link href="/patient/privacy-policy">Privacy Policy</Link>
            <Link href="/patient/terms-and-conditions">Terms &amp; Conditions</Link>
            <a href="mailto:gaurav@codetowntechnologies.in">gaurav@codetowntechnologies.in</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
