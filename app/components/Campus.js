import React from 'react';

const Campus = props => {
  return (
    <div>
      <h3>{props.campus.name}</h3>
      <p>
        {props.campus.description
          .split('. ')
          .slice(0, 1)
          .join(' ') + '.'}
      </p>
      <img src={props.campus.imageUrl} />
    </div>
  );
};

export default Campus;
