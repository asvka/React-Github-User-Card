import React from 'react';
// import { CardDeck} from 'reactstrap';

import FollowerCard from './FollowerCard';

class Followers extends React.Component {
    constructor(){
        super();
        this.state = {
            followers: []
        };
    }
    componentDidMount() {
        console.log('Followers called in followers.js');
        fetch('https://api.github.com/users/asvka/followers')
        .then(res => res.json())
        .then(followers => this.setState({ followers }))
        .catch(err => console.log("Error retrieving followers array in followers.js", err))
    };
    render (){
        console.log('Followers data:', this.state.followers);
        return(
            <div>
                <FollowerCard
                    key={this.state.followers.id}
                    id={this.state.followers.id}
                    img={this.state.followers.avatar_url}
                    name={this.state.followers.login}
                    company={this.state.followers.company}
                    location={this.state.followers.location}
                />
            </div>
        )

    }
};
export default Followers;