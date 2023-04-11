
import React from 'react'

export const Header = ({ myTitle, email }) => {
    // console.log('this is arg', props);

    // const { email } = props;
    // const myTitle = props.myTitle
    // console.log('><>',typeof newArf);
    return <div className="header">

        {myTitle}
        <span>_____________</span>
        {email}


    </div>
}
