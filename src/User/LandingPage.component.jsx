import img1 from '../images/Landing1.png'
import img2 from '../images/Landing2.png'
function LandingPage() {
    return (
        <div className="display-flex landing">
            <div className='landing-img-1'>
               <div className='landing-content'>
                <div>Personal</div> <br />
                <h3>Learn Music And Sign Together</h3> <br />
                <button className="primary-bg landing-btn" onClick={() => window.open("/getStarted","_self")}>Continue</button>
               </div>
            </div>
            <div className='landing-img-2'>
            <div className='landing-content'>
                <div>Professional</div> <br />
                <h3>Teach Music and Build your income</h3> <br />
                <button className="primary-bg landing-btn" onClick={() => window.open("/professional-getStarted","_self")}>Continue</button>
               </div>
            </div>
        </div>
    );
}
export default LandingPage;