import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
            <h1>로그인 페이지입니다.</h1>
            <ul>
                <li><Link to={"/"}>메인 페이지</Link></li>
                <li><Link to={"/about"}>소개 페이지</Link></li>
                <li><Link to={"/sign-up"}>가입 페이지</Link></li>
            </ul>
        </div>
    )
}

export default Login;