import React, { useState } from 'react';
import Context from '../context';
import ColumnUI from '../components/columnUI';
import Util from '../builder/util';
import _isEmpty from 'lodash/isEmpty';

function Builder({rows = [[]], formState = {}}) {
    const [state, setstate] = useState(formState);
    return (
        <React.Fragment>
            <Context.FormContext.Provider value={setstate} >
                <Context.FormState.Provider value={state} >
                    <h1>hi builder</h1>
                    {rows.map(co => {
                        if (co) {
                            return co.map(ui => {
                                if (!_isEmpty(ui)) {
                                    const { column, handlers, columnProps: props } = ui;
                                    return column(ColumnUI, handlers, Util.convertArrayToProps(props), setstate, state);
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