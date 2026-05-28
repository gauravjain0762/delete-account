import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | Queue Token",
  description:
    "Terms and Conditions for Queue Token — Smart Doctor Appointment & Queue Token Management System",
};

export default function TermsAndConditionsPage() {
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
            Queue Token
          </span>
        </div>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
        {/* Page header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
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
        <div className="mb-8 border-l-4 border-red-500 bg-red-50 px-5 py-4 rounded-r-lg">
          <p className="text-sm text-red-900 leading-relaxed">
            <strong>LEGALLY BINDING AGREEMENT:</strong> BY REGISTERING, DOWNLOADING, OR USING THE
            QUEUE TOKEN DOCTOR APP, YOU ENTER INTO A BINDING LEGAL CONTRACT WITH CODETOWN
            TECHNOLOGIES &amp; BLISS TECHNOLOGIES. READ THESE TERMS CAREFULLY. IF YOU DO NOT AGREE
            TO ALL PROVISIONS, YOU MUST NOT USE THE DOCTOR APP. IGNORANCE OF THESE TERMS WILL NOT
            CONSTITUTE A DEFENCE IN ANY LEGAL PROCEEDING.
          </p>
        </div>

        {/* Terms body */}
        <div className="prose prose-slate max-w-none">

          {/* Section 1 */}
          <h2 id="definitions">1. Definitions</h2>
          <p>
            The following terms have the meanings assigned to them throughout this Agreement:
          </p>
          <ul>
            <li>
              <strong>
                &ldquo;Queue Token&rdquo; / &ldquo;Platform&rdquo; / &ldquo;Doctor App&rdquo;
              </strong>{" "}
              &mdash; the Queue Token Doctor mobile application, backend system, and all related
              services operated by Codetown Technologies &amp; Bliss Technologies.
            </li>
            <li>
              <strong>
                &ldquo;Codetown Technologies&rdquo; &amp; Bliss Technologies /
                &ldquo;Company&rdquo; / &ldquo;we&rdquo; / &ldquo;us&rdquo; / &ldquo;our&rdquo;
              </strong>{" "}
              &mdash; Codetown Technologies &amp; Bliss Technologies, owner and operator of the
              Platform.
            </li>
            <li>
              <strong>
                &ldquo;Doctor User&rdquo; / &ldquo;you&rdquo; / &ldquo;Clinic Operator&rdquo;
              </strong>{" "}
              &mdash; any registered medical practitioner, clinic, or healthcare provider who
              creates an account on the Doctor App.
            </li>
            <li>
              <strong>&ldquo;Patient User&rdquo;</strong> &mdash; any patient who uses the
              Queue Token Patient App to book appointments at registered clinics.
            </li>
            <li>
              <strong>&ldquo;Services&rdquo;</strong> &mdash; all features provided by the Doctor
              App including appointment management, queue token system, revenue dashboard, payment
              setup, and reporting.
            </li>
            <li>
              <strong>&ldquo;Subscription&rdquo;</strong> &mdash; the paid plan (Monthly Unlimited
              or Pay Per Token) purchased by you to access the Services.
            </li>
            <li>
              <strong>&ldquo;Token&rdquo;</strong> &mdash; the unique sequential appointment number
              assigned to a Patient User upon booking at your clinic.
            </li>
            <li>
              <strong>&ldquo;Wallet&rdquo;</strong> &mdash; the prepaid credit balance maintained on
              the Platform deducted per token under the Pay Per Token plan.
            </li>
            <li>
              <strong>&ldquo;Verification&rdquo;</strong> &mdash; the identity and credentials
              review process using Aadhaar and PAN documents.
            </li>
          </ul>

          {/* Section 2 */}
          <h2 id="eligibility">2. Eligibility and Registration Requirements</h2>

          <h3 id="eligibility-criteria">2.1 Mandatory Eligibility Criteria</h3>
          <p>
            To register as a Doctor User, you <strong>MUST</strong> satisfy{" "}
            <strong>ALL</strong> of the following:
          </p>
          <ul>
            <li>
              Be a registered medical practitioner holding a valid and current medical qualification
              recognised under Indian law (including but not limited to MBBS, BDS, MD,
              AYUSH-recognised qualifications)
            </li>
            <li>
              Be duly registered with the National Medical Commission (NMC) or the relevant State
              Medical Council
            </li>
            <li>
              Hold a valid, current, and unsuspended medical registration at all times during your
              use of the Platform
            </li>
            <li>Be at least 18 years of age</li>
            <li>
              Have the legal capacity to enter into binding contracts under the Indian Contract Act,
              1872
            </li>
            <li>Have a valid Indian mobile number for OTP-based authentication</li>
            <li>
              Operate a clinic or medical practice that is lawfully established under applicable law
            </li>
          </ul>

          <h3 id="registration-accuracy">
            2.2 Registration Accuracy &mdash; Your Absolute Obligation
          </h3>
          <p>
            You represent and warrant that <strong>ALL</strong> information provided during
            registration &mdash; including your qualifications, registration number, clinic details,
            consultation fee, and identity documents &mdash; is accurate, complete, current, and not
            misleading. You have an ongoing duty to update your profile immediately upon any change.
          </p>
          <p>
            <strong>CRITICAL LEGAL WARNING:</strong> Providing false, misleading, or fraudulent
            registration information &mdash; including misrepresenting your medical qualifications or
            registration status &mdash; constitutes a criminal offence under Section 199 of the
            Indian Penal Code (Bharatiya Nyaya Sanhita, 2023) and may result in immediate account
            termination, reporting to the NMC/State Medical Council, and/or criminal prosecution.
            The Company will cooperate fully with regulatory and law enforcement authorities.
          </p>

          <h3 id="verification">2.3 Verification Process</h3>
          <p>
            Your account is subject to a verification review by our team. Verification does{" "}
            <strong>NOT</strong> constitute endorsement or certification of your medical competence,
            qualifications, or services. The Company performs identity and document checks only. You
            remain solely responsible for the accuracy of your registration.
          </p>

          <h3 id="account-credentials">2.4 Account Credentials</h3>
          <p>
            You are solely and exclusively responsible for maintaining the security and
            confidentiality of your OTP, login credentials, and registered device. Any action taken
            through your account whether authorised by you or not is your legal responsibility.
            Notify us immediately at{" "}
            <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a> of any unauthorised
            access.
          </p>

          {/* Section 3 */}
          <h2 id="intermediary-status">
            3. Nature of the Platform &mdash; Intermediary Status
          </h2>
          <p>
            <strong>CRITICAL:</strong> Queue Token is a <strong>TECHNOLOGY PLATFORM</strong> and{" "}
            <strong>INTERMEDIARY</strong> under Section 2(1)(w) of the Information Technology Act,
            2000 and the IT (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. The
            Company does <strong>NOT</strong> practice medicine, does <strong>NOT</strong> provide
            medical advice, does <strong>NOT</strong> certify your competence, and does{" "}
            <strong>NOT</strong> establish any healthcare provider relationship with patients on your
            behalf. The doctor-patient relationship is <strong>EXCLUSIVELY</strong> between you and
            your patients.
          </p>
          <p>
            The Doctor App provides software tools only. All medical decisions, diagnoses,
            prescriptions, treatments, and clinical judgments are yours alone. The Company has no
            role whatsoever in the clinical relationship between you and any patient.
          </p>

          {/* Section 4 */}
          <h2 id="obligations">4. Doctor User Obligations and Warranties</h2>
          <p>
            By using the Doctor App, you represent, warrant, and undertake the following:
          </p>

          <h3 id="medical-compliance">4.1 Medical Registration and Compliance</h3>
          <ul>
            <li>
              You hold and will maintain at all times a valid, current medical registration in good
              standing
            </li>
            <li>
              You comply and will continue to comply with the Indian Medical Council (Professional
              Conduct, Etiquette and Ethics) Regulations, 2002, as amended
            </li>
            <li>
              You comply with the National Medical Commission Act, 2019 and all directions of the
              NMC and applicable State Medical Council
            </li>
            <li>
              Where applicable, you comply with the Telemedicine Practice Guidelines, 2020 for any
              remote consultation services
            </li>
            <li>
              You will immediately notify us in writing at{" "}
              <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a> if your medical
              registration is suspended, cancelled, or lapses for any reason
            </li>
          </ul>

          <h3 id="clinic-accuracy">4.2 Clinic Information Accuracy</h3>
          <ul>
            <li>
              All information on your clinic profile is and will remain accurate, truthful, and not
              misleading
            </li>
            <li>
              You will not display qualifications, specialisations, or accreditations that you do
              not hold
            </li>
            <li>
              You will not charge patients a fee higher than the consultation fee displayed on your
              platform profile without giving prior notice
            </li>
            <li>
              You will update your clinic availability, timings, and fee promptly &mdash; a minimum
              of 24 hours before the effective date of any change
            </li>
          </ul>

          <h3 id="patient-confidentiality">4.3 Patient Confidentiality</h3>
          <ul>
            <li>
              You will maintain strict confidentiality of all patient information received through
              the platform in accordance with medical ethics and applicable law
            </li>
            <li>
              You will not use patient data received through the platform for marketing, referrals,
              research, or any purpose other than the specific consultation booked
            </li>
            <li>
              You will not share patient data with any third party without the patient&apos;s
              explicit consent
            </li>
            <li>
              You will promptly report any data breach involving patient information to us at{" "}
              <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a>
            </li>
          </ul>

          <h3 id="professional-conduct">4.4 Professional Conduct</h3>
          <ul>
            <li>
              You will treat all patients with respect, dignity, and without discrimination on any
              ground
            </li>
            <li>
              You will not use the platform for services that are prohibited by law or medical
              ethics
            </li>
            <li>
              You will not solicit patients for referral payments or kickbacks in violation of
              applicable regulations
            </li>
            <li>
              You will not engage in false advertising or make unsubstantiated claims about your
              services on your platform profile
            </li>
            <li>
              You will attend to booked appointments within a reasonable time or notify patients of
              delays
            </li>
          </ul>

          <h3 id="platform-integrity">4.5 Platform Integrity</h3>
          <ul>
            <li>
              You will not attempt to reverse-engineer, hack, scrape, or interfere with the Platform
            </li>
            <li>
              You will not create multiple accounts or allow any other person to use your account
            </li>
            <li>
              You will not use automated scripts, bots, or tools to interact with the Platform
            </li>
            <li>
              You will not engage in any conduct that may damage the reputation or operations of the
              Platform
            </li>
          </ul>

          {/* Section 5 */}
          <h2 id="subscriptions">5. Subscriptions, Fees, and Billing</h2>

          <h3 id="plans">5.1 Available Plans</h3>
          <ul>
            <li>
              <strong>Monthly Unlimited Plan:</strong> A flat fee of INR 5,000 per calendar month
              providing unlimited appointment tokens for 30 days.
            </li>
            <li>
              <strong>Pay Per Token Plan:</strong> INR 1 deducted from your prepaid Wallet balance
              per appointment token generated.
            </li>
          </ul>
          <p>
            Pricing may be revised upon 15 days prior written notice to your registered email or
            via in-app notification. Continued use after the effective date constitutes acceptance
            of revised pricing.
          </p>

          <h3 id="payment">5.2 Payment Obligation</h3>
          <p>
            All subscription fees must be paid in advance. Wallet top-ups must be completed before
            token deductions are made. Failure to maintain sufficient Wallet balance or active
            subscription will result in suspension of patient-facing features until payment is made.
          </p>

          <h3 id="taxes">5.3 Taxes</h3>
          <p>
            All subscription fees are exclusive of applicable Goods and Services Tax (GST) and
            other statutory levies, which shall be charged additionally at the prevailing rate. You
            are responsible for any taxes applicable to your own income.
          </p>

          <h3 id="refund-policy">5.4 Non-Refundable Policy &mdash; Read Carefully</h3>
          <p>
            <strong>
              SUBSCRIPTION FEES PAID ARE NON-REFUNDABLE EXCEPT IN THE SPECIFIC CIRCUMSTANCES
              LISTED IN CLAUSE 5.5. VOLUNTARY NON-USE, CHANGE OF MIND, INSUFFICIENT PATIENT
              BOOKINGS, OR ACCOUNT TERMINATION FOR BREACH DO NOT ENTITLE YOU TO ANY REFUND.
            </strong>
          </p>

          <h3 id="refund-circumstances">5.5 Limited Refund Circumstances</h3>
          <p>A refund will be considered only if:</p>
          <ul>
            <li>
              A technical failure caused by our platform prevented you from accessing a paid feature
              for more than 48 consecutive hours, verified by our technical team.
            </li>
            <li>A duplicate payment was charged due to our technical error.</li>
            <li>
              Your account was terminated by us without cause (pro-rated refund for unused days
              only).
            </li>
          </ul>
          <p>
            Refund requests must be submitted in writing to{" "}
            <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a> within 7 days of the
            event. Approved refunds will be processed within 10 business days.
          </p>

          {/* Section 6 */}
          <h2 id="appointment-management">6. Appointment Management and Queue System</h2>

          <h3 id="your-control">6.1 Your Control</h3>
          <p>
            You are fully responsible for configuring your appointment slots, timing, patient
            capacity limits, and service availability. The Platform only acts on your configured
            settings. We accept no responsibility for overbooking, under-booking, or scheduling
            errors resulting from your configuration.
          </p>

          <h3 id="token-estimates">6.2 Queue Token Estimates</h3>
          <p>
            Estimated appointment times displayed to patients are computed based on your slot
            configuration. Actual consultation times vary based on individual patient needs. You are
            responsible for managing your patient flow in a way that reasonably honours the
            estimated times communicated to patients.
          </p>

          <h3 id="cancellations">6.3 Cancellations by You</h3>
          <p>
            If you cancel or reschedule an appointment, you are responsible for directly
            communicating with affected patients. The Platform will send an automated notification,
            but you bear independent responsibility for patient communication. Repeated last-minute
            cancellations may result in a formal warning or account review.
          </p>

          <h3 id="patient-payments">6.4 Patient-to-Doctor Payments</h3>
          <p>
            Consultation fees are paid directly between Patient Users and you. The Company does not
            process, hold, escrow, or guarantee any patient payment. Payment disputes between you
            and patients are entirely your responsibility. The Company is not a party to any payment
            transaction.
          </p>

          {/* Section 7 */}
          <h2 id="intellectual-property">7. Intellectual Property</h2>
          <p>
            All intellectual property in the Queue Token Platform &mdash; including software, source
            code, user interface, logo, trade marks, and content &mdash; is the exclusive property
            of Codetown Technologies &amp; Bliss Technologies or its licensors. You are granted a
            limited, non-exclusive, non-transferable, revocable licence to use the Doctor App solely
            for managing your clinic.
          </p>
          <p>
            You retain ownership of your clinic profile content and data. By uploading clinic photos
            and a profile description, you grant the Company a non-exclusive licence to display this
            content within the Platform.
          </p>

          {/* Section 8 */}
          <h2 id="liability">8. Disclaimers and Limitation of Liability</h2>

          <h3 id="no-clinical-role">8.1 No Clinical Role</h3>
          <p>
            <strong>
              THE COMPANY PLAYS NO ROLE IN ANY MEDICAL CONSULTATION, DIAGNOSIS, TREATMENT, OR
              CLINICAL DECISION. ALL CLINICAL RESPONSIBILITY RESTS SOLELY WITH YOU AS THE TREATING
              MEDICAL PRACTITIONER.
            </strong>
          </p>

          <h3 id="no-guarantee">8.2 No Guarantee of Bookings</h3>
          <p>
            The Company makes no guarantee of any minimum number of patient bookings, revenue, or
            business outcomes. The Doctor App is a scheduling tool &mdash; commercial results depend
            entirely on your medical practice.
          </p>

          <h3 id="as-is">8.3 As-Is Service</h3>
          <p>
            The Platform is provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo;
            basis. We do not warrant uninterrupted, error-free, or secure access at all times. We
            reserve the right to modify or suspend any feature with or without notice.
          </p>

          <h3 id="limitation">8.4 Limitation of Liability</h3>
          <p>
            <strong>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN LAW, THE COMPANY&apos;S
              AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS UNDER THIS AGREEMENT SHALL NOT EXCEED THE
              TOTAL SUBSCRIPTION FEES PAID BY YOU IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING
              THE CLAIM. THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              CONSEQUENTIAL, SPECIAL, OR PUNITIVE DAMAGES, LOST PROFITS, DATA LOSS, OR BUSINESS
              INTERRUPTION.
            </strong>
          </p>
          <p>
            Nothing in this clause excludes liability for fraud, wilful default, death, or personal
            injury caused by our negligence, or any liability that cannot be excluded under
            applicable Indian law.
          </p>

          <h3 id="force-majeure">8.5 Force Majeure</h3>
          <p>
            We are not liable for failure to perform obligations caused by events beyond our
            reasonable control, including natural disasters, government actions, internet outages,
            cyberattacks, or public health emergencies.
          </p>

          {/* Section 9 */}
          <h2 id="indemnification">9. Your Indemnification Obligation</h2>
          <p>
            <strong>
              YOU AGREE TO FULLY INDEMNIFY, DEFEND, AND HOLD HARMLESS CODETOWN TECHNOLOGIES &amp;
              BLISS TECHNOLOGIE, ITS DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS FROM AND AGAINST
              ANY CLAIMS, LOSSES, LIABILITIES, DAMAGES, COSTS, AND LEGAL FEES (INCLUDING REASONABLE
              ADVOCATE FEES) ARISING FROM: (I) YOUR USE OF THE PLATFORM; (II) YOUR BREACH OF THESE
              TERMS; (III) ANY CLAIM BY A PATIENT OR THIRD PARTY RELATING TO YOUR MEDICAL SERVICES;
              (IV) YOUR MISREPRESENTATION OF QUALIFICATIONS OR REGISTRATION; (V) YOUR BREACH OF
              PATIENT CONFIDENTIALITY; OR (VI) ANY VIOLATION OF APPLICABLE MEDICAL REGULATIONS BY
              YOU.
            </strong>
          </p>
          <p>
            This indemnification obligation survives termination of your account and these Terms
            indefinitely.
          </p>

          {/* Section 10 */}
          <h2 id="termination">10. Suspension and Termination</h2>

          <h3 id="termination-by-you">10.1 Termination by You</h3>
          <p>
            You may close your account at any time via Profile Settings. Pending subscription fees
            are non-refundable. Patient booking data remains accessible to affected patients for the
            applicable statutory period.
          </p>

          <h3 id="termination-by-us">10.2 Termination by Us &mdash; Immediate Effect</h3>
          <p>
            We reserve the right to immediately suspend or permanently terminate your account
            without prior notice if:
          </p>
          <ul>
            <li>You breach any material provision of these Terms</li>
            <li>
              We receive credible information that your medical registration is suspended, lapsed,
              or revoked
            </li>
            <li>
              We receive a patient complaint involving potential patient harm, fraud, or ethical
              violation
            </li>
            <li>You provide false information during registration or at any subsequent time</li>
            <li>You engage in any prohibited activity under Clause 4.5</li>
            <li>A court, regulator, or law enforcement authority directs us to do so</li>
            <li>
              We determine, at our sole discretion, that continued access poses a risk to patients
              or platform integrity
            </li>
          </ul>
          <p>
            Termination for breach does not entitle you to any refund. Outstanding obligations,
            indemnification duties, and liability continue after termination.
          </p>

          {/* Section 11 */}
          <h2 id="dispute-resolution">11. Dispute Resolution</h2>

          <h3 id="mandatory-notice">11.1 Mandatory Notice</h3>
          <p>
            Before initiating any formal proceeding, you must provide written notice to us at{" "}
            <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a> specifying the nature of
            the dispute and the remedy sought. We will attempt resolution within 30 days.
          </p>

          <h3 id="arbitration">11.2 Binding Arbitration</h3>
          <p>
            All disputes not resolved informally shall be referred to binding arbitration under the
            Arbitration and Conciliation Act, 1996. Arbitration shall be conducted by a sole
            arbitrator in English. The seat of arbitration shall be Udaipur, Rajasthan India. The
            award shall be final and binding on both parties.
          </p>

          <h3 id="governing-law">11.3 Governing Law</h3>
          <p>
            These Terms are governed by the laws of India. Subject to arbitration, courts at
            Udaipur, Rajasthan shall have exclusive jurisdiction.
          </p>

          {/* Section 12 */}
          <h2 id="general-provisions">12. General Provisions</h2>
          <ul>
            <li>
              <strong>Entire Agreement:</strong> These Terms, the Privacy Policy, and any
              Subscription Agreement constitute the complete agreement between the parties.
            </li>
            <li>
              <strong>Severability:</strong> If any provision is found unenforceable, the remainder
              continues in full force.
            </li>
            <li>
              <strong>No Waiver:</strong> Failure to enforce any right is not a waiver of that
              right.
            </li>
            <li>
              <strong>Assignment:</strong> You may not assign your rights without our written
              consent. We may assign freely in connection with a business transfer.
            </li>
            <li>
              <strong>Amendments:</strong> We may update these Terms with 15 days prior notice.
              Continued use constitutes acceptance.
            </li>
            <li>
              <strong>Contact:</strong>{" "}
              <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a>{" "}
              |{" "}
              <a href="tel:+919509647637">+91 95096 47637</a>{" "}
              |{" "}
              <a href="https://queuetoken.in" target="_blank" rel="noopener noreferrer">
                www.queuetoken.in
              </a>
            </li>
          </ul>

          {/* Section 13 */}
          <h2 id="grievance-officer">13. Grievance Redressal Officer</h2>
          <p>
            Pursuant to the IT Act, Intermediary Guidelines, and Consumer Protection (E-Commerce)
            Rules, 2020:
          </p>
          <ul>
            <li>
              <strong>Company:</strong> Codetown Technologies &amp; Bliss Technologies.
            </li>
            <li>
              <strong>Grievance Officer:</strong> As designated by Codetown Technologies &amp; Bliss
              Technologies
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
              <strong>Response:</strong> Acknowledgement within 24 hours; resolution within 30 days
            </li>
            <li>
              <strong>Jurisdiction:</strong> Udaipur, Rajasthan, India
            </li>
          </ul>

        </div>
      </main>

      <Footer />
    </div>
  );
}
