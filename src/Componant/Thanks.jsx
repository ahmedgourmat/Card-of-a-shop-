import React from 'react'
import './Thanks.css'

function Thanks() {
    const thx=()=>{
        let warning=document.getElementById('warning');
        warning.textContent='THANK YOU';
        let btn=document.getElementsByClassName('btn');
        for(let i=0;i<btn.length;i++)btn[i].style.display='none';
    }
    const wait=()=>{
        let thanks=document.getElementById('thanks');
        let thxContainer=document.getElementById('thanks-container');
        let container=document.getElementById('container');
        thanks.style.top='-80%';
        thxContainer.style.backgroundColor='transparent';
        container.style.zIndex='4';
    }
    return (
    <div id='thanks-container'>
        <div id='thanks'>
            <h1 id='warning'>ARE U SURE THAT'S IT??</h1>
            <button className='btn' onClick={thx}>YES</button>
            <button className='btn' onClick={wait}>NO WAIT</button>
        </div>
    </div>
    
  )
}

export default Thanks
