import React from 'react';
export default (props) => {
    let view = (<p>Text too short!</p>);
    if(props.inputlength >=5){
        view = (<p>Text long enough!</p>);
    }
    return view;
}
        