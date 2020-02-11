import React, { Component } from 'react'

import './sidebar.scss'

export default class Sidebar extends Component {

    state = {

    }

    render() {        
        return (            
            <div className="sidebar">
                <div className="row__aide-bar">
                    <p>{(this.props.selectedNode && this.props.selectedNode.x) && `X Cordinates: ${this.props.selectedNode.x}`}</p>
                    <p>{(this.props.selectedNode && this.props.selectedNode.y) && `Y Cordinates: ${this.props.selectedNode.y}`}</p>
                </div>
            </div>                
        )
    }
}