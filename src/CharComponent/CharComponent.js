import React from 'react';
export default (props) => {
    const style = {
        display : 'inline-block',
        padding : '18px',
        textAlign: 'center',
        margin: '16px',
        border :'1px solid black'
    }
    let view = (<div onClick= {props.click} style={style}>{props.char}</div>);
    return view;
}
        