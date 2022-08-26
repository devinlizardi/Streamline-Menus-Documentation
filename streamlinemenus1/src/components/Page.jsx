import React, { useState } from 'react'
import MenuList from './MenuList';
import DietChooser from './DietChooser';
import fetch from 'node-fetch';


const Page = ({ match }) => {

  const [score, setScore] = useState(0);
  const [menu, setMenu] = useState({
    "name": "",
    "color": "", 
    "notes": "",
    "menu": []
  })
    fetch(`https://streamline-menus-api-1.herokuapp.com/restaurants/${match.params.id}`)
    .then(response => response.json())
    .then(data => {
        setMenu(data)
    })

    if (menu.name === '') {
      return (
        <h1>404! Menu not found! Go <a href="/">home</a>.</h1>
      )
    } else {
      return (
      <div>
        <DietChooser state={setScore}></DietChooser>
        <h1 style={{fontSize: "40px", textDecoration: "underline", textDecorationColor: menu.color}} id="title">{menu.display_name}</h1>
        <MenuList user={score} items={menu}></MenuList>
      </div>
      )
    }


}

export default Page;