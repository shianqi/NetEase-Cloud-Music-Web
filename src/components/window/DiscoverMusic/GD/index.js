import React, { Component } from 'react'

class GD extends Component{

    constructor(props) {
        super(props)
        console.log('constructor')
        this.state = {
            shrinkState: true
        }
        // props.name = 1
    }

    componentWillMount() {
        console.log('componentWillMount')
    }

    render() {
        return (
            <div>
                <h3>GD</h3>
                <input
                    type="button"
                    onClick={()=>{
                        this.setState({
                            shrinkState: false
                        })
                    }}
                    value={this.props.name}
                />
            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps: 父组件修改属性触发')
    }

    shouldComponentUpdate() {
        console.log('shouldComponentUpdate')
        return true
    }

    componentWillUpdate() {
        console.log('componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillUnmount (){
        console.log('componentWillUnmount')
    }
}

export default GD