import React from 'react';
import { Card, CardImg, CardSubtitle } from 'reactstrap';


class FollowerCard extends React.Component {
constructor(){
    super();
    this.state = {
        data: []
    };
}

    componentDidMount() {
        console.log('Data called in FollowerCard.js');
        fetch('https://api.github.com/users/asvka/followers')
        .then(res => res.json())
        .then(data => this.setState({ data }))
        .catch(err => console.log("Error retrieving followers array in FollowerCard.js", err))
    };
// const FollowerCard = props => {
    render(){
        console.log(this.state.data)
        return (
            <div className='follower-container'>
            <h4 className='follower-header'>My Followers:</h4>
            <div className='card-deck'>
                {this.state.data.map(data => (
                    <Card>
                    <CardImg width='200' src={data.avatar_url} alt={data.id} />
                    <CardSubtitle>{data.login}</CardSubtitle>
                    </Card>
                 ) )}
            </div>
         </div>
        )
    }

}
export default FollowerCard;
