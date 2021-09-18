import React, {useState} from "react"
import BackButton from "components/Backbutton"
import Title from "components/Title"
import Inputbox from "components/Inputbox"
import Button from "components/Button"
import NavBottom from "components/NavBottom"
import Circle from "components/Circle"
import "./style.scss"
const Honor = () => {
  const backRoute = "/"
  const title = "Add an Honor"
  const label = "Title"
  const placeholder = "Title"
  const buttons = ["Local", "National", "International"]
  const [tab, setTab] = useState(2)
  const onChange = (e) => {
    e.target.name = e.target.value;
  }
  return (
    <div className="position-relative">
      <div className="container">
        <Circle />
        <BackButton backRoute={backRoute} />
        <Title title={title} />
        <Inputbox label={label} placeholder={placeholder} onChange={(e) => onChange(e)} />
        <div className="honor-form flex column">
          <label >When did you receive this honor?</label>
          <div className="flex justify-around">
            <input type="text" name="month" placeholder="Month" className="input2" onChange={(e) => onChange(e)} />
            <input type="text" name="year" placeholder="Year" className="input2" onChange={(e) => onChange(e)} />
          </div>
        </div>
        <div className="honor-form flex column">
          <label >Please describe this honor</label>
          <textarea
            name="description"
            placeholder="What did you do to achieve it?&#x0a;&#x0a; How many students typically receive it?"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="flex justify-around scope-btn">
          {
            buttons.map((content, index) => (
              <button
                key={`scope-${index}`}
                onClick={() => setTab(index)}
                className={`${index === tab ? 'active' : ''}`}
              >
                {content}
              </button>
            ))
          }
        </div>
        <div className="flex justify-around">
          <Button type="border" size="normal" content={"Back"} />
          <Button type="fill" size="normal" content={"Submit"} />
        </div>
        <NavBottom />
      </div>
    </div>
  );
}

export default Honor;