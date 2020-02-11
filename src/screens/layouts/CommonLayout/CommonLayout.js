import React, { Component } from 'react'

import './CommonLayout.scss'

export default class CommonLayout extends Component {

    state = {
        
    }

    render () {
        const { children } = this.props
        return (
            <div className="common__layout-container">
                <div className="common__layout-middle-content">{children}</div>
            </div>
        )
    }
}