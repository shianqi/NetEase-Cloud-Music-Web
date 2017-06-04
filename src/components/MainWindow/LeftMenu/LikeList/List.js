import React, {Component} from 'react'
import Style from './Style.css'

import ListItem from './ListItem'
import cs from 'classnames'
import icon from '../../../../../style/iconfont.css'

class List extends Component{
    constructor(props) {
        super(props);
        this.state = {
            shrinkState: true
        };
    }

    render(){
        const { data, onItemClick } = this.props;
        const list = data.items.map((item, index)=>{
            return (
                <ListItem data={item} key={index} handleClick={()=>{onItemClick(index)}}/>
            )
        })

        return(
            <div>
                <div
                    className={
                        cs(
                            Style['listTitle'],
                            {
                                [Style['listTitle_shrinkable']]: data.shrinkable
                            }
                        )
                    }
                    onClick={ ()=>{
                        this.setState({shrinkState: !this.state.shrinkState})
                    } }
                >
                    { data.title }
                    <span
                        onClick={ ()=>{
                            this.setState({ shrinkState: !this.state.shrinkState })
                        } }
                        className={
                            cs(
                                icon['iconfont'],
                                {
                                    [icon['icon_shezhi']]: this.state.shrinkState
                                },
                                {
                                    [icon['icon_qianjin']]: !this.state.shrinkState
                                },
                                {
                                    [Style['list_hide']]: !data.shrinkable
                                }
                            )
                        }
                    />
                </div>
                <div
                    className={
                        cs({
                            [Style['list_hide']]: data.shrinkable && !this.state.shrinkState
                        })
                    }
                >
                    { list }
                </div>
            </div>
        )
    }
}

export default List