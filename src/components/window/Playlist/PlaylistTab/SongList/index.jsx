import React, { Component } from 'react'
import Style from './index.css'

class SongList extends Component {
    render() {
        const { data=[] } = this.props

        const List = data.map((item, index)=>{
            const {
                ar = [],
                al = {},
                name = 'Unknown',
                dt = 0
            } = item
            const hh = parseInt(dt/(60*60*1000), 10)
            const mm = parseInt((dt-hh*60*60*1000)/(60*1000), 10)
            const ss = parseInt((dt-hh*60*60*1000-mm*60*1000)/(1000), 10)
            const getTime = ()=>{
                if(hh!==0) {
                    return `${hh}:${mm>=10?mm:`0${mm}`}:${ss>=10?ss:`0${ss}`}`
                }else {
                    return `${mm>=10?mm:`0${mm}`}:${ss>=10?ss:`0${ss}`}`
                }
            }

            const singer = ()=>{
                const res = []
                for(let i = 0; i<ar.length*2; i++) {
                    if (i%2===0) {
                        res.push(<span>{ ar[i/2].name }</span>)
                    }else if(i!==(ar.length*2-1)) {
                        res.push(<span> / </span>)
                    }
                }
                return res
            }

            return (
                <div className={ Style['list-item'] }>
                    <div className={ Style['list-item-index-box'] }>
                        <span className={ Style['list-item-index'] }>{ index+1>=10?index+1:`0${index+1}` }</span>
                    </div>
                    <div className={ Style['list-item-name-box'] }>
                        <span className={ Style['list-item-name'] }>{ name }</span>
                    </div>
                    <div className={ Style['list-item-singers-box'] }>
                        <span className={ Style['list-item-singers'] }>{ singer() }</span>
                    </div>
                    <div className={ Style['list-item-album-box'] }>
                        <span className={ Style['list-item-album'] }>{ al.name }</span>
                    </div>
                    <span className={ Style['list-item-time-box'] }>
                        <span className={ Style['list-item-time'] }>{ getTime() }</span>
                    </span>
                </div>
            )
        })

        return (
            <div>
                <div>
                    <div className={ Style['list-item-header'] }>
                        <div className={ Style['list-item-index-header'] }>
                            <span className={ Style['list-item-index'] }>#</span>
                        </div>
                        <div className={ Style['list-item-name-header'] }>
                            <span className={ Style['list-item-name'] }>音乐标题</span>
                        </div>
                        <div className={ Style['list-item-singers-header'] }>
                            <span className={ Style['list-item-singers'] }>歌手</span>
                        </div>
                        <div className={ Style['list-item-album-header'] }>
                            <span className={ Style['list-item-album'] }>专辑</span>
                        </div>
                        <span className={ Style['list-item-time-header'] }>
                            <span className={ Style['list-item-time'] }>时长</span>
                        </span>
                    </div>
                </div>
                <div>{ List }</div>
            </div>
        )
    }
}

export default SongList
