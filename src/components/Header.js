import React, { Component } from "react";

class Header extends Component {

  render() {
    return (
      <div className="jumbotron jumbotron-fuild shadow-lg">
        <div className="container">
          <h1 className="display-3  shadow-lg"> Zendesk Ticket Viewer </h1>
        </div>
      </div>
    );
  }
}

export default Header;