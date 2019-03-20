import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props),
        this.state = {
            item: '',
            cart: []
        }
    }

    componentDidMount() {
        console.log('mounted');
    }

    render() {
        return (
            <div>
                Hello from react!
            </div>
        )
    }
}