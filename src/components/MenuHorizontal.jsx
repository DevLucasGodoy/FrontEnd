import React from 'react'
import { Link } from 'react-router-dom';

import './MenuHorizontal.css'

function MenuHorizontal() {
	return (
    <div class="apresentacao">
    <div class="center">
      <a href="/" class="logo">
        <i class="logomarca"></i>
      </a>
      <ul class="menu">
        <li class="menu__li"> <a href="/" class="menu__link">Home</a> </li>
        <li class="menu__li"> <a href="/" class="menu__link">About</a> </li>
        <li class="menu__li"> <a href="/" class="menu__link">Pricing</a> </li>
        <li class="menu__li"> <a href="/" class="menu__link">Contact</a> </li>
        <li class="menu__li"> <a href="/" class="bt-singin">Sing In</a> </li>
        <li class="menu__li"> <a href="/" class="bt-singup">Sing Up</a> </li>
      </ul>
      <div class="clear"></div>
      </div>
      </div>
	)
}

export default MenuHorizontal