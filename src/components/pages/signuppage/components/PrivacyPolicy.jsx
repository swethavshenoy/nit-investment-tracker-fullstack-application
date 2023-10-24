import React from "react";
import NITLogo from "../../../../images/logo.jpg";

function PrivacyPolicy() {
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h1 style={{ margin: "0" }}>Privacy Policy - NIT</h1>
                <img
                    src={NITLogo}
                    alt="NIT Logo"
                    style={{ width: "70px", height: "auto", marginLeft: "10px" }}
                />
            </div>
            <p>
                Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information.
            </p>
            <h2>1. Information We Collect</h2>
            <p>
                - We collect information you provide when creating an account.
                <br />
                - We may collect usage data and cookies to improve our services.
            </p>
            <h2>2. How We Use Your Information</h2>
            <p>
                - We use your information to provide and personalize our services.
                <br />
                - We do not sell your personal information to third parties.
            </p>
            <h2>3. Security</h2>
            <p>
                - We take reasonable measures to protect your data, but no system can be completely secure.
            </p>

            {/* Additional content with "Sharesight" changed to "NIT" */}
            <h2>4. NIT Privacy Policy</h2>
            <p>
                This Privacy Policy applies to your use of NIT and our website. By visiting our site and using NIT, you accept our Privacy Policy.
            </p>
            <h2>5. NIT collects your personal data</h2>
            <p>
                NIT is an online share market investment portfolio management service. NIT stores information that is entered by you, automatically captured, or is imported at your request. That information can include personal data.
            </p>
            <h2>6. How we use the personal data we hold about you</h2>
            <p>
                We may use personal data we collect about you for the primary purpose for which it is collected and for other secondary purposes that are related to the primary purpose of collection.

                We generally use personal data we hold about you to:
                <ul>
                    <li>Provide you with products or services you have requested;</li>
                    <li>Communicate with you;</li>
                    <li>Provide you with ongoing news and information about our products and services;</li>
                    <li>Do other things necessary and incidental to the provision of products and services by us to you;</li>
                    <li>Produce and publish aggregated portfolio statistics; and/or</li>
                    <li>Help us manage and enhance our products and services.</li>
                </ul>
                We also use screen capturing software to analyze individual customer usage for the purpose of improving our user interface.
            </p>
            <h2>7. To whom we may disclose your personal data</h2>
            <p>
                We may disclose personal data we hold about you to a third party for any purpose that is directly or indirectly related to the normal use of NIT.

                If we sell our business, personal data may be part of the assets transferred to the purchaser.
            </p>
            <h2>8. Use of cookies and tracking technology</h2>
            <p>
                NIT uses 'cookies' and other measures to monitor traffic patterns and to serve you more efficiently when you visit the site. Cookies do not contain information by which we can identify you, but they identify your computer to our servers. We work with third-party advertisers to collect and use information about your use of the site to advertise NIT products that may be of interest to you.

                To 'opt out,' you may set your browser so that you are notified before a cookie is downloaded, and this will provide you with the opportunity to accept or reject it on each occasion. The help menu within your Internet browser will explain how to do this.
            </p>
            <h2>9. Credit card information</h2>
            <p>
                If you choose to pay by credit card, your details are encrypted and securely stored by Direct Payment Solutions Limited to allow your credit card to be billed on a recurring basis.

                NIT does not store your credit card details, and they cannot be accessed by NIT staff.
            </p>
            <h2>10. How we secure and manage your personal data</h2>
            <p>
                We protect the personal data we collect from misuse, loss, unauthorized access, modification, or disclosure by various means, including firewalls, password access, secure servers, and encryption of credit card transactions.

                It is your responsibility to keep your password safe.

                Your personal data may be transferred to, and processed in, countries other than the country you live in. For example, some of our data is hosted on AWS servers located in the U.S. If you are a non-U.S. resident, this means that your personal data will be transferred to the U.S.
            </p>
            <h2>11. How you can update and gain access to your personal data</h2>
            <p>
                You can update your personal data by logging into your account and changing your personal data at any time. If you are unable to update your personal data for any reason, you can contact us, and we will do it for you. NIT will provide you with your data on request.

                Paying subscribers who cancel their paid subscription will be downgraded to the NIT Free plan. Any of your data that is in excess of the Free plan allowance may be permanently deleted if you stop paying for the NIT service.

                Your data will be permanently deleted at your request.
            </p>
            <h2>12. Email opt-out</h2>
            <p>
                NIT will send you emails covering a variety of topics such as account activation, billing information, product updates, newsletters, share price alerts, and portfolio performance updates.

                Non-essential email communications will clearly describe how you can be removed from the mailing list.
            </p>
            <h2>13. Third party applications</h2>
            <p>
                NIT contains links enabling the electronic transfer of data within third-party applications. NIT takes no responsibility for the privacy practices or content of these applications.
            </p>
            <h2>14. Changes to this Privacy Policy</h2>
            <p>
                We reserve the right to make amendments to this Privacy Policy at any time. If you have objections to the Privacy Policy, you should not access or use NIT.
            </p>
            <h2>15. Terms of Use</h2>
            <p>
                This Privacy Policy is to be read in conjunction with NIT's Terms of Use.
            </p>
            <h2>16. How to contact us</h2>
            <p>
                To make an access request, please contact our Privacy Officer by:

                Email: contact@nit.com; or
                Post: PO Box 27063, Kosmo One, Chennai - 600054
            </p>
        </div>
    );
}

export default PrivacyPolicy;
