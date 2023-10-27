import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/gouravsachdeva");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate");
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <div>
          <img src={avatar_url} />
        </div>
        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {login}</h4>
      </div>
    );
  }
}

export default UserClass;
