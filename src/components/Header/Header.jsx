
import React from 'react'
import './index.css'
export const Header = (props) => {
    // console.log('this is arg', props);

    // console.log();

    // const { email, ...props2 } = props;
    // const myTitle = props.myTitle
    // console.log('><>',typeof newArf);
    return <div className="header">
        {props.myTitle}
        {props.email}
        {props.children}
    </div>
}
