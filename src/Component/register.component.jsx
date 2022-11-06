import React from 'react';
import BGimg from '../images/Rectangle 1 (2).jpeg'
function register(){
    return(
        <div className='RegisterPg'>
     
     <div className='GSLeft'>

     <div className='PgNo'>01</div>
     <div className='PgNo'>Create Music</div>
     <span>Lorem ipsum dolor sit amet,  Est accusantium saepe cum aliquid aspernatur ex! Officiis cumque iusto porro sed distinctio.</span>
     <div style={{display:"flex"}}>
        <div className='dotWhite'></div>
        <div className='dotGray'></div>
        <div className='dotGray'></div>
     </div>
     </div>

      <div className="card">
  <div className="card-body">
    <h5 className="card-title">Register</h5>
    <div className="GSintro">leLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur euismod.</div>
    <input type="text"/>
    <input type="Email"/>
    <input type="Password"/>
    <input type="Password"/>
    <p>I Agree to Terms&Conditions And Privacy Policy</p>
    <button className='continueBtn'>CONTINUE</button>
    <p>Already Have an account? <a href="">Sign in</a></p>
  </div>
</div>
    </div>
    );
}
export default register;