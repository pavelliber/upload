import { Component } from 'react';

export default class ErrorBoundry extends Component {

    state = {
        isError: false
    };

    componentDidCatch() {
        this.setState({
            isError: true
        });
    }

    render() {

        if (this.state.isError) {
            return null;
        }

        return this.props.children;
    }
}