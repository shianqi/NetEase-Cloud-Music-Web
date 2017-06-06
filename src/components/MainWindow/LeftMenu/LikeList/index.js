import { selectItem } from '../../../../actions'
import React from 'react'
import { push } from 'react-router-redux'
import Style from './Style.css'
import List from './List'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const selector = (state) => {
    return {
        list: state.list
    }
}

let LikeList = ({dispatch, list}) => {
    const onItemClick = function(){
        return function(router){
            dispatch(push(router))
        }
    }

    const listItems = list.map((item, index)=>{
        return (
            <List data={item} key={index} onItemClick={onItemClick()}/>
        )
    })

    return(
        <div className={Style.likeList}>
            {listItems}
        </div>
    )
}

export default withRouter(connect(selector)(LikeList))