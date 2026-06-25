import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Queue Token",
  description:
    "Privacy Policy for Queue Token — Smart Doctor Appointment & Queue Token Management System",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F6]">
      <Header />

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          <p className="mt-1 text-gray-500 text-sm">
            Smart Doctor Appointment &amp; Queue Token Management System
          </p>
          <p className="mt-2 text-red-600 font-bold text-sm">
            For: Doctor Users &amp; Clinic Operators
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
                  className="text-[#E8192C] hover:underline"
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
        <div className="mb-8 border-l-4 border-red-500 bg-red-50 px-5 py-4 rounded-r-lg">
          <p className="text-sm text-red-900 leading-relaxed">
            <strong>IMPORTANT NOTICE:</strong> By downloading, installing, registering on, or using
            the QueueToken Doctor App, you as a Doctor User / Clinic Operator expressly acknowledge
            that you have read, understood, and consent to this Privacy Policy. If you do not agree,
            you must immediately cease using the application and delete it from your device.
            Continued use constitutes binding consent.
          </p>
        </div>

        {/* Policy body */}
        <div className="prose prose-slate max-w-none">

          {/* Section 1 */}
          <h2 id="about-us">1. About Us and Scope</h2>
          <p>
            QueueToken Doctor App is operated by Codetown Technologies &amp; Bliss Technologies, a
            technology company incorporated under the laws of India (&ldquo;Company&rdquo;,
            &ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). The Doctor App is a software
            platform that enables registered medical practitioners and clinic operators to manage
            appointments, patient queues, payment methods, and clinic data. This Privacy Policy
            governs all personal data and clinic data you provide to us when using the Doctor App.
          </p>
          <p>
            This Policy is compliant with the Information Technology Act, 2000 (&ldquo;IT
            Act&rdquo;), the Information Technology (Reasonable Security Practices and Procedures
            and Sensitive Personal Data or Information) Rules, 2011 (&ldquo;SPDI Rules&rdquo;), and
            is aligned with the Digital Personal Data Protection Act, 2023 (&ldquo;DPDP
            Act&rdquo;) and the DPDP Rules, 2025, as they come into force.
          </p>

          {/* Section 2 */}
          <h2 id="data-we-collect">2. Personal and Professional Data We Collect</h2>
          <p>
            When you register and use the Doctor App, we collect the following categories of data:
          </p>

          <h3 id="registration-identity-data">2.1 Registration and Identity Data</h3>
          <ul>
            <li>Full legal name, gender, and professional designation</li>
            <li>
              Mobile number (used for OTP-based authentication &mdash; primary identifier)
            </li>
            <li>Email address</li>
            <li>
              Government-issued identity documents: Aadhaar Card (front and back) and PAN Card
              &mdash; submitted for verification purposes
            </li>
            <li>Professional photograph (if provided)</li>
          </ul>

          <h3 id="professional-credentials">2.2 Professional and Clinical Credentials</h3>
          <ul>
            <li>Medical qualifications (e.g., MBBS, BDS, MD, AYUSH)</li>
            <li>Years of clinical experience</li>
            <li>Medical registration number and State Medical Council details</li>
            <li>Medical specialisations and services offered</li>
            <li>Professional accolades, awards, and achievements (optional)</li>
          </ul>

          <h3 id="clinic-business-data">2.3 Clinic and Business Data</h3>
          <ul>
            <li>Clinic name, full address, city, state, PIN code</li>
            <li>Google Business Profile URL</li>
            <li>Consultation fee amount and free follow-up period</li>
            <li>Weekly clinic operating hours and slot configuration</li>
            <li>Maximum patients per slot setting</li>
            <li>Clinic facility photographs (up to 5 images)</li>
            <li>Clinic bio / &ldquo;About Me&rdquo; description</li>
            <li>UPI ID and/or digital payment QR code image</li>
          </ul>

          <h3 id="subscription-transaction-data">2.4 Subscription and Transaction Data</h3>
          <ul>
            <li>Subscription plan selected (Monthly Unlimited or Pay Per Token)</li>
            <li>Wallet balance and top-up transaction records</li>
            <li>Payment receipts and invoice data</li>
            <li>Subscription start date, end date, and renewal history</li>
          </ul>

          <h3 id="appointment-queue-data">2.5 Appointment and Patient Queue Data</h3>
          <ul>
            <li>
              Daily appointment records (patient names, time slots, token numbers, appointment type)
            </li>
            <li>Payment status per appointment (paid, pending, free follow-up)</li>
            <li>Appointment completion, cancellation, and no-show records</li>
            <li>Revenue reports generated through the platform</li>
            <li>
              Patient-submitted medical problem descriptions that you receive through the booking
              system
            </li>
          </ul>

          <h3 id="technical-device-data">2.6 Technical and Device Data</h3>
          <ul>
            <li>Device type, operating system, and device identifier</li>
            <li>IP address and approximate geographic location</li>
            <li>App usage patterns, feature interaction logs, and crash reports</li>
            <li>Login timestamps and session duration</li>
          </ul>

          <div className="not-prose my-6 border-l-4 border-amber-500 bg-amber-50 px-5 py-4 rounded-r-lg">
            <p className="text-sm text-amber-900 leading-relaxed">
              <strong>SENSITIVE DATA NOTICE:</strong> Aadhaar and PAN documents are classified as
              Sensitive Personal Data under applicable Indian law. Patient health information
              received via the appointment system is treated with the highest protection. We collect
              this data solely for the purposes specified herein and do not use it for any other
              purpose without fresh consent.
            </p>
          </div>

          {/* Section 3 */}
          <h2 id="legal-basis">3. Legal Basis for Processing</h2>
          <p>We process your data on the following legal grounds:</p>
          <ul>
            <li>
              <strong>Consent:</strong> By registering and continuing to use the Doctor App, you
              provide free, specific, informed, and unambiguous consent under Rule 5 of the SPDI
              Rules and Section 6 of the DPDP Act.
            </li>
            <li>
              <strong>Contractual Necessity:</strong> Processing is necessary to deliver the
              appointment management, queue token, payment facilitation, and reporting services as
              agreed in the Doctor User Terms and Conditions.
            </li>
            <li>
              <strong>Legal Obligation:</strong> Processing required to comply with the IT Act, tax
              laws (GST records), and verification requirements under applicable Indian law.
            </li>
            <li>
              <strong>Legitimate Interests:</strong> Security monitoring, fraud prevention, platform
              improvement, and abuse detection.
            </li>
          </ul>
          <p>
            You may withdraw consent at any time by contacting us. Withdrawal will not affect
            lawfulness of processing prior to withdrawal but will result in account suspension as we
            cannot provide Services without necessary data.
          </p>

          {/* Section 4 */}
          <h2 id="purposes">4. Purposes for Which We Use Your Data</h2>
          <p>
            We use your data strictly for the following purposes and no others without fresh consent:
          </p>
          <ul>
            <li>To create, verify, and maintain your Doctor User account</li>
            <li>To verify your identity and medical credentials through document review</li>
            <li>
              To display your clinic profile to patients who scan your QR code or enter your
              registered phone number
            </li>
            <li>
              To manage appointment scheduling, queue token assignment, and patient flow for your
              clinic
            </li>
            <li>
              To facilitate payment setup (UPI, QR, cash) and process subscription charges
            </li>
            <li>
              To generate revenue reports and appointment analytics for your personal use
            </li>
            <li>
              To send push notifications regarding new appointments, cancellations, and subscription
              renewals
            </li>
            <li>To provide customer support and resolve technical issues</li>
            <li>To detect and prevent fraud, abuse, misuse, or unauthorised access</li>
            <li>
              To comply with legal obligations including tax, identity verification, and regulatory
              reporting
            </li>
            <li>
              To improve and develop our platform features using anonymised, aggregated data only
            </li>
          </ul>
          <p>
            We will <strong>NOT</strong> use patient health information received via the appointment
            system for marketing, profiling, or any commercial purpose.
          </p>

          {/* Section 5 */}
          <h2 id="sharing">5. Sharing and Disclosure of Your Data</h2>

          <h3 id="sharing-patient-users">5.1 With Patient Users</h3>
          <p>
            When a patient books an appointment with you, your name, clinic name, address, available
            slots, consultation fee, operating hours, services, and clinic photos are displayed to
            that patient through the Patient App. By using the Doctor App, you consent to this
            specific, limited disclosure to patients who seek to book with you.
          </p>

          <h3 id="sharing-third-party">5.2 With Third-Party Service Providers</h3>
          <p>
            We engage processors including cloud hosting, OTP gateway, notification, and payment
            service providers. All are contractually bound to process data only on our instructions,
            maintain confidentiality, and implement security measures.
          </p>

          <h3 id="sharing-verification">5.3 Verification Authority</h3>
          <p>
            Identity documents (Aadhaar, PAN) are processed for verification purposes only. We do
            not retain them beyond the legally required period and do not share them with third
            parties except for verification services.
          </p>

          <h3 id="sharing-legal">5.4 Legal Disclosures</h3>
          <p>
            We may disclose your data to law enforcement, courts, or regulators when legally
            required under Sections 69, 69A, and 69B of the IT Act, court orders, or other
            applicable law. We will notify you if permitted by law.
          </p>

          <h3 id="sharing-business-transfers">5.5 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, or asset sale, your data may transfer to the
            successor entity, subject to the same protections.
          </p>
          <p>
            We will <strong>NEVER</strong> sell, rent, or monetise your professional data, identity
            documents, or any patient data received through the platform to any advertiser, data
            broker, third party, or commercial entity.
          </p>

          {/* Section 6 */}
          <h2 id="patient-data-responsibilities">
            6. Your Responsibilities Regarding Patient Data
          </h2>
          <p>
            As a Doctor User, you receive personal and health data from patients through the booking
            system. You are independently responsible under applicable law for:
          </p>
          <ul>
            <li>
              Maintaining strict confidentiality of all patient information received through the
              platform
            </li>
            <li>
              Complying with the Indian Medical Council (Professional Conduct, Etiquette and Ethics)
              Regulations, 2002 regarding patient privacy
            </li>
            <li>
              Not storing, sharing, or using patient data for any purpose beyond the booked
              consultation
            </li>
            <li>Securing any patient data accessible on your device</li>
            <li>
              Promptly notifying us if you become aware of any breach involving patient data
              received through the platform
            </li>
          </ul>
          <p>
            The Company is not responsible for your handling of patient data beyond the platform.
            You are the independent data controller for patient data you receive and are solely
            liable for any breach of patient confidentiality on your part.
          </p>

          {/* Section 7 */}
          <h2 id="data-retention">7. Data Retention</h2>
          <ul>
            <li>
              <strong>Account and profile data:</strong> Retained for the duration of active
              subscription plus 3 years after account closure, or as required by law.
            </li>
            <li>
              <strong>Identity verification documents (Aadhaar, PAN):</strong> Retained for the
              period required by applicable Indian law, then securely deleted.
            </li>
            <li>
              <strong>Appointment and revenue records:</strong> Retained for 7 years to comply with
              financial, GST, and tax regulations.
            </li>
            <li>
              <strong>Subscription and payment records:</strong> Retained for 7 years.
            </li>
            <li>
              <strong>Technical logs:</strong> Retained for 90 days.
            </li>
          </ul>
          <p>
            Account deletion requests will be processed subject to mandatory legal retention
            periods.
          </p>

          {/* Section 8 */}
          <h2 id="security-measures">8. Security Measures</h2>
          <p>
            We implement reasonable security practices under Section 43A of the IT Act and the SPDI
            Rules, including:
          </p>
          <ul>
            <li>TLS/SSL encryption for all data in transit</li>
            <li>Encryption of sensitive data at rest</li>
            <li>OTP-based two-factor authentication</li>
            <li>
              Role-based access controls &mdash; data accessible only to authorised personnel on
              need-to-know basis
            </li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Breach response protocol with 72-hour notification under the DPDP Act</li>
          </ul>
          <p>
            No electronic system is 100% secure. You are responsible for maintaining the
            confidentiality of your login credentials. Do not share your OTP, password, or device
            access with any third party.
          </p>

          {/* Section 9 */}
          <h2 id="your-rights">9. Your Data Rights</h2>
          <p>Under the DPDP Act, 2023 and the SPDI Rules, you have the right to:</p>
          <ul>
            <li>
              <strong>Access:</strong> Request a summary of personal data we hold about you
            </li>
            <li>
              <strong>Correction:</strong> Request rectification of inaccurate or incomplete data
            </li>
            <li>
              <strong>Erasure:</strong> Request deletion of your data, subject to mandatory
              retention periods
            </li>
            <li>
              <strong>Withdrawal of Consent:</strong> Withdraw consent at any time (note: will
              affect Service availability)
            </li>
            <li>
              <strong>Grievance Redressal:</strong> Have complaints addressed by our Grievance
              Officer within 30 days
            </li>
            <li>
              <strong>Nomination:</strong> Nominate another person to exercise your rights under the
              DPDP Act
            </li>
          </ul>
          <p>
            To exercise any right, contact our Grievance Officer at{" "}
            <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a> with subject line
            &ldquo;Data Rights Request &mdash; Doctor App&rdquo;.
          </p>

          {/* Section 10 */}
          <h2 id="policy-changes">10. Changes to This Policy</h2>
          <p>
            We may update this Policy at any time. Material changes will be notified via in-app
            notification or email at least 15 days before taking effect. Continued use after the
            effective date constitutes acceptance.
          </p>

          {/* Section 11 */}
          <h2 id="grievance-officer">11. Grievance Officer</h2>
          <p>In compliance with Rule 5(9) of the SPDI Rules and the IT Act:</p>
          <ul>
            <li>
              <strong>Company:</strong> Codetown Technologies &amp; Bliss Technologies
            </li>
            <li>
              <strong>Grievance Officer Email:</strong>{" "}
              <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919509647637">+91 95096 47637</a>
            </li>
            <li>
              <strong>Response Time:</strong> Acknowledgement within 24 hours; resolution within 30
              days
            </li>
            <li>
              <strong>Jurisdiction:</strong> Courts at Udaipur, Rajasthan, India
            </li>
          </ul>

          {/* Section 12 */}
          <h2 id="governing-law">12. Governing Law</h2>
          <p>
            This Privacy Policy is governed by the laws of India. Disputes shall be subject to the
            exclusive jurisdiction of courts at Surat, Gujarat, India.
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
}
