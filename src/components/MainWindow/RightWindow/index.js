import React, {Component} from 'react'
import { Route } from 'react-router'
import Style from './RightWindow.css'
import DiscoverMusic from '../../window/DiscoverMusic'
import PersonalFM from '../../window/PersonalFM'
import MV from '../../window/MV'
import { Link } from 'react-router-dom'

class RightWindow extends Component{

    render(){
        const Topics = ({ match }) => (
            <div>
                <h2>Topics</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/rendering`}>
                            Rendering with React
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/components`}>
                            Components
                        </Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/props-v-state`}>
                            Props v. State
                        </Link>
                    </li>
                </ul>

                <Route path={`${match.url}/:topicId`} component={Topic}/>
                <Route exact path={match.url} render={() => (
                    <h3>Please select a topic.</h3>
                )}/>
            </div>
        )

        const Topic = ({ match }) => (
            <div>
                <h3>{match.params.topicId}</h3>
            </div>
        )

        return (
            <div className={Style.rightWindow}>
                <Route path="/DiscoverMusic" component={DiscoverMusic}/>
                <Route path="/PersonalFM" component={PersonalFM}/>
                <Route path="/MV" component={Topics}/>
            </div>
        )
    }
}

export default RightWindow