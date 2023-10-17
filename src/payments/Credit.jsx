import React from 'react'

export default function Credit() {
  return (
    <>
      <div className="cedit">
          <div className="creditcard">
               <div style={{display:"flex", justifyContent:"space-between"}}>
                 <p>Credit Card</p>
                 <p>Visa/ MasterCard/ RuPay</p>
               </div>
               <div style={{margin:"10px 0 20px 15px"}}>
                    <label style={{ marginRight:"27px"}} htmlFor="">Card No:</label>
                    <input style={{width:"72%"}} type="number" name="" id="" placeholder='Enter 16 Digit Card Number' />
               </div>
               <div style={{marginLeft:"15px", marginTop:"20px",display:"flex",  justifyContent:"space-between"}}>
                    <div>
                         <label style={{ marginRight:"10px"}}  htmlFor="">Valid From:</label>
                         <input  type="number" name="" id="" placeholder='11/17' />
                    </div>
                    <div>
                         <label style={{ marginRight:"10px"}}  htmlFor="">Valid Thru:</label>
                         <input  type="number" name="" id="" placeholder='11/22' />
                    </div>
               </div>
               <div style={{ marginLeft:"15px",marginTop:"40px"}}>
                    <label style={{ marginRight:"56px"}} htmlFor="">CVV:</label>
                    <input style={{width:"72%"}} type="number" name="" id="" placeholder='Enter CVV Number' />
               </div>
          </div>
     </div>
    </>
  )
}
