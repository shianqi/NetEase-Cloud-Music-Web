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
                        res.push(<span>/</span>)
                    }
                }
                return res
            }

            return (
                <div className={ Style['list-item'] }>
                    <span className={ Style['list-item-index'] }>{ index+1>=10?index+1:`0${index+1}` }</span>
                    <span className={ Style['list-item-name'] }>{ name }</span>
                    <span className={ Style['list-item-singers'] }>{ singer() }</span>
                    <span className={ Style['list-item-album'] }>{ al.name }</span>
                    <span className={ Style['list-item-time'] }>{ getTime() }</span>
                </div>
            )
        })

        return (
            <div>
                <div></div>
                <div>{ List }</div>
            </div>
        )
    }
}

export default SongList
