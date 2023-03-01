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
                    <h5>◄ ABOUT</h5>
                    <img src={Img1} alt="" />
                    <p>
                        Music lovers!!! We are here for you to build connections through our socializing platform. The only language we speak here is “Music”. Learn various instruments, singing and Scribble your poems, lyrics, shayari or any type of music taste on our page all through our tech enabled socializing app, enjoy recording Karaoke with or without your camera along with millions of your favorite songs while the lyrics scroll. Start posting all the music taste you have to earn more views, likes and share, eventually all this will be monetized. You may also join Music book™ community of collaborative musicians through our digital studio. You may find all of your favorite songs here, including the most recent top singles, in Hindi, Punjabi, Bollywood, regional and a cappella! Everyone who enjoys music will have fun on Music book™.                    </p>
                    <p>
                        Whatever way you choose, record a song! Through vocals or instruments. Music book™ lets you engage with other musicians and share music information while practicing and singing karaoke in private without any interruptions. With the help of our music app's on-screen pitch guide and innovative training, you can learn to play any kind of instruments or sing and hone your voice. The welcoming international community of Music book™ is the ideal setting for you to share your love of singing with other music enthusiasts. You can perform 24/7 with friends and other musicians from across the world with Music book™.                    </p>
                    <h5>
                        FEATURES
                    </h5>
                    <ul>
                        <li>	Select from millions of your favorite scrolling lyrics karaoke tunes.</li>
                        <li>	Learn instruments and singing from our well-trained instructors.</li>
                        <li>    Sing a cappella or solo karaoke, in a duet or group, or take in other singers' performances.</li>
                        <li>	Post your audio/video of playing instruments</li>
                        <li>	Start creating studio-quality audio with your voice by using vocal effects.</li>
                        <li>	Throw a live karaoke party or attend one! You can perform live, audio-only, around the clock with friends and music enthusiasts from all over the world using our Sing LIVE feature.</li>
                        <li>	For audio-only performances, sing and record songs with your camera off. If you want to add fun visual effects and filters, switch it on.</li>
                        <li>	 Speak aloud to friends or work on your voice alone.</li>
                        <li>	Post videos of your musical performances on social media sites like TikTok, Instagram, Facebook, Snapchat, Twitter, and WhatsApp.</li>
                        <li>	Start by recording audio and singing, then add your own video effects.</li>
                        <li>	Sing an original song in Freestyle Mode with your pals.</li>
                        <li>	Perform on an original song in Freestyle Mode with your pals.</li>
                        <li>	Participate in new Music Book challenges and competitions each month to win prizes and gain attention.</li>
                        <li>	Make customized voice messages for your loved ones and friends.</li>
                        <li>	To improve your singing, use our original Music Book courses and on-screen pitch guide.</li>
                        <li>	You can record yourself singing your favorite song's chorus or verse.</li>
                        <li>	Record legendary and classic moments, as well as other voice-acting scenes.</li>
                        <li>	Join local community of musicians to promote local and regional languages.</li>
                    </ul>

                    <h5>
                        LET'S MAKE SOUND TOGETHER
                    </h5>
                    <p>
                        Sing songs in Punjabi, pop, R&B, rock, rap, and other genres! You can locate all of your favorite songs and karaoke hits on Music Book, which regularly adds new music. Missing your song? Visit https://www.musicbook.co.in/  to add songs and popular music to the songbook.
                    </p>
                    <h5>
                        SOCIAL INTEGRATION THROUGH MUSIC
                    </h5>
                    <p>More than just listening, music encourages creation, sharing, discovery, participation, and connection. It has the ability to dismantle barriers and unite people because it was the first social network. Join our international community and sing songs that reflect your personality!</p>
                    <p>Get noticed and expand your fan base! Make up your own dance moves that you may capture while singing. Join Music Book to share your singing adventure on all of your favorite social media platforms and to create music with friends!</p>
                    <h5>
                        RECORD YOUR VOICE
                    </h5>
                    <p>You can sound fantastic on Music book™ no matter what level of music you belong. Use expert video and effects to make your performances stand out!</p>
                    <p>Try Music book™ for free right away whether you enjoy writing poems, Lyrics, Shayari, singing along, playing instruments, enjoy karaoke, fantasize about duetting with a pop star, or just love music.</p>
                    <h6 className="text-secondary">Follow Us</h6>
                    <p>FOLLOW US to learn on Music book™</p>
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