import React, { Component } from 'react';
import Header from './components/layout/Header';
import Students from './components/Students';

import './App.css';


class App extends Component {
  state = {
    students: [
      {
        id: 100190,
        fullname: 'Johnny English',
        gender: 'Male',
        school: 'BIO',
        year: '3'
      },
      {
        id: 100191,
        fullname: 'Scobby Doo',
        gender: 'Male',
        school: 'ENG',
        year: '0'
      },
      {
        id: 100192,
        fullname: 'Sherlock Holmes',
        gender: 'Male',
        school: 'CHE',
        year: '4'
      },
      {
        id: 100193,
        fullname: 'Tony Stark',
        gender: 'Male',
        school: 'ENG',
        year: 'year 4'
      },
    ]
  }

  //Delete Student
  delStudent = (id) => {
    this.setState({ students: [...this.state.students.filter(student => student.id !== id)] });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
        <Header />
         <Students students={this.state.students} delStudent={this.delStudent} />
        </div>
      </div>
    );
  }
}
  
export default App;
