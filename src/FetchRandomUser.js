import React from "react";

export default class FetchRandomUser extends React.Component {
  state = {
    loading: true,
    person: null
  };

  // async await method
  // async componentDidMount() {
  //   const url = "https://api.randomuser.me/";
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   this.setState({ person: data.results[0], loading: false });
  // }

  // fetch method
  componentDidMount() {
    fetch("https://api.randomuser.me/")
      .then(res => res.json())
      .then(data =>
        this.setState({
          person: data.results[0],
          loading: false
        })
      );
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    return (
      <div>
        <img src={this.state.person.picture.large} alt="profile-pic" />

        <h1>
          {this.props.capitalize(this.state.person.name.first)}{" "}
          {this.props.capitalize(this.state.person.name.last)}
        </h1>
      </div>
    );
  }
}
