import {useState} from 'react'
import './index.css'

const Container = () => {
  const [text, setText] = useState('')
  const [toggleBtn, setToggleBtn] = useState(false)

  const onButtonClick = () => {
    setToggleBtn(prevState => !prevState)
  }

  const renderSave = () => (
    <div className="text-container">
      <input
        className="input"
        value={text}
        onChange={e => setText(e.target.value)}
        type="text"
      />
      <button className="button" onClick={onButtonClick} type="button">
        Save
      </button>
    </div>
  )

  const renderEdit = () => (
    <div className="text-container">
      <p className="text">{text}</p>
      <button className="button" type="button" onClick={onButtonClick}>
        Edit
      </button>
    </div>
  )

  return (
    <div className="bg-container">
      <div className="card-container">
        <h1 className="heading">Editable Text Input</h1>
        {toggleBtn ? renderEdit() : renderSave()}
      </div>
    </div>
  )
}

export default Container
