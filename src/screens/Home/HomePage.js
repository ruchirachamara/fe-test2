import React, { Component } from 'react'
import * as d3 from 'd3'
import { Graph } from "react-d3-graph"
import _ from 'lodash'

import Sidebar from '../layouts/sidebar/sidebar'

import './HomePage.scss'

class HomePage extends Component {

    state = {
        selectedNode: {            
        },
        myConfig: {
            "automaticRearrangeAfterDropNode": false,
            "collapsible": false,
            "directed": false,
            "focusAnimationDuration": 0.75,
            "focusZoom": 1,
            "height": 600,
            "highlightDegree": 1,
            "highlightOpacity": 0.2,
            "linkHighlightBehavior": true,
            "maxZoom": 8,
            "minZoom": 0.1,
            "nodeHighlightBehavior": true,
            "panAndZoom": false,
            "staticGraph": false,
            "staticGraphWithDragAndDrop": false,
            "width": 1200,
            "d3": {
                "alphaTarget": 0.05,
                "gravity": -400,
                "linkLength": 300,
                "linkStrength": 1
            },
            "node": {
                "color": "#ffffff",
                "fontColor": "white",
                "fontSize": 18,
                "fontWeight": "normal",
                "highlightColor": "white",
                "highlightFontSize": 18,
                "highlightFontWeight": "bold",
                "highlightStrokeColor": "SAME",
                "highlightStrokeWidth": 1.5,
                "labelProperty": "name",
                "mouseCursor": "pointer",
                "opacity": 1,
                "renderLabel": true,
                "size": 450,
                "strokeColor": "none",
                "strokeWidth": 1.5,
                "svg": "",
                "symbolType": "circle"
            },
            "link": {
                "color": "#d3d3d3",
                "fontColor": "red",
                "fontSize": 10,
                "fontWeight": "normal",
                "highlightColor": "blue",
                "highlightFontSize": 8,
                "highlightFontWeight": "bold",
                "mouseCursor": "pointer",
                "opacity": 1,
                "renderLabel": true,
                "semanticStrokeWidth": false,
                "strokeWidth": 4,
                "markerHeight": 6,
                "markerWidth": 6
            }
        }        
    }

    componentDidMount() {
        fetch('./graph.json')
        .then(response => response.json())
        .then(data => this.setState({ data }))        
    }

    handleBlur = _ => _ => (this.props.formUpdated) && this.setState({ saveBtnDisabledStatus: false })

    updateFormHandler = field => event => {  
        this.setState({ 
            [field]: event.target.value, 
            errorFields: {
                [field]: (!event.target.value) ? true : false
            },
            errorsInTheForm: (!event.target.value) ? true : false
        })      
        this.props.employeeFormUpdate([field], event.target.value)  
    }

    onClickGraph = _ => {
        console.log(`Clicked the graph background`)
    }
     
    onClickNode = nodeId => this.setState({ selectedNode: _.filter(this.state.data.nodes, n => n.id == nodeId) })
     
    onDoubleClickNode = nodeId => {
        console.log(`Double clicked node ${nodeId}`)
    }
     
    onRightClickNode = (event, nodeId) => {
        console.log(`Right clicked node ${nodeId}`)
    }
     
    onMouseOverNode = nodeId => {
        console.log(`Mouse over node ${nodeId}`)
    }
     
    onMouseOutNode = nodeId => {
        console.log(`Mouse out node ${nodeId}`)
    }
     
    onClickLink = (source, target) => {
        console.log(`Clicked link between ${source} and ${target}`)
    }
     
    onRightClickLink = (event, source, target) => {
        console.log(`Right clicked link between ${source} and ${target}`)
    }
     
    onMouseOverLink = (source, target) => {
        console.log(`Mouse over in link between ${source} and ${target}`);
    }
     
    onMouseOutLink = (source, target) => {
        console.log(`Mouse out link between ${source} and ${target}`);
    }
     
    onNodePositionChange = (nodeId, x, y) => {
        console.log(`Node ${nodeId} is moved to new position. New position is x= ${x} y= ${y}`);
    }

    clearTheSelectedNode = _ => this.setState({ selectedNode: {} })

    getCordinates = e => {
        console.log(e.pageX)
    }

    submitEmployeeForm = e => {
        e.preventDefault()
    }

    render() {

        const { 
            data, 
            myConfig,
            selectedNode
        } = this.state

        if (!data) return null

        return (
            <>
                <Sidebar selectedNode={selectedNode[0]} />
                <div className="middle__layer-content" onClick={this.getCordinates}>
                    <Graph                
                        data={data}
                        id="graph-id"
                        config={myConfig}                
                        onClickNode={this.onClickNode}                                
                        onClickLink={this.onClickLink}
                        onClickGraph={this.onClickGraph}
                        onMouseOutNode={this.onMouseOutNode}
                        onMouseOutLink={this.onMouseOutLink}
                        onMouseOverNode={this.onMouseOverNode}
                        onMouseOverLink={this.onMouseOverLink}
                        onRightClickNode={this.onRightClickNode}
                        onRightClickLink={this.onRightClickLink}                                
                        onNodePositionChange={this.onNodePositionChange}
                    />
                    <input type="button" onClick={this.clearTheSelectedNode} value={'Clear Cordinates'} />
                </div>                                
            </>
        )
    }
}

export default HomePage