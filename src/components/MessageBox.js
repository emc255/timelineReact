import React from "react";

function MessageBox(props) {
  if (props.message.length > 0) {
    return (
      <div>
        {props.message.map((ele, index) => (
          <div className="outer-message-container" key={index}>
            <div className="user-photo">
              <img src={ele.photo} alt="kitty" />
            </div>
            <div className="message-content-container">
              <p className="line user-name">{ele.name}</p>
              <p className="line date">{ele.date}</p>
              <span>@</span>
              <p className="line time">{ele.time}</p>
            </div>
            <div className="speech-bubble">
              <p classname="aaa">{ele.message}</p>
            </div>
            <button className="delete-btn" data-id={index} onClick={e => props.delete(e.target.dataset.id)}>
              delete post
            </button>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default MessageBox;
