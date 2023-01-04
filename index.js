import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <>
    <h1>My name is sonali</h1>
    <p>this is my page</p>
    <button>this is button</button>
    <ol>
      <li>sonali</li>
      <li>Laxman</li>
      <li>sonawane</li>
      <li>Happy New Year</li>
    </ol>
  </>,
  document.getElementById("root")
);
// simple function
function mycomponent() {
  return (
    <>
      <h1>hi this is react function</h1>
      <p>hi this is react paragraph</p>
    </>
  );
  //prop

  function App2() {
    return <name user="sonali sonawane.." />;
  }
  function user(props) {
    return <h1>hello,{props.name}</h1>;
  }
}
// ES6 Class

class Apple extends React.component {
  render() {
    return <h1> hello,{this.props.name}</h1>;
  }
}
//without use of props

function App3() {
  return <User name="Hello World" />;
}
function User({ name }) {
  return <h1> hello,{name}!</h1>;
}

// react children props

function App4() {
  return (
    <user>
      <h1>hello world</h1>
    </user>
  );
}
function User({ children }) {
  return children;
}

// print hello world

function welcome(props) {
  return <h1> hello, {props.name}</h1>;
}
//const root =ReactDOM.creatRoot(document.getElementById("root"));
const element = <welcome name="my name is sonali" />;
root.render(element);

//composing components

function colours(props) {
  return <h1>colourful,{props.name}</h1>;
}
function fruits() {
  render(
    <div>
      <welcome name="apple" />
      <welcome name="banana" />
      <welcome name="grapes" />
      <welcome name="bery" />
    </div>
  );
}
//extracting component

function comment(props) {
  return (
    <div classname="comment">
      <div classname="UserInfo">
        <img
          classname="Avatar"
          src={props.auther.avatarUrl}
          alt={props.auther.name}
        />
        <div classname="user-info-name">{props.auther.name}</div>
      </div>
      <div classname="comment-text">{props.text}</div>
      <div classname="comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

//read-only function

function withdraw(account, amount) {
  account.total -= amount;
}

//react conditionals

//state & lifecycle

const root = ReactDOM.createroot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <h1>Hello, World</h1>
      <h1>It is {new Date().toLocaleTimeString()}.</h1>
    </div>
  );
  root.render(element);
}
setInterval(tick, 1000);

//clock

function clock(props) {
  return (
    <div>
      <h1>Hello,world</h1>
      <h1>It is {new Date().toLocaleDateString}.</h1>
    </div>
  );

  function clock() {
    root.render(<clock date={new Date()} />);
  }
}
setInterval(tick, 1000);
