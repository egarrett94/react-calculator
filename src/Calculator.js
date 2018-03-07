// import React, {Component} from 'react';

// class Calculator extends Component {

// 	constructor(props) {
// 		super() 
// 		this.state = {
// 			result: 0,
// 			value1: 0,
// 			value2: 0,
// 			operation: "add"
// 		}
// 		this.handleChangeValue1 = this.handleChangeValue1.bind(this)
// 		this.handleChangeValue2 = this.handleChangeValue2.bind(this)
// 		this.handleChangeOperation = this.handleChangeOperation.bind(this)
// 	}


	// updateInput(e) {

	// 	if (this.state.operation === 'add') {
	// 		this.setState({
	// 			result: parseInt(this.state.value1) + parseInt(this.state.value2)
	// 		})
	// 	}

	//  	if (this.state.operation === 'mult') {
	// 		this.setState({
	// 			result: parseInt(this.state.value1) * parseInt(this.state.value2)
	// 		})
	// 	}

	// 	if (this.state.operation === 'sub') {
	// 		this.setState({
	// 			result: parseInt(this.state.value1) - parseInt(this.state.value2)
	// 		})
	// 	}

	// 	if (this.state.operation === 'div') {
	// 		this.setState({
	// 			result: parseInt(this.state.value1) / parseInt(this.state.value2)
	// 		})
	// 	}
	// }

// 	handleChangeValue1(e) {
// 		this.setState({
// 		  value1: e.target.value
// 		})
// 	}

// 	handleChangeValue2(e) {
// 		this.setState({
// 		  value2: e.target.value
// 		})
// 	}

// 	handleChangeOperation(e) {
// 		this.setState({
// 			operation: e.target.value
// 		})
// 	}

// 	render() {
// 		return(
// 			<div className="container">
// 			  <h1>Calculate with React!</h1>

// 			  <div className="add">
// 			    <input type="text" value={this.state.value1} onChange={this.handleChangeValue1}/>
// 			    <select id='dropdown' value={this.state.operation} onChange={this.handleChangeOperation}>
// 			    	<option value="add">+</option>
// 			    	<option value="sub">-</option>
// 			    	<option value="mult">*</option>
// 			    	<option value="div">/</option>
// 			    </select>
// 			    <input type="text" value={this.state.value2} onChange={this.handleChangeValue2}/>
// 			    <span> = </span>
// 			    <h3>{this.state.result}</h3>
// 			    <button onClick={ (e) => this.updateInput(e) }>Calculate!</button>
// 			  </div>
// 			</div>
// 		)
// 	}
// }

// export default Calculator;