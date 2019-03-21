
class App extends React.Component {
    constructor(props) {
        super(props),
        this.state = {
            count: 0,
            name: '',
            email: 'test5@test.com',
            password: '',
            address1: '',
            address2: '',
            address_city: '',
            address_state: '',
            address_zip: '',
            phone: '',
            cc_num: '',
            cc_expmonth: '',
            cc_expyear: '',
            cc_ccv: '',
            cc_zip: '',
            result: []
        }
        this.handleNextButton = this.handleNextButton.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
        this.getConfirmation = this.getConfirmation.bind(this);
    }

    handleNextButton(e, val) {
        // do I need a prevent default?
        this.setState({
            count: val
        })
    }

    handleInputChange(e) {
        let { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }
    
    handleSubmitButton(e) {
        e.preventDefault()
        axios
        .post('/api', this.state)
        .then(() => this.setState({
            count: 4
        }, () => this.getConfirmation()))
        // .then()
        .catch(err => console.log('error submitting', err))
    }

    getConfirmation() {
        axios
        .get('/api')
        .then((data) => {
            let submitted = data.data[data.data.length - 1];
            let result = Object.entries(submitted);
            this.setState({ result })
            })
        .catch((err) => console.error(err))
    }


    render() {
        return (
            <div>
                <div>
                    <h2>Shopping!!!</h2>
                    <h6>(click below to begin checkout)</h6>
                    <br />
                    {
                    this.state.count === 0 && 
                    <button onClick={(e) => this.handleNextButton(e, 1)}>Checkout</button>
                    }
                </div>

                <div>
                    {this.state.count === 1 &&
                    <div>
                        <h3>Account Information</h3> <br /><br />
                        <form id="formOne">
                            <fieldset>
                            <label>Name:<br />
                                <input name="name" type="text" onChange={(e) => this.handleInputChange(e)} />
                            </label><br /><br />
                            <label>Email:<br />
                                <input name="email" type="email" onChange={(e) => this.handleInputChange(e)} />
                            </label><br /><br />
                            <label>Password:<br />
                                <input name="password" type="password" onChange={(e) => this.handleInputChange(e)} />
                            </label><br /><br />
                                <button onClick={(e) => this.handleNextButton(e, 2)}>next</button>
                            </fieldset>
                        </form>
                   </div>
                    }
                </div>

                <div>
                    {this.state.count === 2 &&
                    <div>
                        <h3>Personal Information</h3><br />
                        <form id="formTwo">
                            <fieldset>
                            <label>Address:<br />
                                <input name="address1" type="text" onChange={(e) => this.handleInputChange(e)} /><br />
                                <input name="address2" type="text" onChange={(e) => this.handleInputChange(e)} />
                            </label><br /><br />
                            <label>City:<br />
                                <input name="address_city" type="text" onChange={(e) => this.handleInputChange(e)} />
                            </label><br /><br />
                            <label> State:<br />
                                <input name="address_state" type="text" maxLength="2" onChange={(e) => this.handleInputChange(e)} />
                            </label><br /><br />
                            <label> Zip:<br />
                                <input name="address_zip" type="number" maxLength="5" onChange={(e) => this.handleInputChange(e)} />
                            </label><br /><br />
                            <label>Phone Number:<br />
                                <input name="phone" type="number" maxLength="11" onChange={(e) => this.handleInputChange(e)} />
                            </label><br /><br />
                                <button onClick={(e) => this.handleNextButton(e, 3)}>next</button>
                            </fieldset>
                        </form>
                    </div>
                    }
                </div>

                <div>
                    {this.state.count === 3 &&
                    <div>
                        <h3>Payment Information</h3><br />
                        <form id="formThree">
                            <fieldset>
                                <label>Card Number<br />
                                <input name="cc_num" type="number" onChange={(e) => this.handleInputChange(e)} />
                                </label><br /><br />
                                <label>Exp (MM/YYYY):<br />
                                <input name="cc_expmonth" type="number" maxLength="2" onChange={(e) => this.handleInputChange(e)} />
                                 / 
                                <input name="cc_expyear" type="number" maxLength="4" onChange={(e) => this.handleInputChange(e)} />
                                </label><br /><br />
                                <label>CCV:<br />
                                <input name="cc_ccv" type="number" onChange={(e) => this.handleInputChange(e)} />
                                </label><br /><br />
                                <label>Billing Zip Code:<br />
                                <input name="cc_zip" type="number" maxLength="5" onChange={(e) => this.handleInputChange(e)} />
                                </label><br /><br />
                            </fieldset>
                            <button onClick={this.handleSubmitButton}>submit</button>
                        </form>
                    </div>
                    }
                </div>

                <div>
                    {this.state.count === 4 &&
                    <div>
                        Hello I am confirmation page!
                        {
                            this.state.result.map(entryTuple => (
                                <div>
                                    {entryTuple[0]}: {entryTuple[1]}
                                    <br />
                                </div>
                            ))
                        }
                    </div>
                    }
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));