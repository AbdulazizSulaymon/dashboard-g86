import React from 'react'
import { Link, useParams } from 'react-router-dom'
import DashboardWrapper from './DashboardWrapper'
import logo from "../../logo.svg"
import { Button, List, ListItem } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../../redux/actions'
import { faBars, faHome, faImages, faNewspaper, faTasks, faUsers, faVideo } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components'
import { Slide } from 'react-awesome-reveal'

const menus = [
    { to: "home", title: "Home", icon: faHome },
    { to: "users", title: "Users", icon: faUsers },
    { to: "todos", title: "Todos", icon: faTasks },
    { to: "albums", title: "Albums", icon: faVideo },
    { to: "photos", title: "Photos", icon: faImages },
    { to: "posts", title: "Posts", icon: faNewspaper },
]

const Dashboard = ({ children }) => {
    const dispatch = useDispatch();
    const { menu } = useParams();

    const show = useSelector(state => state.isSidebarShow);

    return (
        <DashboardWrapper>
            <div className={`sidebar ${show && "show" || ""}`}>
                <h1 className="text-white">Sidebar</h1>

                <List component="nav">
                    {menus.map((v, i) => <li>
                        <Slide delay={i * 30}>
                            <Link key={v.to} to={`/dashboard/${v.to}`}
                                className={`${menu === v.to ? "active" : ""}`}>
                                <ListItem button >
                                    <FontAwesomeIcon icon={v.icon} className="me-2" /> {v.title}
                                </ListItem>
                            </Link>
                        </Slide>
                    </li>)}

                    {/* eski-variant */}
                    {/* <li><Link to="/dashboard/home" className="active">Home</Link></li>
                    <li><Link to="/dashboard/users">Users</Link></li>
                    <li><Link to="/dashboard/todos">Todos</Link></li>
                    <li><Link to="/dashboard/albums">Albums</Link></li>
                    <li><Link to="/dashboard/photos">Photos</Link></li>
                    <li><Link to="/dashboard/posts">Posts</Link></li> */}
                </List>
            </div>
            <div className="rightside">
                <header className="shadow">
                    <Button onClick={() => toggleMenu(dispatch)} variant="contained" disableElevation >
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    <img src={logo} className="logo" alt="" />
                </header>
                <div className="content">
                    {children}
                </div>
            </div>
        </DashboardWrapper >
    )
}

export default Dashboard
