import React from 'react'
import './Buttons.css'

function Buttons() {
    const show=()=>{
        let thanks=document.getElementById('thanks');
        let thxContainer=document.getElementById('thanks-container');
        let container=document.getElementById('container');
        thanks.style.top='15%';
        thxContainer.style.backgroundColor='rgba(0, 0, 0, 0.61)';
        container.style.zIndex='1';
    }
  return (
    <div id='btn-container'>
      <button style={{backgroundColor:'white'}}>ANULLER</button>
      <button onClick={show}>AJOUTER AU PANIER</button>
    </div>
  )
}

export default Buttons
