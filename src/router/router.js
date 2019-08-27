
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function DummyComponent(){
    return (
        <div>
            dummy
        </div>
    )
}

export const mockRoutes = [
    {
        component: DummyComponent,
        path: '/component/DummyComponent',
        exact: true
    },
    {
        component: DummyComponent,
        path: '/component/TestComponent',
        exact: false
    },
    {
        component: DummyComponent,
        path: '/component/TComponent',
        exact: false
    }
]

function AppRouter({routes = []}){
    return (
        <Router>
            {
                routes.map( (route,index) => {
                    return (
                        <Route path={route.path} exact={route.exact} component={route.component} key={index} />
                    )
                } )
            }
        </Router>
    )
}

export default AppRouter;