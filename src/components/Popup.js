import React from 'react';
import './Popup.css'

class Popup extends React.Component {  
  render() {  
return (  
<div className='popup' style={popup}>  
<div className='popup\_inner' style={popupinner}>
  <div style={{paddingLeft: '450px'}}>
  <h1 style={{paddingTop: '50px', paddingBottom: '50px'}}>{'id: '}{this.props.text0}</h1>
   <p>
   {'Gender: '}<input class="form" type="text" name="edit-text" placeholder={this.props.text2} autoComplete='off'/> <br/>
   {'Year: '}<input class="form" type="text" name="edit-text" placeholder={this.props.text3} autoComplete='off'/> <br/>
   {'School: '}<input class="form" type="text" name="edit-text" placeholder={this.props.text4} autoComplete='off'/>
   </p>
  </div>
<div style={{textAlign: 'center', paddingTop: '100px'}}><button onClick={this.props.closePopup} style={{padding: '10px 15px'}}>close me</button> </div> 
</div>  
</div>  
);  
}  
} 

const popup = {
    position: 'fixed',  
    width: '100%',  
    height: '100%',  
    top: '0',  
    left: '0',  
    right: '0',  
    bottom: '0',  
    margin: 'auto',  
    backgroundColor: 'rgba(0,0,0, 0.5)'
}

const popupinner = {
    position: 'absolute',  
    left: '25%',  
    right: '25%',  
    top: '25%',  
    bottom: '25%',  
    margin: 'auto',  
    borderRadius: '20px',  
    background: 'white'
}

export default Popup;