import React from "react";
import Loadable from 'react-loadable';

const loadableComponent = (component) => {
    return Loadable({
        loader: component,
        loading: () => <span>loading………</span>
    })
}
export default loadableComponent;
