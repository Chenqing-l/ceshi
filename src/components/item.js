import React, { Component } from 'react'
import Axios from 'axios';
import '../mock/index'
import {withRouter} from 'react-router-dom'

class item extends Component {
     state={
         data:[]
     }
    render() {
        let {data}=this.state
        return (
            <div>
                {
                    data&&data.map((item,index)=>{
                        return(  <div key={index}>
                              <img  src={item.img} onClick={this.tu.bind(this,item)} />
                              <p>{item.w}</p>
                              <span>{item.d}</span>
                        </div>

                        )
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        Axios.get('/api/data').then((res)=>{

            this.setState({
                data:res.data
            })
        })
    }
    tu(item){
        let {history}=this.props
        history.push({
           pathname:"/xiang",
           query:item
        })
   
    }
}

export default (withRouter)(item)
