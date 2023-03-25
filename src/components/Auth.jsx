import {auth,provider} from '../firebase/FirebaseConfig';
// Giris Yapmak icin gerekli fonksiyon
import { signInWithPopup } from 'firebase/auth';
const Auth = ({ setIsAuth }) => {
    // giris
    const signIn=()=>{
        // promise dondurur
        signInWithPopup(auth,provider)
        .then((res)=>{
         localStorage.setItem("token",res.user.refreshToken)
         setIsAuth(true);
        })
        .catch((err)=>console.log(err));
    }
  return (
    <div className='auth'>
        <h1>Chat Odasi</h1>
        <p>Devam Etmek Icin Tikla</p>
        <button onClick={signIn}>Google ile Gir</button>
    </div>
  )
}

export default Auth