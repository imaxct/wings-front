import React, {Component} from 'react';
import {PrimaryButton, Spinner, SpinnerSize} from "office-ui-fabric-react";

class LoadingButton extends Component {
    render() {
        return (
            <PrimaryButton {...this.props} disabled={this.props.loading}>
                {this.props.loading &&
                <Spinner size={SpinnerSize.small}/>
                }
                {this.props.children}
            </PrimaryButton>
        );
    }
}

export default LoadingButton;