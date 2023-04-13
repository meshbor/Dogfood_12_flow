
import React from 'react'

export const Footer = () => {

    const arr = ['1', '2', '3', '4'];

    const arg1 = <div>name Secret</div>;
    const arg2 = <div>age 18</div>
    const arg3 = <div>ages 31</div>


    const flag = [];
    return <div>     {/* {arr.map(element => {
        return <li key={element}> {element}</li>
      })} */}

        {!!flag.length ? arg1 : arg2}

        {!flag.length && arg3}
        {/* {arg2}  */}

        {/* !!smth == Boolean(smth) */}</div>
}