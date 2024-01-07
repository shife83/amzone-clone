// import React, { useState } from "react";
// import { Link, useNavigate,  } from 'react-router-dom';
// import { auth } from '../Firebase/Firebase';
// import "./Login.css";
// import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';
// function Login() {
//     // const history = useHistory();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
// const navigate=useNavigate() 
//     const signIn = (e) => {
//       e.preventDefault();
  
//         signInWithEmailAndPassword(auth,email, password)
//         .then((auth) => {
//           if (auth) {
//             navigate("/")
//           } 
//           // history.push('/');
//         })
//         .catch((error) => alert(error.message));

//       };
//     const register = (e) => {
//       e.preventDefault();
    
      
//         createUserWithEmailAndPassword(auth,email, password)
//         .then((auth) => {
//           if (auth) {
//             navigate("/")
//             // history.push('/');
//           }
//         })
//         .catch((error) => console.log(error.message));
//     };

//   return (
//     <div className="login">
//       <Link to="/">
//       <img
//         className="login__logo"
//         src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
//       />
//       </Link>
//       <div className="login__container">
//         <h1>Sign-in</h1>
//         <form>
//           <h5>E-mail</h5>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <h5>Password</h5>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             type="submit"
//             onClick={signIn}
//             className="login__signInButton"
//           >
//             Sign In
//           </button>
//         </form>
//                 <p>
//           By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use &
//           Sale. Please see our Privacy Notice, our Cookies Notice and our
//          Interest-Based Ads Notice.
//        </p>

//         <button onClick={register} className="login__registerButton">
//           Create your Amazon Account
//         </button>
//         {" "}
//       </div>
//       {" "}
//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import { useNavigate ,Link } from "react-router-dom";
import { auth } from "../Firebase/Firebase";
import "./Login.css";
import {
signInWithEmailAndPassword,
createUserWithEmailAndPassword,
} from "firebase/auth";

// Define constants for strings
const LOGO_URL =
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png";
const SIGN_IN_TEXT = "Sign In";
const REGISTER_TEXT = "Create your Amazon Account";
const AGREEMENT_TEXT = `By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.`;

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const navigate = useNavigate();

// Extract common logic into a separate function
const handleAuth = (authMethod, successMessage) => {
authMethod(auth, email, password)
.then((auth) => {
if (auth) {
console.log(successMessage);
navigate("/");
}
})
.catch((error) => alert(error.message));
};

const signIn = (e) => {
e.preventDefault();
handleAuth(signInWithEmailAndPassword, "Signed in successfully");
};

const register = (e) => {
e.preventDefault();
handleAuth(createUserWithEmailAndPassword, "Registered successfully");
};

return (
<div className="login">
{/* Use Link to wrap the logo image */}
<Link to="/">
<img className="login__logo" src={LOGO_URL} />
</Link>
<div className="login__container">
<h1>{SIGN_IN_TEXT}</h1>
<form>
<h5>E-mail</h5>
<input
type="text"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<h5>Password</h5>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
/>

<button
type="submit"
onClick={signIn}
className="login__signInButton"
>
{SIGN_IN_TEXT}
</button>
</form>
<p>{AGREEMENT_TEXT}</p>

<button onClick={register} className="login__registerButton">
{REGISTER_TEXT}
</button>
</div>
</div>
);
}

export default Login;