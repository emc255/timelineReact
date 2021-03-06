import React, { useState } from "react";
import Title from "./components/Title";
import InputMessage from "./components/InputMessage";
import MessageBox from "./components/MessageBox";
import "./App.css";

function App() {
  const [user, setUser] = useState([
    { id: 0, name: "euhna", photo: "http://placekitten.com/g/101/100" },
    { id: 1, name: "sana", photo: "http://placekitten.com/g/102/100" },
    { id: 2, name: "sinb", photo: "http://placekitten.com/g/103/100" },
    { id: 3, name: "yerin", photo: "http://placekitten.com/g/104/100" },
    { id: 4, name: "nayeon", photo: "http://placekitten.com/g/105/100?" }
  ]);

  const [post, setPost] = useState([]);

  const addMessage = (input, index, time, date) => {
    let newPost = {};

    user.map(ele => {
      if (ele.id === parseInt(index)) {
        newPost = {
          index: ele.id,
          name: ele.name,
          photo: ele.photo,
          message: input,
          date: date,
          time: time
        };
      }

      return newPost;
    });
    let newMessage = [newPost, ...post];

    setPost(newMessage);
  };

  const deletePost = index2 => {
    let newMessage = [...post];

    newMessage = newMessage.filter((ele, index) => index !== parseInt(index2));

    setPost(newMessage);
  };

  return (
    <div className="App">
      <Title />
      <InputMessage user={user} addMessage={addMessage} />
      <MessageBox message={post} delete={deletePost} />
    </div>
  );
}

export default App;
