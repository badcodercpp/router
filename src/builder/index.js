import React, { useState, Suspense, lazy } from 'react';
import Context from '../context';
import ColumnUI from '../components/columnUI';
import Util from '../builder/util';
import _isEmpty from 'lodash/isEmpty';
import produce from 'immer';
const uuidv3 = require('uuid/v3');
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

function Loader(){
    return (
        <p>
            Loading module ...
        </p>
    )
}

function getModuleId(name) {
    return`component${uuidv3(`${name}`, MY_NAMESPACE)}`;
}

function createUi(state, tempInit) {
    const Component = (state[tempInit] === Loader )?(lazy(() => import(state[tempInit]))):state[tempInit]
    return function (props,rest) {
        return (
            <Suspense fallback={<Loader />}>
                <Component {...props} {...rest['handlers']} />
            </Suspense>
        )
    }
}

function Builder({rows = [[]], formState = {}}) {
    //LOADER_COMPONENT
    const INIT = getModuleId('LOADER_COMPONENT');
    const tempFormState = produce(formState, draft => {
        draft[INIT] = Loader;
    })
    const [state, setstate] = useState(tempFormState);
    
    return (
        <React.Fragment>
            <Context.FormContext.Provider value={setstate} >
                <Context.FormState.Provider value={state} >
                    <h1>hi builder</h1>
                    {rows.map(co => {
                        if (co) {
                            return co.map(ui => {
                                if (!_isEmpty(ui)) {
                                    const { column, handlers, columnProps: props, component: destination } = ui;
                                    const { name, dest } = destination;
                                    const tempInit = getModuleId(name);
                                    if (!state[tempInit]) {
                                        setstate(produce(state, draft => {
                                            draft[tempInit] = Loader;
                                        }))
                                    }
                                    const UiFunction = createUi(state, tempInit);
                                    if (state[tempInit] === Loader) {
                                        import(`../../${dest}`).then(module=>{
                                            console.log(module)
                                            if(state[tempInit] === Loader){
                                                setstate(produce(state, draft => {
                                                    draft[tempInit] = module.default;
                                                }))
                                            }
                                        })
                                    }
                                    
                                    return column(UiFunction, handlers, Util.convertArrayToProps(props), setstate, state);
                                }
                                return null;
                            });
                        }
                        return null
                    })}
                </Context.FormState.Provider>
            </Context.FormContext.Provider>
        </React.Fragment>
        
    );
};

export default Builder;