import React from "react"
const Inputbox = (props) => {
  const { label, placeholder } = props;
  const onChange = (e) => {
    props.onChange(e);
  }
 return (
    <div className="honor-form flex column">
      {label && <label htmlFor="title">{label}</label>}
      <input type="text" name="title" placeholder={placeholder} className="input1" onChange={(e) => onChange(e)} />
    </div>
  );
}

export default Inputbox