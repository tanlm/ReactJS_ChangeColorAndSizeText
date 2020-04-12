import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Result from './components/Result';
import Reset from './components/Reset';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            color : 'red',
            fontSize : 15
        };
        this.onSettingColor = this.onSettingColor.bind(this);
    }

    onSettingColor(params){
        this.setState({
            color: params
        });
    }

    onChangeSize = (value) => {
        var val = this.state.fontSize + value;
        this.setState({
            fontSize: (val >= 8 && val <= 36) ? val : this.state.fontSize
        });
    }

    onSettingDefault = (value) =>{
        console.log(value);
        if(value === 1){
            this.setState({
                color: 'red',
                fontSize: 15
            });
        };
    }

    render(){
        return (
        <div className="container mt-50">
            <div className="row">
                <ColorPicker color={this.state.color} onReceiveColor={ this.onSettingColor } />
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting size={this.state.fontSize} onChangeSize = { this.onChangeSize } />
                        <Reset onSettingDefault={this.onSettingDefault } />
                </div>
                    <Result color={this.state.color} size={this.state.fontSize} />
            </div>
        </div>
        );
    }
}
export default App;
