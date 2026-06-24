"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "./landing.css";

const MARQUEE_ITEMS = [
  "Real-Time Token Assignment",
  "Zero Waiting Room Crowd",
  "Instant Appointment Booking",
  "Revenue Dashboard",
  "UPI & Cash Payment Support",
  "Doctor Verification System",
  "Patient QR Scan Booking",
  "Free Follow-Up Management",
];

const GOOGLE_PLAY_SVG = (
  <svg viewBox="0 0 24 24" fill="none">
    <path d="M3.18 23.76c.32.18.68.22 1.04.12l12.19-7.03-2.63-2.63-10.6 9.54z" fill="#EA4335" />
    <path d="M22.42 10.56l-2.98-1.72-3.07 3.16 3.07 3.07 2.98-1.72c.85-.49.85-1.66 0-2.79z" fill="#FBBC04" />
    <path d="M4.22.12C3.86.02 3.5.06 3.18.24L13.78 10.84l2.59-2.59L4.22.12z" fill="#4285F4" />
    <path d="M3.18.24v23.52l10.6-11.69L3.18.24z" fill="#34A853" />
  </svg>
);

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"doctor" | "patient">("doctor");
  const [activeOnbStep, setActiveOnbStep] = useState(0);
  const [form, setForm] = useState({ name: "", clinic: "", phone: "", city: "", message: "" });
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observerRef.current?.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  useEffect(() => {
    if (observerRef.current) {
      document.querySelectorAll(".hiw-steps.active .reveal").forEach((el) => {
        observerRef.current?.observe(el);
      });
    }
  }, [activeTab]);

  const closeMobile = () => setMobileOpen(false);

  const submitDemo = () => {
    const { name, phone, clinic, city, message } = form;
    if (!name || !phone) {
      alert("Please fill in your name and phone number so we can reach you.");
      return;
    }
    const wa = `https://wa.me/917568547177?text=Hi%2C%20I%27d%20like%20a%20demo%20of%20QueueToken.%0A%0AName%3A%20${encodeURIComponent(name)}%0AClinic%3A%20${encodeURIComponent(clinic || "N/A")}%0ACity%3A%20${encodeURIComponent(city || "N/A")}%0APhone%3A%20${encodeURIComponent(phone)}%0AMessage%3A%20${encodeURIComponent(message || "N/A")}`;
    window.open(wa, "_blank");
  };

  return (
    <div className="landing-page">
      {/* NAV */}
      <nav className={`lp-nav${scrolled ? " scrolled" : ""}`} id="navbar" role="banner">
        <div className="nav-inner">
          <a href="#" className="nav-logo" aria-label="QueueToken Home">
            <div className="nav-logo-icon">
              <Image src="/queuetoken-logo.png" alt="QueueToken logo" width={36} height={36} />
            </div>
            Queue<span>Token</span>
          </a>
          <div className="nav-links" role="navigation" aria-label="Main navigation">
            <a href="#problem">Problem</a>
            <a href="#how-it-works">For Doctors</a>
            <a href="#patient-features">For Patients</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="nav-cta">
            <a href="#contact" className="btn btn-secondary" style={{ padding: "9px 20px", fontSize: ".82rem" }}>
              Request Demo
            </a>
            <a href="#download" className="btn btn-primary" style={{ padding: "9px 20px", fontSize: ".82rem" }}>
              Download App
            </a>
          </div>
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`} role="navigation">
        <a href="#problem" onClick={closeMobile}>Problem</a>
        <a href="#how-it-works" onClick={closeMobile}>For Doctors</a>
        <a href="#patient-features" onClick={closeMobile}>For Patients</a>
        <a href="#how-it-works" onClick={closeMobile}>How It Works</a>
        <a href="#pricing" onClick={closeMobile}>Pricing</a>
        <a href="#contact" onClick={closeMobile}>Contact</a>
        <a href="#download" className="btn btn-primary" onClick={closeMobile}>Download App</a>
      </div>

      <main>
        {/* HERO */}
        <section id="hero" aria-labelledby="hero-heading">
          <div className="hero-bg-grid" aria-hidden="true" />
          <div className="hero-glow-1" aria-hidden="true" />
          <div className="hero-glow-2" aria-hidden="true" />
          <div className="lp-container">
            <div className="hero-grid">
              <div className="hero-content">
                <div className="hero-badge">
                  <div className="hero-badge-dot" />
                  <span>Now Live Across India</span>
                </div>
                <h1 className="hero-title" id="hero-heading" style={{ fontSize: 30 }}>
                  <span
                    style={{
                      fontSize: "clamp(2.6rem, 6vw, 4.9rem)",
                      letterSpacing: "-0.036em",
                      background: "linear-gradient(135deg, #CC0000 0%, #FF1A1A 60%, #E80000 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Queue Token
                  </span>
                </h1>
                <p className="hero-desc">
                  Queue Token helps doctors manage appointments, live queues, patient flow, payments,
                  and clinic operations — All from one simple platform
                </p>
                <div className="hero-dual-cta">
                  <div className="hero-cta-block">
                    <div className="hero-cta-label">Are you a Doctor or Clinic?</div>
                    <div className="hero-cta-row">
                      <a
                        href="#download"
                        className="btn btn-primary btn-lg"
                        style={{ flex: 1, justifyContent: "center" }}
                      >
                        Register Your Clinic
                      </a>
                      <a href="#onboarding" className="btn btn-secondary btn-lg">
                        See How
                      </a>
                    </div>
                  </div>
                  <div className="hero-divider">
                    <div className="hero-divider-line" />
                    <span className="hero-divider-text">or</span>
                    <div className="hero-divider-line" />
                  </div>
                  <div className="hero-cta-block">
                    <div className="hero-cta-label">Looking to book an appointment?</div>
                    <a
                      href="#download"
                      className="btn btn-ghost btn-lg"
                      style={{ width: "100%", justifyContent: "center" }}
                    >
                      Download Patient App — Free
                    </a>
                  </div>
                </div>
                <div className="hero-stats" aria-label="Key statistics">
                  <div className="hero-stat-item">
                    <div className="hero-stat-num">200<span>+</span></div>
                    <div className="hero-stat-label">Clinics Onboarded</div>
                  </div>
                  <div className="hero-stat-item">
                    <div className="hero-stat-num">10K<span>+</span></div>
                    <div className="hero-stat-label">Appointments Managed</div>
                  </div>
                  <div className="hero-stat-item">
                    <div className="hero-stat-num">90<span>%</span></div>
                    <div className="hero-stat-label">Less Waiting Time</div>
                  </div>
                  <div className="hero-stat-item">
                    <div className="hero-stat-num">15<span>+</span></div>
                    <div className="hero-stat-label">Cities Covered</div>
                  </div>
                </div>
              </div>
              <div className="hero-phones" aria-hidden="true">
                <div className="phone-frame front">
                  <div className="phone-notch" />
                  <div className="phone-screen" style={{ position: "relative", overflow: "hidden" }}>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 32,
                        background: "#ffffff",
                        zIndex: 5,
                      }}
                    />
                    <img
                      src="/phone-front.jpg"
                      alt="QueueToken Doctor App Dashboard"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                    />
                  </div>
                </div>
                <div className="phone-frame back">
                  <div className="phone-notch" />
                  <div className="phone-screen" style={{ position: "relative", overflow: "hidden" }}>
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 32,
                        background: "#ffffff",
                        zIndex: 5,
                      }}
                    />
                    <img
                      src="/phone-back.jpg"
                      alt="QueueToken Doctor App"
                      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee-band" aria-hidden="true">
          <div className="marquee-track">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <div key={i} className="marquee-item">
                <span className="marquee-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* PROBLEM */}
        <section id="problem" aria-labelledby="problem-heading">
          <div className="lp-container">
            <div className="reveal">
              <div className="section-label">The Problem</div>
              <h2 className="section-title" id="problem-heading">
                Your clinic is losing time, revenue, and patients — every single day
              </h2>
              <p className="section-subtitle">
                Whether you&apos;re a doctor managing a busy clinic or a patient trying to get care,
                the current system is broken.
              </p>
            </div>
            <div className="problem-grid reveal">
              <div>
                <div className="problem-side-label">
                  <span className="problem-side-label-pill pill-doctor">For Doctors &amp; Clinics</span>
                </div>
                <div className="problem-cards">
                  {[
                    { icon: "📊", title: "No Revenue Visibility", desc: "You never know your daily earnings until the day ends. No reports, no planning, no growth." },
                    { icon: "📅", title: "Unpredictable Patient Flow", desc: "Walk-ins, no-shows, and chaos every morning. You can't plan your day or your staff." },
                    { icon: "🏥", title: "Overcrowded Waiting Rooms", desc: "30 patients cramped into a small lobby — every day. It damages your clinic's reputation." },
                    { icon: "📝", title: "Manual, Error-Prone Records", desc: "Paper tokens, registers, and WhatsApp chaos. You're spending your time on admin, not care." },
                  ].map((c) => (
                    <article key={c.title} className="problem-card">
                      <div className="problem-icon icon-red">{c.icon}</div>
                      <div>
                        <h4>{c.title}</h4>
                        <p>{c.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <div className="problem-side-label">
                  <span className="problem-side-label-pill pill-patient">For Patients</span>
                </div>
                <div className="problem-cards">
                  {[
                    { icon: "⏰", title: "2+ Hours Wasted Waiting", desc: "Arriving at 9 AM and leaving at noon — just for a 5-minute consultation." },
                    { icon: "🦠", title: "Crowded Clinics Are Unsafe", desc: "Sitting with 30 sick people in a waiting room increases your own health risk." },
                    { icon: "❓", title: "No Idea When Your Turn Comes", desc: "You can't step out for water or a phone call. Zero visibility into your wait time." },
                    { icon: "🔄", title: "Re-booking is Painful", desc: "Cancellations, missed tokens, and starting over. No easy way to reschedule or track history." },
                  ].map((c) => (
                    <article key={c.title} className="problem-card">
                      <div className="problem-icon icon-blue">{c.icon}</div>
                      <div>
                        <h4>{c.title}</h4>
                        <p>{c.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SOLUTION */}
        <section id="solution" aria-labelledby="solution-heading">
          <div className="lp-container">
            <div className="solution-center reveal">
              <div className="section-label">The Solution</div>
              <h2 className="section-title" id="solution-heading">
                Two apps. One seamless system.
              </h2>
              <p className="section-subtitle">
                QueueToken connects doctors and patients through a smart, real-time appointment and
                queue management ecosystem — built specifically for Indian clinics.
              </p>
            </div>
            <div className="solution-apps-grid reveal">
              <div className="solution-app-card card-doctor">
                <div className="app-card-icon app-card-icon-red">🩺</div>
                <h3 className="app-card-title">Doctor App</h3>
                <p className="app-card-sub">
                  Complete clinic management in your pocket. From appointments to revenue — everything in one place.
                </p>
                <ul className="app-feature-list">
                  {[
                    "Manage daily appointment queue",
                    "Real-time revenue dashboard",
                    "Set services, timings & consultation fee",
                    "UPI, Cash or QR payment setup",
                    "Doctor verification & trusted profile",
                    "Team / staff management",
                  ].map((f) => (
                    <li key={f} className="check-red">{f}</li>
                  ))}
                </ul>
              </div>
              <div className="solution-connector" aria-hidden="true">
                <div className="connector-line" />
                <div className="connector-icon">🔗</div>
                <div className="connector-line" />
              </div>
              <div className="solution-app-card card-patient">
                <div className="app-card-icon app-card-icon-blue">👤</div>
                <h3 className="app-card-title">Patient App</h3>
                <p className="app-card-sub">
                  Find your doctor, book instantly, get a real-time token. Arrive only when it&apos;s your turn.
                </p>
                <ul className="app-feature-list">
                  {[
                    "Find clinic via QR scan or phone number",
                    "Book appointment in under 60 seconds",
                    "Get real-time queue token number",
                    "See estimated appointment time live",
                    "Clinic directions & map integration",
                    "Full appointment history & follow-up tracking",
                  ].map((f) => (
                    <li key={f} className="check-blue">{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DOCTOR FEATURES */}
        <section id="doctor-features" aria-labelledby="doctor-features-heading">
          <div className="lp-container">
            <div className="features-header reveal">
              <div>
                <div className="section-label">Doctor App</div>
                <h2 className="section-title df-heading" id="doctor-features-heading">
                  Built for how doctors actually work
                </h2>
                <p className="section-subtitle">
                  Every feature is designed around the real workflow of an Indian clinic — not a hospital
                  management system built for bureaucrats.
                </p>
              </div>
            </div>

            {/* 3×2 feature cards */}
            <div className="df-grid reveal">
              {/* 1 — Revenue */}
              <article className="df-card">
                <div className="df-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/>
                    <line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/>
                  </svg>
                </div>
                <h3 className="df-card-title">Live Revenue Dashboard</h3>
                <p className="df-card-desc">See today&apos;s earnings, offline vs online payments, and download detailed reports. Know your numbers before the day ends.</p>
                <div className="df-tag">Real-Time Analytics <span className="df-tag-arrow">→</span></div>
              </article>

              {/* 2 — Appointments */}
              <article className="df-card">
                <div className="df-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                </div>
                <h3 className="df-card-title">Appointment Management</h3>
                <p className="df-card-desc">View pending, completed, and cancelled appointments by date. Mark as paid, done, or cancel with one tap.</p>
                <div className="df-tag">One-Tap Actions <span className="df-tag-arrow">→</span></div>
              </article>

              {/* 3 — Timings */}
              <article className="df-card">
                <div className="df-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/>
                  </svg>
                </div>
                <h3 className="df-card-title">Clinic Timings Editor</h3>
                <p className="df-card-desc">Set custom open/close hours for each day of the week. Toggle days on or off. Add multiple slots per day as needed.</p>
                <div className="df-tag">Custom Scheduling <span className="df-tag-arrow">→</span></div>
              </article>

              {/* 4 — Payment */}
              <article className="df-card">
                <div className="df-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                </div>
                <h3 className="df-card-title">Flexible Payment Setup</h3>
                <p className="df-card-desc">Accept Cash only, UPI only, or both. Add your UPI ID or upload your QR code. Patients see exactly how to pay before arriving.</p>
                <div className="df-tag">UPI Integration <span className="df-tag-arrow">→</span></div>
              </article>

              {/* 5 — Verification */}
              <article className="df-card">
                <div className="df-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                </div>
                <h3 className="df-card-title">Verified Doctor Profile</h3>
                <p className="df-card-desc">Submit Aadhaar and PAN for verification. A verified badge builds instant patient trust and increases booking rates significantly.</p>
                <div className="df-tag">Trust Badge <span className="df-tag-arrow">→</span></div>
              </article>

              {/* 6 — Duty toggle */}
              <article className="df-card">
                <div className="df-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="2" x2="12" y2="12"/>
                    <path d="M5.45 5.11A9 9 0 1 0 18.55 5.11"/>
                  </svg>
                </div>
                <h3 className="df-card-title">On/Off Duty Toggle</h3>
                <p className="df-card-desc">Mark yourself &ldquo;On Duty&rdquo; at the start of the day. Patients see your availability in real-time so they only book when you&apos;re available.</p>
                <div className="df-tag df-tag-green">
                  <div className="df-toggle-pill"><div className="df-toggle-thumb" /></div>
                  Currently Online
                </div>
              </article>
            </div>

            {/* Bottom row: Workflow + Quick Summary */}
            <div className="df-bottom-grid reveal">
              {/* Patient Workflow Visualizer */}
              <div className="df-workflow-card">
                <h4>Patient Workflow Visualizer</h4>
                <div className="df-workflow-visual">
                  <svg viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="tealBg" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#2DD4BF"/>
                        <stop offset="100%" stopColor="#0D9488"/>
                      </linearGradient>
                    </defs>
                    <rect width="340" height="200" fill="url(#tealBg)" rx="0"/>
                    {/* subtle grid */}
                    {[40,80,120,160].map(y => <line key={y} x1="0" y1={y} x2="340" y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>)}
                    {[85,170,255].map(x => <line key={x} x1={x} y1="0" x2={x} y2="200" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>)}
                    {/* isometric building — top face */}
                    <polygon points="170,35 250,78 170,121 90,78" fill="rgba(255,255,255,0.25)"/>
                    {/* left face */}
                    <polygon points="90,78 170,121 170,168 90,125" fill="rgba(0,0,0,0.13)"/>
                    {/* right face */}
                    <polygon points="250,78 170,121 170,168 250,125" fill="rgba(255,255,255,0.07)"/>
                    {/* roof medical cross */}
                    <rect x="164" y="42" width="12" height="26" rx="3" fill="rgba(255,255,255,0.75)"/>
                    <rect x="157" y="49" width="26" height="12" rx="3" fill="rgba(255,255,255,0.75)"/>
                    {/* windows left */}
                    <rect x="103" y="96" width="13" height="9" rx="2" fill="rgba(255,255,255,0.35)"/>
                    <rect x="122" y="107" width="13" height="9" rx="2" fill="rgba(255,255,255,0.35)"/>
                    <rect x="141" y="118" width="13" height="9" rx="2" fill="rgba(255,255,255,0.35)"/>
                    {/* windows right */}
                    <rect x="186" y="118" width="13" height="9" rx="2" fill="rgba(255,255,255,0.22)"/>
                    <rect x="205" y="107" width="13" height="9" rx="2" fill="rgba(255,255,255,0.22)"/>
                    <rect x="224" y="96" width="13" height="9" rx="2" fill="rgba(255,255,255,0.22)"/>
                    {/* door */}
                    <polygon points="161,151 179,158 179,168 161,168" fill="rgba(255,255,255,0.18)"/>
                    {/* person walking in */}
                    <circle cx="30" cy="115" r="10" fill="rgba(255,255,255,0.6)"/>
                    <path d="M24 132 C24 124 36 124 36 132" fill="rgba(255,255,255,0.6)"/>
                    {/* dashed arrow in */}
                    <path d="M42 118 L80 96" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeDasharray="3 2.5"/>
                    <polygon points="79,93 84,97 79,101" fill="rgba(255,255,255,0.55)"/>
                    {/* token badge */}
                    <rect x="14" y="78" width="34" height="22" rx="8" fill="rgba(255,255,255,0.92)"/>
                    <text x="31" y="93" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fontWeight="800" fill="#0D9488">#5</text>
                    {/* person walking out */}
                    <circle cx="310" cy="115" r="10" fill="rgba(255,255,255,0.6)"/>
                    <path d="M304 132 C304 124 316 124 316 132" fill="rgba(255,255,255,0.6)"/>
                    {/* dashed arrow out */}
                    <path d="M262 110 L299 112" stroke="rgba(255,255,255,0.55)" strokeWidth="1.5" strokeDasharray="3 2.5"/>
                    <polygon points="298,109 303,112 298,116" fill="rgba(255,255,255,0.55)"/>
                    {/* check badge */}
                    <rect x="292" y="78" width="34" height="22" rx="8" fill="rgba(255,255,255,0.92)"/>
                    <path d="M300 89 l4 4 8-8" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <div className="df-workflow-overlay">
                    <span className="df-workflow-overlay-tag">Automated Token Management</span>
                    <p>Visualize exactly how patients flow from booking to your consultation room.</p>
                  </div>
                </div>
              </div>

              {/* Quick Summary */}
              <div className="df-summary-card">
                <h4>Quick Summary</h4>
                <div className="df-stat-row">
                  <div className="df-stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                      <polyline points="17 6 23 6 23 12"/>
                    </svg>
                  </div>
                  <div className="df-stat-info">
                    <div className="df-stat-label">Daily Goal</div>
                    <div className="df-stat-sub">85% of capacity reached</div>
                  </div>
                  <div className="df-stat-value">
                    <div className="df-stat-num">₹14,500</div>
                    <div className="df-stat-tag">Current Balance</div>
                  </div>
                </div>
                <div className="df-stat-row">
                  <div className="df-stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                  <div className="df-stat-info">
                    <div className="df-stat-label">Queue Status</div>
                    <div className="df-stat-sub">4 Patients waiting</div>
                  </div>
                  <div className="df-stat-value">
                    <div className="df-stat-num">12 Min</div>
                    <div className="df-stat-tag">Avg Wait Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PATIENT FEATURES */}
        <section id="patient-features" aria-labelledby="patient-features-heading">
          <div className="lp-container">
            <div className="patient-grid">
              <div className="patient-phones reveal" aria-hidden="true">
                <div className="patient-phone back">
                  <div className="pf-content">
                    <div className="scan-screen">
                      <div className="scan-back">← Scan Hospital QR</div>
                      <div className="scan-title">Scan QR Code</div>
                      <div className="scan-sub">Or enter your clinic&apos;s registered phone number</div>
                      <div className="scan-box">
                        <div className="scan-icon">📷</div>
                        <div className="scan-btn">Open Scanner</div>
                      </div>
                      <div className="scan-or">— or —</div>
                      <div className="scan-input">📞 Enter Clinic Registered Number</div>
                      <div className="scan-submit">Submit</div>
                    </div>
                  </div>
                </div>
                <div className="patient-phone front">
                  <div className="pf-content">
                    <div className="token-screen">
                      <div className="token-check">✅</div>
                      <div className="token-confirmed">Booking Confirmed!</div>
                      <div className="token-sub">Your appointment has been successfully booked</div>
                      <div className="token-number-box">
                        <div className="token-number-label">Your Token Number</div>
                        <div className="token-number">2</div>
                      </div>
                      <div className="token-detail-row">
                        <span className="token-detail-label">Date</span>
                        <span className="token-detail-val">23/05/2026</span>
                      </div>
                      <div className="token-detail-row">
                        <span className="token-detail-label">Estimated Time</span>
                        <span className="token-detail-val">12:30 PM</span>
                      </div>
                      <div className="token-detail-row">
                        <span className="token-detail-label">Doctor Name</span>
                        <span className="token-detail-val">Dr. Jack</span>
                      </div>
                      <div className="token-detail-row">
                        <span className="token-detail-label">Clinic</span>
                        <span className="token-detail-val">Jack Clinic</span>
                      </div>
                      <div className="token-hint">
                        💡 Please arrive 5 minutes before your appointment time
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reveal">
                <div className="section-label">Patient App</div>
                <h2 className="section-title" id="patient-features-heading">
                  From &ldquo;I need a doctor&rdquo; to Token #2 in under 60 seconds
                </h2>
                <p className="section-subtitle" style={{ marginBottom: 32 }}>
                  The Patient App is free, fast, and designed for anyone — no tech experience needed.
                </p>
                <div className="patient-feature-list">
                  {[
                    { icon: "📱", title: "Find Clinic Instantly", desc: "Scan the clinic's QR code or simply enter the doctor's registered phone number. That's it." },
                    { icon: "🎫", title: "Real-Time Queue Token", desc: "Your token number is assigned the moment you book. Watch the queue progress live and know exactly when to arrive." },
                    { icon: "🗺️", title: "Clinic Location & Directions", desc: "See the clinic on Google Maps and get directions — all inside the app." },
                    { icon: "📋", title: "Appointment History", desc: "All your past and upcoming appointments in one place. Free follow-up tracking, cancellations, and rebooking — effortless." },
                  ].map((f) => (
                    <div key={f.title} className="patient-feat">
                      <div className="patient-feat-icon">{f.icon}</div>
                      <div>
                        <h4>{f.title}</h4>
                        <p>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" aria-labelledby="hiw-heading">
          <div className="lp-container">
            <div className="hiw-header reveal">
              <div className="section-label">How It Works</div>
              <h2 className="section-title" id="hiw-heading">
                The complete journey — from registration to consultation
              </h2>
              <p className="section-subtitle">
                QueueToken works for both sides simultaneously. Here&apos;s the full picture.
              </p>
            </div>
            <div className="hiw-tabs reveal" role="tablist">
              <button
                className={`hiw-tab${activeTab === "doctor" ? " active" : ""}`}
                role="tab"
                aria-selected={activeTab === "doctor"}
                onClick={() => setActiveTab("doctor")}
              >
                🩺 Doctor Journey
              </button>
              <button
                className={`hiw-tab${activeTab === "patient" ? " active" : ""}`}
                role="tab"
                aria-selected={activeTab === "patient"}
                onClick={() => setActiveTab("patient")}
              >
                👤 Patient Journey
              </button>
            </div>

            {/* Doctor steps */}
            <div className={`hiw-steps${activeTab === "doctor" ? " active" : ""}`} role="tabpanel">
              {[
                { num: "1", icon: "📲", title: "Download & Register", desc: "Sign up with your mobile number. OTP verified in seconds. No paperwork needed." },
                { num: "2", icon: "🏥", title: "Set Up Your Clinic", desc: "Add clinic name, address, timings, services, and consultation fee in 5 steps.", delay: ".1s" },
                { num: "3", icon: "🟢", title: "Go Live & Get Bookings", desc: "Once verified, patients find you by QR or phone number and start booking instantly.", delay: ".2s" },
                { num: "4", icon: "📊", title: "Manage & Grow", desc: "Track appointments, see revenue, manage your queue — all in one dashboard every day.", delay: ".3s" },
              ].map((s) => (
                <div key={s.num} className="hiw-step reveal" style={s.delay ? { transitionDelay: s.delay } : {}}>
                  <div className="hiw-step-num">{s.num}</div>
                  <div className="hiw-step-icon">{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Patient steps */}
            <div className={`hiw-steps${activeTab === "patient" ? " active" : ""}`} role="tabpanel">
              {[
                { num: "1", icon: "📥", title: "Download Patient App", desc: "Free on Android & iOS. Register with your mobile number in under a minute." },
                { num: "2", icon: "🔍", title: "Find Your Doctor", desc: "Scan the clinic QR code or enter the doctor's registered number to find their profile.", delay: ".1s" },
                { num: "3", icon: "🎫", title: "Book & Get Token", desc: "Choose your slot, fill details, and instantly get your real-time queue token number.", delay: ".2s" },
                { num: "4", icon: "🚶", title: "Arrive When It's Your Turn", desc: "Track the queue live. Arrive 5 minutes before your slot. Zero waiting, zero crowd.", delay: ".3s" },
              ].map((s) => (
                <div key={s.num} className="hiw-step reveal" style={s.delay ? { transitionDelay: s.delay } : {}}>
                  <div className="hiw-step-num">{s.num}</div>
                  <div className="hiw-step-icon">{s.icon}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ONBOARDING */}
        <section id="onboarding" aria-labelledby="onboarding-heading">
          <div className="lp-container">
            <div className="reveal">
              <div className="section-label">Doctor Onboarding</div>
              <h2 className="section-title" id="onboarding-heading">
                Your clinic is live in 5 simple steps
              </h2>
              <p className="section-subtitle">
                No IT team needed. No training. No complexity. If you can use WhatsApp, you can set up QueueToken.
              </p>
            </div>
            <div className="onboarding-grid">
              <div className="onb-steps-stack reveal">
                {[
                  { icon: "📲", title: "Register with Mobile OTP", desc: "Download the Doctor App, enter your phone number, and verify with OTP. Secure and instant — no paperwork at all.", time: "~1 min" },
                  { icon: "🏥", title: "Set Up Your Clinic Profile", desc: "Add your clinic name, address, qualifications, consultation fee, and clinic photos. Patients see this before booking.", time: "~3 min" },
                  { icon: "🗓️", title: "Set Services & Availability", desc: "Select your specialisations, set per-day clinic hours, and define your max patients per slot.", time: "~2 min" },
                  { icon: "💳", title: "Configure Payments", desc: "Choose Cash, UPI, or both. Enter your UPI ID or upload a QR code. Patients see how to pay before arriving.", time: "~1 min" },
                  { icon: "🚀", title: "Verify & Go Live!", desc: "Upload Aadhaar & PAN for verification. Once approved, patients across India can find and book you instantly.", time: "~3 min" },
                ].map((step, i) => (
                  <div
                    key={i}
                    className={`onb-card${activeOnbStep === i ? " active" : ""}`}
                    onClick={() => setActiveOnbStep(i)}
                  >
                    <div className="onb-num">{i + 1}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                        <span className="onb-icon">{step.icon}</span>
                        <h4 style={{ margin: 0 }}>{step.title}</h4>
                      </div>
                      <p>{step.desc}</p>
                      <div className="onb-card-footer">
                        <span className="onb-time-badge">⏱ {step.time}</span>
                        <span style={{ fontSize: ".72rem", color: "var(--text-3)" }}>Step {i + 1} of 5</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="onboarding-visual reveal"
                style={{ transitionDelay: ".15s", padding: 0, overflow: "hidden", background: "var(--bg-card2)" }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    paddingBottom: "56.25%",
                    background: "#0f0f0f",
                    borderRadius: "var(--r-xl) var(--r-xl) 0 0",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(145deg,#1a0a0a,#2a1010)",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{
                        width: 72,
                        height: 72,
                        background: "var(--red)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 0 40px rgba(211,48,48,0.45)",
                        marginBottom: 18,
                      }}
                    >
                      <svg viewBox="0 0 24 24" width={28} height={28} fill="white" style={{ marginLeft: 4 }}>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-d)",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#F1EDE8",
                        marginBottom: 6,
                      }}
                    >
                      How to Register Your Clinic
                    </div>
                    <div style={{ fontSize: ".8rem", color: "rgba(241,237,232,0.5)" }}>2 min walkthrough</div>
                  </div>
                </div>
                <div style={{ padding: "24px 28px 28px" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-d)",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--text-1)",
                      marginBottom: 6,
                    }}
                  >
                    Register in under 10 minutes
                  </div>
                  <p style={{ fontSize: ".83rem", color: "var(--text-2)", marginBottom: 18, lineHeight: 1.65 }}>
                    Watch this short walkthrough to see exactly how to set up your clinic — from download to your first booking.
                  </p>
                  <a
                    href="#download"
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Register Your Clinic Now →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <div className="lp-container">
            <div className="testi-header reveal">
              <div className="section-label">Testimonials</div>
              <h2 className="section-title" id="testimonials-heading">
                Doctors and patients love QueueToken
              </h2>
              <p className="section-subtitle">
                Real results from real clinics. See what happens when queues become smart.
              </p>
            </div>
            <div className="testi-grid reveal">
              <article className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">
                  My waiting room crowd dropped by 80% in the very first week. I can now see exactly
                  who&apos;s coming and when. The revenue dashboard is a game-changer for me.
                </p>
                <div className="testi-author">
                  <div className="testi-avatar" style={{ background: "rgba(211,48,48,0.1)", color: "var(--red)" }}>RS</div>
                  <div>
                    <div className="testi-name">Dr. Ramesh Shah</div>
                    <div className="testi-role">General Physician · Surat, Gujarat</div>
                  </div>
                  <span className="testi-type-badge" style={{ background: "rgba(211,48,48,0.08)", color: "var(--red)", border: "1px solid rgba(211,48,48,0.16)" }}>
                    Doctor
                  </span>
                </div>
              </article>
              <article className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">
                  I used to sit in the clinic for 2 hours every Tuesday. Now I get a token, go home, and
                  come back just when it&apos;s my turn. This app has literally saved my mornings.
                </p>
                <div className="testi-author">
                  <div className="testi-avatar" style={{ background: "rgba(59,130,246,0.1)", color: "#2563EB" }}>PM</div>
                  <div>
                    <div className="testi-name">Priya Mehta</div>
                    <div className="testi-role">Patient · Ahmedabad, Gujarat</div>
                  </div>
                  <span className="testi-type-badge" style={{ background: "rgba(59,130,246,0.08)", color: "#2563EB", border: "1px solid rgba(59,130,246,0.16)" }}>
                    Patient
                  </span>
                </div>
              </article>
              <article className="testi-card">
                <div className="testi-stars">★★★★★</div>
                <p className="testi-quote">
                  Setting up took less than 10 minutes. The app is very simple to use and my staff needed
                  zero training. I recommend it to every doctor in my network.
                </p>
                <div className="testi-author">
                  <div className="testi-avatar" style={{ background: "rgba(211,48,48,0.1)", color: "var(--red)" }}>AP</div>
                  <div>
                    <div className="testi-name">Dr. Anita Patel</div>
                    <div className="testi-role">Dermatologist · Vadodara, Gujarat</div>
                  </div>
                  <span className="testi-type-badge" style={{ background: "rgba(211,48,48,0.08)", color: "var(--red)", border: "1px solid rgba(211,48,48,0.16)" }}>
                    Doctor
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section id="why-us" aria-labelledby="why-heading">
          <div className="lp-container">
            <div className="why-grid">
              <div className="reveal">
                <div className="section-label">Why QueueToken</div>
                <h2 className="section-title" id="why-heading">
                  A completely different category — not just better than paper tokens
                </h2>
                <p className="section-subtitle" style={{ marginBottom: 20 }}>
                  Other &ldquo;solutions&rdquo; are paper tokens, WhatsApp groups, or generic software not built
                  for clinics. QueueToken is purpose-built for the way Indian doctors and patients actually work.
                </p>
                <div className="why-stats-grid">
                  <div className="why-stat"><div className="why-stat-num">90%</div><div className="why-stat-label">Less waiting room crowding</div></div>
                  <div className="why-stat"><div className="why-stat-num">3×</div><div className="why-stat-label">Faster patient flow</div></div>
                  <div className="why-stat"><div className="why-stat-num">₹1</div><div className="why-stat-label">To get started today</div></div>
                  <div className="why-stat"><div className="why-stat-num">100%</div><div className="why-stat-label">Revenue visibility daily</div></div>
                </div>
              </div>
              <div className="reveal" style={{ transitionDelay: ".15s" }}>
                <div className="comparison-table" role="table" aria-label="Comparison">
                  <div className="comp-header" role="row">
                    <div className="comp-header-cell" role="columnheader">Feature</div>
                    <div className="comp-header-cell old" role="columnheader">Manual / WhatsApp</div>
                    <div className="comp-header-cell new" role="columnheader">QueueToken</div>
                  </div>
                  {[
                    "Real-time token tracking",
                    "Revenue dashboard",
                    "Patient self-booking",
                    "Verified doctor profile",
                    "Estimated wait time",
                    "UPI & Cash payments",
                    "Free for patients",
                  ].map((f) => (
                    <div key={f} className="comp-row" role="row">
                      <div className="comp-cell" role="cell">{f}</div>
                      <div className="comp-cell old" role="cell">✗</div>
                      <div className="comp-cell new" role="cell">✓</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" aria-labelledby="pricing-heading">
          <div className="lp-container">
            <div className="pricing-header reveal">
              <div className="section-label">Pricing</div>
              <h2 className="section-title" id="pricing-heading">
                Simple, honest pricing for every clinic
              </h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>
                Start with ₹1 per token and upgrade when you&apos;re ready. No hidden fees, no contracts, no surprises.
              </p>
            </div>
            <div className="pricing-grid reveal">
              <div className="pricing-card">
                <div className="pricing-plan-name">Pay Per Token</div>
                <div className="pricing-price">
                  <span className="pricing-currency">₹</span>
                  <span className="pricing-amount">1</span>
                  <span className="pricing-period">/ token</span>
                </div>
                <p className="pricing-desc">
                  Pay only for what you use. Perfect for starting out or low-volume clinics. Top up your wallet anytime.
                </p>
                <ul className="pricing-features">
                  {["₹1 deducted per appointment token", "No monthly commitment", "Full Doctor App access", "Revenue dashboard included", "Top up wallet anytime", "Standard support"].map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#download" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                  Get Started Free
                </a>
              </div>
              <div className="pricing-card featured">
                <div className="pricing-popular">Most Popular</div>
                <div className="pricing-plan-name">Monthly Unlimited</div>
                <div className="pricing-price">
                  <span className="pricing-currency">₹</span>
                  <span className="pricing-amount">5,000</span>
                  <span className="pricing-period">/ month</span>
                </div>
                <p className="pricing-desc">
                  Unlimited tokens for 30 days. Best for busy clinics seeing 20+ patients daily. Predictable cost, unlimited growth.
                </p>
                <ul className="pricing-features">
                  {["Unlimited appointment tokens for 30 days", "Priority 24×7 support", "Advanced revenue reports", "Team / staff access management", "Early access to new features", "Dedicated onboarding assistance"].map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#download" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Register Your Clinic
                </a>
              </div>
            </div>
            <p className="pricing-note reveal">
              Patient App is and will always be{" "}
              <strong style={{ color: "var(--text-1)" }}>completely free</strong>. No charges for patients, ever.
            </p>
          </div>
        </section>

        {/* DOWNLOAD */}
        <section id="download" aria-labelledby="download-heading">
          <div className="lp-container">
            <div className="download-inner reveal">
              <div className="section-label" style={{ justifyContent: "center" }}>Download Now</div>
              <h2 style={{ marginBottom: 16 }} id="download-heading">
                Join 200+ clinics already running smarter
              </h2>
              <p className="download-subtitle">Available on Android. Free to download. Start today.</p>
              <div className="download-apps">
                <div className="dl-card doctor">
                  <div className="dl-card-header">
                    <div className="dl-app-logo">
                      <Image src="/queuetoken-logo.png" alt="QueueToken Doctor App" width={56} height={56} style={{ objectFit: "contain" }} />
                    </div>
                    <div className="dl-app-meta">
                      <div className="dl-app-type">For Doctors &amp; Clinics</div>
                      <div className="dl-app-name">Queue Token Doctor</div>
                      <div className="dl-app-tagline">Manage your clinic smarter</div>
                    </div>
                  </div>
                  <div className="dl-tags">
                    {["Queue Management", "Revenue Dashboard", "Patient Bookings", "UPI Payments"].map((t) => (
                      <span key={t} className="dl-tag">{t}</span>
                    ))}
                  </div>
                  <div className="dl-store-btns">
                    <a href="#" className="dl-store-badge" aria-label="Download Doctor App on Google Play">
                      <div className="dl-store-badge-icon">{GOOGLE_PLAY_SVG}</div>
                      <div className="dl-store-badge-text">
                        <div className="dl-store-badge-label">Get it on</div>
                        <div className="dl-store-badge-name">Google Play</div>
                      </div>
                      <div className="dl-store-badge-rating">
                        <div className="dl-store-badge-stars">★★★★★</div>
                        <div className="dl-store-badge-dl">10K+ downloads</div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="dl-card patient">
                  <div className="dl-card-header">
                    <div className="dl-app-logo">
                      <Image src="/queuetoken-logo.png" alt="QueueToken Patient App" width={56} height={56} style={{ objectFit: "contain" }} />
                    </div>
                    <div className="dl-app-meta">
                      <div className="dl-app-type">For Patients — Always Free</div>
                      <div className="dl-app-name">Queue Token</div>
                      <div className="dl-app-tagline">Book in under 60 seconds</div>
                    </div>
                  </div>
                  <div className="dl-tags">
                    {["Real-Time Token", "QR Booking", "Live Queue Track", "Always Free"].map((t) => (
                      <span key={t} className="dl-tag">{t}</span>
                    ))}
                  </div>
                  <div className="dl-store-btns">
                    <a href="#" className="dl-store-badge" aria-label="Download Patient App on Google Play">
                      <div className="dl-store-badge-icon">{GOOGLE_PLAY_SVG}</div>
                      <div className="dl-store-badge-text">
                        <div className="dl-store-badge-label">Get it on</div>
                        <div className="dl-store-badge-name">Google Play</div>
                      </div>
                      <div className="dl-store-badge-rating">
                        <div className="dl-store-badge-stars">★★★★★</div>
                        <div className="dl-store-badge-dl">Free download</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" aria-labelledby="contact-heading">
          <div className="lp-container">
            <div className="contact-grid">
              <div className="contact-info reveal">
                <div className="section-label">Contact Us</div>
                <h2 id="contact-heading">Want a personal demo for your clinic?</h2>
                <p style={{ marginBottom: 32 }}>
                  Our team will personally walk you through QueueToken and set up your clinic profile
                  together. We respond within 2 hours.
                </p>
                <div className="contact-channels">
                  <a
                    href="https://wa.me/919509647637"
                    className="contact-channel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="channel-icon" style={{ background: "rgba(37,211,102,0.1)" }}>💬</div>
                    <div>
                      <div className="channel-label">WhatsApp (Fastest)</div>
                      <div className="channel-value">+91 9509647637</div>
                    </div>
                  </a>
                  <a href="mailto:queuetoken@gmail.com" className="contact-channel">
                    <div className="channel-icon" style={{ background: "rgba(211,48,48,0.09)" }}>✉️</div>
                    <div>
                      <div className="channel-label">Email</div>
                      <div className="channel-value">queuetoken@gmail.com</div>
                    </div>
                  </a>
                  <div className="contact-channel" style={{ cursor: "default" }}>
                    <div className="channel-icon" style={{ background: "rgba(59,130,246,0.09)" }}>🕐</div>
                    <div>
                      <div className="channel-label">Support Hours</div>
                      <div className="channel-value">9 AM – 9 PM · Mon to Sat</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="reveal" style={{ transitionDelay: ".15s" }}>
                <div className="contact-form">
                  <h3>Request a Free Demo</h3>
                  <p>We&apos;ll call you back within 2 hours and set up your clinic together.</p>
                  <div className="respond-badge">
                    <span className="respond-dot" />
                    We typically respond in under 2 hours
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="fname">Your Name</label>
                      <input
                        className="form-input"
                        id="fname"
                        type="text"
                        placeholder="Dr. Your Name"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="fclinic">Clinic Name</label>
                      <input
                        className="form-input"
                        id="fclinic"
                        type="text"
                        placeholder="Your Clinic Name"
                        value={form.clinic}
                        onChange={(e) => setForm({ ...form, clinic: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fphone">Phone Number</label>
                    <input
                      className="form-input"
                      id="fphone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fcity">City</label>
                    <input
                      className="form-input"
                      id="fcity"
                      type="text"
                      placeholder="Your City"
                      autoComplete="address-level2"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="fmessage">
                      Anything to tell us? (Optional)
                    </label>
                    <textarea
                      className="form-textarea"
                      id="fmessage"
                      placeholder="How many patients do you see daily? Any specific questions?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                    onClick={submitDemo}
                    type="button"
                  >
                    Request My Free Demo →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="lp-footer" role="contentinfo">
        <div className="lp-container">
          <div className="footer-grid">
            <div>
              <a href="#" className="nav-logo" style={{ display: "inline-flex", marginBottom: 0 }}>
                <div className="nav-logo-icon">
                  <Image src="/queuetoken-logo.png" alt="QueueToken logo" width={36} height={36} />
                </div>
                Queue<span>Token</span>
              </a>
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
                <li><a href="#doctor-features">Doctor App</a></li>
                <li><a href="#patient-features">Patient App</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#how-it-works">How It Works</a></li>
                <li><a href="#onboarding">Onboarding</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#contact">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#contact">Request Demo</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
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
    </div>
  );
}
