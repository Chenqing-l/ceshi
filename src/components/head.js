import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
export default class head extends Component {
    render() {
        return (
            <div>
               <NavLink to='/wode' >我的</NavLink>
               <NavLink to='/geren' >个人</NavLink> 
            </div>
        )
    }
}
 