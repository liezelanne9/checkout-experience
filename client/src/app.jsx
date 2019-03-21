
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
                    <h2>Shopping!!!</h2>
                    <h6>(click below to begin checkout)</h6>
                    <br />
                    {
                    this.state.count === 0 && 
                    <button onClick={() => this.handleNextButton(1)}>Checkout</button>
                    }
                </div>

                <div>
                    {this.state.count === 1 &&
                    <div>
                        <h3>Account Information</h3> <br /><br />
                        <form id="formOne">
                            <fieldset>
                            <label>Name:<br />
                                <input name="name" type="text" onChange={() => handleInputChange(e)} />
                            </label><br /><br />
                            <label>Email:<br />
                                <input name="email" type="email" onChange={() => handleInputChange(e)} />
                            </label><br /><br />
                            <label>Password:<br />
                                <input name="password" type="password" onChange={() => handleInputChange(e)} />
                            </label><br /><br />
                                <button onClick={() => this.handleNextButton(2)}>next</button>
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
                                <input name="address1" type="text" onChange={() => handleInputChange(e)} /><br />
                                <input name="address2" type="text" onChange={() => handleInputChange(e)} />
                            </label><br /><br />
                            <label>City:<br />
                                <input name="address_city" type="text" onChange={() => handleInputChange(e)} />
                            </label><br /><br />
                            <label> State:<br />
                                <input name="address_state" type="text" maxlength="2" onChange={() => handleInputChange(e)} />
                            </label><br /><br />
                            <label> Zip:<br />
                                <input name="address_zip" type="number" maxlength="5" onChange={() => handleInputChange(e)} />
                            </label><br /><br />
                            <label>Phone Number:<br />
                                <input name="phone" type="number" maxlength="11" onChange={() => handleInputChange(e)} />
                            </label><br /><br />
                                <button onClick={() => this.handleNextButton(3)}>next</button>
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
                                <input name="cc_num" type="number" onChange={() => handleInputChange(e)} />
                                </label><br /><br />
                                <label>Exp (MM/YYYY):<br />
                                <input name="cc_expmonth" type="number" maxlength="2" onChange={() => handleInputChange(e)} />
                                 / 
                                <input name="cc_expyear" type="number" maxlength="4" onChange={() => handleInputChange(e)} />
                                </label><br /><br />
                                <label>CCV:<br />
                                <input name="cc_ccv" type="number" onChange={() => handleInputChange(e)} />
                                </label><br /><br />
                                <label>Billing Zip Code:<br />
                                <input name="cc_zip" type="number" maxlength="5" onChange={() => handleInputChange(e)} />
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
                        Hello I am confirmation page
                    </div>
                    }
                </div>

            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));