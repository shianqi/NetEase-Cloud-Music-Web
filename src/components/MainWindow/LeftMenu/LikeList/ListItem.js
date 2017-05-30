import React, {Component} from 'react'
import Style from './Style.css'

class ListItem extends Component{
    render(){
        return(
            <div className={Style.listItem+" "+Style.active}>ListItem</div>
        )
    }
}

export default ListItem