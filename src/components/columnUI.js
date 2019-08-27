import React from 'react';
import Context from '../context';
import _isEqual from 'lodash/isEqual';
import { useDispatch, connect, useSelector } from 'react-redux'

function arePropsEqual(prevProps, nextProps) {
    return _isEqual(prevProps, nextProps);
}

function ColumnUI(props,rest) {
    const { name } = props;
    const { handlers } = rest;
    const { FormContext, FormState } = Context;
    // const dispatch = useDispatch();
    // const reduxState = useSelector(state => state)
    return (
      <FormContext.Consumer >
        {
          setstate => (
            <FormState.Consumer>
                {
                    state => (
                        <input type = "text" {...props} {...handlers} value={state[name]?state[name]:""} />
                    )
                }
            </FormState.Consumer>
          )
        }
      </FormContext.Consumer>
    )
  }

  const MemoComponent = React.memo(ColumnUI, arePropsEqual);

export default connect(
  null,
  {}
)(MemoComponent);