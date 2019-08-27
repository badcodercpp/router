import React from 'react';
import AppUI from '../appUiMiddleWare/uiMiddleWare';
import Builder from '../builder'
import rows from '../mock/mockApp';

function DummyComponent(){
    return (
        <div>
            dummy
        </div>
    )
}

const BuilderComponent = AppUI({ Component: Builder, rows })
console.log(BuilderComponent)

const appRoutes = [
    {
        component: DummyComponent,
        path: '/component/DummyComponent',
        exact: true
    },
    {
        component: BuilderComponent,
        path: '/component/Builder',
        exact: false
    },
    {
        component: DummyComponent,
        path: '/component/TComponent',
        exact: false
    }
];

export default appRoutes;