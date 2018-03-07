import React, {Component} from 'react'; 

class Calculator2 extends Component {

	constructor(props) {
		super() 
		this.state = {
			value1 = 0,
			value2 = 0,
			operation = 'add'
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}




	render() {
		return(
			<div className="container">
			  <h1>Calculate with React!</h1>

			  <div className="calculate">
			    <input type="text" name='value1' value={this.state.value1} onChange={this.handleChange}/>
			    <select id='dropdown' name='operation' value={this.state.operation} onChange={this.handleChange}>
			    	<option value="add">+</option>
			    	<option value="sub">-</option>
			    	<option value="mult">*</option>
			    	<option value="div">/</option>
			    </select>
			    <input type="text" value={this.state.value2} name='value2' onChange={this.handleChange}/>
			    <span> = </span>
			    <h3>{this.state.result}</h3>
			    <button onClick={ (e) => this.updateInput(e) }>Calculate!</button>
			  </div>
			</div>
		)
	}
}

export default Calculator2;