import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount is called!");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>About</h1>
        <h2>This is About us page</h2>
        {/* <User name={"Gourav Sachdeva (function)"} /> */}
        <UserClass
          name={"Gourav Sachdeva (class)"}
          location={"Bathinda (class)"}
        />
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default About;
