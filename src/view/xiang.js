import React, { Component } from 'react'
import {connect}  from 'react-redux'

class xiang extends Component {

    render() {
        let {query}=this.props.location

        return (
            <div>
            
                <img src={query.img} />
               <p>{query.w}</p>
               <span>{query.d}</span>
               <button onClick={this.shou.bind(this,query)}>收藏</button>
            </div>
        )
    }
    shou(query){
        this.props.cun(query)
        console.log(query)
    }
}
export default connect(
  null,
    (dispatch)=>{
        return{
            cun(data){
                dispatch({type:'CUN',data})
            }
        }
    }

)(xiang)