import React, {Component} from 'react'
import Style from './Style.css'
import cs from 'classnames'
import iconfont from '../../../../../style/iconfont.css'

class ListItem extends Component{
    render(){
        const { data, handleClick } = this.props

        return(
            <div
                className={
                    cs(
                        iconfont.iconfont,
                        iconfont[data.icon],
                        Style.listItem,
                        {[Style.active] : data.active}
                    )
                }

                onClick={ ()=>{
                    handleClick()
                }}
            >{ data.title }</div>
        )
    }
}

export default ListItem