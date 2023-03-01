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
                    <h5>◄ TERMS AND CONDITIONS</h5>


                    <ol>
                        <h5>
                            <li>
                                OVERVIEW AND INTRODUCTION                            </li>
                        </h5>

                        <p>
                            You and Music Book have entered into a binding contract through these Terms.
                        </p>
                        <p>
                            You and Music Book have entered into a binding contract through these Terms.
                        </p>
                        <br />


                        <h5>
                            <li>
                                QUALIFICATIONS FOR USING THE SERVICE                            </li>
                        </h5>

                        <p>
                            The target audience for Our Service is broad. The Service cannot be used by anybody under the age of 18.
                        </p>
                        <p>
                            You must be at least 18 years old, of sufficient legal age, or otherwise have the legal capacity to legally enter into these terms in order to use the service. You must not use or access the service at any time or in any manner if you are under 18 years of age, are not of sufficient legal age, or do not otherwise have the legal capacity to legally enter into these terms.
                        </p>
                        <p>
                            You also guarantee that you are of sufficient age or otherwise have the legal capacity to agree to these Terms, that you will abide by them, and that your use of the Service does not violate any laws.
                        </p>
                        <br />

                        <h5>
                            <li>
                                MODIFICATIONS TO THESE TERMS                            </li>
                        </h5>

                        <p>
                            From time to time, we might modify these Terms. When we make significant changes to these Terms, we'll let you know by posting the revised terms on the Service at least thirty (30) days before the changes take effect. If you are a registered user of the Service, we will send you an email at least thirty (30) days prior to the effective date of any major changes to these Terms. Therefore, it is crucial that you confirm that we have a current email address for you on file so that you can be informed of any significant changes. You should stop using the Service before the new Terms go into effect if you disagree with the proposed changes.YOU AGREE TO THE REVISED TERMS BY CONTINUING TO USE THE SERVICE AFTER THE CHANGES GO INTO EFFECT.
                        </p>
                        <br />

                        <h5>
                            <li>
                                SECURITY
                            </li>
                        </h5>

                        <p>
                            Without Music Book processing information about you and other users, neither the Service nor the Terms can be offered. The Service we offer requires the processing of the information you give with Music Book. We value your right to privacy. For more information on how we might gather, use, share, and store your information, please review our Privacy Policy. You agree to be bound by the terms of the Privacy Policy and permit us to use the information we have collected about you in accordance with its terms by agreeing to these Terms, which comprise and govern the Privacy Policy. If you are not willing to our Privacy Policy’s use of your personal information, you can stop accessing our website.
                        </p>
                        <br />

                        <h5>
                            <li>
                                COMMUNITY DIRECTIVES
                            </li>
                        </h5>

                        <p>
                            Your use of the Service is subject to our Community Guidelines, which are a part of these Terms, in order to maintain the fun, safety, and enjoyment of our community.
                        </p>
                        <br />

                        <h5>
                            <li>
                                THE WAY YOU USE THE SERVICE
                            </li>
                        </h5>
                        <p>
                            Although Music Book offers you free access to the Service, you must purchase subscription-based access to the Service in order to take advantage of all of the Service's features and functionality.
                        </p>
                        <p>
                            You recognize and agree that by using the Service, whether for free or through a subscription, Music Book may generate income, build goodwill, or otherwise raise the value of Music Book. You will not be entitled to any portion of this income, goodwill, or value. You further accept that with regard to any of your User Content, Music Book will not be entitled to pay you any money or other compensation.
                        </p>
                        <p>
                            The following conditions apply whether you buy one or more subscriptions or sign up for one or more trial subscriptions to the Service:
                        </p>
                        <ol type="a">
                            <li>
                                Auto-Renewal. You acknowledge that once your subscription period expires, your subscription(s) will automatically renew for subsequent periods that are equal in length to the immediately preceding subscription period unless and until you cancel your subscription (S).
                            </li>
                            <li>
                                Recurrent Fees. You authorize MUSIC BOOK's applicable service provider to process your payments for any renewal subscription when you sign up for a paid membership (S). You will be informed of subscription prices at the time of purchase. If your previous plan(s) are no longer available, the most similar subscription plan(s) will be billed to you at the then-current subscription price plus any applicable taxes. Your payments will be processed using the same billing cycle as your current subscription for any renewal subscriptions (s). Otherwise said, once your payment is processed for your current subscription(s), it will also be processed for any renewal subscription on that same day (s). To the fullest extent permitted by applicable law, additional terms and conditions may apply upon renewal, and subscription fees may change at any time.                             </li>
                            <li>
                                Cancellation. By signing in to Music book.Com, going to the "Account" screen, and clicking "Cancel," you may cancel your subscription(s) at any time. If you need any more help, you can get in touch with Music Book. Any cancellation made through music book.Com won't be taken into account as having occurred until Music Book expressly confirms it in writing. You will not be charged for any future subscription period after the music book has confirmed the cancellation in accordance with the previous sentence. You are still able to use the subscription service until the end of the subscription period you paid for, but Music Book is under no obligation to offer or provide a refund for the cancellation of any subscription.
                            </li>
                        </ol>
                        <br />

                        <h5>
                            <li>
                                YOUR ACCOUNT
                            </li>
                        </h5>
                        <p>
                            Registration. While you are always welcome to view any publicly accessible areas of the Service without registering with Music Book, in order to fully utilize the Service's features, you must download the Music Book App or go to the Music Book website and create an account ("Account").
                        </p>
                        <p>
                            Account Safety You should keep your Account safe because you are entirely responsible for all activities that take place through it. If you suspect or learn of any unauthorized use of your account or any other security breach involving your account, you agree to notify Music Book Support here. If your Account is used without your permission, Music Book is not responsible for any losses or damages that result.
                        </p>
                        <p>
                            Information accuracy. You must give Music Book the requested information when creating an
                            Account in order for it to be valid. You must promptly update any relevant information as needed to keep it current and correct if there are any changes to the data you give in connection with your Account. You guarantee Music Book that the data you gave them when setting up your Account is true and correct and that any email address you give them is one you have authority over.
                        </p>
                        <br />

                        <h5>
                            <li>
                                The Service's Management by MUSIC BOOK User Misconduct
                            </li>
                        </h5>
                        <p>
                            In appropriate situations, as determined by Music Book in its sole discretion, Music Book reserves the right but does not have an obligation, to (a) prohibit, cancel, remove, or reassign specific usernames and permalinks; (b) suspend or terminate your Account with or without prior notice if activities occur on your Account that, in Music Book’s sole judgment, would or might constitute a violation of these Terms, harm or impair the Service, infringe upon or otherwise violate any third-party (e) refuse, restrict access to or the availability of, or remove, delete, edit, or disable (to the extent technologically feasible) any User Content or any portion thereof; (d) report to law enforcement authorities and/or take legal action against anyone who violates these Terms; (e) manage the Service in a manner designed to protect our rights and those of our members and third parties or to facilitate the proper operation of the Service. Music Book reserves the right to immediately cancel your Account without prior notice to you and without incurring any responsibility to you or any third parties if emails addressed to the email address you give are returned as undeliverable.
                        </p>
                        <p>
                            We reserve the right to, in our sole discretion, and without notice or liability, deny access to and use of the service to any person for any reason or for no reason at all, including without limitation for breach of any representation, warranty, or covenant contained in these terms, or of any applicable law or regulation. This clause is without limiting any other provision of these terms or any remedy we may have under law or in equity.
                        </p>
                        <br />

                        <h5>
                            <li>
                                RIGHTS GRANTED TO YOU WITH REGARD TO MUSIC BOOK CONTENT.                             </li>
                        </h5>
                        <ol type="a">
                            <li>
                                Music Book hereby grants you a revocable, non-exclusive, non-transferable, non-sublicensable, global right and license to use the Service, subject to your full and continued compliance with these Terms. You may access, download, and use the object code versions of the Apps on any device you own or control in accordance with the terms of this license, as well as access and use the Service solely for your own personal, non-commercial needs.
                            </li>
                            <li>
                                Except as expressly authorized and supported by Music Book, Music Book Content is only for use as part of the Service and may not be exported outside of the Service. Any attempt to get around this restriction is against these terms. All design rights, databases, compilations, and other intellectual property rights in and to the Service are wholly owned by Music Book.
                            </li>
                            <li>
                                Music Book owns the registered and/or unregistered trademarks and service marks that are used and displayed on the Service under the collective name "Music Book Trademarks." Any additional product and service names found on the Service may be third parties' trademarks or service marks (collectively with the Music Book Trademarks, the "Trademarks"). You are strictly prohibited from using the Trademarks to degrade Music Book or a relevant third party, or in any other way that would harm the Trademarks' goodwill unless otherwise permitted by law. Without Music Book's express prior written approval, you are not allowed to utilize any Trademarks as an integral part of a link to or from any website. Any goodwill created by using a Music Book trademark will only be used to Music Book’s advantage.
                            </li>
                            <li>
                                Right Reservation. All rights that are not specifically given to you in this Section are hereby reserved by Music Book. Nothing included in these Terms or on the Service should be read as giving you a broader license to use the Service, any Music Book Content, or any trademarks.
                            </li>
                        </ol>
                        <br />

                        <h5>
                            <li>
                                RIGHTS YOU GRANT TO MUSIC BOOK FOR USER CONTENT
                            </li>
                        </h5>
                        <ol type="a">
                            <li>
                                a.	"User Content" refers to any information that you or other Users upload, post, or transmit to or through the Service (collectively, "Post"), including, but not limited to, pictures, text, audio or visual works, sound recordings, and any other works covered by intellectual property rights in the United States or in any other country, including, but not limited to, copyright, patent, trademark, and trade secret laws. To be clear, Music Book Content is not considered User Content. Subject to these Terms, you may use and enjoy its various functionalities and Post User Content.
                            </li>
                            <li>
                                Ownership. You retain ownership of any rights you may have in your user content, and posting your user content does not transfer ownership of such rights, subject to any third-party rights in any previously published content that is a part of your user content and subject to the license you grant to MUSIC BOOK.
                            </li>
                            <li>
                                Permission for Music Book. By posting user content, you hereby grant Music Book an unrestricted, assignable, sublicensable, perpetual, worldwide license to edit, modify, reproduce, synchronize, transmit, communicate to the public, publicly perform, make available, distribute, publicly display, exhibit, create derivative works from, and otherwise exploit and use (or "Use") that user content for the following purposes: Music Book and the Service are promoted through I advertising, marketing, and promotion; (ii) the display and sharing of your User Content; and (iii) the provision of the Service in accordance with these Terms. In addition, you provide Music Book a free, perpetual license to use your name, likeness, and other identifying characteristics in order to credit you as the author of your User Content. Any User Content that you post on Music Book or send to it in any other way will be treated by Music Book as non-confidential and non-proprietary, and Music Book may use it in accordance with these Terms without notifying you and without incurring any liability. The license provided in this Section is unconditional, to the fullest extent permissible by law, and is subject to our Privacy Policy. To avoid any misunderstanding, the rights granted in this Section include but are not limited to, the right to reproduce sound recordings and videos synced with sound recordings ("Audiovisual Works") (and make mechanical reproductions of the musical works embodied in applicable sound recordings and Audiovisual Works), as well as the right to publicly perform and communicate sound recordings and Audiovisual Works (and the musical works embodied therein) to the public, all on a royalty-free basis. By doing this, you are allowing Music Book to use your user content without having to compensate any other parties for royalties. You hereby unconditionally and irrevocably waive any rights of paternity, attribution, integrity, and other similarly granted moral rights ("Moral Rights") in or to your User Content as well as all rights to object to the defamation of the User Content, and all other rights of the User in exchange for the provision of the Service to you.
                            </li>
                            <li>
                                The Content You Post Must Be Your Own. By posting User Content, you affirm and warrant that all parts of the User Content are yours or that you have all necessary rights to give the license outlined in these Terms. For instance, if you only have ownership rights to a sound recording but not to the underlying musical works that are incorporated into the applicable sound recordings, you are not permitted to post the applicable sound recordings unless you have all required rights, authorizations, and permissions with regard to the applicable embedded musical works that give you sufficient rights to grant the license to Music Book under these Terms. You further affirm and warrant that: (i) the Posting and Use of your User Content does not violate any third party's privacy, publicity, copyright, contract, intellectual property, or other rights; (ii) the Posting of your User Content will not necessitate Music Book obtaining any additional licenses from or paying any royalties, fees, compensation, or other amounts; or (iii) the Posting of your User Content will not require Music Book to provide any attribution to any third parties You consent to pay all sums due to anyone as a result of specific guidelines for recording artists and musical works.
                            </li>
                            <li>
                                You must inform your performance rights organization ("PRO") of the royalty-free license you give to Music Book through these Terms if you are a composer or author of a musical work and are a member. You alone are in charge of making sure you adhere to the reporting requirements of the pertinent PRO. If you have given up your rights to a music publisher, you must get their approval before granting the royalty-free license outlined in these terms. Or, have the relevant music publisher sign this Agreement on Music Book's behalf. The mere fact that you created a musical work (such as a song) does not automatically entitle you to grant Music Book the license set out in these Terms. If you are a recording artist who is under contract with a record label, it is your sole responsibility to make sure that your use of the Service complies with any legal commitments you may have to your label. This includes any new recordings you make using the Service that your label might later claim are their property.
                            </li>
                            <li>
                                ThroughToTheAudienceRights. The owners or operators of External Sites will not have any separate liability to you or any other third party for User Content Posted or Used on relevant External Sites via the Service Waiver of Rights to User Content because all of the rights you grant in this Agreement are provided on a through-to-the-audience basis. You give up any claims to earlier review or approval of any marketing or promotional materials connected to the relevant User Content by posting User Content. In relation to your User Content, in whole or in part, you also renounce any and all rights to privacy, publicity, and other rights of a similar nature. You hereby waive and undertake never to assert any Moral Rights that are not transferable or assignable.
                            </li>
                            <li>
                                Unacceptable Content. You acknowledge that Music Book reserves the right to remove any User Content that it deems to be abusive, bullying, defamatory, harassing, harmful, hateful, inaccurate, infringing, libelous, objectionable, obscene, offensive, pornographic, shocking, threatening, unlawful, violent, or vulgar, (ii) to be in violation of any applicable laws, (iii) to jeopardize the data privacy and security of other Users.
                            </li>
                            <li>
                                None of the rights given to you in these Terms may be used as a defense against any third-party claims resulting from your posting of any objectionable content, which may subject you to third-party claims. Music Book reserves the right to take any action against a user who posts objectionable content that it deems necessary or appropriate, including warning the user, suspending or terminating the user's account, deleting all of the user's user content, and/or directly or indirectly reporting the user to law enforcement.
                            </li>
                            <li>
                                Content inspection. Music Book does not filter any user content beforehand, but it retains the right to take down or remove any user content at its own discretion. Additionally, Music Book has the right—but not the obligation—in its sole discretion to remove or delete any User Content, with or without prior notice and without any liability to you, that Music Book determines to I be in violation of these Terms or applicable law; (ii) be Objectionable Content; or (iii) be in response to complaints from other Users, licensors of any Music Book Content, or rights holders related to the User Content. As further outlined in the Community Guidelines, Music Book also has the right—but not the obligation—to take corrective action in relation to any posted objectionable content. If you want to guarantee that you will always have access to copies of the relevant User Content, Music Book advises that you save copies of any User Content that you Post on your personal device(s).
                            </li>
                            <li>
                                Others who have posted user content. Music Book does not have to evaluate User Content, and although we retain the right to do so, we also disclaim all liability for any User Content that is posted on the Service. The individual or organization that posts the user content is solely responsible for it. We have a zero-tolerance policy for objectionable content and do not want our service to be misused, as reflected in these Terms and our Community Guidelines, but we cannot ensure that all User Content will always abide by these Terms. Please contact Music Book Support right away if you come across any objectionable content on the service by clicking here. As a courtesy, Music Book gives you the option to report objectionable content, but Music Book is under no obligation to take any action with respect to any objectionable content you report to Music Book on the Service.
                            </li>
                            <li>
                                Null and Void. To be clear, Music Book disclaims all responsibility for any use or abuse of User Content by any User Feedback.
                            </li>
                            <li>
                                You hereby grant Music Book a perpetual, irrevocable, non-exclusive, fully-paid, and royalty-free right to use and exploit any Feedback that you choose to provide regarding issues with or suggestions for modifications, enhancements, or improvements to the Service ("Feedback"), including but not limited to any Feedback you provide if Music Book invites you to take part in new product functionality testing.
                            </li>
                        </ol>
                        <br />

                        <h5>
                            <li>
                                OUTSIDE SITES
                            </li>
                        </h5>
                        <p>
                            Music Book does not support any External Sites, notwithstanding the possibility that the Service contains connections to or the ability to share data with third-party websites ("External Sites"). Music Book further disclaims all liability and responsibility for the accuracy of the information included on any and all applicable External Sites. All external sites were created and maintained by third parties. Your use of the External Sites will be controlled by and subject to the applicable terms of service and privacy policies, which may have their own terms of service and privacy policies. If you have any queries or complaints about any content on the relevant External Sites or the Internal Sites, you should get in touch with the site administrator or webmaster for such External Sites. You do so at your own risk if you choose to access any external websites, buy any content from such websites, or sign up for any of their services. You acknowledge and agree that your use of or contact with any External Sites will not subject Music Book to any obligation to you.
                        </p>
                        <br />


                        <h5>
                            <li>
                                PERMISSION TO COMMUNICATE
                            </li>
                        </h5>
                        <p>
                            You have given your permission to receive emails, push alerts, and text messages from Music Book via electronic means. In our Privacy Policy, we go into greater detail about how we utilize your information. You acknowledge and agree that we may send you notifications via text (SMS) messages, including promotional texts, at the telephone number associated with your account if you registered for the Service using your phone number or updated your account information to give us your phone number, up until you tell us you no longer want to receive these messages by texting STOP to any messages you receive. You acknowledge that utilizing the Service does not need your consent to receive marketing text messages.
                        </p>
                        <p>
                            If you provide us with your email address, we could use it to send you promotional email messages. By using the unsubscribe links on the relevant promotional emails, you may decide whether you want to receive promotional email messages. To discover more about your options about how Music Book uses your information, please read our Privacy Policy.
                        </p>
                        <p>
                            Depending on the kind of notifications you sign up to receive and how you use the service, the frequency of electronic communications—including push notifications on your mobile device—will change. Please contact your mobile phone carrier for more information and costs as Standard text messaging rates apply (including where applicable roaming charges). All text messaging and data plan fees charged by your mobile phone service shall be your responsibility.
                        </p>
                        <br />

                        <h5>
                            <li>
                                DURATION AND END
                            </li>
                        </h5>
                        <p>
                            Term. This Agreement is effective the moment you use the Service and will be binding on you until it is canceled by either you or Music Book.Termination.
                        </p>
                        <p>
                            This agreement can be terminated at any moment by submitting a written notice to Music Book Support at this email address support@musicbook.co.in. Your usage of the Service will similarly come to an end whenever you terminate this Agreement. You won't be able to access your Account or your User Content after termination. You can ask Music Book to remove any of your User Content from the Service by contacting Music Book using the form found here.
                        </p>
                        <p>
                            This Agreement may be terminated by Music Book at any time, with or without prior notice to you. If you violate any of the terms of this Agreement or the copyrights or other rights of any third party, Music Book additionally retains the right, in its sole discretion, to restrict, suspend, or terminate this Agreement and your use of the Service at any time.Survival.
                        </p>
                        <br />


                        <h5>
                            <li>
                                BITCOINS AND VIRTUAL MERCHANDISE
                            </li>
                        </h5>
                        <p>To the degree permissible by law, the following conditions apply:</p>
                        <ol type="a">
                            <li>
                                Coins. A limited, revocable, non-exclusive, non-transferable, and non-sublicensable license to use virtual coins or other virtual money only inside the Service (referred to as "Coins") may be made available to you by the Service. Your approval of this Agreement and any additional relevant policies or agreements with Music Book is a requirement for this license. You may access your Coin balance at any moment in your account profile. Coins can only be used in conjunction with the Service, as approved by Music Book. Coins that have been redeemed will no longer be used and will be subtracted from your account balance. A transaction cannot be undone after it has been completed. In the event of a disagreement, Music Book will have the last say about how your Coin account balance is determined. Music Book reserves the right to modify or discontinue any applicable features or functionality or to alter how Coins may be redeemed in any other way. Certain features or functionality of the Service may be made available that permit or require the redemption of Coins. Music Book decides the price to buy Coins in its exclusive discretion, taking into account any discounts or special offers, and it is subject to change at any time. You acknowledge that Music Book is under no obligation to you as a result of the exercise of its rights to decrease, manage, regulate, control, alter, and/or remove the Coins as it deems fit in its sole discretion. Coins have no monetary or "real world" value and can only be used via the Service, notwithstanding any statement to the contrary in these Terms or any other terms used. All Coin purchases are final, non-refundable, and are not redeemable for "real" money or any other kind of legal cash. While coins do not presently have an expiration date, Music Book does retain the right to cancel licenses for them at any moment and without prior warning. So long as Music Book decides to continue making Coins redeemable through the Services, which Music Book is under no obligation to do, you may redeem Coins.
                            </li>
                            <li>
                                Electronic goods. You may also have access to virtual items through the Service, such as presents that you may send to other users, by exchanging Coins. Like Coins, Music Book grants you a restricted, revocable, non-exclusive, non-transferable, and non-sublicensable right and license to use Virtual Goods solely in conjunction with the Service. Virtual goods are considered Music Book content and are only allowed for usage in accordance with Music Book's guidelines. They cannot be copied, exported, or transferred. At the point of redemption, the number of Coins required to purchase Virtual Goods will be shown. Music Book may choose the Virtual Goods that might occasionally be redeemable through the Service in its sole discretion, and Music Book may alter the selection of Virtual Goods or stop providing a particular Virtual Good at any time without incurring any liability to you as a result of its use of these rights.
                            </li>
                            <li>
                                Limitations. You consent to pay any charges and related taxes incurred in connection with the Coins or Virtual Goods by you or anyone using an account associated to you. Music Book forbids and disallows any other sale, gift, assignment, transfer, or trade of any Coins or Virtual Goods to any third party under any circumstances (including, without limitation, by operation of law), unless Music Book expressly and in writing pre-approves the applicable event. Coins and Virtual Goods may not be duplicated, exported, scraped, or otherwise transferred for use on any other platform, service, or for any other purpose other than your own personal, non-commercial use. Music Book's Terms will be materially violated if this Article is not followed, and Music Book may terminate your access to the Service as a result. At any time, Music Book has the right to change the cost of Coins, Virtual Goods, or any other products made available through the Services.
                            </li>
                            <li>
                                Your license to any Coins or Virtual Goods will automatically expire if your Account is terminated for any reason, including a violation of our Terms and/or Community Guidelines, and you will permanently lose access to the relevant Coins and Virtual Goods. Additionally, if your account has been dormant for 180 days, Music Book maintains the right to delete it. Music Book retains the right to restrict your access to and use of Coins, Virtual Goods, or the Service if Music Book has a reasonable suspicion that you are acting dishonestly or illegally in connection with any Coins or Virtual Goods. In addition to the termination rights already stated, if you break this Section, Music Book may, in its sole discretion, additionally seek any and all remedies that it deems appropriate and hold you accountable for any and all damages, costs, or other losses that Music Book incurs as a result of the violation.
                            </li>
                        </ol>
                        <br />

                        <h5>
                            <li>
                                NOTICE AND PROCEDURE FOR PROCEEDING WITH COMPLAINTS OF COPYRIGHT OR OTHER INFRINGEMENTS OF INTELLECTUAL PROPERTY
                            </li>
                        </h5>
                        <p>
                            Music Book appreciates and takes extremely seriously the protection of other people's intellectual property. We request that you follow suit. On or via the Service, infringement-related behavior won't be accepted. If a user violates intellectual property rights repeatedly, Music Book may suspend or delete their account. For more details on how to contact us if you believe that content on the Service violates your rights or the rights of a third party, as well as how we handle potentially violative content, please review our copyright and intellectual property infringement policy, which is available at https://www.Music Book.com/copyright. The Terms govern the Copyright and Intellectual Property Infringement Policy, and by accepting the Terms.
                        </p>
                        <br />

                        <h5>
                            <li>
                                Mobile Services
                            </li>
                        </h5>
                        <p>
                            Mobile phones, tablets, and other wireless devices will all be able to access the Service (collectively, "Mobile Services"). Your use of the Mobile Services will be subject to the standard message, data, and other rates and costs imposed by your mobile carrier. Additionally, your mobile carrier could forbid or limit you from downloading, installing, or using a certain Mobile Service, and not all Mobile Services might be compatible with all carriers or devices.
                        </p><br />

                        <h5>
                            <li>
                                DISCLAIMER OF WARRANTIES
                            </li>
                        </h5>
                        <p>
                            We give no assurances, warranties, representations, or guarantees that the Service will function as intended. The Service might not operate as planned due to errors or other disruptions. You are aware of and agree to this risk if you use the Service.
                        </p>
                        <p>
                            The service and any content available on the service, including, but not limited to, the accuracy, reliability, completeness appropriateness, timeliness, or the reliability thereof, are provided "As is" and without any warranties or representations whatsoever by music book nor any of its affiliates (collectively, "Music book"). Music book will not be responsible for any content on the service's accuracy, completeness, or trueness, for any errors, mistakes, or omissions therein, or for any delays or interruptions of the data or information stream from whatever cause. You agree to use the service as a user.
                        </p>
                        <p>
                            Music Book Disclaims any warranty as to the service's error-free operation or the absence of computer viruses or similar contamination or destructive features. No music book party will be responsible for those costs if your use of the service or any content thereon results in the need for servicing or replacing equipment or data.
                        </p>
                        <p>
                            The service and all content thereon are provided "As is" and "As available" without any warranties of any kind, to the fullest extent permitted by applicable law. Music book disclaims all warranties thereto, including, but not limited to, the warranties of title, merchantability, non-infringement of third parties rights, and fitness for a particular purpose, to the fullest extent permitted by law.
                        </p>
                        <br />

                        <h5>
                            <li>
                                LIMITATION OF RESPONSIBILITY TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                            </li>
                        </h5>
                        <p>
                            Music book, our licensors, our licensees, and our service providers (collectively, "Music book parties") shall not be liable for any special, indirect, punitive, exemplary, incidental, consequential damages, or any other damages whatsoever arising out of, relating to, or resulting from your use or inability to.
                        </p>
                        <p>
                            You hereby irrevocably release the Music Book Parties from any and all claims, demands, and damages (actual and consequential) of every kind and nature, known and unknown, arising out of or in any way connected with any dispute you may have with any third party relating to your use of the service, including, without limitation, any carrier, copyright holder, or another user.
                        </p>
                        <br />

                        <h5>
                            <li>
                                GOVERNING LAW
                            </li>
                        </h5>
                        <p>
                            This Agreement must be construed in accordance with the substantive Indian laws, without giving effect to any principles that would make the laws of any other state preferable.
                        </p>
                        <br />

                        <h5>
                            <li>
                                CONTACT US
                            </li>
                        </h5>
                        <p>
                            If you would like to contact us with any of our services, please contact us at the email id: support@musicbook.co.in.
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