import React, { Component } from 'react'
import Head from '../components/head'
import Item from '../components/item'
export default class wode extends Component {
    render() {
        return (
            <div>
                <Head/>
                个人
                <div>
                  <Item></Item>
                </div>
            </div>
        )
    }
}
