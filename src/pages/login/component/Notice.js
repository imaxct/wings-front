import React, {Component} from 'react';
import Http from '../../../Http'


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
            <div dangerouslySetInnerHTML={{__html: this.state.notice}} {...this.props}/>
        );
    }
}

export default Notice;