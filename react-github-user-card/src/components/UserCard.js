import React from 'react';
import { Card, CardTitle, CardBody, CardImg, CardText } from 'reactstrap';



class UserCard extends React.Component {
    constructor(){
      super();
      this.state = {
        users: [],
        followers: []
      };
    }
    componentDidMount() {
      console.log('Component mounted!');
      // console.log(this.state.users);
      fetch('https://api.github.com/users/asvka')
        .then(res => res.json())
        .then(users => this.setState({ users }))
        .catch(err => console.log("Error retrieving user data!", err))
    }
    retrieveFollowers = e => {
      e.preventDefault();
      console.log('Followers array data called');
      fetch('https://api.github.com/users/asvka/followers')
        .then(res => res.json())
        .then(followers => this.setState({ followers }))
        .catch(err => console.log("Error retrieving followers array", err))
    }

    render() {
      console.log('Render rendering...')
      console.log(this.state.users);
      console.log(this.state.followers);
      return (
         <Card className="App">
           <CardBody>
           <CardImg width='300' src={this.state.users.avatar_url} alt={this.state.users.id} />
           <div className="icon-container"><i class="fab fa-github"></i></div>
             <CardTitle><strong>{this.state.users.login}</strong></CardTitle>
             <CardText>{this.state.users.company}</CardText>
             <CardText>{this.state.users.location}</CardText>
           </CardBody>
         </Card>
      )
    }
  }
  export default UserCard;