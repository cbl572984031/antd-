
import React, { Component } from 'react';
import { Button, Switch } from 'antd';
import { SketchPicker } from 'react-color'


class App extends Component {
    handlerClick(e) {
        console.log(e)
        window.less.modifyVars({
            '@primary-color': e.hex,
        });
    }

    render() {
        return (
            <div className="App">
                <Button type="primary">123</Button>
                <Switch defaultChecked ></Switch>
                <SketchPicker onChange={e => { this.handlerClick(e) }}></SketchPicker>
            </div>
        );
    }
}

export default App;

