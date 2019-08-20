import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import Wode from '../view/wode'
import Geren from '../view/geren'
import Xiang from '../view/xiang'
export default class route extends Component {
    render() {
        return (
            <div>
                <Router>
                  <Switch>
                      <Route path='/wode' component={Wode}  />
                      <Route path='/geren' component={Geren}   /> 
                      <Route path='/xiang' component={Xiang} />
                      <Redirect from ='/' to='/wode' /> 
                  </Switch>
                </Router>
            </div>
        )
    }
}
