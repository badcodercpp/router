import _isEmpty from 'lodash/isEmpty';
import _isArray from 'lodash/isArray';
import produce from 'immer'
function convertArrayToProps(props){
    let p = {}
    if (!_isEmpty(props) && _isArray(props)) {
      for (let i = 0; i < props.length; i++) {
        p = {...p,...props[i]}
      }
    }
    return p;
}

function bindSetSateToHandler(handlers, setstate, state, name){
    const newHandlers = produce(handlers , draft => {
        for (const key in draft) {
          if (draft.hasOwnProperty(key)) {
            draft[key]=draft[key].bind( { setstate, state, name } )
          }
        }
    })
    return newHandlers;
}

export default {
    convertArrayToProps,
    bindSetSateToHandler
};