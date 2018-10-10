import React, {Component} from 'react';
import Http from '../../../Http'
import {ScrollablePane} from "office-ui-fabric-react";


class Notice extends Component {
    state = {
        notice: null
    };

    componentDidMount() {
        Http.get('/Common/announce')
            .then((res) => {
                this.setState({notice: res.data});
            });
    }

    render() {
        return (
            <ScrollablePane>
                <div dangerouslySetInnerHTML={{__html :this.state.notice }}/>
            </ScrollablePane>
        );
    }
}

export default Notice;