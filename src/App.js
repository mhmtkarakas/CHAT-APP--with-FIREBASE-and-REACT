
import { useState } from 'react';
import Auth from './components/Auth';

function App() {
   
  const [isAuth,setIsAuth] = useState(localStorage.getItem('token'))
  // eger kullanici henuz giris yapmadiysa yonlendir
  if(!isAuth){
    <div className="container">
      <Auth setIsAuth={setIsAuth} />
    </div>
   }
   // eger giris yaptiysa
  return (
    <div className="container">
      <div className='room-container'>
        <h1>Chat Odasi</h1>
        <p>Hangi Odaya Gireceksin?</p>
        <input type="text" />
        <button>Odaya Gir</button>
        <button>Cikis Yap</button>
      </div>
</div>
  );
}

export default App;
