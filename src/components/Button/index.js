import React from 'react';

export const Button = ({ type, value }) => {
  return (
    <button type={type} className="btn">
      {value}
    </button>
  );
};
