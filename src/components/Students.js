import React, { Component } from 'react';
import StudentItem from './StudentItem';
import PropTypes from 'prop-types';

class Students extends Component {
  render() {
    return this.props.students.map((student) => (
    <StudentItem key={student.id} student={student} delStudent={this.props.delStudent} />
    ));
  }
}

//PropTypes
Students.propTypes = {
    students: PropTypes.array.isRequired
}
  
export default Students;