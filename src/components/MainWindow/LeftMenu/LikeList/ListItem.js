import React, {Component} from 'react'
import Style from './Style.css'
import cs from 'classnames'
import iconfont from '../../../../../style/iconfont.css'
import { Route } from 'react-router'

class ListItem extends Component{
    render(){
        const { data, handleClick } = this.props

        return(
            <Route path={`${data.router}`} children={({ match }) => (
                <div
                    className={
                        cs(
                            iconfont.iconfont,
                            iconfont[data.icon],
                            Style['listItem'],
                            {[Style['active']] : match}
                        )
                    }
                    onClick={ ()=>{
                        handleClick(data.router)
                    }}
                >
                    { data.title }
                </div>
            )}/>
        )
    }
}

export default ListItem
