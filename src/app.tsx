import { render, version } from 'inferno';
import Component from 'inferno-component';

import { MyInterface } from './interfaces';

class App extends Component<any, any> implements MyInterface {

    public title: string = "Inferno TypeScript Webpack Example";

    private description: string = "This repo demonstrates how to set up an Inferno app with TypeScript and Webpack.";

	constructor(props, context) {
        super(props, context);

        this.state = {
            data: "some data"
        }
        
        this.testSpreadOperator();
	}

	public render() {
		return (
			<div>
                <h1>{ this.title }</h1>
				<h2>{ `Welcome to Inferno ${ version }` }</h2>
                <p>{ this.description }</p>
                <p>{ this.state.data }</p>
			</div>
		);
    }
    
    public testSpreadOperator() {
        let friends: string[] = ["Zico", "Jack", "Rose"];
        let people: string[] = ["Daniel", "Toby", ...friends];

        console.log(people);
    }
}

render(<App />, document.getElementById('app'));