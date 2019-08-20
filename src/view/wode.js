import React, { Component } from 'react'
import Head from '../components/head'
import {connect}  from 'react-redux'
class wode extends Component {
    state={
        qu:[]
    }
    
    render() {
        let {qu}=this.props;
        console.log(qu)
        return (
            <div>
                <Head/>
                {
                    qu.map((item,index)=>{
                        return( <div key={index}>
                             <img src={item.img} />
               <p>{item.w}</p>
               <span>{item.d}</span>
                        </div>

                        )
                    })
                }
            </div>
        )
    }

}
export default connect(
    (state)=>{
        return {
            qu:state.listReducer
        }
    },
   
)(wode)
