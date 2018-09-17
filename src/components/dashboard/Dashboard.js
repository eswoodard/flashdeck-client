import React from 'react';
import './Dashboard.css';
import UserDecks from './UserDecks';
import OtherDecks from './OtherDecks';

const Dashboard = () =>  {
    return (
      <div className="user-flashdecks">
        <UserDecks />
        <OtherDecks />

      </div>

    )
}

export default Dashboard;