import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms and Conditions | Queue Token Patient",
  description:
    "Terms and Conditions for Queue Token Patient App — Smart Doctor Appointment & Queue Token Management System",
};

export default function PatientTermsAndConditionsPage() {
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
            <strong>LEGALLY BINDING AGREEMENT:</strong> BY REGISTERING, DOWNLOADING, OR USING THE
            QUEUE TOKEN PATIENT APP, YOU ENTER INTO A BINDING LEGAL CONTRACT WITH CODETOWN
            TECHNOLOGIES &amp; BLISS TECHNOLOGIES. READ THESE TERMS CAREFULLY. IF YOU DO NOT
            AGREE, DO NOT USE THE APP. YOUR USE OF THE APP CONSTITUTES YOUR ACCEPTANCE OF THESE
            TERMS.
          </p>
        </div>

        {/* Terms body */}
        <div className="prose prose-slate max-w-none">

          {/* Section 1 */}
          <h2 id="definitions">1. Definitions</h2>
          <ul>
            <li>
              <strong>
                &ldquo;Queue Token&rdquo; / &ldquo;Platform&rdquo; / &ldquo;Patient App&rdquo;
              </strong>{" "}
              &mdash; the Queue Token Patient mobile application operated by Codetown Technologies
              and Bliss Technologies
            </li>
            <li>
              <strong>
                &ldquo;Codetown Technologies&rdquo; / &ldquo;Bliss Technologies&rdquo; /
                &ldquo;Company&rdquo; / &ldquo;we&rdquo; / &ldquo;us&rdquo; / &ldquo;our&rdquo;
              </strong>{" "}
              - Codetown Technologies and Bliss Technologies.
            </li>
            <li>
              <strong>
                &ldquo;Patient User&rdquo; / &ldquo;you&rdquo;
              </strong>{" "}
              - any individual who registers on the Patient App to book medical appointments.
            </li>
            <li>
              <strong>&ldquo;Doctor User&rdquo;</strong> - a registered medical practitioner or
              clinic who uses the Queue Token Doctor App.
            </li>
            <li>
              <strong>&ldquo;Appointment&rdquo;</strong> - a medical consultation booking made by
              you with a Doctor User through the Platform.
            </li>
            <li>
              <strong>&ldquo;Queue Token&rdquo;</strong> - the unique sequential number assigned
              to you upon confirmed booking, indicating your position in the appointment queue.
            </li>
            <li>
              <strong>&ldquo;Services&rdquo;</strong> - all features provided by the Patient App
              including clinic discovery, appointment booking, token tracking, and related
              features.
            </li>
          </ul>

          {/* Section 2 */}
          <h2 id="eligibility">2. Eligibility</h2>
          <ul>
            <li>
              You must be at least 18 years of age, OR a parent/guardian booking on behalf of a
              minor
            </li>
            <li>
              You must have a valid Indian mobile number for OTP-based authentication
            </li>
            <li>
              You must have the legal capacity to enter into binding contracts under the Indian
              Contract Act, 1872
            </li>
            <li>You must provide accurate registration information</li>
          </ul>
          <p>
            If you are booking on behalf of a minor, you as the parent/guardian are fully
            responsible for all obligations under these Terms in respect of that booking.
          </p>

          {/* Section 3 */}
          <h2 id="platform-disclaimer">
            3. Nature of the Platform &mdash; Critical Disclaimer
          </h2>
          <p>
            <strong>
              QUEUE TOKEN IS A TECHNOLOGY SCHEDULING PLATFORM ONLY. IT IS NOT A HEALTHCARE
              PROVIDER, MEDICAL PRACTICE, HOSPITAL, OR HEALTH INFORMATION SERVICE. THE COMPANY
              DOES NOT PROVIDE MEDICAL ADVICE, DIAGNOSIS, TREATMENT, OR MEDICAL CONSULTATION OF
              ANY KIND. ALL MEDICAL SERVICES ARE PROVIDED EXCLUSIVELY BY THE INDEPENDENT DOCTOR
              USER WITH WHOM YOU BOOK AN APPOINTMENT. THE COMPANY IS NOT RESPONSIBLE FOR ANY
              MEDICAL OUTCOME, MISDIAGNOSIS, ADVERSE REACTION, HARM, OR INJURY ARISING FROM YOUR
              CONSULTATION WITH ANY DOCTOR USER.
            </strong>
          </p>
          <p>
            <strong>
              MEDICAL EMERGENCY: DO NOT USE THIS APP IN A MEDICAL EMERGENCY. CALL 112 (NATIONAL
              EMERGENCY) OR GO DIRECTLY TO THE NEAREST HOSPITAL EMERGENCY ROOM. THIS APP IS FOR
              SCHEDULED, NON-EMERGENCY APPOINTMENTS ONLY.
            </strong>
          </p>

          {/* Section 4 */}
          <h2 id="obligations">4. Patient User Obligations</h2>
          <p>
            By using the Patient App, you represent, warrant, and agree to the following:
          </p>

          <h3 id="accurate-information">4.1 Accurate Information</h3>
          <ul>
            <li>
              You will provide accurate, current, and truthful personal information during
              registration and appointment booking
            </li>
            <li>
              You will accurately describe your medical symptoms/problems during booking - false
              or exaggerated descriptions may affect the quality of care you receive and are your
              sole responsibility
            </li>
            <li>
              You will promptly update your profile if any information changes
            </li>
          </ul>

          <h3 id="genuine-booking">4.2 Genuine Booking Intent</h3>
          <ul>
            <li>
              You will book appointments only with genuine intent to attend at the confirmed time
            </li>
            <li>
              You will not book multiple simultaneous appointments at different clinics for the
              same time slot
            </li>
            <li>
              You will not book appointments on behalf of others without their knowledge and
              consent (except for minors in your care or family members with their consent)
            </li>
            <li>
              You acknowledge that repeatedly booking and not attending (no-shows) wastes medical
              resources and may result in account suspension
            </li>
          </ul>

          <h3 id="attendance-conduct">4.3 Attendance and Conduct</h3>
          <ul>
            <li>
              You will arrive at the clinic in a timely manner relative to your Queue Token
              estimated time (recommended: 15 minutes before)
            </li>
            <li>
              You understand that the estimated appointment time is a computed estimate only and
              may vary due to clinical requirements, emergencies, or delays - you will not hold the
              Company or the Doctor User liable for reasonable variations
            </li>
            <li>
              You will treat Doctor Users, clinic staff, and other patients with respect and
              dignity at all times
            </li>
            <li>
              You will follow the clinic&apos;s internal rules and procedures upon arrival
            </li>
          </ul>

          <h3 id="payment-obligation">4.4 Payment Obligation</h3>
          <ul>
            <li>
              You are solely responsible for paying the consultation fee directly to the Doctor
              User as displayed on their profile
            </li>
            <li>
              The Company is not a party to any payment transaction between you and the Doctor
              User
            </li>
            <li>
              Payment disputes are exclusively between you and the Doctor User - the Company has
              no liability in this regard
            </li>
            <li>
              If the Doctor User&apos;s profile displays a fee and you disagree, you must resolve
              this directly with the Doctor User before the appointment
            </li>
          </ul>

          <h3 id="account-security">4.5 Account Security</h3>
          <ul>
            <li>
              You are solely responsible for maintaining the security of your account, OTP, and
              registered device
            </li>
            <li>You must not share your OTP or login credentials with any person</li>
            <li>
              Any activity conducted through your account is your legal responsibility, whether or
              not you authorised it
            </li>
            <li>
              You must notify us immediately at{" "}
              <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a> if you suspect
              unauthorised use of your account
            </li>
          </ul>

          <h3 id="prohibited-conduct">4.6 Prohibited Conduct</h3>
          <p>
            You must <strong>NOT</strong>:
          </p>
          <ul>
            <li>Use the Platform for any unlawful purpose</li>
            <li>
              Submit false, defamatory, or misleading information about any Doctor User
            </li>
            <li>
              Attempt to reverse-engineer, hack, or interfere with the Platform
            </li>
            <li>
              Use the Platform to harass, threaten, or intimidate any Doctor User or other user
            </li>
            <li>Create multiple accounts or use another person&apos;s account</li>
            <li>Use automated tools or bots to interact with the Platform</li>
            <li>Submit fraudulent, duplicate, or malicious bookings</li>
          </ul>
          <p>
            Violation will result in immediate account suspension, permanent termination, and may
            result in legal action.
          </p>

          {/* Section 5 */}
          <h2 id="cancellations">5. Cancellations and No-Shows</h2>

          <h3 id="cancellation-by-you">5.1 Cancellation by You</h3>
          <ul>
            <li>
              You may cancel an appointment through the Patient App before the scheduled
              appointment time
            </li>
            <li>
              Cancellation does not automatically entitle you to a refund of any consultation fee
              paid to the Doctor User - such refunds are governed solely by the Doctor User&apos;s
              own refund policy
            </li>
            <li>
              The Company has no liability for the Doctor User&apos;s refund policy or any
              consultation fee dispute.
            </li>
          </ul>

          <h3 id="cancellation-by-doctor">5.2 Cancellation by Doctor User</h3>
          <ul>
            <li>
              A Doctor User may cancel or reschedule your appointment. The Platform will notify
              you, but ultimate responsibility for any rescheduling lies with the Doctor User
            </li>
            <li>
              The Company is not liable for any inconvenience, travel costs, loss of time, or
              other consequence of a Doctor User cancellation
            </li>
          </ul>

          <h3 id="no-shows">5.3 No-Shows</h3>
          <p>
            If you do not attend a confirmed appointment without cancelling, this constitutes a
            no-show. Repeated no-shows waste healthcare resources. The Company reserves the right
            to impose a temporary booking restriction on accounts with excessive no-shows.
          </p>

          {/* Section 6 */}
          <h2 id="queue-token-disclaimer">
            6. Queue Token and Estimated Time &mdash; Critical Disclaimer
          </h2>
          <p>
            <strong>
              THE QUEUE TOKEN ESTIMATED APPOINTMENT TIME IS A COMPUTED ESTIMATE ONLY. IT IS NOT A
              GUARANTEED APPOINTMENT TIME. ACTUAL CONSULTATION TIMES DEPEND ON CLINICAL
              COMPLEXITY, EMERGENCIES, DOCTOR DELAYS, AND OTHER FACTORS BEYOND THE COMPANY&apos;S
              CONTROL. THE COMPANY MAKES NO REPRESENTATION OR WARRANTY REGARDING THE ACCURACY OF
              ESTIMATED TIMES. YOU MUST NOT MAKE CRITICAL TRAVEL OR WORK ARRANGEMENTS BASED
              SOLELY ON ESTIMATED TIMES SHOWN IN THE APP.
            </strong>
          </p>

          {/* Section 7 */}
          <h2 id="medical-disclaimer">7. Medical Responsibility Disclaimer</h2>
          <p>
            <strong>
              THE COMPANY BEARS ABSOLUTELY NO RESPONSIBILITY FOR: (I) THE QUALITY, ACCURACY,
              SAFETY, OR OUTCOME OF ANY MEDICAL CONSULTATION OR TREATMENT PROVIDED BY A DOCTOR
              USER; (II) ANY MISDIAGNOSIS, INCORRECT PRESCRIPTION, MEDICAL NEGLIGENCE, OR HARM
              CAUSED BY A DOCTOR USER; (III) ANY DECISION YOU MAKE REGARDING YOUR HEALTH BASED ON
              INFORMATION OR SERVICES RECEIVED FROM A DOCTOR USER; (IV) THE ACCURACY OF
              QUALIFICATIONS DISPLAYED BY A DOCTOR USER ON THEIR PROFILE. YOUR SOLE LEGAL REMEDY
              FOR MEDICAL NEGLIGENCE IS AGAINST THE TREATING DOCTOR USER, NOT AGAINST CODETOWN
              TECHNOLOGIES &amp; BLISS TECHNOLOGIES.
            </strong>
          </p>
          <p>
            You acknowledge that the Company is an intermediary under the IT Act, 2000 and does
            not verify the real-time competence or clinical performance of any Doctor User.
          </p>

          {/* Section 8 */}
          <h2 id="limitation-of-liability">8. Limitation of Liability</h2>
          <p>
            <strong>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN LAW, THE COMPANY&apos;S
              AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS UNDER THESE TERMS SHALL BE LIMITED TO INR
              1,000 (ONE THOUSAND RUPEES ONLY), BEING THE MAXIMUM AMOUNT REFLECTIVE OF THE FACT
              THAT THE PATIENT APP IS PROVIDED FREE OF CHARGE. THE COMPANY SHALL NOT BE LIABLE FOR
              ANY INDIRECT, CONSEQUENTIAL, SPECIAL, INCIDENTAL, OR PUNITIVE DAMAGES, INCLUDING
              LOSS OF HEALTH OPPORTUNITY, MEDICAL EXPENSES, OR TRAVEL COSTS.
            </strong>
          </p>
          <p>
            Nothing in this clause excludes liability for fraud, wilful misconduct, death, or
            personal injury caused by our own negligence, or any liability that cannot be excluded
            under the Consumer Protection Act, 2019.
          </p>

          {/* Section 9 */}
          <h2 id="indemnification">9. Your Indemnification Obligation</h2>
          <p>
            <strong>
              YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS CODETOWN TECHNOLOGIES &amp; BLISS
              TECHNOLOGIES, ITS DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS FROM ANY CLAIMS,
              LOSSES, LIABILITIES, COSTS, AND LEGAL FEES ARISING FROM: (I) YOUR USE OF THE
              PLATFORM; (II) YOUR BREACH OF THESE TERMS; (III) ANY FALSE, MISLEADING, OR
              DEFAMATORY INFORMATION YOU SUBMIT; (IV) YOUR FRAUDULENT OR MALICIOUS BOOKING
              ACTIVITY; OR (V) ANY THIRD-PARTY CLAIM RELATED TO YOUR CONDUCT ON THE PLATFORM.
            </strong>
          </p>

          {/* Section 10 */}
          <h2 id="consumer-rights">
            10. Patient Rights Under Consumer Protection Act, 2019
          </h2>
          <p>
            Nothing in these Terms diminishes your rights as a consumer under the Consumer
            Protection Act, 2019 (&ldquo;CPA 2019&rdquo;). As a patient, you retain the following
            rights:
          </p>
          <ul>
            <li>
              Right to seek redressal for deficiency in medical services from the appropriate
              Consumer Disputes Redressal Commission
            </li>
            <li>
              Right to information about the consultation fee before booking
            </li>
            <li>Right to safety from hazardous medical services</li>
            <li>
              Right to file a complaint against a Doctor User for medical negligence directly with
              the Consumer Forum
            </li>
          </ul>
          <p>
            To file a consumer complaint: National Consumer Helpline: 1800-11-4000 | e-Daakhil
            portal:{" "}
            <a
              href="https://edaakhil.nic.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              edaakhil.nic.in
            </a>
          </p>
          <p>
            Complaints regarding Doctor User medical conduct may also be filed with the NMC or
            the relevant State Medical Council.
          </p>

          {/* Section 11 */}
          <h2 id="termination">11. Termination</h2>

          <h3 id="termination-by-you">11.1 Termination by You</h3>
          <p>
            You may delete your account at any time through Profile Settings. All appointment data
            will be retained for the applicable legal period.
          </p>

          <h3 id="termination-by-us">11.2 Termination by Us</h3>
          <p>
            We may suspend or terminate your account immediately without prior notice if you
            breach any provision of these Terms, engage in fraudulent activity, or create a risk
            to other users or the Platform. We may also terminate accounts that have been inactive
            for 24 consecutive months.
          </p>

          {/* Section 12 */}
          <h2 id="dispute-resolution">12. Dispute Resolution</h2>

          <h3 id="informal-resolution">12.1 Informal Resolution</h3>
          <p>
            Contact us at{" "}
            <a href="mailto:queuetoken@gmail.com">queuetoken@gmail.com</a> first. We will attempt
            resolution within 30 days.
          </p>

          <h3 id="consumer-dispute">12.2 Consumer Dispute Option</h3>
          <p>
            As a consumer, you may file a complaint with the appropriate Consumer Disputes
            Redressal Commission under the CPA 2019, at any time, irrespective of any arbitration
            clause in these Terms.
          </p>

          <h3 id="arbitration">12.3 Arbitration for Non-Consumer Disputes</h3>
          <p>
            For disputes that are not consumer disputes under CPA 2019, parties agree to binding
            arbitration under the Arbitration and Conciliation Act, 1996. Seat: Udaipur,
            Rajasthan, India. Language: English.
          </p>

          <h3 id="governing-law">12.4 Governing Law</h3>
          <p>
            These Terms are governed by the laws of India. Courts at Udaipur, Rajasthan have
            exclusive jurisdiction.
          </p>

          {/* Section 13 */}
          <h2 id="general-provisions">13. General Provisions</h2>
          <ul>
            <li>
              <strong>Entire Agreement:</strong> These Terms and the Privacy Policy constitute the
              complete agreement between you and the Company for the Patient App.
            </li>
            <li>
              <strong>Severability:</strong> Invalid provisions do not affect the remainder.
            </li>
            <li>
              <strong>No Waiver:</strong> Failure to enforce a right is not a waiver.
            </li>
            <li>
              <strong>Amendments:</strong> Material changes notified 15 days in advance. Continued
              use = acceptance.
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

          {/* Section 14 */}
          <h2 id="grievance-officer">14. Grievance Officer</h2>
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
              <strong>Support Hours:</strong> 9:00 AM to 9:00 PM, Monday to Saturday
            </li>
            <li>
              <strong>Response:</strong> Acknowledgement within 24 hours; resolution within 30
              days
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
