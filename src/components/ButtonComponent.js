
import React from 'react';

const ButtonComponent = ({ onClick }) => {
  return (
    <div className="button-component">
      <button onClick={onClick}>Add Image</button>
    </div>
  );
};

export default ButtonComponent;
