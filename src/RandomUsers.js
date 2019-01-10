import React from "react";

export default class RandomUsers extends React.Component {
  state = {
    persons: [],
    loading: true
  };

  componentDidMount() {
    fetch("https://api.randomuser.me/?results=5")
      .then(res => res.json())
      .then(data => {
        this.setState({
          persons: data.results
        });
      });
  }

  render() {
    let nameAndPic = this.state.persons.map((person, i) => {
      return (
        <div key={i}>
          <img src={person.picture.large} alt="profile-pic" />
          <h1>
            {this.props.capitalize(person.name.first)}{" "}
            {this.props.capitalize(person.name.last)}
          </h1>
        </div>
      );
    });
    return <div>{nameAndPic}</div>;
  }
}
