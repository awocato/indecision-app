class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of computer.';
        const options = ['Option one', 'Option two', 'Option three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1> {this.props.title} </h1>
                <h2> {this.props.subtitle} </h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <button> What should I do? </button>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                {this.props.options.map((option)=> <Option key={option} optionText={option} /> )}
                {/*<Option />*/}
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return(
            <div>
                {this.props.optionText}
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                Add option here.
            </div>
        );
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'));