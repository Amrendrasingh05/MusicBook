import React from 'react';
import BGimg from '../images/Rectangle 1 (2).jpeg'
function signin(){
    return(
        <div className='GetStarted'>
     
     <div className='GSLeft'>

     <div className='PgNo'>01</div>
     <div className='PgNo'>Learn Music</div>
     <span>Lorem ipsum dolor sit amet,  Est accusantium saepe cum aliquid aspernatur ex! Officiis cumque iusto porro sed distinctio.</span>
     <div style={{display:"flex"}}>
        <div className='dotWhite'></div>
        <div className='dotGray'></div>
        <div className='dotGray'></div>
     </div>
     </div>

      <div className="card">
  <div className="card-body">
    <h5 className="card-title">Welcome</h5>
    <div className="GSintro">leLorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur euismod.</div>
    <button className='GSBtn'>login with Email</button>
    <button className='GSBtngoogle'>Login with google</button>
    <button className='GSBtngoogle'>Login with mobile</button>
    <p>I don't have account? <a href="">Create New</a></p>
  </div>
</div>
    </div>
    );
}
export default signin;