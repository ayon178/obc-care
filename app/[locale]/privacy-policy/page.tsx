"use client"

import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/footer"
import { useTranslations } from "next-intl"

export default function PrivacyPolicyPage() {
  const t = useTranslations("Footer") // Reusing footer translations for common items if needed, mostly for Navbar/Footer context

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-28 md:pt-24 lg:pt-36 md:pb-28">
        <div className="max-w-4xl mx-auto prose prose-slate md:prose-lg lg:prose-xl">
          <h1 className="headingFont text-[#194479] font-bold">Privacy Policy</h1>
          
          <p className="paragraphFont text-gray-700">
            We are very pleased that you have shown interest in our enterprise. Data protection is a particularly high priority for the management of OBC CARE e.K. The use of the Internet pages of OBC CARE e.K. is possible without any indication of personal data; however, if a data subject wishes to use special enterprise services via our website, processing of personal data may become necessary.
          </p>
          <p className="paragraphFont text-gray-700">
            If the processing of personal data is necessary and there is no statutory basis for such processing, we generally obtain consent from the data subject.
          </p>
          <p className="paragraphFont text-gray-700">
            The processing of personal data, such as the name, address, e-mail address, or telephone number of a data subject, shall always be carried out in accordance with the General Data Protection Regulation (GDPR) and in compliance with the country-specific data protection regulations applicable to OBC CARE e.K.
          </p>
          <p className="paragraphFont text-gray-700">
            By means of this data protection declaration, our enterprise would like to inform the general public of the nature, scope, and purpose of the personal data we collect, use, and process. Furthermore, data subjects are informed of the rights to which they are entitled.
          </p>
          <p className="paragraphFont text-gray-700">
            As the controller, OBC CARE e.K. has implemented numerous technical and organizational measures to ensure the most complete protection of personal data processed through this website. However, Internet-based data transmissions may in principle have security gaps, so absolute protection cannot be guaranteed. For this reason, every data subject is free to transfer personal data to us via alternative means, e.g. by telephone.
          </p>

          <h2 className="headingFont text-[#194479] font-semibold mt-8">1. Definitions</h2>
          <p className="paragraphFont text-gray-700">
            The data protection declaration of OBC CARE e.K. is based on the terms used by the European legislator for the adoption of the GDPR. Our data protection declaration is intended to be clear and understandable for the general public, customers, and business partners.
          </p>

          <ul className="list-none space-y-4 pl-0">
            <li>
              <strong className="text-[#194479]">a) Personal data</strong><br/>
              Personal data means any information relating to an identified or identifiable natural person (“data subject”).
            </li>
            <li>
              <strong className="text-[#194479]">b) Data subject</strong><br/>
              A data subject is any identified or identifiable natural person whose personal data is processed by the controller.
            </li>
            <li>
              <strong className="text-[#194479]">c) Processing</strong><br/>
              Processing is any operation performed on personal data, whether or not by automated means, such as collection, recording, organisation, storage, use, disclosure, restriction, erasure, or destruction.
            </li>
            <li>
              <strong className="text-[#194479]">d) Restriction of processing</strong><br/>
              Restriction of processing is the marking of stored personal data with the aim of limiting its processing in the future.
            </li>
            <li>
              <strong className="text-[#194479]">e) Profiling</strong><br/>
              Profiling means any form of automated processing of personal data used to evaluate personal aspects relating to a natural person.
            </li>
            <li>
              <strong className="text-[#194479]">f) Pseudonymisation</strong><br/>
              Pseudonymisation is the processing of personal data in such a manner that it can no longer be attributed to a specific data subject without additional information.
            </li>
            <li>
              <strong className="text-[#194479]">g) Controller</strong><br/>
              The controller is the natural or legal person who determines the purposes and means of the processing of personal data.
            </li>
            <li>
              <strong className="text-[#194479]">h) Processor</strong><br/>
              A processor is a natural or legal person who processes personal data on behalf of the controller.
            </li>
             <li>
              <strong className="text-[#194479]">i) Recipient</strong><br/>
              A recipient is a natural or legal person to whom personal data is disclosed.
            </li>
             <li>
              <strong className="text-[#194479]">j) Third party</strong><br/>
              A third party is any person or body other than the data subject, controller, or processor.
            </li>
             <li>
              <strong className="text-[#194479]">k) Consent</strong><br/>
              Consent is any freely given, specific, informed, and unambiguous indication of the data subject’s wishes to agree to the processing of personal data.
            </li>
          </ul>

          <h2 className="headingFont text-[#194479] font-semibold mt-8">2. Name and Address of the Controller</h2>
          <p className="paragraphFont text-gray-700">
            Controller for the purposes of the General Data Protection Regulation (GDPR) and other applicable data protection laws is:
          </p>
          <address className="not-italic paragraphFont text-gray-700 bg-gray-50 p-4 rounded-lg border-l-4 border-[#91c73e]">
            <strong>OBC CARE e.K.</strong><br/>
            Birkenhöhenweg 17<br/>
            51465 Bergisch Gladbach, Germany<br/>
            Email: <a href="mailto:request@obc-care.com" className="text-[#194479] hover:underline">request@obc-care.com</a><br/>
            Phone: <a href="tel:+4922739431564" className="text-[#194479] hover:underline">+49 227 394 315 64</a>
          </address>

          <h2 className="headingFont text-[#194479] font-semibold mt-8">3. Cookies</h2>
          <p className="paragraphFont text-gray-700">
            The Internet pages of OBC CARE e.K. use cookies. Cookies are text files that are stored on a computer system via an Internet browser.
          </p>
          <p className="paragraphFont text-gray-700">
            Many Internet sites and servers use cookies. Many cookies contain a so-called cookie ID. A cookie ID is a unique identifier consisting of a character string that allows Internet pages and servers to associate the cookie with a specific Internet browser. This enables visited websites and servers to distinguish an individual browser from others that contain different cookies. A specific Internet browser can be recognized and identified using this unique cookie ID.
          </p>
          <p className="paragraphFont text-gray-700">
            Through the use of cookies, OBC CARE e.K. can provide users of this website with more user-friendly services that would not be possible without the use of cookies.
          </p>
          <p className="paragraphFont text-gray-700">
             By means of a cookie, the information and offers on our website can be optimized with the user in mind. Cookies help us recognize users of our website, which makes it easier for them to navigate and use our services. For example, users do not need to re-enter access data each time they visit the website, as this information is stored by cookies on the user’s computer system. Another example is a shopping cart cookie, which allows an online store to remember items placed in a virtual shopping cart.
          </p>
          <p className="paragraphFont text-gray-700">
             The data subject may, at any time, prevent the setting of cookies through appropriate settings in their Internet browser and may permanently refuse the setting of cookies. Additionally, cookies that have already been set may be deleted at any time via an Internet browser or other software programs. This is possible in all commonly used Internet browsers.
          </p>
           <p className="paragraphFont text-gray-700">
             If the data subject deactivates cookies in the Internet browser, not all functions of this website may be fully available.
          </p>

          <h2 className="headingFont text-[#194479] font-semibold mt-8">Collection of General Data and Information</h2>
          <p className="paragraphFont text-gray-700">
             The website of OBC CARE e.K. collects a series of general data and information whenever a data subject or an automated system accesses the website. This general data and information are stored in the server log files. The data collected may include the browser types and versions used, the operating system used by the accessing system, the website from which an accessing system reaches our website (so-called referrers), the sub-websites accessed, the date and time of access to the Internet site, the Internet Protocol (IP) address, the Internet service provider of the accessing system, as well as other similar data and information that may be required in the event of attacks on our information technology systems.
          </p>
          <p className="paragraphFont text-gray-700">
             When using these general data and information, OBC CARE e.K. does not draw any conclusions about the identity of the data subject. Instead, this information is required to ensure the correct delivery of website content, to optimize the content and presentation of our website and related communications, to guarantee the long-term functionality and security of our information technology systems and website infrastructure, and to provide law enforcement authorities with the information necessary for criminal prosecution in the event of a cyber-attack. For these purposes, OBC CARE e.K. analyzes the collected data and information anonymously and statistically in order to enhance data protection and data security within the enterprise and to ensure an appropriate level of protection for the personal data processed. The anonymous data contained in the server log files are stored separately from any personal data provided by a data subject.
          </p>

           <h2 className="headingFont text-[#194479] font-semibold mt-8">5. Contact Possibility via the Website</h2>
           <p className="paragraphFont text-gray-700">
             The website of OBC CARE e.K. contains information that enables quick electronic contact with our enterprise, as well as direct communication with us. This includes a general electronic mail (e-mail) address. If a data subject contacts the controller by e-mail or via a contact form, the personal data transmitted by the data subject are automatically stored.
           </p>
           <p className="paragraphFont text-gray-700">
             Such personal data are provided voluntarily by the data subject and are stored for the purpose of processing the inquiry or contacting the data subject. There is no transfer of this personal data to third parties.
           </p>

           <h2 className="headingFont text-[#194479] font-semibold mt-8">6. Routine Erasure and Blocking of Personal Data</h2>
           <p className="paragraphFont text-gray-700">
             The controller processes and stores the personal data of the data subject only for the period necessary to achieve the purpose of storage, or insofar as this is permitted by the European legislator or other legislators under laws or regulations to which OBC CARE e.K. is subject.
           </p>
           <p className="paragraphFont text-gray-700">
             If the purpose for storage no longer applies, or if a statutory retention period prescribed by the European legislator or another competent authority expires, the personal data are routinely blocked or erased in accordance with applicable legal requirements.
           </p>

           <h2 className="headingFont text-[#194479] font-semibold mt-8">7. Rights of the Data Subject</h2>
            <ul className="list-none space-y-4 pl-0">
               <li>
                <strong className="text-[#194479]">a) Right of Confirmation</strong><br/>
                Each data subject has the right granted by the European legislator to obtain confirmation from the controller as to whether or not personal data concerning him or her are being processed. If a data subject wishes to exercise this right, he or she may contact any employee of OBC CARE e.K. at any time.
               </li>
               <li>
                <strong className="text-[#194479]">b) Right of Access</strong><br/>
                Each data subject has the right to obtain free information about his or her personal data stored by the controller and a copy of such data. In addition, the data subject has the right to access information regarding the purposes of processing, the categories of personal data concerned, the recipients or categories of recipients, the envisaged storage period, the existence of rights to rectification, erasure, restriction, or objection, the right to lodge a complaint with a supervisory authority, the source of the data if not collected directly, and the existence of automated decision-making, including profiling, pursuant to Article 22 GDPR.<br/>
                Where personal data are transferred to a third country or an international organisation, the data subject has the right to be informed of the appropriate safeguards relating to such transfer. This right may be exercised at any time by contacting OBC CARE e.K..
               </li>
                <li>
                <strong className="text-[#194479]">c) Right to Rectification</strong><br/>
                Each data subject has the right to obtain the rectification of inaccurate personal data without undue delay. Taking into account the purposes of processing, the data subject also has the right to have incomplete personal data completed. This right may be exercised by contacting OBC CARE e.K. at any time.
               </li>
               <li>
                <strong className="text-[#194479]">d) Right to Erasure (Right to Be Forgotten)</strong><br/>
                Each data subject has the right to obtain the erasure of personal data without undue delay where the personal data are no longer necessary, consent is withdrawn, processing is objected to, the data were unlawfully processed, erasure is required for legal compliance, or the data were collected in relation to information society services pursuant to Article 8 GDPR.<br/>
                If one of these grounds applies, the data subject may request erasure by contacting OBC CARE e.K., and the request will be handled promptly. Where personal data have been made public, OBC CARE e.K. shall take reasonable steps to inform other controllers of the erasure request, taking into account available technology and implementation costs.
               </li>
               <li>
                <strong className="text-[#194479]">e) Right of Restriction of Processing</strong><br/>
                Each data subject has the right to request restriction of processing where the accuracy of data is contested, processing is unlawful but erasure is opposed, the data are required for legal claims, or an objection to processing is pending verification. This right may be exercised by contacting OBC CARE e.K..
               </li>
               <li>
                <strong className="text-[#194479]">f) Right to Data Portability</strong><br/>
                 Each data subject has the right to receive personal data provided to a controller in a structured, commonly used, and machine-readable format and to transmit those data to another controller, where processing is based on consent or contract and carried out by automated means. Where technically feasible, the data subject may request direct transmission between controllers. Requests may be made to OBC CARE e.K. at any time.
               </li>
               <li>
                <strong className="text-[#194479]">g) Right to Object</strong><br/>
                Each data subject has the right to object at any time to processing of personal data based on Article 6(1)(e) or (f) GDPR, including profiling. OBC CARE e.K. will cease processing unless compelling legitimate grounds exist. Where personal data are processed for direct marketing purposes, the data subject has an unconditional right to object, after which processing will cease. Objections may also apply to research or statistical processing unless required for public interest. This right may be exercised at any time.
               </li>
                <li>
                <strong className="text-[#194479]">h) Automated Individual Decision-Making, Including Profiling</strong><br/>
                Each data subject has the right not to be subject to decisions based solely on automated processing that produce legal or similarly significant effects, unless such processing is necessary for contract performance, authorized by law, or based on explicit consent. In such cases, OBC CARE e.K. ensures safeguards including the right to human intervention, expression of viewpoint, and contesting the decision.
               </li>
               <li>
                <strong className="text-[#194479]">i) Right to Withdraw Consent</strong><br/>
                Each data subject has the right to withdraw consent to the processing of personal data at any time. Withdrawal does not affect the lawfulness of processing prior to withdrawal. This right may be exercised by contacting OBC CARE e.K..
               </li>
            </ul>

            <h2 className="headingFont text-[#194479] font-semibold mt-8">8. Data Protection Provisions Regarding the Application and Use of Facebook</h2>
            <p className="paragraphFont text-gray-700">
              This website integrates components of the social network Facebook. Facebook is a social network that enables users to create profiles, upload photos, and interact through friend requests and other features.
            </p>
            <p className="paragraphFont text-gray-700">
              The operating company of Facebook is Meta Platforms, Inc., 1 Hacker Way, Menlo Park, CA 94025, USA. For users outside the United States or Canada, the controller is Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland.
            </p>
             <p className="paragraphFont text-gray-700">
              Each time a data subject accesses a page of this website containing a Facebook component (plug-in), the browser automatically downloads the Facebook component. During this process, Facebook becomes aware of the specific sub-page visited.
            </p>
            <p className="paragraphFont text-gray-700">
              If the data subject is logged into Facebook at the same time, Facebook associates the visit with the user’s Facebook account. If the data subject interacts with the Facebook plug-in, such as clicking the “Like” button or posting a comment, this information is transmitted to Facebook and stored there.
            </p>
            <p className="paragraphFont text-gray-700">
              Further information about Facebook’s data protection practices is available in <a href="https://www.facebook.com/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#194479] underline">Facebook’s Privacy Policy</a>.
            </p>
             <p className="paragraphFont text-gray-700">
              Facebook always receives information, through the Facebook component, about a visit to our website by the data subject whenever the data subject is logged into Facebook at the same time as accessing our website. This occurs regardless of whether the data subject clicks on the Facebook component. If the data subject does not wish such information to be transmitted to Facebook, this may be prevented by logging out of the Facebook account prior to accessing our website.
            </p>
            <p className="paragraphFont text-gray-700">
              The data protection guidelines published by Facebook, which are available at <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[#194479] underline">Meta Privacy Policy - How Meta collects and uses user data</a>, provide information about the collection, processing, and use of personal data by Facebook. These guidelines also explain the available settings Facebook offers to protect the privacy of data subjects. In addition, various configuration options and browser applications are available that allow the prevention or limitation of data transmission to Facebook. Such tools may be used by the data subject to restrict or eliminate the transmission of personal data to Facebook.
            </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
