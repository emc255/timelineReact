import React, { useState } from "react";

function InputMessage(props) {
  const [value, setValue] = useState("");
  const [username, setUserName] = useState(0);

  const submit = e => {
    e.preventDefault();

    const timestamp = new Date();

    if (value === "") {
      return;
    } else {
      props.addMessage(value, username, timestamp.toLocaleTimeString(), timestamp.toLocaleDateString());

      setValue("");
    }
  };

  const getIndex = e => {
    if (!e.target.value) {
      setUserName(0);
    } else {
      setUserName(e.target.value);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={submit}>
        <div className="choose-user-container">
          <select onChange={getIndex}>
            {props.user.map(ele => (
              <option key={ele.id} value={ele.id}>
                {ele.name}
              </option>
            ))}
          </select>
        </div>
        <input
          className="user-input-post"
          type="text"
          value={value}
          placeholder="message goes here..."
          onChange={e => setValue(e.target.value)}
        />
        <div className="post-btn-container">
          <button className="post-btn">post</button>
        </div>
      </form>
    </div>
  );
}

export default InputMessage;
