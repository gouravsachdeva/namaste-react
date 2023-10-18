/**
 *
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 *      <div id="child2">
 *          <h1>I am h1 tag</h1>
 *          <h2>I am h2 tag</h2>
 *      </div>
 * </div>
 *
 * ReactElement(Object) => HTML(Browser Understands)
 */
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is Namaste React 🚀"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);

//JSX - JSX make our life easy when we have to create the tags but the above one is actual way to create the tags as a core of react.

// const heading = React.createElement(
//   "h1", //element or type of tag
//   { id: "heading", xyz: "abc" }, //attributes in react
//   "Hello World from React!" //Childern in react object
// );
// //{} object is the place where we give attributes to our tags. if my h1 tag needs to have id we will give like above

// console.log(heading); //This will return an object created by react.

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent); //render is just converting a heading object to h1 tag and putting inside root
//If we have something already exsits inside my root container react will take the control of root and replace the full content inside my root container,
//In the current example Gourav is here! printed for a small milisecond of time. This won't impact the other portions of html.

console.log(root);

//Library and Framework
//React can only work on small components i.e. a footer component or a header component.
//Framework comes with all loads of things
//React is a bear goal minimal javascript library, Just a some piece of code written by facebook developer.
