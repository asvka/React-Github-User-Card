import React from 'react';


import './App.css';
import UserCard from './components/UserCard';
import Followers from './components/Followers';


const App = props => {
  return (
    <div>
      <UserCard />
      <Followers />
    </div>
  )
}
export default App;
