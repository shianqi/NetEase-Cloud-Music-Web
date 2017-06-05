import { selectItem } from '../../../../actions'
import React from 'react'
import { push } from 'react-router-redux'
import Style from './Style.css'
import List from './List'
import { connect } from 'react-redux'

const selector = (state) => {
    return {
        list: state.list
    }
}

let LikeList = ({dispatch, list}) => {
    const onItemClick = function(listIndex){
        return function(itemIndex, router){
            dispatch(selectItem(listIndex, itemIndex))
            dispatch(push(router))
        }
    }

    const listItems = list.map((item, index)=>{
        return (
            <List data={item} key={index} onItemClick={onItemClick(index)}/>
        )
    })

    return(
        <div className={Style.likeList}>
            {listItems}
        </div>
    )
}

LikeList = connect(selector)(LikeList)

export default LikeList