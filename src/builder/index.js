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
    const Component = state[tempInit];
    return function (props,rest) {
        if (Component) {
            return (
                <Suspense fallback={<Loader />}>
                    <Component {...props} {...rest['handlers']} />
                </Suspense>
            )
        }
        return null;
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
        <div style={{width:"100%"}} >
            <Context.FormContext.Provider value={setstate} >
                <Context.FormState.Provider value={state} >
                    {rows.map((co, index) => {
                        if (co) {
                            return (
                                <div className="rows" key={index} style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
                                    {
                                        co.map((ui, uiIndex) => {
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
                                                if (state[tempInit] === Loader && !state[`${tempInit}_Loaded_True`]) {
                                                    import(`../../${dest}`).then(module=>{
                                                        if(state[tempInit] === Loader){
                                                            setstate(produce(state, draft => {
                                                                draft[tempInit] = module.default;
                                                                draft[`${tempInit}_Loaded_True`] = true;
                                                            }))
                                                        }
                                                    })
                                                }
                                                
                                                return (
                                                    <div className="columns" key={uiIndex} >
                                                        {
                                                            column(UiFunction, handlers, Util.convertArrayToProps(props), setstate, state)
                                                        }
                                                    </div>
                                                );
                                            }
                                            return null;
                                        })
                                    }
                                </div>
                            )
                        }
                        return null
                    })}
                </Context.FormState.Provider>
            </Context.FormContext.Provider>
        </div>
        
    );
};

export default React.memo(Builder);