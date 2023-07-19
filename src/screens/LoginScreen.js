import React, { useState } from "react";
import "./loginScreen.css";

const SignUpScreen = React.lazy(() => import("./SignUpScreen"));

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <React.Suspense fallback={<div>Loading...</div>}>
            <SignUpScreen />
          </React.Suspense>
        ) : (
          <>
            <h1>Unlimited films, Tv programmes and more.</h1>
            <h2>Which anywhere, cancel at my time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
