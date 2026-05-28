import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | QueueToken Patient",
  description:
    "Privacy Policy for QueueToken Patient App — Smart Doctor Appointment & Queue Token Management System",
};

export default function PatientPrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <Image
            src="https://res.cloudinary.com/dbazlbkfj/image/upload/v1779962175/WhatsApp_Image_2026-05-28_at_3.12.36_PM_wa8gw9.jpg"
            alt="QueueToken logo"
            width={48}
            height={48}
            priority
          />
          <span className="font-semibold text-gray-900 text-lg tracking-tight">
            QueueToken
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-1 text-gray-500 text-sm">
            Smart Doctor Appointment &amp; Queue Token Management System
          </p>
          <p className="mt-2 text-blue-600 font-bold text-sm">
            For: Patient Users
          </p>
          <dl className="mt-3 space-y-0.5 text-sm text-gray-500">
            <div>
              <dt className="inline font-medium text-gray-700">Effective Date: </dt>
              <dd className="inline">27 May 2026</dd>
            </div>
            <div>
              <dt className="inline font-medium text-gray-700">Operated by: </dt>
              <dd className="inline">Codetown Technologies &amp; Bliss Technologies</dd>
            </div>
            <div>
              <dt className="inline font-medium text-gray-700">Website: </dt>
              <dd className="inline">
                <a
                  href="https://queuetoken.in"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.queuetoken.in
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* IMPORTANT NOTICE callout */}
        <div className="mb-8 border-l-4 border-blue-500 bg-blue-50 px-5 py-4 rounded-r-lg">
          <p className="text-sm text-blue-900 leading-relaxed">
            <strong>IMPORTANT:</strong> By downloading, installing, registering on, or using the
            QueueToken Patient App, you as a Patient User expressly acknowledge that you have read,
            understood, and consent to this Privacy Policy. If you do not agree, please do not use
            the application. Continued use constitutes binding consent.
          </p>
        </div>

        {/* Policy body */}
        <div className="prose prose-slate max-w-none">

          {/* Section 1 */}
          <h2 id="about-us">1. About Us and Scope</h2>
          <p>
            QueueToken Patient App is operated by Codetown Technologies &amp; Bliss Technologies
            (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). The
            Patient App is a free mobile application that allows patients to find registered
            clinics, book appointments, receive real-time queue tokens, and track estimated visit
            times. This Privacy Policy explains how we collect, use, store, and protect your
            personal data when you use the Patient App.
          </p>
          <p>
            This Policy complies with the IT Act, 2000; SPDI Rules, 2011; the DPDP Act, 2023; and
            the DPDP Rules, 2025.
          </p>

          {/* Section 2 */}
          <h2 id="data-we-collect">2. Personal Data We Collect</h2>

          <h3 id="registration-data">2.1 Registration Data</h3>
          <ul>
            <li>Full name</li>
            <li>
              Mobile number (used for OTP-based authentication &mdash; primary identifier)
            </li>
            <li>Email address (optional)</li>
            <li>Full address, city, state, and country</li>
          </ul>

          <h3 id="appointment-health-data">2.2 Appointment and Health Data</h3>
          <ul>
            <li>
              Appointment booking details: chosen doctor, clinic, date, and time slot
            </li>
            <li>Appointment type: new consultation or free follow-up</li>
            <li>
              Medical symptoms and problem description voluntarily submitted by you during
              booking
            </li>
            <li>Appointment history (past and upcoming)</li>
            <li>Token number and estimated appointment time per booking</li>
            <li>Cancellation and rescheduling history</li>
          </ul>

          <h3 id="payment-transaction-data">2.3 Payment and Transaction Data</h3>
          <ul>
            <li>
              Payment method preference selected (cash or online, as configured by the Doctor
              User)
            </li>
            <li>
              Consultation fee amount (set by the Doctor User, displayed to you for information
              only)
            </li>
          </ul>
          <p>
            <strong>Note:</strong> The Company does not collect, process, hold, or store any
            payment card data, UPI credentials, or bank details from Patient Users. Payments are
            made directly between you and the Doctor User.
          </p>

          <h3 id="location-data">2.4 Location Data</h3>
          <ul>
            <li>Approximate location derived from your IP address</li>
            <li>
              Precise GPS location &mdash; only if you grant permission &mdash; used solely to
              display clinic directions via map integration
            </li>
          </ul>
          <p>You can revoke location permission at any time through your device settings.</p>

          <h3 id="technical-device-data">2.5 Technical and Device Data</h3>
          <ul>
            <li>Device type, operating system, and device identifier</li>
            <li>App version, usage logs, and crash reports</li>
            <li>IP address and session timestamps</li>
          </ul>

          <div className="not-prose my-6 border-l-4 border-amber-500 bg-amber-50 px-5 py-4 rounded-r-lg">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>SENSITIVE HEALTH DATA:</strong> The medical symptoms or problem description
              you submit during appointment booking is sensitive personal data under applicable
              Indian law. We treat this information with the highest protection. It is shared only
              with the specific Doctor User with whom you book an appointment. We do not use it for
              marketing, research, insurance, or any commercial purpose under any circumstances.
            </p>
          </div>

          {/* Section 3 */}
          <h2 id="legal-basis">3. Legal Basis for Processing</h2>
          <ul>
            <li>
              <strong>Consent:</strong> By registering and using the Patient App, you provide
              express, informed consent to the processing described herein.
            </li>
            <li>
              <strong>Contractual Necessity:</strong> Processing is necessary to provide
              appointment booking, queue token assignment, and location services.
            </li>
            <li>
              <strong>Legal Obligation:</strong> Compliance with IT Act, DPDP Act, and applicable
              law.
            </li>
            <li>
              <strong>Legitimate Interests:</strong> Platform security, fraud prevention, and
              service improvement using only anonymised data.
            </li>
          </ul>

          {/* Section 4 */}
          <h2 id="how-we-use">4. How We Use Your Data</h2>
          <ul>
            <li>To create and maintain your Patient User account</li>
            <li>
              To enable you to find and book appointments with registered Doctor Users
            </li>
            <li>
              To assign your real-time queue token number and communicate estimated appointment
              time
            </li>
            <li>
              To share your name, phone number, appointment details, and health description with
              the specific Doctor User you book with &mdash; for the sole purpose of that
              consultation
            </li>
            <li>
              To send push notifications about booking confirmations, token updates, reminders,
              and cancellations
            </li>
            <li>To display your clinic&apos;s location and enable navigation</li>
            <li>To maintain your appointment history</li>
            <li>To provide customer support</li>
            <li>To detect and prevent fraud and abuse</li>
            <li>To comply with legal obligations</li>
            <li>
              To improve the Patient App using only anonymised, aggregated data
            </li>
          </ul>
          <p>
            <strong>YOUR HEALTH DATA IS NOT FOR SALE.</strong> We will never sell, rent, or share
            your medical information with insurance companies, pharmaceutical companies,
            advertisers, data brokers, or any third party for commercial purposes.
          </p>

          {/* Section 5 */}
          <h2 id="sharing">5. Sharing Your Data</h2>

          <h3 id="sharing-doctor-user">5.1 With the Doctor User You Book With</h3>
          <p>
            When you book an appointment, your name, mobile number, appointment details, and
            voluntarily submitted health description are shared with the specific Doctor User you
            are booking with. This sharing is limited to the consultation context only. The Doctor
            User receives this data as an independent data controller and is bound by medical
            ethics and patient confidentiality obligations under Indian law.
          </p>
          <p>
            We do <strong>NOT</strong> share your health data with any other Doctor User, clinic,
            hospital, or healthcare provider.
          </p>

          <h3 id="sharing-service-providers">5.2 With Service Providers</h3>
          <p>
            We use cloud hosting, OTP gateway, notification, and map integration service providers
            who process data strictly on our instructions and under confidentiality obligations.
          </p>

          <h3 id="sharing-legal">5.3 Legal Disclosures</h3>
          <p>
            We may disclose your data to law enforcement or courts when required by applicable
            Indian law, including the IT Act.
          </p>

          {/* Section 6 */}
          <h2 id="data-retention">6. Data Retention</h2>
          <ul>
            <li>
              <strong>Account and profile data:</strong> Retained during your active account and
              for 2 years after the last appointment or account deletion, whichever is later.
            </li>
            <li>
              <strong>Appointment history and health descriptions:</strong> Retained for 2 years
              from the date of the appointment to support follow-up care tracking.
            </li>
            <li>
              <strong>Technical logs:</strong> Retained for 90 days.
            </li>
          </ul>
          <p>
            You may request deletion of your account at any time. Deletion is subject to minimum
            legal retention periods. After deletion, your data will not be accessible within the
            app, though it may be retained in encrypted backup storage for up to 90 days before
            permanent deletion.
          </p>

          {/* Section 7 */}
          <h2 id="security">7. Security</h2>
          <ul>
            <li>TLS/SSL encryption for all data in transit</li>
            <li>Encryption of sensitive health data at rest</li>
            <li>OTP two-factor authentication</li>
            <li>
              Access controls &mdash; health data accessible only to authorised personnel and the
              specific booking Doctor User
            </li>
            <li>
              Breach notification within 72 hours of discovery, in accordance with the DPDP Act
            </li>
          </ul>
          <p>
            You are responsible for keeping your device and login credentials secure. Do not share
            your OTP with anyone. The Company will never call or message you asking for your OTP.
          </p>

          {/* Section 8 */}
          <h2 id="app-permissions">8. App Permissions</h2>
          <ul>
            <li>
              <strong>Camera:</strong> Required to scan the clinic&apos;s QR code for booking
              (you control when to use this)
            </li>
            <li>
              <strong>Location:</strong> Optional &mdash; used only to display map directions to
              the clinic if you choose
            </li>
            <li>
              <strong>Notifications:</strong> Required to receive appointment confirmations, token
              updates, and reminders
            </li>
          </ul>
          <p>You may revoke any permission through your device settings at any time.</p>

          {/* Section 9 */}
          <h2 id="childrens-privacy">9. Children&apos;s Privacy</h2>
          <p>
            The Patient App is not directed at children under 18 without verifiable
            parental/guardian consent. A parent or guardian may create an account and book on
            behalf of a minor patient. If you believe a minor has registered without consent,
            contact us at{" "}
            <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a> and we will delete
            such data promptly.
          </p>

          {/* Section 10 */}
          <h2 id="your-rights">10. Your Rights</h2>
          <ul>
            <li>
              <strong>Access:</strong> Request a copy of your personal data we hold
            </li>
            <li>
              <strong>Correction:</strong> Request correction of inaccurate data
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion of your account and data, subject to
              retention requirements
            </li>
            <li>
              <strong>Withdrawal of Consent:</strong> Withdraw consent at any time (affects
              Service availability)
            </li>
            <li>
              <strong>Grievance Redressal:</strong> Complaints addressed within 30 days
            </li>
            <li>
              <strong>Nomination:</strong> Nominate another to exercise your rights under the
              DPDP Act
            </li>
          </ul>
          <p>
            Exercise any right by contacting:{" "}
            <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a>
          </p>

          {/* Section 11 */}
          <h2 id="policy-changes">11. Changes to This Policy</h2>
          <p>
            Material changes will be notified via in-app notification at least 15 days before
            taking effect. Continued use after the effective date constitutes acceptance.
          </p>

          {/* Section 12 */}
          <h2 id="grievance-officer">12. Grievance Officer</h2>
          <ul>
            <li>
              <strong>Company:</strong> Codetown Technologies &amp; Bliss Technologies
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919509647637">+91 95096 47637</a>
            </li>
            <li>
              <strong>Response Time:</strong> Acknowledgement within 24 hours; resolution within
              30 days
            </li>
            <li>
              <strong>Jurisdiction:</strong> Udaipur, Rajasthan India
            </li>
          </ul>

          {/* Section 13 */}
          <h2 id="governing-law">13. Governing Law</h2>
          <p>
            This Policy is governed by the laws of India. Disputes subject to courts at Udaipur,
            Rajasthan.
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
}
