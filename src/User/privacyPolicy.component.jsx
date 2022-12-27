import "bootstrap/dist/css/bootstrap.min.css";
import Header from './header.component'
// import profile from  '../images/Rectangle  83.png'
import profileImg from '../images/Rectangle 83.png'

import Img1 from '../images/Rectangle 102.png'
import socialMediaImg1 from '../images/Vector.png'
import socialMediaImg2 from '../images/Vector (10).png'
import socialMediaImg3 from '../images/Vector (20).png'
import socialMediaImg4 from '../images/Vector (30).png'
import socialMediaImg5 from '../images/Vector (40).png'


function forgetpassword() {
    function verification() {
        window.open("/verification", "_self")
    }

    let BtnArray = ["Digital Visiting Card", "My Purchase", "Support & Help", "Privacy Policy", "Rating", "About"]

    function buttons(val) {
        return (
            <>
                <button className="btn btn-outline-secondary accountBtn">{val}</button>

            </>
        );
    }



    return (

        <div>

            <Header />

            <div className="BasicStyle">
                <div className="about">
                    <h5>◄ PRIVACY POLICY</h5>
                    {/* <img src={Img1} alt="" /> */}
                    <p>Music Book gathers information about you when you use our Services. This Privacy Policy ("Policy") describes the information collection, potential uses, potential sharing, as well as your legal rights. We are devoted to keeping our users' privacy secure. Other businesses you might deal with on or via the Music Book services, including those we do not own or control, are not covered by this Policy.
                    </p>
                    <br />
                    <p>Music Book gathers information about you when you use our Services. This Privacy Policy ("Policy") describes the information collection, potential uses, potential sharing, as well as your legal rights. We are devoted to keeping our users' privacy secure. Other businesses you might deal with on or via the Music Book services, including those we do not own or control, are not covered by this Policy.
                    </p>
                    <br />
                    <p>
                        Please take the time to read the Terms of Service, which outlines the rules that apply to the Services.
                    </p>
                    <br />
                    <p>
                        Music Book, Inc. and any of its subsidiaries are referred to as "Music Book" (or "we," "us," and "our") in this document. Please read the Privacy Notice for Indian Residents if you are a resident of India.
                    </p>

                    <ul>
                        <li>
                            Your email address, phone number, username, and password are among the basic account data that we gather. You will need this information in order for us to create your account and get you access to our Services. For our Service to be provided, this processing is required.
                        </li>
                        <li>
                            We also collect or extrapolate demographic data. We base this on our rightful interest in giving you a tailored experience with our Service.
                        </li>
                        <li>
                            Similar to this, if you use a third-party social network to access the Services, we will gather the information that you have given us permission to access, such as your name, user ID/URL, profile picture, age, list of friends, email address, phone number, and/or birthday, language preference, and/or geolocation. Such information from third-party social networks aids us in pursuing our legitimate interest in giving you a customized experience with our service, such as when it comes to making suggestions.
                        </li>
                        <li>
                            When you submit a picture, list your interests, favorite type of music, abilities, or other information to your profile, so we learn more about you. Due to our legitimate interests, this allows us to make recommendations and give you customized service.
                        </li>
                        <li>
                            We have a legitimate interest in learning about your recommendations, content creation, communications, and sharing so that we may work to enhance our service. This includes any communications you send, details about your own content creations, information about the people you follow, songs you enjoy or share, and comments you leave. Additionally, our apps monitor social interactions (e.g., what you listened to, what you loved, and your comments and invites).
                        </li>
                        <li>
                            If you send us feedback or support requests, you may also include extra information to help us contact you and handle your concerns. We may keep this information on file to improve our services.
                        </li>
                        <li>
                            You might have access to forums, message boards, blogs, and/or newsgroups using the Services. Please keep in mind that everything you publish (including in these places) has the potential to become public and may be removed or dealt with if it violates our Terms of Service and Community Guidelines. To assist deliver our Services, we make use of publicly accessible information. You might get unsolicited comments if you disclose personal information online that is visible to everyone. When considering whether to publish any of your personal information in a public arena, including inside our applications, you should use caution because it could be abused or misused by others.                    </li>
                        <li>
                            Your payment information is given to our payment processor when you buy a membership, virtual currency, or any other item made available through the Services. This is required in order to handle your payment. Although we presently outsource the processing of these payments, we might do so in the future.
                        </li>
                        <li>
                            To be clear, we do not ask for any sensitive personal information from you, including details on your racial or ethnic background, political leanings, religious or philosophical beliefs, union membership, physical or mental health, genetic information, or sexual preferences. However, if you want to disclose this information using Music Book Services, you hereby expressly consent to its display or distribution by Music Book in the manner you have chosen.
                        </li>


                    </ul>


                    <ol>
                        <h5>
                            <li>
                                Using your device and browser
                            </li>
                        </h5>
                        <ul>
                            <li>
                                When you use the Services, we gather information from your browser, computer, or mobile device that gives us technical information, such as:
                            </li>
                            <li>
                                In order to check if any of your contacts are using the Services or the App you are using, we will access your contacts on your device (including contact information your service provider(s) or app automatically added to your address book when you communicated with addresses or numbers not already on your list) if you choose to find your friends on Music Book. If they are, we'll advise you to do what they say (but whether you do or not is totally up to you). We'll automatically resend the most recent version of your contacts to our servers and give you an updated list of matches each time you access the contacts page in the Music Book app.
                            </li>
                            <li>
                                We automatically gather certain log data when you use the Services, including your IP address, browser type, hardware type, unique device ID, operating system version, and your activity within the Services. We utilize log data to enhance our services and for security reasons (such as preventing unauthorized access to the material) (such as enhancing site performance in certain regions).
                            </li>
                            <li>
                                Your mobile device's geolocation data is accessible to us. This enables us to display local activities and material based on your present location, provide locations for your posts and content, and share where you are in the world. Additionally, it enables us to deliver pertinent communications based on your location. Through your device, you can manage the collection of geolocation data.
                            </li>
                            <li>
                                We make use of third-party libraries, software development kits ("SDKs"), and cookies, which place small data files on your computer or mobile device. We use cookies to recognize you, determine your preferences, and your account's status and settings, collect user data, and present information that is tailored to your interests. We use cookies, for instance, to keep track of your volume preferences, language preferences, search history, account type, and the most recent time you accessed or updated your feed. To locate you and display content and advertising that is tailored to your interests, to monitor the success of that advertising, and to deliver and analyze their services, our advertising partners may use cookies and other similar technologies. We will request your permission to use cookies when you first access our services. You will be given the option to "Accept Cookies" or "Manage Cookies," as appropriate. You can pick the uses for which you agree to the use of cookies by selecting "Manage Cookies" from a list of the various categories of cookies that we employ.
                            </li>
                            <li>
                                Following that, you can manage your cookie preferences by clicking the "Manage Cookies" option on the Cookie Policy page. By choosing the right browser options, you can also limit the use of cookies. Please be aware, though, that if you disable cookies, you won't have access to many features that could make using our website and Services more convenient, and some of our Services might stop working altogether.
                            </li>

                        </ul>
                        <br />


                        <h5>
                            <li>
                                USE OF YOUR INFORMATION
                            </li>
                        </h5>

                        <ul>
                            <li>
                                We make use of the data we have to better our ability to offer, manage, comprehend, personalize, assist, and sell our Services.
                            </li>
                            <li>
                                We require specific information about you in order to register for a Music Book account.
                            </li>
                            <li>
                                Where permitted by applicable law, we may send you information about the Services, offer customer support, or alert you to new Music Book products and services using your email address and/or phone number. You can opt-out of receiving notifications from Music Book by using your account settings.
                            </li>
                            <li>
                                As we work to integrate our Services, we may use data from one Music Book App to enhance your experience in other Apps.
                            </li>
                            <li>
                                We gather data to better understand how you use the service and to improve your social connection with it by enabling features like friend-to-friend communication and notifications, chat or messaging, public leaderboards, head-to-head competition, and other similar ones. We attempt to only display social media items to you that we believe will be relevant to you.
                            </li>
                            <li>
                                We work hard to make improvements to both our services and your experience. We do this by using the data we already have to find ways to improve and engage the consumers of our Services. Inferring your interests from your interactions on the Services and the other data outlined in this policy.
                            </li>
                            <li>
                                By doing this, we can recognize and recommend material that you would enjoy as well as hone advertising, including off-site advertising.
                            </li>
                            <li>
                                We employ data to recognize and address potential threats to our users and Services (e.g., spammers, phishing attempts, screen scraping, bullying, and other violations of our Terms of Service and Community Guidelines).
                            </li>
                            <li>
                                We occasionally give academics access to de-identified material and data for use in educational research.
                            </li>
                            <li>
                                When you use the Services, your friends on that network may follow you automatically, and your Music Book account may be set up to do the same if you want to give us access to your list of friends on a mobile device or third-party social network. On Music Book, you can, however, at any time, stop following any other user.
                            </li>
                            <li>
                                We advertise our Services using specialized content on external websites. In accordance with our legitimate interests, we may use your information to target advertising, including creating ad campaigns that target people with similar profiles to current Music Book users.
                            </li>
                            <li>
                                We utilize your data for customer relationship management (CRM) functions, such as email and other engagement campaign targeting.
                            </li>
                            <li>
                                We occasionally run polls and competitions or fund them. Survey and contest participation is entirely optional. If you choose to take part, we might ask you for contact information, demographic data, and other details. We might also ask you to accept further terms and conditions.
                            </li>
                            <li>
                                In order to recognize you and/or your devices across different Music Book applications, we need log data, such as device identifiers. By recognizing you and making your content accessible on both Music Book applications, we do this to improve your experience by giving you seamless access to another Music Book application.
                            </li>
                        </ul>
                        <br />

                        <h5>
                            <li>
                                INFORMATION SHARED BY YOU AND US
                            </li>
                        </h5>

                        <p>
                            Music Book was created to make it easy for you to share your performances with the world. The majority of the data you give us through the usage of the services is data you want us to make public. As you use and communicate using our Services, you share information with us, and we share information with you to run, offer, understand, modify, support, and promote our Services.
                        </p>
                        <br />

                        <ul>
                            <li>
                                Account Specifics. You can configure your settings to control whether specific information is made available to other users and companies with whom you interact. However, your phone number, profile name and photo, bio, status, last seen status, and receipts may be accessible to anyone who uses our Services.
                            </li>
                            <li>
                                Content. Your privacy settings will determine how your content is published. By default, content is made public. Consult the frequently asked questions at www.music Book.com/support for details on how to modify your content privacy settings or remove content from the Services. If you leave a remark on any of the Services' material, it will be public and accessible to all other users. You might decide to collaborate on recordings with other Music Book users in several circumstances. In these situations, it's crucial to keep in mind that you and another user—or group of users—create the material collectively. It is challenging, if not impossible, for a single user inside the collective to undo the invention. Therefore, if you collaborate with another Music Book user to create a work, you won't be able to edit or remove the recorded performances that they contributed. Additionally, if you want to create or participate in a live performance in such circumstances, other users will be able to capture and share that footage.
                            </li>
                            <li>
                                Other people and your contacts. You should be aware that the people and organizations with whom you interact may save or redistribute your information, including your messages, both on and off our Services
                            </li>
                            <li>
                                We might provide our advertisers and other third-party advertising partners with information about you or how you use the Services. This implies that while we may share certain identifiers and/or location data with our advertisers in accordance with our legitimate interests, we do not individually identify you by name or reveal your contact information. Instead, we may share information about our users' characteristics.
                            </li>
                            <li>
                                When users visit our website, Google Analytics tracks things like how frequently they do so, which pages they view when they do, and which websites they visited before ours. Use the Google Analytics opt-out browser add-on to disable Google Analytics tracking.
                            </li>
                            <li>
                                Services Offered by Third Parties. We collaborate with outside service providers to better our ability to operate, deliver, comprehend, personalize, support, and market our Services. When we divulge your information to outside service providers, we obligate them to handle it in accordance with our guidelines and conditions.
                            </li>
                            <li>
                                Other users of the Services will have access to any information in your public profile, such as your username, any profile images, your location, and any additional information you include therein, but not your phone number or email address. By default, the Services' users will be able to access and see any content you upload or produce through the Services. Consult the frequently asked questions at www.music book.com/support for details on how to modify your content privacy settings or remove content from the Services.
                            </li>
                            <li>
                                We might make generalized stats available to the public (like what musical genres are popular in a certain city).
                            </li>
                            <li>
                                Any audio, video or other content you produce and post within the Services may be used by us to advertise Music Book or our services.
                            </li>
                            <li>
                                In connection with or during negotiations of any merger, financing, acquisition or dissolution, transaction or procedure involving the sale, transfer, divestiture, or disclosure of all or a portion of our business or assets, we may share some or all of your information. Information may also be transferred as a business asset in the case of insolvency, bankruptcy, or receivership.
                            </li>
                        </ul>
                        <br />

                        <h5>
                            <li>
                                HOW DO WE REACT TO DEMANDS FROM LAW ENFORCEMENT
                            </li>
                        </h5>

                        <p>
                            In certain situations, we might keep your information and divulge it to authorities, law enforcement, or other parties. If we believe in good faith that we are required to do so by law, regulation, a court order, subpoena, regulatory requirement, or other legal demand or request, or if we believe in good faith that it is reasonably necessary to protect any person's safety, address fraud, security, or technical issues, protect Music Book's rights or property, and/or to investigate any legal investigation or legal complaint, we will only do this.
                        </p>

                        <h5>
                            <li>
                                OUR LEGAL FOUNDATIONS FOR COLLECTING, USING, SHARING, AND OTHERWISE PROCESSING YOUR INFORMATION
                            </li>
                        </h5>

                        <p>
                            Music Book uses a number of legal bases to gather, use, disclose, and otherwise treat the information we have about you for the reasons outlined in this Policy in accordance with Indian law. These grounds for law include:
                        </p>

                        <ul>
                            <li>
                                To provide the Services in compliance with the Terms of Service, some processing is required. For instance, in order to provide our Service, we must distribute your material. To create your Music Book account and distribute the material on Music Book, which is at the core of our Service, we need your basic contact information.
                            </li>
                            <li>
                                Where you have granted permission for certain processing. For instance, if you have given us permission to do so, we may send you commercial communications or inquire about your interest in participating in surveys or contests. That permission is revocable at any time.
                            </li>
                            <li>
                                To protect your vital interests or the interests of others, to comply with a legal requirement, a court order, to exercise and defend legal claims, or in situations where the processing is required in the public interest. For instance, we might divulge information when obligated to do so by law; and Some processing is required because it is necessary to protect the legitimate interests of Music Book or another party, such as visitors, members, or partners.
                            </li>

                        </ul>
                        <br />

                        <h5>
                            <li>
                                OUR PROPER INTERESTS
                            </li>
                        </h5>

                        <p>
                            Your information is processed in support of the following legitimate interests:
                        </p>

                        <ul>
                            <li>
                                Trying to keep the Services safe and secure requires the usage of the information you provide. In order to safeguard Music Book from fraud, spam, misuse, and abuse, as well as to further our legitimate interests and those of our community and you, we take this action. For instance, we use your information to safeguard Music Book and you against unauthorized downloaders who scrape our website for music and recordings. Additionally, we wish to safeguard against content access attempts by hackers.
                            </li>
                            <li>
                                Providing our Services: We utilize the data you give to deliver our services, including any customized ones. We do this because it is vital to protect our legitimate interests in consistently giving our users a cutting-edge, individualized product and ensuring reliable connectivity. Users may have trouble downloading or uploading content in areas or neighborhoods with inadequate internet, for instance. Then, in order to investigate the problem, Music Book must process log data, which includes your IP address. It can be challenging to resolve connectivity issues without your IP address and current location.
                            </li>
                            <li>
                                Finding out how we might enhance your use of our services, participating in research: We put a lot of effort into creating, enhancing, and improving our Services, such as by making better song suggestions. In order to support scholarly study, we also share data with researchers. We consider your rights and make sure that privacy safeguards are in place when we contribute to academic research, among other things.
                            </li>
                        </ul>
                        <br />

                        <h5>
                            <li>
                                MANAGING AND REMOVING YOUR INFORMATION
                            </li>
                        </h5>

                        <ul>
                            <li>
                                We provide the option to amend or change the data we've gathered on you when you register via your account settings on our website or the relevant App, or by contacting us by filling out our online support email, but we rely on the accuracy of the data you give us (such as your age). By using our online help form to get in touch with support, you can ask to have your account deleted.
                            </li>
                            <li>
                                In accordance with any legal duties to maintain such information for longer periods of time, we only keep your information in our server logs, databases, and records for as long as it is required to achieve the goals outlined in this Policy. We might employ outside service providers to maintain and retain such data for us.
                            </li>
                            <li>
                                Even if you don't finish the verification process entirely, we keep your verification-related information for a fair amount of time to help with subsequent verifications and guard against misuse of our verification procedures. Contact assistance using our email address support@musicbook.co.in if you decide against verifying the account and would like us to remove the verification data you supplied.
                            </li>
                            <li>
                                If you collaborate on the creation of material with other users, the recorded performances that are a part of that content will survive account deletion.
                            </li>
                            <li>
                                Please take note that information will not be shared when doing so would violate another person's rights, including their intellectual property rights, in accordance with applicable legislation. By logging into your account, you can also modify, restrict, limit, or delete a lot of your information. Contact help via our online support if you are unable to accomplish this or if you do not have a Music Book account. We might keep some information if the law so requires it.
                            </li>
                        </ul>
                        <br />

                        <h5>
                            <li>
                                REFUSAL OF CONSENT
                            </li>
                        </h5>

                        <p>
                            You have the right to revoke your consent at any moment for the processing of your information if you have already given it. By clicking the link in a marketing email, for instance, you can revoke your agreement to email marketing. By adjusting the settings on your mobile device, you can also withdraw any consent you may have given us to use your geolocation data. You might not have access to all (or any) of our Services, and we might not be able to offer you all (or any) of the Services if you withdraw your permission to the processing of your information for the purposes outlined in this Policy.
                        </p>
                        <p>
                            If we have a legal basis to do so or if your withdrawal of consent was restricted to specific processing activities, there are some circumstances in which we may continue to handle your information after you have withdrawn it.
                        </p>


                        <h5>
                            <li>
                                SAFETY
                            </li>
                        </h5>

                        <p>We keep technical and organizational safeguards in place to prevent unintentional or intentional loss, alteration, disclosure, or access to personal information. With proper consideration for the state of the art, implementation costs, the type, scope, context, and aims of the processing as well as the risk to users, we work to ensure a level of security proportionate to the dangers that the processing presents.</p>
                        <p>However, no technique of electronic storage or transmission via the Internet is completely secure. As a result, even though we make a good-faith attempt to safeguard your personal information, we cannot ensure its security.</p>
                        <p>Here you can find out more about the precautions you may take to keep your Music Book account safe. </p>

                        <h5>
                            <li>
                                TRANSFERS OF DATA
                            </li>
                        </h5>

                        <p>
                            We are dedicated to adhering to the relevant Principles of each Privacy Shield Framework with regard to the personal data we receive from Indian members, respectively. Under each Privacy Framework, Music Book is responsible for processing any personal data it receives and later passes to a third party working as its agent. Music Book complies with the Privacy Principles, including the onward transfer responsibility requirements, for any transfers of personal data.
                        </p>
                        <p>
                            We can occasionally be forced to provide personal information in response to valid demands from public authorities, including where doing so is necessary for reasons of national security or law enforcement.
                        </p>


                        <h5>
                            <li>
                                PRIVACY OF CHILDREN
                            </li>
                        </h5>

                        <p>
                            Our services are not intended for anybody under the age of 18, anyone under the age of 18, or anyone under the minimum age required to use our services in the Indian country of residence ("Minimum Age"). Underage users are not permitted to use our services, and we do not intentionally collect information about them. If we learn that a child under the Minimum Age has given us their information, we take steps to delete it and close the child's account, unless we receive valid parental consent from the parent.
                        </p>

                        <h5>
                            <li>
                                GET IN TOUCH
                            </li>
                        </h5>

                        <p>
                            Please get in touch with us at support@musicbook.co.in if you have any inquiries or suggestions, or would like to exercise any of your statutory rights.
                        </p>


                    </ol>


                    <h6 className="text-secondary">Follow Us</h6>
                    <hr />
                    <div className="display-flex socialImages">
                        <img src={socialMediaImg1} alt="" />
                        <img src={socialMediaImg2} alt="" />
                        <img src={socialMediaImg3} alt="" />
                        <img src={socialMediaImg4} alt="" />
                        <img src={socialMediaImg5} alt="" />
                    </div>

                    <div className="display-flex">
                        {BtnArray.map(buttons)}

                    </div>
                </div>


            </div>




        </div>
    );

}
export default forgetpassword;