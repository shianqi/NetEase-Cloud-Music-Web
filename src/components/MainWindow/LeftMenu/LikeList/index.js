import React, {Component} from 'react'
import Style from './Style.css'
import ListTitle from './ListTitle'
import ListItem from './ListItem'

class LikeList extends Component{
    render(){
        return(
            <div className={Style.likeList}>
                <ListTitle/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListTitle/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
        )
    }
}

export default LikeList