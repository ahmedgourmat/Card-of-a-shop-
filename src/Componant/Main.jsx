import React, { Component } from 'react'
import './Main.css'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
           count:0
        }
      }
    dec(){
        console.log('clicked')
        if(this.state.count>0){
            this.setState({
                count:this.state.count -1,
              })
        }
    }
    add(){
        console.log('clicked')
        this.setState({
          count:this.state.count+1,
        })
    }
  render() {
    return (
        
        <div id='main'>
            <div className="img-container">
                <img src='' alt='food'/>
            </div>
            <div className="descreption">
                <p>Miellerie Mazouni Miel De Fleur</p>
                <p>Sauvages - 250 Grs -</p>
                <p id='prix' style={{color:'#92CE08',fontWeight:'600',fontSize:'1.3em'}}>750.00 DZD</p>
                <del id='prix' style={{color:'grey',fontWeight:'300',fontSize:'0.7em'}}>750.00 DZD</del>
                <p style={{color:'#92CE08',fontSize:'0.9em',backgroundColor:'#92CE0878',display:'inline',marginLeft:'10px',padding:'2px',borderRadius:'3px'}}>-53%</p>
            </div>
            <div className="quantite">
                <button onClick={this.dec.bind(this)}>-</button>
                <p style={{fontWeight:'600'}} id='quant'>{this.state.count}</p>
                <button onClick={this.add.bind(this)}>+</button>
            </div>
        </div>
    )
  }
}

export default Main
