import { selectItem } from '../../../../actions'
import React from 'react'
import Style from './Style.css'
import List from './List'
import { connect } from 'react-redux'

const selector = (state) => {
    console.log(state);
    return {
        list: state.list
    }
}

let LikeList = ({dispatch, list}) => {
    const onItemClick = function(listIndex){
        return function(itemIndex){
            dispatch(selectItem(listIndex, itemIndex))
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