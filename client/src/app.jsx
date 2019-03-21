
class App extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            count: 0,
            name: '',
            email: '',
            password: '',
            address1: '',
            address2: '',
            address_city: '',
            address_state: '',
            address_zip: null,
            phone: null,
            cc_num: null,
            cc_expmonth: null,
            cc_expyear: null,
            cc_ccv: null,
            cc_zip: null
        }
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
    }

    handleNextButton(val) {
        this.setState({
            count: val
        })
    }

    handleSubmitButton() {
        this.setState({
            count: 4
        })
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    Hello from react!
                    {
                    this.state.count === 0 && 
                    <button onClick={() => this.handleNextButton(1)}>Checkout</button>
                    }
                </div>

                <div>
                    {this.state.count === 1 &&
                    <div>
                        Hello I am form one
                        <button onClick={() => this.handleNextButton(2)}>next</button>
                    </div>
                    }
                </div>

                <div>
                    {this.state.count === 2 &&
                    <div>
                        Hello I am form two
                        <button onClick={() => this.handleNextButton(3)}>next</button>
                    </div>
                    }
                </div>

                <div>
                    {this.state.count === 3 &&
                    <div>
                        Hello I am form three
                        <button onClick={this.handleSubmitButton}>submit</button>
                    </div>
                    }
                </div>

                <div>
                    {this.state.count === 4 &&
                    <div>
                        Hello I am confirmation page
                    </div>
                    }
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));