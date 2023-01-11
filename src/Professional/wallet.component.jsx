import "bootstrap/dist/css/bootstrap.min.css";
import profileImg from '../images/Rectangle 83.png'

import Img1 from '../images/Rectangle 129.png'
import accountImg from '../images/account.png'
import socialMediaImg2 from '../images/Vector (10).png'
import socialMediaImg3 from '../images/Vector (20).png'
import socialMediaImg4 from '../images/Vector (30).png'
import socialMediaImg5 from '../images/Vector (40).png'
import Header from './Professional_header.component'



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

        <div className="black-bg">

            <Header />

            <div className="BasicStyle-professional black-bg">
                <div className="about">
                    <h5>◄ WALLET</h5>
                </div>

                <div className="display-flex">
                    <div className="balance">
                        <p>BALANCE</p>
                        <h1>Rs. 5,00,000</h1>
                        <br />
                        <br />

                        <div className="display-flex">
                            <button className="supportSubmitBtn">Withdrawl</button>
                            <button className="accountBtn">Add Account</button>
                        </div>
                    </div>

                    <div className="acc">
                        <img src={accountImg} alt="" />
                        <h1>IDFC BANK</h1>
                        <h4>2888 8908 9075 0950</h4>
                        <br />
                        <br />
                        <p>Remove bank</p>
                    </div>
                </div>

                <br />


                <div className="tansaction">
                    <p>Transaction</p>
                </div>

                <div className="payouts">
                <div className="display-flex payout">
                        <div className="payoutImg"></div>
                        <p>Payouts</p>
                        <p className="text-success">Rs. 599</p>
                    </div>
                    <br />
                    <div className="display-flex payout">
                        <div className="payoutImg"></div>
                        <p>Payouts</p>
                        <p className="text-success">Rs. 599</p>
                    </div>
                    <br />
                    <div className="display-flex payout">
                        <div className="payoutImg"></div>
                        <p>Payouts</p>
                        <p className="text-success">Rs. 599</p>
                    </div>
                    <br />
                    <div className="display-flex payout">
                        <div className="payoutImg"></div>
                        <p>Payouts</p>
                        <p className="text-success">Rs. 599</p>
                    </div>
                    <br />
                    <div className="display-flex payout">
                        <div className="payoutImg"></div>
                        <p>Payouts</p>
                        <p className="text-success">Rs. 599</p>
                    </div>
                    <br />
                </div>


            </div>




        </div>
    );

}
export default forgetpassword;