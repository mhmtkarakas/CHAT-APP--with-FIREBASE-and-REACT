import { useRef, useState } from "react";

import Auth from "./components/Auth";
import Chat from "./components/Chat";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("token"));
  const [room, setRoom] = useState(null);
  const inputRef = useRef(null);

  // eger kullanici henuz giris yapmadiysa yonlendir
  if (!isAuth) {
    <div className="container">
      <Auth setIsAuth={setIsAuth} />
    </div>;
  }
  // eger giris yaptiysa
  return (
    <div className="container">
      {room ? (
        <Chat room={room} />
      ) : (
        <div className="room-container">
          <h1>Chat Odasi</h1>
          <p>Hangi Odaya Gireceksin?</p>
          <input ref={inputRef} 
          type="text"
          placeholder="oda ismi yaziniz..." 
          />
          <button onClick={() => setRoom(inputRef.current.value)} id="enter">
            Odaya Gir
          </button>
          <button id="leave">Cikis Yap</button>
        </div>
      )}
    </div>
  );
}

export default App;
