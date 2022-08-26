import React from 'react';
import MenuItem from './MenuItem';
import './main.css';
import SwipeableList from './SwipeableList/SwipeableList';

const MenuList = ({ items, user }) => {
    return (
        items.menu.map(item => {
            return (<div key={item.title}><h1 className="sectionHeader" key={item.title}>{item.title}</h1><SwipeableList>{item.food.filter(food => { return food.score >= user }).map(eachfood => {
                return (<MenuItem name={eachfood.name} discription={eachfood.description} key={eachfood.name}/>)
            })}</SwipeableList></div>)
        })
    );
}

export default MenuList;