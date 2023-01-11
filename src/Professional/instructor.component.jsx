import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Professional_header.component'
import leftImg1 from '../images/Rectangle 80 (2).png'
import leftImg2 from '../images/Rectangle 79.png'

import albumImg1 from '../images/Rectangle 6.png'
import profile from '../images/Ellipse 7.png'


function forgetpassword() {
    function verification() {
        window.open("/verification", "_self")
    }
    return (

        <div>

            <Header />

            <div className="BasicStyle-professional home">
                <div className="instructorHead display-flex">

                    <div>
                        <h1>Learing</h1>
                        <p>Learning/Cource/Profile</p>
                        <br /> <br />
                        <img src={profile} alt="" />
                        <h4>James Watler</h4>
                        <p>( 1.8k People Following )</p>
                    </div>

                    <button className="btn btn-primary">Favroite</button>


                </div>

                <div className="home-right-mid">
                    <br />
                    <h5>
                        Bio
                    </h5>
                    <p className="text-muted">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae dolorem officia, velit quam repellendus veniam est sunt, dolores dicta mollitia eum nobis dolore expedita impedit facilis vero. Placeat, quisquam adipisci.
                    </p>
                </div>

                <div className="home-right-mid">
                    <br />
                    <h5>Cources</h5>
                    <div className="display-flex slider-left2right">
                        <div className="home-right-mid-blocks display-flex">
                            <img src={albumImg1} alt="" /> &nbsp;&nbsp;&nbsp;
                            <div>
                                <h6>How to create Music Notes</h6>
                                <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                                <span>12:30 Min Remaining</span>
                            </div>

                        </div>
                        <div className="home-right-mid-blocks display-flex">
                            <img src={albumImg1} alt="" /> &nbsp;&nbsp;&nbsp;
                            <div>
                                <h6>How to create Music Notes</h6>
                                <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                                <span>12:30 Min Remaining</span>
                            </div>

                        </div><div className="home-right-mid-blocks display-flex">
                            <img src={albumImg1} alt="" /> &nbsp;&nbsp;&nbsp;
                            <div>
                                <h6>How to create Music Notes</h6>
                                <p>Write notes on the music staff to create a song. Notes are made of note heads, stems .....</p>
                                <span>12:30 Min Remaining</span>
                            </div>

                        </div>
                    </div>
                </div>


            </div>

        </div>
    );

}
export default forgetpassword;