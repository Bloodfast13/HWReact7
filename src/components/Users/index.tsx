import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import User from './../User'
import User1 from '../Imgs/User1.jpg'
import User2 from '../Imgs/User2.jpg'
import User3 from '../Imgs/User3.jpg'
import style from './style.module.scss'

const users = [
    {
        exactPath: '/users/user1',
        name: 'Yoda',
        img: User1,
        key: 'Yoda',
        citate: 'May the Force be with you'
    },
    {
        exactPath: '/users/user2',
        name: 'Mr. DeadPool',
        img: User2,
        key: 'Mr. DeadPool',
        citate: 'With great power, comes great irresponsibility'
    },
    {
        exactPath: '/users/user',
        name: 'The Rocket',
        img: User3,
        key: 'The Rocket',
        citate: 'I am amazed. As he climb into the heat, so he sleeps. How to share money - immediately rustled.'
    }
]

const Users = () => {
    return (
        <div>
            <nav className={style.Header}>
                <ul>
                    {users.map(e => (
                        <li>
                            <Link key={e.key} to={e.exactPath}>
                                {e.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <Switch>
                {users.map(e => (
                    <Route key={e.key} exact path={e.exactPath}
                    component={() => <User name={e.name} img={e.img} citate={e.citate}/>}/>
                ))}
            </Switch>
        </div>
    )
}

export default React.memo(Users)