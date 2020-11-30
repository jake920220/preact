import React from "react";
import {NavLink} from "react-router-dom";
import styled, {css} from "styled-components";

const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;

${props =>
  props.primary &&
  css`
    background: palevioletred;
    color: white;
  `};
`;


const Index = () => {
    const activeStyle = {
        color: "red"
    }
    return (
        <div>
            <h1>메인 페이지입니다.</h1>
            <ul>
                <li><NavLink activeStyle={activeStyle} exact to={"/"}>메인 페이지</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to={"/about"}>소개 페이지</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to={"/login"}>로그인 페이지</NavLink></li>
                <li><NavLink activeStyle={activeStyle} to={"/sign-up"}>가입 페이지</NavLink></li>

                <Button primary>Primary</Button>
                <Button>Not Primary</Button>
            </ul>
        </div>
    )
}

export default Index;