import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | QueueToken",
  description:
    "Terms and Conditions for QueueToken — Smart Doctor Appointment & Queue Token Management System",
};

export default function TermsAndConditionsPage() {
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
          <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
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

        {/* IMPORTANT callout */}
        <div className="mb-8 border-l-4 border-blue-500 bg-blue-50 px-5 py-4 rounded-r-lg">
          <p className="text-sm text-blue-900 leading-relaxed">
            <strong>IMPORTANT:</strong> PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE
            USING THE QUEUETOKEN PLATFORM. BY CREATING AN ACCOUNT, ACCESSING, OR USING OUR
            SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS AND OUR PRIVACY
            POLICY. IF YOU DO NOT AGREE, DO NOT USE THE PLATFORM.
          </p>
        </div>

        {/* Terms body */}
        <div className="prose prose-slate max-w-none">

          {/* Section 1 */}
          <h2 id="definitions">1. Definitions</h2>
          <p>
            In these Terms and Conditions, unless the context otherwise requires:
          </p>
          <ul>
            <li>
              <strong>&ldquo;QueueToken&rdquo; / &ldquo;Platform&rdquo;</strong> means the
              QueueToken mobile applications (Doctor App and Patient App), website, and all
              related services operated by Codetown Technologies &amp; Bliss Technologies.
            </li>
            <li>
              <strong>
                &ldquo;Codetown Technologies&rdquo;, &ldquo;Bliss Technologies&rdquo; /
                &ldquo;Company&rdquo; / &ldquo;we&rdquo; / &ldquo;us&rdquo; / &ldquo;our&rdquo;
              </strong>{" "}
              refers to Codetown Technologies &amp; Bliss Technologies, the owner and operator of
              the Platform.
            </li>
            <li>
              <strong>&ldquo;Doctor User&rdquo;</strong> means any registered medical practitioner,
              clinic, or healthcare provider who registers on the Doctor App.
            </li>
            <li>
              <strong>&ldquo;Patient User&rdquo;</strong> means any individual who registers on
              the Patient App to book appointments.
            </li>
            <li>
              <strong>&ldquo;User&rdquo;</strong> means any Doctor User or Patient User
              collectively.
            </li>
            <li>
              <strong>&ldquo;Appointment&rdquo;</strong> means a medical consultation booking made
              by a Patient User with a Doctor User through the Platform.
            </li>
            <li>
              <strong>&ldquo;Queue Token&rdquo;</strong> means the unique sequential number
              assigned to a Patient User upon confirmed booking, indicating their position in the
              appointment queue.
            </li>
            <li>
              <strong>&ldquo;Services&rdquo;</strong> means all features, functionalities, and
              content provided by the Platform including appointment booking, queue management,
              payment facilitation, and reporting.
            </li>
            <li>
              <strong>&ldquo;Subscription&rdquo;</strong> means a paid plan purchased by a Doctor
              User to use the Doctor App features.
            </li>
          </ul>

          {/* Section 2 */}
          <h2 id="eligibility">2. Eligibility and User Registration</h2>

          <h3 id="eligibility-general">2.1 General Eligibility</h3>
          <p>To use the QueueToken Platform, you must:</p>
          <ul>
            <li>
              Be at least 18 years of age (or have verifiable parental/guardian consent if a
              minor)
            </li>
            <li>
              Have the legal capacity to enter into a binding contract under the Indian Contract
              Act, 1872
            </li>
            <li>
              Possess a valid Indian mobile number for OTP-based authentication
            </li>
            <li>Provide accurate, complete, and current registration information</li>
          </ul>

          <h3 id="eligibility-doctors">2.2 Doctor Users — Additional Eligibility</h3>
          <p>To register as a Doctor User, you must:</p>
          <ul>
            <li>
              Hold a valid and current medical qualification recognised under Indian law (e.g.,
              MBBS, BDS, AYUSH)
            </li>
            <li>
              Be duly registered with the applicable State Medical Council or regulatory body
            </li>
            <li>
              Submit valid identity documents (Aadhaar, PAN) for verification purposes
            </li>
            <li>
              Not have had your medical registration revoked, suspended, or lapsed
            </li>
          </ul>
          <p>
            The Company does NOT verify the real-time status of a doctor&apos;s medical
            registration. Doctor Users are solely responsible for maintaining their registration in
            good standing. Any misrepresentation is a ground for immediate account termination and
            may constitute a criminal offence.
          </p>

          <h3 id="account-responsibility">2.3 Account Responsibility</h3>
          <p>
            You are solely responsible for maintaining the confidentiality of your account
            credentials. You must immediately notify us at{" "}
            <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a> of any unauthorised use
            of your account. We will not be liable for any loss or damage arising from your failure
            to safeguard your credentials.
          </p>

          {/* Section 3 */}
          <h2 id="nature-of-platform">3. Nature of the Platform and Services</h2>

          <h3 id="platform-facilitator">3.1 Platform as Technology Facilitator</h3>
          <p>
            QueueToken is a <strong>TECHNOLOGY PLATFORM ONLY</strong>. It provides software tools
            to facilitate appointment scheduling, queue token management, and payment coordination
            between independently practising doctors/clinics and their patients. The Company is NOT
            a healthcare provider, does NOT employ the doctors listed on the Platform, does NOT
            render any medical advice, diagnosis, or treatment, and does NOT establish any
            doctor-patient relationship between the Company and any Patient User.
          </p>
          <p>
            <strong>
              THE COMPANY IS AN INTERMEDIARY UNDER THE INFORMATION TECHNOLOGY ACT, 2000 AND THE
              INTERMEDIARY GUIDELINES. MEDICAL CONSULTATIONS AND TREATMENTS ARE INDEPENDENT
              TRANSACTIONS BETWEEN DOCTOR USERS AND PATIENT USERS.
            </strong>
          </p>

          <h3 id="doctor-app-features">3.2 Doctor App Features</h3>
          <p>The Doctor App provides Doctor Users with tools to:</p>
          <ul>
            <li>
              Set up and manage a clinic profile (services, timings, fees, photos)
            </li>
            <li>
              View, manage, and update daily appointment slots and patient queues
            </li>
            <li>Mark appointments as pending, completed, or cancelled</li>
            <li>
              View a real-time revenue dashboard and download financial reports
            </li>
            <li>
              Configure payment acceptance methods (cash, UPI, QR code)
            </li>
            <li>
              Manage team members and staff access (if applicable)
            </li>
            <li>Create walk-in appointments on behalf of patients</li>
          </ul>

          <h3 id="patient-app-features">3.3 Patient App Features</h3>
          <p>The Patient App provides Patient Users with tools to:</p>
          <ul>
            <li>
              Find registered clinics via QR code scan or registered phone number
            </li>
            <li>View clinic details, operating hours, and consultation fees</li>
            <li>Book appointments for a selected date and time slot</li>
            <li>
              Receive a real-time Queue Token number with an estimated appointment time
            </li>
            <li>Track appointment status and current queue progress</li>
            <li>View clinic location and obtain map directions</li>
            <li>View and manage past and upcoming appointment history</li>
          </ul>

          {/* Section 4 */}
          <h2 id="subscriptions-fees">4. Subscriptions, Fees, and Payments</h2>

          <h3 id="doctor-subscription-plans">4.1 Doctor Subscription Plans</h3>
          <p>
            Doctor Users must subscribe to one of the following plans to use the Doctor App:
          </p>
          <ul>
            <li>
              <strong>Monthly Unlimited Plan:</strong> A flat monthly fee of INR 5,000 (or as
              updated from time to time) providing unlimited appointment tokens for 30 calendar
              days.
            </li>
            <li>
              <strong>Pay Per Token Plan:</strong> A charge of INR 1 per appointment token
              generated. Tokens are deducted from a pre-loaded wallet balance.
            </li>
          </ul>
          <p>
            Subscription fees are non-refundable once a plan is activated, except as provided
            under Section 4.4 below. Plan pricing may be revised with 15 days prior notice to
            registered Doctor Users.
          </p>

          <h3 id="patient-fees">4.2 Patient Fees</h3>
          <p>
            The Patient App is provided <strong>FREE OF CHARGE</strong> to Patient Users.
            Consultation fees charged by Doctor Users are set independently by the Doctor User and
            are transactions solely between the Patient User and the Doctor User. The Company does
            not collect, hold, or process patient-to-doctor consultation payments; the platform
            merely displays payment method information.
          </p>

          <h3 id="payment-obligations">4.3 Payment Obligations</h3>
          <p>
            All amounts due for subscriptions must be paid in advance. We use third-party payment
            gateways for online transactions. The Company is not responsible for payment gateway
            failures, bank delays, or technical errors beyond our reasonable control. All
            transactions are subject to applicable goods and services tax (GST) and other statutory
            levies.
          </p>

          <h3 id="refund-policy">4.4 Refund Policy</h3>
          <p>Refunds will be considered only in the following circumstances:</p>
          <ul>
            <li>
              Technical failure on our platform prevented you from accessing a paid feature for
              more than 48 consecutive hours.
            </li>
            <li>Duplicate payment was charged due to a technical error.</li>
            <li>
              Account was terminated by us without cause (pro-rated refund for remaining
              subscription days).
            </li>
          </ul>
          <p>
            Refund requests must be submitted in writing to{" "}
            <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a> within 7 days of the
            relevant event. Approved refunds will be processed within 10 business days to the
            original payment method. No refund will be issued for cancellations initiated by the
            Doctor User, unused tokens, or periods of voluntary non-use.
          </p>

          {/* Section 5 */}
          <h2 id="appointments-tokens">5. Appointment Booking and Queue Token System</h2>

          <h3 id="booking-process">5.1 Booking Process</h3>
          <p>
            Patient Users may book appointments subject to available slots as configured by the
            Doctor User. A booking is confirmed only upon successful generation of a Queue Token
            number. The Platform does not guarantee the availability of appointments at any
            specific time.
          </p>

          <h3 id="queue-token-estimated-time">5.2 Queue Token and Estimated Time</h3>
          <p>
            Upon confirmed booking, a Queue Token number is assigned to the Patient User. The
            estimated appointment time displayed is a <strong>COMPUTED ESTIMATE</strong> only and
            is subject to change due to variations in actual consultation durations, emergency
            cases, doctor delays, or unforeseen circumstances. The Company makes no guarantee as
            to the accuracy of estimated appointment times.
          </p>

          <h3 id="cancellations">5.3 Cancellations</h3>
          <ul>
            <li>
              Patients may cancel an appointment through the Patient App before the appointment
              time. Consultation fee refunds (if any pre-payment was made) are governed by the
              Doctor User&apos;s own refund policy, not by the Company.
            </li>
            <li>
              Doctor Users may cancel or reschedule appointments through the Doctor App. The
              Platform will send a notification to the affected Patient User.
            </li>
            <li>
              The Company reserves the right to cancel any appointment in cases of suspected
              fraud, misuse, or platform maintenance.
            </li>
          </ul>

          <h3 id="no-shows">5.4 No-Shows</h3>
          <p>
            If a Patient User fails to attend a confirmed appointment, the Doctor User may mark
            the appointment as a no-show. No-show records do not attract any automatic penalty from
            the Platform, but repeated no-shows may result in account review.
          </p>

          {/* Section 6 */}
          <h2 id="doctor-obligations">6. Obligations of Doctor Users</h2>
          <p>
            By registering and using the Doctor App, Doctor Users agree to:
          </p>
          <ul>
            <li>Maintain a valid and current medical registration at all times</li>
            <li>
              Ensure that all information displayed on their clinic profile is accurate, current,
              and not misleading
            </li>
            <li>
              Adhere to all applicable medical regulations, including the Indian Medical Council
              (Professional Conduct, Etiquette and Ethics) Regulations, 2002, and the Telemedicine
              Practice Guidelines, 2020 (where applicable)
            </li>
            <li>
              Provide professional, ethical, and non-discriminatory medical services to Patient
              Users
            </li>
            <li>
              Maintain appropriate patient confidentiality in respect of all information received
              through the Platform
            </li>
            <li>
              Not use the Platform to advertise or offer services that are prohibited by law
            </li>
            <li>
              Not charge fees higher than those declared on the Platform profile without prior
              notice to the patient
            </li>
            <li>Promptly update their clinic profile when any information changes</li>
            <li>
              Bear sole liability for the quality, accuracy, and appropriateness of medical advice
              and treatment provided
            </li>
          </ul>

          {/* Section 7 */}
          <h2 id="patient-obligations">7. Obligations of Patient Users</h2>
          <p>
            By registering and using the Patient App, Patient Users agree to:
          </p>
          <ul>
            <li>
              Provide accurate personal and health information during registration and appointment
              booking
            </li>
            <li>Book appointments only with genuine intent to attend</li>
            <li>
              Arrive at the clinic in a timely manner relative to their Queue Token time estimate
            </li>
            <li>Treat Doctor Users and their staff with respect and dignity</li>
            <li>Pay consultation fees as agreed directly to the Doctor User</li>
            <li>
              Not use the Platform to book appointments for purposes other than genuine medical
              consultation
            </li>
            <li>Not misrepresent their identity or health condition</li>
          </ul>

          {/* Section 8 */}
          <h2 id="prohibited-activities">8. Prohibited Activities</h2>
          <p>Users are strictly prohibited from:</p>
          <ul>
            <li>
              Using the Platform for any unlawful purpose or in violation of any applicable law
            </li>
            <li>
              Attempting to reverse-engineer, hack, decompile, or circumvent the security of the
              Platform
            </li>
            <li>Transmitting viruses, malware, or any harmful code</li>
            <li>Impersonating another person or entity</li>
            <li>Posting false, misleading, or defamatory content</li>
            <li>
              Collecting or harvesting user data from the Platform without written authorisation
            </li>
            <li>
              Using automated scripts or bots to access or interact with the Platform
            </li>
            <li>
              Engaging in any conduct that could damage the reputation or functioning of the
              Platform
            </li>
          </ul>
          <p>
            Violation of this Section will result in immediate account termination and may result
            in legal action.
          </p>

          {/* Section 9 */}
          <h2 id="intellectual-property">9. Intellectual Property Rights</h2>
          <p>
            All intellectual property rights in and to the QueueToken Platform, including but not
            limited to the software, source code, user interface, graphics, logos, trade marks,
            service marks, and all content created by the Company are the exclusive property of
            Codetown Technologies &amp; Bliss Technologies or its licensors.
          </p>
          <p>
            Users are granted a limited, non-exclusive, non-transferable, revocable licence to use
            the Platform solely for the purposes described herein. Nothing in these Terms
            constitutes a transfer of any intellectual property right to the User.
          </p>
          <p>
            Users retain ownership of personal data and content they submit to the Platform. By
            submitting content (such as clinic photos or profile descriptions), Doctor Users grant
            the Company a non-exclusive licence to display such content within the Platform for the
            purpose of providing the Services.
          </p>

          {/* Section 10 */}
          <h2 id="disclaimers-liability">10. Disclaimers and Limitation of Liability</h2>

          <h3 id="no-medical-advice">10.1 No Medical Advice</h3>
          <p>
            <strong>
              THE QUEUETOKEN PLATFORM DOES NOT PROVIDE MEDICAL ADVICE, DIAGNOSIS, OR TREATMENT.
              ALL MEDICAL DECISIONS ARE THE SOLE RESPONSIBILITY OF THE TREATING DOCTOR USER.
              PATIENTS SHOULD ALWAYS SEEK THE ADVICE OF A QUALIFIED MEDICAL PROFESSIONAL FOR
              MEDICAL CONDITIONS.
            </strong>
          </p>

          <h3 id="intermediary-disclaimer">10.2 Platform Intermediary Disclaimer</h3>
          <p>
            The Company acts as an intermediary facilitating connections between Doctor Users and
            Patient Users. The Company is not responsible for: (i) the quality, accuracy,
            completeness, or safety of medical services provided by Doctor Users; (ii) any act,
            omission, negligence, or misconduct of any Doctor User; (iii) the accuracy of
            information published by Doctor Users on their clinic profiles; or (iv) any
            patient-to-doctor payment disputes.
          </p>

          <h3 id="service-availability">10.3 Service Availability</h3>
          <p>
            The Platform is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo;
            basis. We do not guarantee uninterrupted, error-free, or virus-free access to the
            Platform. We reserve the right to modify, suspend, or discontinue any part of the
            Services at any time with or without notice.
          </p>

          <h3 id="limitation-of-liability">10.4 Limitation of Liability</h3>
          <p>
            <strong>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN LAW, INCLUDING THE CONSUMER
              PROTECTION ACT, 2019 AND THE IT ACT, THE COMPANY&apos;S AGGREGATE LIABILITY TO ANY
              USER FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE USE OF THE PLATFORM SHALL NOT
              EXCEED THE TOTAL FEES PAID BY THAT USER TO THE COMPANY IN THE 3 MONTHS IMMEDIATELY
              PRECEDING THE CLAIM.
            </strong>
          </p>
          <p>
            <strong>
              THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR GOODWILL,
              WHETHER IN CONTRACT, TORT, OR OTHERWISE.
            </strong>
          </p>
          <p>
            Nothing in this Section limits the Company&apos;s liability for death or personal
            injury caused by our negligence, fraud, or any liability that cannot be excluded under
            applicable law.
          </p>

          <h3 id="force-majeure">10.5 Force Majeure</h3>
          <p>
            The Company shall not be liable for any failure to perform its obligations where such
            failure is caused by circumstances beyond its reasonable control, including natural
            disasters, acts of government, internet outages, cyberattacks, or public health
            emergencies.
          </p>

          {/* Section 11 */}
          <h2 id="indemnification">11. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless Codetown Technologies and Bliss
            Technologies, its directors, officers, employees, agents, and licensors from and
            against any claims, liabilities, damages, losses, costs, and expenses (including
            reasonable legal fees) arising out of or in connection with: (i) your use of the
            Platform; (ii) your violation of these Terms; (iii) your violation of any third-party
            rights; or (iv) any incorrect or false information provided by you.
          </p>

          {/* Section 12 */}
          <h2 id="account-termination">12. Account Suspension and Termination</h2>

          <h3 id="termination-by-you">12.1 Termination by You</h3>
          <p>
            You may delete your account at any time through the Profile Settings section of the
            App. Account deletion will result in the loss of all appointment history, reports, and
            associated data after the retention periods specified in the Privacy Policy.
          </p>

          <h3 id="termination-by-us">12.2 Termination by Us</h3>
          <p>
            We reserve the right to suspend or permanently terminate your account, with or without
            notice, if:
          </p>
          <ul>
            <li>You breach any provision of these Terms</li>
            <li>
              We receive a complaint or legal notice regarding your conduct on the Platform
            </li>
            <li>
              We have reason to believe your account has been compromised or used for fraudulent
              activity
            </li>
            <li>
              Your medical registration is found to be invalid or lapsed (Doctor Users)
            </li>
            <li>We are required to do so by law or a competent authority</li>
          </ul>
          <p>
            Termination does not relieve you of obligations accrued prior to termination.
            Subscription fees paid are non-refundable upon termination for breach.
          </p>

          {/* Section 13 */}
          <h2 id="dispute-resolution">13. Dispute Resolution and Governing Law</h2>

          <h3 id="informal-resolution">13.1 Informal Resolution</h3>
          <p>
            In the event of any dispute, claim, or controversy arising out of or relating to these
            Terms or the Services, both parties agree to first attempt to resolve the dispute
            amicably through good-faith negotiation for a period of 30 days.
          </p>

          <h3 id="arbitration">13.2 Arbitration</h3>
          <p>
            If informal resolution fails, the dispute shall be referred to binding arbitration
            under the Arbitration and Conciliation Act, 1996. The arbitration shall be conducted
            in English by a sole arbitrator mutually appointed by the parties, or if the parties
            cannot agree, appointed in accordance with the rules of the Act. The seat of
            arbitration shall be Surat, Gujarat, India. The arbitral award shall be final and
            binding.
          </p>

          <h3 id="consumer-disputes">13.3 Consumer Disputes</h3>
          <p>
            Nothing in this Section prevents a consumer from approaching the appropriate Consumer
            Disputes Redressal Commission under the Consumer Protection Act, 2019. Patient Users
            who are consumers retain all statutory rights available to them.
          </p>

          <h3 id="governing-law">13.4 Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India.
            Subject to the arbitration clause, the courts at Surat, Gujarat shall have exclusive
            jurisdiction.
          </p>

          {/* Section 14 */}
          <h2 id="grievance-redressal">14. Grievance Redressal Mechanism</h2>
          <p>
            In accordance with the Consumer Protection (E-Commerce) Rules, 2020, the IT Act, and
            the Intermediary Guidelines, we have designated a Nodal / Grievance Officer:
          </p>
          <ul>
            <li>
              <strong>Company Name:</strong> Codetown Technologies &amp; Bliss Technologies
            </li>
            <li>
              <strong>Grievance Officer Email:</strong>{" "}
              <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a>
            </li>
            <li>
              <strong>Helpline:</strong>{" "}
              <a href="tel:+919509647637">+91 95096 47637</a>
            </li>
            <li>
              <strong>Support Hours:</strong> 9:00 AM – 7:00 PM, Monday to Saturday
            </li>
            <li>
              <strong>Resolution Timeline:</strong> Acknowledgement within 24 hours; resolution
              within 30 days.
            </li>
          </ul>
          <p>
            We maintain a record of all grievances received and their resolution status. Unresolved
            grievances may be escalated to the National Consumer Helpline (1800-11-4000) or the
            appropriate State Consumer Forum.
          </p>

          {/* Section 15 */}
          <h2 id="general-provisions">15. General Provisions</h2>

          <h3 id="entire-agreement">15.1 Entire Agreement</h3>
          <p>
            These Terms, together with the Privacy Policy and any Subscription Agreement,
            constitute the entire agreement between you and the Company regarding the use of the
            Platform and supersede all prior agreements.
          </p>

          <h3 id="severability">15.2 Severability</h3>
          <p>
            If any provision of these Terms is found to be invalid or unenforceable by a court of
            competent jurisdiction, the remaining provisions shall continue in full force and
            effect.
          </p>

          <h3 id="no-waiver">15.3 No Waiver</h3>
          <p>
            Failure by the Company to enforce any right or provision of these Terms shall not
            constitute a waiver of that right or provision.
          </p>

          <h3 id="assignment">15.4 Assignment</h3>
          <p>
            You may not assign or transfer your rights under these Terms without our prior written
            consent. The Company may assign these Terms in connection with a merger, acquisition,
            or sale of assets.
          </p>

          <h3 id="amendments">15.5 Amendments</h3>
          <p>
            We may update these Terms at any time. Material changes will be communicated via
            in-app notification or email at least 15 days before the revised Terms take effect.
            Continued use of the Platform after the effective date constitutes acceptance of the
            revised Terms.
          </p>

          <h3 id="contact-information">15.6 Contact Information</h3>
          <p>
            For all queries, notices, and communications under these Terms:
          </p>
          <ul>
            <li>
              <strong>Email:</strong>{" "}
              <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a>
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919509647637">+91 95096 47637</a>
            </li>
            <li>
              <strong>Website:</strong>{" "}
              <a
                href="https://queuetoken.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.queuetoken.in
              </a>
            </li>
          </ul>

        </div>
      </main>

      <Footer />
    </div>
  );
}
