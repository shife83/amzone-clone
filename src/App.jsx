import { useState } from 'react'
import "./App.css";
import Checkout from "./Checkout/Checkout";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Login from "./Login/Login"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from './payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe  } from '@stripe/stripe-js';
import Order from './Order/Order';
const  promise  = loadStripe (
  'pk_test_51OPYI0LK8WdHpNGUc7htFO1zOgQm1gXkhcciePB4vC1xYtsycoPfWjKhuLwPT5cyCCgHze0OO0MkluJKR1MZCwUm00csfLWoIu');
 
function App() {
  const [count, setCount] = useState(0)
  // const [{}, dispatch] = useStateValue();
  // useEffect(() => {
  //   auth.onAuthStateChanged((authUser) => {
  //     // console.log("THE USER IS >>> ", authUser);
  //     if (authUser) {
  // // the user just logged in / the user was logged in

  //   dispatch({
  //     type: 'SET_USER',
  //     user: authUser,
  //   });
  // } else {
  // // the user is logged out
  //       dispatch({
  //         type: 'SET_USER',
  //         user: null,
  //       });
  //     }
  //   });
  // }, []);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/Login" element={<><Login /></>} />
          <Route path="/Payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment  />
                </Elements>
              </>
            }
          />
          <Route path="Checkout" element={<><Header /><Checkout /></>} />
          <Route path="/Payment" element={<><Header /><Payment /></>} />
          <Route path="/Order" element={<><Header /><Order/></>} />
          <Route path="/" element={<><Header /><Home /></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
