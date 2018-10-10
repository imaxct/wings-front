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
                fontSize: '1.2rem'
            }}>
                Yes
            </footer>
        );
    }
}

export default Footer;