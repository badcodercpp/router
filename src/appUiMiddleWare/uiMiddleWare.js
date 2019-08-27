import React from "react";

function AppUI({ Component, ...rest}) {
    console.log("component", Component)
    return function AppUIHOC(){
        return (
            <div className="AppUI AppUIComponent">
                {
                    <Component {...rest} />
                }
            </div>
        )
    };
}

export default AppUI;