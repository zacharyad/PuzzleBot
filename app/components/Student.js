import React from 'react';

const Student = props => {
  console.log('props.students.id: ', props.student.id);
  return (
    <div>
      {props.student.id ? (
        <div>
          <div>{`${props.student.firstName} ${props.student.lastName}`}</div>
          <img src={props.student.imageUrl} />
        </div>
      ) : (
        <div>no students</div>
      )}
    </div>
  );
};

export default Student;
