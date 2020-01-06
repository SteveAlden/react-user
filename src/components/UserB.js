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
    hoverCardBg: 'light',
    hoverCardText: ''
  };

  // toggleRaised = () => this.setState({raised:!this.state.raised});

  onMouseOver = () => {
    this.setState({
      hoverClassName: 'shadow-lg',
      hoverCardBg: 'secondary',
      hoverCardText: 'white'
    });
  };
  onMouseOut = () => {
    this.setState({
      hoverClassName: 'shadow-none',
      hoverCardBg: 'light',
      hoverCardText: ''
    });
  };
  onMouseClick = () => {
    this.setState({
      hoverClassName: 'shadow-none',
      hoverCardBg: 'dark',
      hoverCardText: 'whitw'
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
          bg={this.state.hoverCardBg}
          text={this.state.hoverCardText}
          onMouseOver={this.onMouseOver}
          onMouseOut={this.onMouseOut}
          // raised={this.toggleRaised}
          className={this.state.hoverClassName}
          style={{
            margin: '20px 2px 20px 2px'
          }}
          // onClick={this.onMouseClick}
        >
          {/* <Button variant='outline-light'> */}
          <Card.Body>
            <Card.Text>{name}</Card.Text>
          </Card.Body>
          {/* </Button> */}
        </Card>
      </Link>

      // </Link>
    );
  }
}

export default UserB;
