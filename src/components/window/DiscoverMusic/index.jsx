import React from 'react'
import Style from './DiscoverMusic.css'
import cs from 'classnames'
import { Route } from 'react-router'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { push } from 'react-router-redux'
import GXTJ from './GXTJ'
import GD from './GD'
import GS from './GS'
import PHB from './PHB'
import ZBDT from './ZBDT'
import ZXYY from './ZXYY'

const selector = (state) => {
    return {
        list: state.list[0].items[0].items
    }
}

const DiscoverMusic = ({dispatch, list, match})=>{
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
        switch (match.params.thisID) {
            case 'GXTJ': return ( <GXTJ/> )
            case 'GD': return ( <GD/> )
            case 'ZBDT': return ( <ZBDT/> )
            case 'PHB': return ( <PHB/> )
            case 'GS': return ( <GS/> )
            case 'ZXYY': return ( <ZXYY/> )
            default: return ( <GXTJ/> )
        }
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
