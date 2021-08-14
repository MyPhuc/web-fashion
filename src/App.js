import "./scss/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Products from "./pages/Products";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";
import CatbooksDetail from "./pages/CatbooksDetail";
import Cart from "./components/Cart";
import firebase from 'firebase';
import React, { useEffect } from 'react';
import Admin from "./pages/Admin";
import baoCao from "./pages/baocao";
import detail from "./pages/detail";

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyAdo5nvwrzT9RFXgZTiGYD5mdhdm5uL52k',
  authDomain: 'namustore-ada8a.firebaseapp.com',
  // ...
};
firebase.initializeApp(config);

function App() {

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        console.log("User is not logged in")
        return;
      }
      console.log('Logged in user:', user.displayName);
      const token = await user.getIdToken();
      console.log('Logged in user token: ', token);
    });

    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  return (
    <Router>
      <Header />
      <Cart />
      <div className="wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin/" component={Admin} />
          <Route path="/sanpham/" component={Products} />
          <Route path="/login/" component={Login} />
          <Route path="/theloai/:id" component={CatbooksDetail} />
          <Route path="/baoCao/" component={baoCao} />
          <Route path="/detail/" component={detail} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
