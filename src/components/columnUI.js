import React from 'react';
import Context from '../context'

function ColumnUI(props,rest) {
    const { name } = props;
    const { handlers } = rest;
    const { FormContext, FormState } = Context;
    console.log("hhhh", handlers)
    console.log("pppp", props)
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

export default ColumnUI;