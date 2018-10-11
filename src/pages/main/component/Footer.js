import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                height: '30px',
                background: '#282c34',
                color: '#eee',
                lineHeight: '1.5rem',
                fontSize: '.7rem',
                textAlign: 'center'
            }}>
                由&nbsp;<a style={{
                textDecoration: 'none',
            color: '#ddd'}}
                     href='https://online.sdu.edu.cn/'>&copy;学生在线</a>&nbsp;提供技术支持
            </footer>
        );
    }
}

export default Footer;