import React from 'react';
import Util from './util'

const columnCreator = function column(arg) {
    const { col, props, ...rest } = arg;
    return <React.Fragment>{col(props,rest)}</React.Fragment>;
};

export function renederCell(column, handlers, props, setstate, state){ 
    const { name } = props;
    const newHandlers = Util.bindSetSateToHandler(handlers, setstate, state, name)
    return columnCreator({ col:column, handlers: newHandlers, props });
}

export default React.memo(columnCreator);