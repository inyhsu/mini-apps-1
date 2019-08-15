class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            formOne: false,
            formTwo: false,
            formThree: false,
            name:'',
            email:'',
            password:'',
            line1: '',
            line2: '',
            city: '',
            state: '',
            zip: '',
            ccNumber: '',
            expireDate: '',
            cvv: '',
            zipforcc: '',
            display:[]
        }
        this.showFormOne = this.showFormOne.bind(this);
        this.showFormTwo = this.showFormTwo.bind(this);
        this.showFormThree = this.showFormThree.bind(this);
        this.createUser = this.createUser.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
    }

    componentDidMount(){
        $.get('/users', (data)=>{
            console.log(data);
            this.setState({
                display:data,
            })
        })
    }

    createUser(event){
        event.preventDefault()
        console.log('submit');
        console.log('form', this.state);
        let datas = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            line1:this.state.line1,
            line2: this.state.line2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            ccNumber: this.state.ccNumber,
            expireDate: this.state.expireDate,
            cvv: this.state.cvv,
            zipforcc: this.state.zipforcc,
        }
        $.post('/users',datas,(res)=>{
            console.log(res);
        } )
    }

    changeHandler(e){
        // console.log(e.target.value);
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value,
        })
    }

    showFormOne(){
        this.setState({
            formOne: true,
        })
    }

    showFormTwo(){
        console.log('Two click');
        this.setState({
            formTwo: true,
            formOne: false,
        })
    }

    showFormThree(){
        console.log('Three click');
        this.setState({
            formThree: true,
            formTwo: false,
        })
    }


    render(){
        // console.log(this.state);
        return(
            <div>
                <button onClick={this.showFormOne}>Check Out</button>
                <div>{this.state.formOne &&
                       <FormOne 
                       showFormTwo={this.showFormTwo} 
                       changeHandler={this.changeHandler} 
                       name={this.state.name}
                       email={this.state.email}
                       password={this.state.password}
                       /> 
                }</div>
                <div>{this.state.formTwo &&
                       <FormTwo 
                       showFormThree={this.showFormThree}
                       changeHandler={this.changeHandler}
                       line1={this.state.line1}
                       line2={this.state.line2}
                       city={this.state.city}
                       state={this.state.state}
                       zip={this.state.zip}
                       /> 
                }</div>
                <div>{this.state.formThree &&
                       <FormThree 
                       changeHandler={this.changeHandler}
                       ccNumber={this.state.ccNumber}
                       expireDate={this.state.expireDate}
                       cvv={this.state.cvv}
                       zip={this.state.zip}
                       createUser={this.createUser} /> 
                }</div>

            </div>
        )
    }
}

const FormOne = (props) =>{
    // console.log(props)
    return(
        <form>
            <label htmlFor="namedInput">Name:</label>
            <input id= "namedInput" type="text" name="name" onChange={props.changeHandler}/>
            <label htmlFor="emailInput">Email:</label>
            <input id= "emailInput" type="text" name="email" onChange={props.changeHandler}/>
            <label htmlFor="passwordInput">Password:</label>
            <input id= "passwordInput" type="text" name="password" onChange={props.changeHandler}/>
            <input type="submit" onClick={props.showFormTwo} value="NEXT"/>
        </form>
    )
}

const FormTwo = (props) =>{
    return(
        <form>
            <p>Address</p>
            <label htmlFor="lineOneInput">Line 1:</label>
            <input id= "lineOneInput" type="text" name="line1" onChange={props.changeHandler}/>
            <label htmlFor="lineTwoInput">Line 2:</label>
            <input id= "lineTwoInput" type="text" name="line2" onChange={props.changeHandler}/>
            <label htmlFor="cityInput">City:</label>
            <input id= "cityInput" type="text" name="city"onChange={props.changeHandler}/>
            <label htmlFor="stateInput">State:</label>
            <input id= "stateInput" type="text" name="state" onChange={props.changeHandler}/>
            <label htmlFor="zipInput">Zip:</label>
            <input id= "zipInput" type="text" name="zip"onChange={props.changeHandler}/>
            <input type="button" onClick={props.showFormThree} value="NEXT"/>
        </form>
    )
}

const FormThree = (props) =>{
    return(
        <form>
            <p>Credit Card</p>
            <label htmlFor="ccNumberInput">cc Number:</label>
            <input id= "ccNumberInput" type="text" name="ccNumber" onChange={props.changeHandler}/>
            <label htmlFor="expireDateInput">Expiry Date:</label>
            <input id= "expireDateInput" type="text" name="expireDate"  onChange={props.changeHandler}/>
            <label htmlFor="cvvInput">cvv:</label>
            <input id= "cvvInput" type="text" name="cvv" onChange={props.changeHandler}/>
            <label htmlFor="zipInput">Zip:</label>
            <input id= "zipInput" type="text" name="zipforcc" onChange={props.changeHandler}/>
            <input type="submit" value="SUBMIT" onClick={props.createUser}/>
        </form>
    )
}

ReactDOM.render(
    <App />, document.getElementById('app')
);

