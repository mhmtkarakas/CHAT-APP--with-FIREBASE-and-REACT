import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { db, auth } from "./../firebase/FirebaseConfig";

const Chat = ({ room }) => {
  const [newMsg, setNewMsg] = useState("");
  const [messages, setMessages] = useState([]);
  // kolleksiyonun referansini alma
  const messagesRef = collection(db, "messages");
  // messaji firebase gonderme
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newMsg) return;
    addDoc(messagesRef, {
      text: newMsg,
      user: auth.currentUser.displayName,
      room: room,
      createdAt: serverTimestamp(),
    });
    console.log(addDoc);
    setNewMsg("");
  };

  // mesajlari cekme
  useEffect(() => {
    const queryMessage = query(
      messagesRef,
      where("room", "==", room),
      orderBy("createdAt")
    );
    // veritabani degistiginde mesajlari ceker
    onSnapshot(queryMessage, (snapshot) => {
      // gelen mesajlari bir diziye aktarma
      let commingMessages = [];
      snapshot.forEach((doc) => {
        commingMessages.push({ ...doc.data(), id:doc.id });
      });
      setMessages(commingMessages);
    });
  }, []);

  return (
    <div className="chat">
      <div className="chat-info">
        <p>Deneme</p>
        <h3>{room}</h3>
        <a href="/">Farkli Oda</a>
      </div>
      <div className="messages">
        {messages.map((message) => (
          <>
            {auth.currentUser.displayName === message.user ? (
              <p className="user-message">{message.text}</p>
            ) : (
              <p>
                <span className="message-info">{message.user} :</span>
                <span className="message">{message.text}</span>
              </p>
            )}
          </>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={newMsg}
          onChange={(e) => setNewMsg(e.target.value)}
          type="text"
          placeholder="mesajinizi giriniz.."
        />
        <button type="submit">Gonder</button>
      </form>
    </div>
  );
};

export default Chat;
