import React, { Component } from 'react';
import Popup from './Popup';
import PropTypes from 'prop-types';

export class StudentItem extends Component {
    constructor(props){  
        super(props);  
        this.state = { showPopup: false };  
        }  
        
          togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
         } 

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '40px',
            borderBottom: '1px #ccc dotted',
        }
    }

  render() {
    const {id, fullname} = this.props.student;
    return (
    <div style={this.getStyle()}>
        <p style={{textAlign: 'center'}}>
            <button onClick={this.props.delStudent.bind(this, id)} style={dButton}>x</button>
            <button onClick={this.togglePopup.bind(this, id)} style={popbutton}>More...</button>
            <input type="text3" name="edit-text" placeholder={ fullname } autoComplete='off' />
        </p>
        {this.state.showPopup ?  
        <Popup 
          text0={ this.props.student.id } 
          text1={ this.props.student.fullname } 
          text2={ this.props.student.gender }
          text3={ this.props.student.year }
          text4={ this.props.student.school } 
          closePopup={this.togglePopup.bind(this)}  
        /> 
: null}
    </div>
   )
  }
}

const popbutton = {
    border: 'none',
    background: 'none',
    color: 'blue',
    cursor: 'pointer',
    float: 'right'  
}
const dButton = {
 background: '#ff0000',
 color: 'white',
 border: 'none',
 padding: '5px 10px',
 borderRadius: '50%',
 cursor: 'pointer',
 float: 'left'
}

//PropTypes
StudentItem.propTypes = {
    student: PropTypes.object.isRequired
}
  
export default StudentItem;