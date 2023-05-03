import React from "react";

import cn from "classnames";
import './index.css'
// @params type - primary , secondary

export const BaseButton = ({ type = 'primary', children }) => {

    return (<button className={cn('btn', {
        'primary': type === 'primary',
        'secondary': type === 'secondary'
    })} >
        {children}</button>)
}