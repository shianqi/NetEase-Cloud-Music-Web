import React, { Component } from 'react'
import Style from './FindMusic.css'

class FindMusic extends Component{
    constructor(props) {
        super(props);
        this.state = {
            routerList: [
                { name: "个性推荐", router: "" },
                { name: "歌单", router: "" },
                { name: "主播电台", router: "" },
                { name: "排行榜", router: "" },
                { name: "歌手", router: "" },
                { name: "最新音乐", router: "" }
            ]
        };
    }

    render(){
        const navigation = this.state.routerList.map((item)=>{
            return (
                <div className={ Style['navigation-item'] }>{item.name}</div>
            )
        })

        return (
            <div className={ Style['navigation'] }>
                {navigation}
            </div>
        )
    }
}

export default FindMusic