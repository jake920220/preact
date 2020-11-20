import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    const activeStyle = {
        color: "red"
    }
    return (
        <div>
            <h1>소개 페이지입니다.</h1>
            <ul>
                <li><NavLink activeStyle={activeStyle} exact to={"/"}>메인 페이지</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to={"/about"}>소개 페이지</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to={"/login"}>로그인 페이지</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to={"/sign-up"}>가입 페이지</NavLink></li>
            </ul>
        </div>
    )
}

export default About;