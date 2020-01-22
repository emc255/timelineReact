import React from "react";

function MessageBox(props) {
  if (props.message.length > 0) {
    return (
      <div>
        {props.message.map((ele, index) => (
          <div className="message-container" key={index}>
            <div className="user-message-container">
              <div className="user-photo">
                <img src={ele.photo} alt="kitty" />
              </div>
              <div className="user-massage">
                <p className="line">{ele.name}</p>
                <p className="line">{ele.date}</p>
                <p className="line">{ele.time}</p>

                <p>{ele.message}</p>
              </div>
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
