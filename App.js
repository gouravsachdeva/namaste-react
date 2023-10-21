import React from "react";
import ReactDOM from "react-dom/client";

// React Element => React Element - JS Object => HTMLElement(render)

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🚀"
// ); //core react

// console.log(heading);

// JSX - JSX is not HTML inside javascript. It is different than HTML. It’s a HTML-like or XML-like syntax
// heading is equivalent to jsxHeading

// JSX => babel transpiles to React.createElement => ReactElement - JS Object => HTMLElement(render)
// JSX => transpiled before it reaches to JS - Parcel - Babel

const heading = (
  <h1 className="head" tabIndex="1">
    Namaste React using JSX from element 🚀
  </h1>
);

console.log(heading);

//React Functional Components : Just a normal JS function

// const HeadingComponent2 = () => {
//   return <h1 className="heading">Namaste React functional component</h1>
// }

const TitleComponent = () => (
  <div id="container">
    <h1 className="title">Namaste React using JSX from component 🚀</h1>
  </div>
);

//Component composition

const HeadingComponent = () => (
  <div id="container">
    {heading}
    <TitleComponent />
    {/* <TitleComponent></TitleComponent> same as above and we can copy same multiple times */}
    {/* {TitleComponent()} We can use component like a function also all 3 are same thing. */}
    <h1 className="heading">Namaste React functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
