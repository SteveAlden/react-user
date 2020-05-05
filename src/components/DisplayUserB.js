import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
// import { Col, Image, Media, Row } from 'react-bootstrap';
import { Media, Image } from 'react-bootstrap';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

import Skeleton from '@material-ui/lab/Skeleton';
// import EmailIcon from '@material-ui/icons/Email';
// import LanguageIcon from '@material-ui/icons/Language';
// import StayCurrentPortraitIcon from '@material-ui/icons/StayCurrentPortrait';

class DisplayUserB extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
      userImage: '',
      dataLoaded: false
    };
  }

  //   userInfo = () => {
  //     return this.props.state.userData;
  //   };
  componentDidMount() {
    setTimeout(() => {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${this.props.match.params.id}`
        )
        .then(res => this.setState({ userData: res.data, dataLoaded: true }));
    }, 3000);

    // this.setState({ userImage: 'https://source.unsplash.com/random' });
    // this.setState({
    //   userImage: `https://joeschmoe.io/api/v1/${this.state.userData.name}`
    // });

    // const { userData: userInfo, company, address } = this.state;
  }

  render() {
    // const userInfo = this.state.userData;
    const { userData: userInfo } = this.state;
    // if (!userInfo.name) {
    //   return <Skeleton variant='circle' width={100} height={100} />;
    // }
    // const company = this.state.userInfo.company;
    // console.log(this.state.userData?.company?.name);

    return (
      <div>
        {/* if (this.state.dataLoaded === false) {<ProgressBar animated now={45} />} */}
        <Container style={{ paddingTop: '60px' }}>
          <Card
            // bg='dark'
            // text='white'
            filter={'blur(20px) '}
            style={{
              marginTop: '20px',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(255, 255, 255, 0.3)'
            }}
            className='shadow-lg p-3 mb-3'
          >
            <Card.Header>
              {userInfo.name ? (
                <h5>{userInfo.name}</h5>
              ) : (
                <Skeleton variant='text' animation='wave' width='25%' />
              )}
            </Card.Header>

            <Card.Body>
              <Media>
                {/* <Col xs={6} md={4}> */}

                <Image
                  // src='https://cdn3.iconfinder.com/data/icons/miniman-vol-1/65/_Cool_Tough_Guy-512.png'
                  src={`https://joeschmoe.io/api/v1/${userInfo.name}`}
                  roundedCircle
                  width={100}
                  height={100}
                  className='mr-3'
                  // thumbnail
                />
                {userInfo?.company?.name ? (
                  <Media.Body>
                    <h5>{userInfo.username}</h5>
                    {/* <Container> */}
                    <Card.Text>
                      {/* <EmailIcon
                      fontSize='small'
                      className='text-white-50 bg-dark'
                    />{' '} */}
                      {userInfo.email ? (
                        userInfo.email
                      ) : (
                        <Skeleton
                          variant='text'
                          animation='wave'
                          width='25%'
                          height='100px'
                        />
                      )}
                      <br />
                      {/* <LanguageIcon fontSize='small' />  */}
                      {userInfo.website ? (
                        userInfo.website
                      ) : (
                        <Skeleton variant='text' animation='wave' width='25%' />
                      )}
                      <br />
                      {/* <StayCurrentPortraitIcon fontSize='small' />{' '} */}
                      {userInfo.phone}
                      <br />
                    </Card.Text>
                    {/* </Container> */}
                    <Media>
                      <WorkRoundedIcon />
                      <Media.Body>
                        <Card.Text>
                          {userInfo?.company?.name}
                          <br />

                          <p className='text-white-50'>
                            {userInfo?.company?.catchPhrase}
                          </p>
                        </Card.Text>
                      </Media.Body>
                    </Media>
                    <Media>
                      <HomeRoundedIcon />
                      <Media.Body>
                        <p>
                          {userInfo?.address?.street},{' '}
                          {userInfo?.address?.suite}
                          <br />
                          {userInfo?.address?.city},{' '}
                          {userInfo?.address?.zipcode}
                          <br />
                          <div className='text-white-50'>
                            <RoomOutlinedIcon />
                            {userInfo?.address?.geo?.lat}
                            {'   '}
                            {userInfo?.address?.geo?.lat}
                          </div>
                        </p>
                      </Media.Body>
                    </Media>
                  </Media.Body>
                ) : (
                  <Skeleton
                    variant='rect'
                    animation='wave'
                    width='100%'
                    height='250px'
                  />
                )}
                {/* </Col> */}
              </Media>
              {/* <Container>
                <Card.Text>
                  {userInfo.email}
                  <br />
                  {userInfo.website}
                </Card.Text>
              </Container> */}
            </Card.Body>
          </Card>
        </Container>
      </div>
    );
  }
}

export default DisplayUserB;
