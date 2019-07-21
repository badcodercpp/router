import React from 'react';
import Context from '../context';
import _isEqual from 'lodash/isEqual';

function arePropsEqual(prevProps, nextProps) {
    return _isEqual(prevProps, nextProps);
}

function ColumnUI(props,rest) {
    const { name } = props;
    const { handlers } = rest;
    const { FormContext, FormState } = Context;
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

export default React.memo(ColumnUI, arePropsEqual);