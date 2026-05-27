import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | QueueToken",
  description:
    "Privacy Policy for QueueToken — Smart Doctor Appointment & Queue Token Management System",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <Image
            src="https://res.cloudinary.com/dbazlbkfj/image/upload/v1779861258/motion.div_awgt5c.png"
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
          <p className="mt-1 text-gray-600 text-base">
            Smart Doctor Appointment &amp; Queue Token Management System
          </p>
          <dl className="mt-3 space-y-0.5 text-sm text-gray-500">
            <div>
              <dt className="inline font-medium text-gray-700">Effective Date: </dt>
              <dd className="inline">25 May 2026</dd>
            </div>
            <div>
              <dt className="inline font-medium text-gray-700">Operated by: </dt>
              <dd className="inline">Codetown Technologies &amp; Bliss Technologies</dd>
            </div>
          </dl>
        </div>

        {/* Consent / important callout */}
        <div className="mb-8 border-l-4 border-blue-500 bg-blue-50 px-5 py-4 rounded-r-lg">
          <p className="text-sm text-blue-900 leading-relaxed">
            <strong>IMPORTANT:</strong> By creating an account and using our Services, you provide
            free, specific, informed, and unambiguous consent to the collection, processing, and
            use of your personal data as described in this Privacy Policy. Please read this policy
            carefully before using QueueToken.
          </p>
        </div>

        {/* Policy body */}
        <div className="prose prose-slate max-w-none">

          {/* Section 1 */}
          <h2 id="about-us">1. About Us &amp; Scope of This Policy</h2>
          <p>
            QueueToken is a digital platform developed and operated by Codetown Technologies &amp;
            Bliss Technologies, a technology company incorporated under the laws of India. The
            platform consists of two mobile applications: (i) the Doctor App, available to
            registered medical practitioners and clinic operators; and (ii) the Patient App,
            available to patients seeking to book appointments at registered clinics.
          </p>
          <p>
            This Privacy Policy applies to all users of both applications, our website, and any
            related services (collectively, "Services"). It complies with the Information
            Technology Act, 2000 ("IT Act"), the Information Technology (Reasonable Security
            Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011
            ("SPDI Rules"), and is aligned with the Digital Personal Data Protection Act, 2023
            ("DPDP Act") as it comes into force.
          </p>

          {/* Section 2 */}
          <h2 id="data-we-collect">2. Categories of Personal Data We Collect</h2>

          <h3 id="data-doctors">2.1 Data Collected from Doctors / Clinic Operators</h3>
          <p>
            When a medical professional registers on the Doctor App, we collect:
          </p>
          <ul>
            <li>Full name, gender, and professional designation</li>
            <li>Mobile number (used for OTP-based authentication)</li>
            <li>Email address</li>
            <li>
              Years of clinical experience and medical qualifications (e.g., MBBS, MD)
            </li>
            <li>Clinic name, full address, city, state, and PIN code</li>
            <li>
              Consultation fee, free follow-up period, and clinic operating hours
            </li>
            <li>
              Google Business Profile URL and clinic photos (up to 5 images)
            </li>
            <li>
              UPI ID and/or QR code image for payment receipt purposes
            </li>
            <li>
              Government-issued identity documents for verification: Aadhaar (front and back)
              and PAN Card
            </li>
            <li>
              Professional accolades, awards, and achievements (optional)
            </li>
            <li>Subscription plan details and transaction records</li>
          </ul>

          <h3 id="data-patients">2.2 Data Collected from Patients</h3>
          <p>
            When a patient registers or books an appointment, we collect:
          </p>
          <ul>
            <li>Full name, email address (optional), and mobile number</li>
            <li>Full address, city, state, and country</li>
            <li>
              Health information voluntarily submitted: description of medical symptoms or
              problems entered during appointment booking
            </li>
            <li>
              Appointment history, token numbers, and consultation type (new / follow-up)
            </li>
            <li>
              Payment method selection (cash or online) and payment status
            </li>
          </ul>

          <h3 id="data-automatic">2.3 Automatically Collected Data</h3>
          <p>
            When you use our applications, we may automatically collect:
          </p>
          <ul>
            <li>Device information (model, operating system, device ID)</li>
            <li>IP address and general geographic location</li>
            <li>App usage patterns, session duration, and crash reports</li>
            <li>QR code scan events and in-app navigation data</li>
          </ul>
          <p>
            Health-related information you submit (e.g., your medical symptoms) qualifies as
            Sensitive Personal Data or Information (SPDI) under the SPDI Rules. We treat this
            category with the highest level of protection.
          </p>

          {/* Section 3 */}
          <h2 id="legal-basis">3. Legal Basis for Processing</h2>
          <p>We process your personal data on the following legal grounds:</p>
          <ul>
            <li>
              <strong>Consent:</strong> By creating an account and using our Services, you provide
              free, specific, informed, and unambiguous consent to the processing described herein
              (SPDI Rules, Rule 5).
            </li>
            <li>
              <strong>Contractual Necessity:</strong> Processing is necessary to provide
              appointment booking, queue token management, and payment facilitation services as
              agreed in our Terms and Conditions.
            </li>
            <li>
              <strong>Legal Obligation:</strong> We may process data to comply with applicable
              laws, court orders, or regulatory requirements.
            </li>
            <li>
              <strong>Legitimate Interests:</strong> We process certain data to ensure platform
              security, prevent fraud, and improve our Services.
            </li>
          </ul>
          <p>
            You may withdraw your consent at any time by contacting us at{" "}
            <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a>. Withdrawal of consent
            will not affect the lawfulness of processing carried out prior to withdrawal.
          </p>

          {/* Section 4 */}
          <h2 id="purposes">4. Purposes for Which We Use Your Data</h2>
          <p>
            We use collected personal data strictly for the following purposes:
          </p>
          <ol>
            <li>To create, verify, and maintain your user account</li>
            <li>
              To facilitate appointment booking between patients and registered
              doctors/clinics
            </li>
            <li>
              To assign real-time queue token numbers and communicate estimated appointment
              times
            </li>
            <li>
              To process or facilitate payments (cash acknowledgment, UPI verification, QR
              code management)
            </li>
            <li>
              To verify the credentials, identity, and legitimacy of registered doctors and
              clinics
            </li>
            <li>
              To enable doctors to manage their daily appointment schedule, patient flow, and
              revenue reports
            </li>
            <li>
              To send push notifications regarding appointment confirmations, reminders, token
              updates, and cancellations
            </li>
            <li>To provide customer support and respond to grievances</li>
            <li>
              To detect, prevent, and respond to fraud, abuse, or security incidents
            </li>
            <li>To comply with applicable legal obligations</li>
            <li>
              To improve, personalise, and develop our Services (using anonymised and
              aggregated data only)
            </li>
          </ol>
          <p>
            We will NOT use your data for purposes incompatible with those listed above without
            obtaining fresh consent.
          </p>

          {/* Section 5 */}
          <h2 id="sharing">5. Sharing and Disclosure of Personal Data</h2>
          <p>
            We do not sell, rent, or trade your personal data. We may share data only in the
            following limited circumstances:
          </p>

          <h3 id="sharing-doctor-patient">5.1 Between Doctor and Patient</h3>
          <p>
            To facilitate a booked appointment, the Patient App displays the doctor's name, clinic
            name, address, and consultation details. Simultaneously, the Doctor App displays the
            patient's name, contact number, appointment slot, and the medical problem description
            voluntarily submitted by the patient. By booking an appointment, both parties consent
            to this specific, limited data sharing.
          </p>

          <h3 id="sharing-processors">5.2 Service Providers (Data Processors)</h3>
          <p>We engage third-party processors including:</p>
          <ul>
            <li>Cloud infrastructure providers (data hosting and storage)</li>
            <li>SMS/OTP gateway providers (for authentication)</li>
            <li>Push notification service providers</li>
            <li>Payment gateway operators (where applicable)</li>
          </ul>
          <p>
            All third-party processors are contractually bound to process data only on our
            instructions, maintain confidentiality, and implement appropriate security measures.
          </p>

          <h3 id="sharing-legal">5.3 Legal Disclosures</h3>
          <p>
            We may disclose personal data to law enforcement, regulators, or courts when required
            by applicable law, regulation, legal process, or governmental request, including under
            Sections 69, 69A, and 69B of the IT Act.
          </p>

          <h3 id="sharing-business">5.4 Business Transfers</h3>
          <p>
            In the event of a merger, acquisition, restructuring, or sale of assets, personal data
            may be transferred to the successor entity, subject to the same or equivalent privacy
            protections.
          </p>
          <p>
            <strong>
              We will NEVER sell your health information or sensitive personal data to any
              advertiser, data broker, or third party for commercial purposes.
            </strong>
          </p>

          {/* Section 6 */}
          <h2 id="data-retention">6. Data Retention</h2>
          <p>
            We retain personal data only for as long as necessary for the purposes stated in this
            Policy or as required by law:
          </p>
          <ul>
            <li>
              <strong>Account data (Doctor):</strong> Retained for the duration of the active
              subscription and for 3 years thereafter, or as required by applicable regulations.
            </li>
            <li>
              <strong>Account data (Patient):</strong> Retained for the duration of account
              activity and for 2 years after the last appointment, unless deletion is requested.
            </li>
            <li>
              <strong>Health/symptom information:</strong> Retained for the duration of the
              doctor-patient relationship and for 1 year thereafter.
            </li>
            <li>
              <strong>Identity verification documents (Aadhaar, PAN):</strong> Retained for the
              period required by applicable law and then securely deleted.
            </li>
            <li>
              <strong>Transaction records:</strong> Retained for 7 years to comply with financial
              and tax regulations.
            </li>
            <li>
              <strong>Technical logs:</strong> Retained for 90 days and then deleted.
            </li>
          </ul>
          <p>
            You may request deletion of your account and associated data at any time (see Section
            9 below).
          </p>

          {/* Section 7 */}
          <h2 id="data-security">7. Data Security</h2>
          <p>
            We implement reasonable security practices and procedures as required under Section 43A
            of the IT Act and the SPDI Rules, including:
          </p>
          <ul>
            <li>
              Encryption of data in transit using industry-standard TLS/SSL protocols
            </li>
            <li>Encryption of sensitive data at rest</li>
            <li>OTP-based two-factor authentication for all users</li>
            <li>
              Access controls ensuring that personal data is accessible only to authorised
              personnel on a need-to-know basis
            </li>
            <li>Regular security assessments and vulnerability testing</li>
            <li>Secure deletion procedures for data no longer required</li>
          </ul>
          <p>
            In the event of a personal data breach that is likely to result in a risk to your
            rights and freedoms, we will notify affected users and the relevant authority within
            72 hours of becoming aware of the breach, in accordance with applicable law.
          </p>
          <p>
            No method of electronic transmission or storage is 100% secure. While we strive to
            protect your data, we cannot guarantee absolute security. You use our Services at your
            own risk and are responsible for maintaining the confidentiality of your login
            credentials.
          </p>

          {/* Section 8 */}
          <h2 id="cross-border">8. Cross-Border Data Transfers</h2>
          <p>
            Your data is primarily stored and processed in India. If any personal data is
            transferred outside India (e.g., via cloud service providers with servers abroad),
            such transfers will be carried out only to countries with adequate data protection
            standards or under contractual safeguards, in compliance with the DPDP Act and
            applicable rules.
          </p>

          {/* Section 9 */}
          <h2 id="your-rights">9. Your Rights as a Data Principal</h2>
          <p>
            You have the following rights with respect to your personal data:
          </p>
          <ul>
            <li>
              <strong>Right to Access:</strong> You may request a copy of the personal data we
              hold about you.
            </li>
            <li>
              <strong>Right to Correction:</strong> You may request correction of inaccurate or
              incomplete personal data.
            </li>
            <li>
              <strong>Right to Erasure:</strong> You may request deletion of your personal data,
              subject to our legal retention obligations.
            </li>
            <li>
              <strong>Right to Withdraw Consent:</strong> You may withdraw consent for processing
              at any time; this will not affect processing carried out prior to withdrawal.
            </li>
            <li>
              <strong>Right to Grievance Redressal:</strong> You have the right to have your
              complaints addressed by our Grievance Officer.
            </li>
            <li>
              <strong>Right to Nominate:</strong> Under the DPDP Act, you may nominate another
              individual to exercise your data rights on your behalf in the event of your death or
              incapacity.
            </li>
          </ul>
          <p>
            To exercise any of these rights, please contact our Grievance Officer (see Section 13).
          </p>

          {/* Section 10 */}
          <h2 id="app-permissions">10. App Permissions and Local Data</h2>
          <p>
            The QueueToken applications may request the following device permissions:
          </p>
          <ul>
            <li>
              <strong>Camera:</strong> Required to scan QR codes of registered clinics (Patient
              App)
            </li>
            <li>
              <strong>Location:</strong> Used to display map directions to the clinic (optional,
              Patient App)
            </li>
            <li>
              <strong>Notifications:</strong> Required to send appointment reminders and token
              updates
            </li>
            <li>
              <strong>Storage:</strong> Required for temporary storage of QR code and clinic photo
              uploads (Doctor App)
            </li>
          </ul>
          <p>
            You may revoke any permission at any time through your device settings. Revoking
            certain permissions may limit the functionality of the App.
          </p>

          {/* Section 11 */}
          <h2 id="childrens-privacy">11. Children&apos;s Privacy</h2>
          <p>
            Our Services are not directed at children under 18 years of age without parental or
            guardian consent. We do not knowingly collect personal data from minors without
            verifiable parental consent. If you believe a minor has provided us with personal data
            without consent, please contact us immediately and we will delete such data.
          </p>

          {/* Section 12 */}
          <h2 id="policy-changes">12. Changes to This Privacy Policy</h2>
          <p>
            We reserve the right to update this Privacy Policy at any time. Material changes will
            be notified to users via in-app notification or email at least 15 days before the
            revised policy takes effect. Your continued use of the Services after the effective
            date of a revised policy constitutes your acceptance of the changes.
          </p>

          {/* Section 13 */}
          <h2 id="grievance-officer">13. Grievance Officer</h2>
          <p>
            In accordance with Rule 5(9) of the SPDI Rules and the IT Act, we have appointed a
            Grievance Officer to address concerns regarding the use and processing of your personal
            data:
          </p>
          <ul>
            <li>
              <strong>Name:</strong> Grievance Officer, Gaurav Jain
            </li>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a>
            </li>
            <li>
              <strong>Mobile:</strong>{" "}
              <a href="tel:+919509647637">+91 95096 47637</a>
            </li>
            <li>
              <strong>Response Time:</strong> We will acknowledge your grievance within 24 hours
              and resolve it within 30 days of receipt.
            </li>
          </ul>
          <p>
            If you are not satisfied with our response, you may escalate to the Data Protection
            Board of India upon its establishment, or seek recourse through appropriate legal
            forums.
          </p>

          {/* Section 14 */}
          <h2 id="governing-law">14. Governing Law and Jurisdiction</h2>
          <p>
            This Privacy Policy is governed by and construed in accordance with the laws of India.
            Any disputes arising from or relating to this Policy shall be subject to the exclusive
            jurisdiction of the courts in Gujarat, India.
          </p>
          <p>
            For queries not related to a formal grievance, you may also contact us at:{" "}
            <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a>
          </p>

        </div>
      </main>

      <Footer />
    </div>
  );
}
