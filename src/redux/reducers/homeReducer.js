export const homeReducer = (state = [], action)=>{
    switch (action.type) {
        case 'HOME_ACTION':
          return {
            ...state,
              name:action.name
          }
        default:
          return state
    }
}