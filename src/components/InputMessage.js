import React, { useState } from "react";

function InputMessage(props) {
  const [value, setValue] = useState("");
  const [username, setUserName] = useState(0);

  function submit(e) {
    e.preventDefault();

    const timestamp = new Date();

    if (value === "") {
      return;
    } else {
      props.addMessage(value, username, timestamp.toLocaleTimeString(), timestamp.toLocaleDateString());

      setValue("");
    }
  }

  function getIndex(e) {
    if (!e.target.value) {
      setUserName(0);
    } else {
      setUserName(e.target.value);
    }
  }

  return (
    <div className="form-container">
      <form onSubmit={submit}>
        <div className="user-container">
          <select onChange={getIndex}>
            {props.user.map(ele => (
              <option key={ele.index} value={ele.index}>
                {ele.name}
              </option>
            ))}
          </select>
        </div>
        <div className="post-container">
          <input className="user-text" type="text" value={value} placeholder="message...." onChange={e => setValue(e.target.value)} />
          <button className="post-btn">post</button>
        </div>
      </form>
    </div>
  );
}

export default InputMessage;
