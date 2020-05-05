import React, { Component } from 'react';

import { Link } from 'react-router-dom';
// import { grey } from '@material-ui/core/colors';

import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import { Col, Image, Media, Row, Button } from 'react-bootstrap';
// function dispUser(name) {
//     return(
//     <DisplayUser user={user}/>)
//     console.log(name));
// };

class UserB extends Component {
  state = {
    hoverClassName: 'shadow-none',
    hoverCardBg: 'rgba(255, 255, 255, 0.3)',
    // hoverCardBg: 'light',
    hoverCardText: 'white',
    hoverFont: '16px'
  };

  // toggleRaised = () => this.setState({raised:!this.state.raised});

  onMouseOver = () => {
    this.setState({
      hoverClassName: 'shadow-lg pl-2',
      hoverCardBg: 'rgba(255, 255, 255, 0.5)',
      // hoverCardBg: 'secondary',
      hoverCardText: 'dark',
      hoverFont: '18px'
    });
  };
  onMouseOut = () => {
    this.setState({
      hoverClassName: 'shadow-none',
      hoverCardBg: 'rgba(255, 255, 255, 0.3)',
      // hoverCardBg: 'light',
      hoverCardText: 'white',
      hoverFont: '16px'
    });
  };
  onMouseClick = () => {
    this.setState({
      hoverClassName: 'shadow-none',
      hoverCardBg: 'dark',
      hoverCardText: 'white'
    });
  };

  render() {
    const name = this.props.user.name;
    return (
      <Link
        style={{ textDecoration: 'none' }}
        to={`/user/${this.props.user.id}`}
      >
        <Card
          // bg={this.state.hoverCardBg}
          text={this.state.hoverCardText}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          className={this.state.hoverClassName}
          style={{
            margin: '20px 2px 20px 2px',
            backdropFilter: 'blur(10px)',
            backgroundColor: this.state.hoverCardBg
          }}
        >
          <Card.Body>
            <Card.Text
            // style={{ fontSize: this.state.hoverFont }}
            >
              {name}
            </Card.Text>
          </Card.Body>
        </Card>
        {/* <div
          class='shadow-sm p-3  rounded'
          style={{
            marginTop: '20px',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'rgba(255, 255, 255, 0.4)'
          }}
        >
          {name}
        </div> */}
      </Link>

      // </Link>
    );
  }
}

export default UserB;
