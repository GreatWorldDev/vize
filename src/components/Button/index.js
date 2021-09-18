import React from "react"

const Button = ({ type, size, content }) => (
  <>
    <button
      // eslint-disable-next-line no-sequences
      className={`${type === 'border' ? 'btn-border' : type === 'fill' ? 'btn-fill' : ''} 
      ${size === 'normal' ? 'btn-normal' : 'btn-small'}`}
    >
      {content}
    </button>
  </>
);

export default Button