import React from "react";

function MessageBox(props) {
  if (props.message.length > 0) {
    return (
      <div className="aa">
        {props.message.map((ele, index) => (
          <div key={index}>
            <div className="message-container">
              <div className="user-photo">
                <img src={ele.photo} alt="kitty" />
              </div>
              <div className="message-content-container">
                <p className="line user-name">{ele.name}</p>
                <p className="line date">{ele.date}</p>
                <span>@</span>
                <p className="line time">{ele.time}</p>
                <div className="speech-bubble">
                  <p>{ele.message}</p>
                </div>
                <div className="delete-btn-container">
                  <button className="delete-btn" data-id={index} onClick={e => props.delete(e.target.dataset.id)}>
                    delete post
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default MessageBox;
