import React from "react";
import NITLogo from "../../../../images/logo.jpg";

function TermsOfUse() {
    const styles = {
        container: {
            fontFamily: "Arial, sans-serif",
            maxWidth: "800px",
            margin: "0 auto",
            padding: "20px",
        },
        title: {
            fontSize: "24px",
            fontWeight: "bold",
            marginBottom: "20px",
        },
        sectionHeading: {
            fontSize: "20px",
            marginTop: "20px",
        },
        paragraph: {
            fontSize: "16px",
            lineHeight: "1.5",
            marginBottom: "10px",
        },
        logo: {
            marginLeft: "10px", // Adjust the margin as needed
            width: "70px", // Adjust the width as needed
            height: "auto", // Maintain aspect ratio
            verticalAlign: "middle", // Align the logo vertically in the text
        },

        listItem: {
            marginBottom: "5px",
        },
    };


    return (
        <div style={styles.container}>
            <div style={styles.titleContainer}>
                <h1>
                    <span>Terms of Use – NIT</span>
                    <img
                        src={NITLogo} // Replace "logo.png" with the actual path to your logo image
                        alt="Logo"
                        style={styles.logo}
                    />
                </h1>

                <h2>1.General</h2>
                <p>
                    In these Terms of Use, "we," "us," and "our" refer to NIT, and "NIT" refers to the internet sites at nit.com or any other site operated by us, together with the software and any information that can be accessed on those sites. References to "you" or "your" are references to the NIT user.
                </p>
                <p>
                    These Terms of Use set out the terms on which we grant you access to and use of NIT and constitute the entire agreement between you and us.
                </p>
                <p>
                    By accessing or using NIT, you agree to be bound by these Terms of Use. If you do not agree to these Terms of Use (or any revisions to the Terms of Use on NIT), you must not use NIT or any information obtained as a result of the use of NIT.
                </p>
                <p>
                    We plan to develop NIT over time, and these Terms of Use will apply to any changes to NIT. We reserve the right to revise these Terms of Use from time to time by updating the Terms of Use as displayed on NIT at any given time. You will be bound by any such revised Terms of Use. If you reasonably consider that a material change to these Terms of Use will have a material effect on you, then you may terminate your account in accordance with clause 8.5.
                </p>
                <p>
                    It is your obligation to ensure that you have read and agree to the most recent Terms of Use available on NIT. By registering for a NIT account, you acknowledge that you have read and understood these Terms of Use.
                </p>
                <p>
                    We reserve the right to accept or decline on any grounds we consider appropriate, any individual seeking to become a NIT user.
                </p>
                <p>
                    You may not use NIT or accept the Terms of Use if:
                </p>
                <ul>
                    <li>you are younger than 18; or</li>
                    <li>you are not of legal age to form a binding contract with NIT.</li>
                </ul>
            </div>
            <div className="section">
                <h2>2.Your Obligations</h2>
                <p>
                    You may only access and use NIT to manage your personal portfolios, and you are responsible for all activity on your account.
                </p>
                <p>
                    You must ensure that all information provided by you during the sign-up process is true and correct to the best of your knowledge and belief.
                </p>
                <p>
                    You must ensure that your access to and use of NIT is not illegal or prohibited by any laws that apply to you.
                </p>
                <p>
                    You must take your precautions to ensure that the process you employ for accessing NIT does not expose you to the risk of viruses or other forms of interference that may damage your systems or data. We take no responsibility for any such damage caused to your systems or data.
                </p>
                <p>
                    You must make reasonable efforts to investigate and diagnose technical problems before contacting us. If you still need technical support, please check the support provided online by us or contact NIT’s customer support, if this is available as part of your Subscription Plan. NIT has no obligation to provide customer support services to you for any third-party services or software not owned by us that integrates into NIT (Third Party Services).
                </p>
                <p>
                    You acknowledge that you are solely responsible for the accuracy of data that you enter into NIT and all results and analysis from your use of NIT.
                </p>
                <p>
                    You acknowledge that you are responsible for your use of NIT and for maintaining the confidentiality of passwords and any other information. You will immediately notify us of any unauthorized use of your account or any other breach of security that you become aware of. NIT may reset your password following a breach of security, and you must take all other actions that NIT reasonably deems necessary and advises to you.
                </p>
                <p>
                    You agree that if any data is provided to NIT by you, including data provided for or on behalf of any third party, all applicable consents (including privacy) have been obtained regarding the data. You agree that you have the right to disclose the data and the right to grant the use of such data to NIT.
                </p>
                <p>
                    When accessing and using NIT, you must:
                </p>
                <ul>
                    <li>not attempt to gain unauthorized access to any information, or attempt to undermine the security, integrity, or functionality of NIT;</li>
                    <li>not use, or misuse NIT in any way that may impair the functionality of NIT; and</li>
                    <li>not transmit, or input into NIT, any files that may damage any other person’s computing devices or software, content that may be offensive or material or data in violation of any law.</li>
                </ul>
                <p>
                    You agree that to the extent that you authorize a third party to access NIT or your NIT account on your behalf (an Account User):
                </p>
                <ul>
                    <li>you are responsible for controlling all Account Users’ level of access to NIT at all times;</li>
                    <li>you are responsible for all Account Users’ use of NIT, and we have no responsibility or liability for the actions of any Account User;</li>
                    <li>you are responsible for all Account Users’ access to data you have input into NIT, and you agree that we have no obligation to provide any person access to such data without your authorization or as required by law; and</li>
                    <li>we will not be a party to any dispute between you and an Account User for any reason.</li>
                </ul>
            </div>
            <div className="section">
                <h2>3.Our Obligations</h2>
                <p>
                    The data you enter will be governed in accordance with our Privacy Policy.
                </p>
                <p>
                    NIT uses ‘cookies’ and other measures to monitor traffic patterns and to serve you more efficiently when you visit NIT. Cookies do not contain information by which we can identify you, but they identify your computer to our servers. If you refuse cookies, some parts of NIT may not function properly.
                </p>
                <p>
                    We will ensure information submitted on the login and signup pages is transferred between you and our servers using HTTPS encryption or similar.
                </p>
                <p>
                    We will adhere to accepted industry practices and procedures for preventing data loss, including a daily system back-up regime, but do not make any guarantees that there will be no loss or corruption of data that you have input into NIT. We expressly exclude liability for any loss or corruption of data, no matter how caused. You should ensure that you keep up-to-date records of all your data inputted into NIT.
                </p>
                <p>
                    We intend that NIT should be available 99% of the time, 24 hours a day, seven days a week. However, it is possible that on occasions, NIT may be unavailable. If we have to interrupt your use or access to NIT for longer periods than we usually anticipate, we will use reasonable endeavors to publish in advance details of such activity on NIT in advance. We will have no liability to you for the unavailability of NIT.
                </p>
                <p>
                    We have no responsibility to any person other than you, and nothing in these Terms of Use confers a benefit to any person other than you.
                </p>
            </div>

            <div className="section">
                <h2>4.Fees and Charges</h2>
                <p>
                    We will charge you, and you agree to pay, the monthly or annual Subscription Fee for the level selected (the Subscription Plan) when subscribing to NIT (Subscription Fee) (if applicable). To the extent that your Subscription Plan does not require payment of a Subscription Fee, clauses 4.2 to 4.9 are not applicable to your Subscription Plan.
                </p>
                <p>
                    All fees and charges and all prices for access to NIT include GST where applicable.
                </p>
                <p>
                    You authorize us to invoice and receive payment from you in advance for Subscription Fees on a monthly or annual basis until termination of your NIT account, and you cease to use NIT or if you downgrade to a free Subscription Plan.
                </p>
                <p>
                    Your credit card details will be encrypted and securely stored by a third-party payment solutions provider approved by us. We will not store or have access to your credit card details. In supplying your credit card details to our payment services provider, you authorize us to invoice and the payment service provider to process payment of your Subscription Fees and any other outstanding amounts (as applicable) as they become due.
                </p>
                <p>
                    Invoices are calculated on a monthly or annual basis, based on the Subscription Plan selected. Where you upgrade your Subscription Plan, any additional costs payable by you will be prorated for the remaining period of the calendar month or year (as applicable) in which you upgrade your Subscription Plan, and you will be billed on the basis of whole calendar months or years (as applicable) going forward.
                </p>
                <p>
                    If we are unable to successfully process your credit card payment for the Subscription Fee, then we may notify you of the dishonored payment and cancel your subscription.
                </p>
                <p>
                    You must not pay or attempt to pay the Subscription Fee through any fraudulent or unlawful means.
                </p>
                <p>
                    No refunds or credits for your Subscription Fee will be provided if you elect to downgrade or terminate your Subscription Plan. In the case of a downgrade, the new Subscription Fee for the downgraded Subscription Plan will apply from the beginning of the calendar month or year following the month or year (as applicable) in which the Subscription Plan was downgraded.
                </p>
                <p>
                    Changing your Subscription Plan may cause a loss of content, features, or capacity of the service you receive on NIT, and we do not accept any liability for losses arising as a direct or indirect consequence of this.
                </p>
            </div>
            <div className="section">
                <h2>5.Intellectual Property</h2>
                <p>
                    We are the owners of all intellectual property rights used on or in connection with NIT, including (but not limited to) the copyright material, patents, and trademarks used on NIT.
                </p>
                <p>
                    We have no intellectual property rights in the data input by you into NIT, other than to hold and make it available for the purposes contemplated by these Terms of Use or for which it was provided.
                </p>
                <p>
                    No license is granted to any person in respect of the intellectual property rights used on NIT as a result of publication on NIT. If you wish to use any intellectual property of a third party, you will need to obtain the consent of that third party.
                </p>
                <p>
                    You agree and acknowledge that you will not adapt, reproduce, store, distribute, display, publish, or create derivative works from any information on NIT without our prior written permission (other than information which is your data as described in clause 3.1).
                </p>
                <p>
                    Unless otherwise stated, you are permitted to access, view, copy, print (in limited quantities) or temporarily store textual material published by us on NIT for your personal use. Any copyright notice on that information must be retained on the copy.
                </p>
            </div>

            <div className="section">
                <h2>6.Links to and from NIT</h2>
                <p>
                    From time to time, NIT may include embedded content from, and links to, other websites. Those websites are not under our control. The links and embedded content are provided for your convenience only. We do not endorse, and are not responsible for the content, validity, accuracy, or your use of those websites. You should check the terms and conditions of use of those websites before you use them.
                </p>
                <p>
                    You may not create a link to NIT from another website (other than to the home page) without our prior written consent, which may be given or withheld at our sole discretion.
                </p>
            </div>

            <div className="section">
                <h2>7.Disclaimer and Limitation of Liability</h2>
                <p>
                    We are not a financial product advisory service, and NIT does not provide financial product advice. The information provided on NIT is numeric information only based on publicly available data, data entered by the user, or data otherwise available to us. The information presented in the reports is derived from that information as a result of NIT’s performance methodology and commonly used calculations. This information is not a recommendation nor is it a statement of opinion. The information should not be relied upon for making investment decisions, and it is recommended that you seek your own independent financial advice before making any decisions in relation to your investments.
                </p>
                <p>
                    Although the NIT taxation reports may be used to compute taxation information, the information provided is not conclusive and does not constitute tax advice. NIT is not a registered tax agent and does not provide tax advice. You should consult an independent tax advisor for tax advice. You remain solely responsible for complying with all applicable accounting, tax, and other laws. It is your responsibility to check that storage and access to the data input into NIT will comply with the laws applicable to you.
                </p>
                <p>
                    To the maximum extent permitted by law, we disclaim all warranties, either express or implied, with respect to NIT, our performance methodology, and the information and reports referred to in clauses 7.1 and 7.2, including but not limited to, warranties of accuracy, non-infringement, completeness, timeliness, currency, accessibility, security, merchantability, or fitness for any particular purpose.
                </p>

            </div>



        </div>
    );
}

export default TermsOfUse;
