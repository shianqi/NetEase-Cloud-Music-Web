import React, { Component } from 'react'
import Style from './DiscoverMusic.css'
import cs from 'classnames'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'

const selector = (state) => {
    return {
        list: state.list[0].items[0].items
    }
}

let DiscoverMusic = ({dispatch, list, match})=>{
    const navigationItem = (item)=>{
        const _match = match
        return ({ match })=>(
            <div
                className={
                    cs(
                        Style['navigation-item'],
                        {[Style['navigation-item-active']]: match},
                    )
                }
                onClick={()=>{
                    dispatch(push(`${_match.url}${item.router}`))
                }}
            >{item.name}</div>
        )
    }

    const navigation = list.map((item, index)=>{
        return (
            <Route key={index} path={`${match.url}${item.router}`} children={navigationItem(item)}/>
        )
    })

    const Topic = ({match} ) => {
        return (
            <div>
                <h3>{match.url}</h3>
            </div>
        )
    }

    return (
        <div className={ Style['main'] }>
            <div className={ Style['navigation'] }>
                {navigation}
            </div>

            <Route exact path={`${match.url}/:thisID`} component={Topic}/>
            <Route exact path={`${match.url}`} render={() => (
                <h3>Please select a topic.</h3>
            )}/>
        </div>
    )
}

export default withRouter(connect(selector)(DiscoverMusic))