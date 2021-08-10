import React from 'react'
import { useParams } from 'react-router-dom';
import Dashboard from '../../containers/Dashboard';
import Todos from '../Todos';

const Dashboards = () => {
    const { menu } = useParams();
    console.log("menu", menu);

    return (
        <Dashboard>
            {menu === "todos" && <Todos /> || ""}
        </Dashboard>
    )
}

export default Dashboards;
