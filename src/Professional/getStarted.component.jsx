import "bootstrap/dist/css/bootstrap.min.css";
import logo from '../images/MusicBookLogo.png'
function getStarted() {

    return (
        <>

        <div className="Professional-GetStarted">

            <div className="header">

                <div className="display-flex" style={{alignItems:"center"}}>

                    <img src={logo} alt="" />
                    <div>
                        <h5>MusicBook</h5>
                        <p>Live every Beatof your life</p>
                    </div>
                </div>

                <div className="display-flex" style={{alignItems:"center"}}>


                    <div>SIGN IN</div>
                    <button className="btn btn-primary" style={{marginLeft:"4%"}}>CREATE ACCOUNT</button>
                </div>

            </div>


            <h1>
            Teach music across globe and earn money
            </h1>
            <div className="dots" style={{marginLeft:"10%"}}>
                    <div className="dot-purple"></div>
                    <div className="dot-gray"></div>
                    <div className="dot-gray"></div>
                </div>
        </div>
        </>
    );

}
export default getStarted;