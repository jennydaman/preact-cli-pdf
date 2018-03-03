import { Component } from 'preact';

export default class App extends Component {

	state = { fname: 'https://isotropic.org/papers/chicken.pdf' }

	pony = () => {
		this.setState({ fname: 'https://pjreddie.com/static/Redmon%20Resume.pdf' });
	}

	chicken = () => {
		this.setState({ fname: 'https://isotropic.org/papers/chicken.pdf' });
	}

	render(props, state) {
		return (
			<main>
				<h3>File: {state.fname}</h3>
				<br />
				<button type="button" onClick={this.pony}>PONY</button>
				<button type="button" onClick={this.chicken}>CHICKEN</button>
				<br />
				<embed type="application/pdf" src={state.fname} width="800" height="600" />
			</main>
		);
	}
}
