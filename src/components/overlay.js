import React from 'react'
import close from '../close.svg'
export default function Overlay() {
  return (
    <div className="overlay">
        <div className="overlay-top"> 
        <p>Deposit to wallet</p>
        <img src={close} alt='close'/>
        </div>
        <p>Amount</p>
        <input className="input-field" placeholder='Enter Deposit amount'></input>
        <button className="action"> Deposit</button>
    </div>
  )
}
