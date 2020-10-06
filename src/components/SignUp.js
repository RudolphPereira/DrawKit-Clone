import React from "react";
import "./SignUp.css";

function SignUp() {
  return (
    <div className="signUp">
      <div className="signUp__content">
        <p className="signUp__title">
          New free icon and illustration packs are being added every week. Sign
          up below to get each week's free download in your inbox!
        </p>
        <form className="signUp__form">
          <input
            type="text"
            className="signUp__form--input"
            placeholder="Enter your email address"
          />
          <button className="signUp__form--button">Join</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
