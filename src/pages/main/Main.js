import React, { Component } from 'react';
import { Nav } from 'office-ui-fabric-react';
class Main extends Component {
    selected = 0;

    constructor() {
        super();

    }
    render() {
        return (
            <div className='App'>
        <header className='App-header'>
          <h1 className='App-link'>wings</h1>
        </header>
        <div className='body-container'>
          <div className='navbar'>
              <Nav
                groups={[
                  {
                    links: [
                      { name: '公告', url: '', key: 'notice'},
                      { name: '课程列表', url: '', key: 'course'},
                      { name: '已选课程', url: '', key: 'selected'}
                    ]
                  }
                ]}
              />
          </div>
          <div className='content'>
          {this.selected === 1 &&
          <div/>
          }
          {this.selected === 2 &&
          <div/>
          }
          {this.selected === 3 &&
          <div/>
          }
          </div>
        </div>
        <footer className='footer'>

        </footer>
      </div>
        );
    }
}

export default Main;