import React, { Component } from 'react';
import { Pivot, PivotItem, Label } from 'office-ui-fabric-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-link'>wings</h1>
        </header>
        <Pivot>
          <PivotItem
            headerText='公告'
            headerButtonProps={{
              'data-order': 1,
              'data-title': '公告'
            }}
          >
            <Label>公告</Label>
          </PivotItem>
          <PivotItem headerText='课程列表'>
            <Label>课程列表</Label>
          </PivotItem>
          <PivotItem headerText='已选课程'>
            <Label>已选课程</Label>
          </PivotItem>
        </Pivot>
      </div>
    );
  }
  click() {
    console.log("clicked!");
  }
}

export default App;
