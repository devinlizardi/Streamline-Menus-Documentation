import React from 'react';
import SwipeableListItem from './SwipeableList/SwipeableListItem';


const MenuItem = ({ name, discription }) => {
    return (
            <SwipeableListItem>
                <h2 className="menuItem">{name}</h2>
                <p className="description">{discription}</p>
            </SwipeableListItem>
    );
}

export default MenuItem;