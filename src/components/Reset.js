import React, { Component } from 'react';
class Reset extends Component {

    onResetDefault = (value) =>{
        this.props.onSettingDefault(value);
    }

    render(){
        return (
            <button type="button" className="btn btn-primary" onClick={() => this.onResetDefault(1)}>Reset</button>
        );
    }
}

export default Reset;
