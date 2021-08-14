import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const uiConfig = {
    signInFlow: 'redirect',
    signInSuccessUrl: '/admin/',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
};

const Login = () => {
    return (
        <div className="login container">
            <div className="login-box">
                <div className="login-box-main">
                    <div className="login-box-main-top">
                        <span className="titlePage">Đăng nhập</span>
                        <span className="createAcc">Tạo tài khoản</span>
                    </div>
                    <div className="login-box-main-formlogin">
                        <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="Email" />
                        <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                        <label className="form-check-label" for="dropdownCheck">
                            Ghi nhớ tài khoản
                        </label>
                    </div>
                    <div className="login-box-main-action">
                        <button className="btn-login">
                            Đăng nhập
                        </button>
                        <a href="#">Quên mật khẩu</a>
                    </div>
                </div>
            </div>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        </div>
    );
}

export default Login;