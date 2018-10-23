var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0,            
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return (
            React.createElement('div', {}, 
                React.createElement('button', {onClick: this.increment}, 'dodaj'),
                React.createElement('span', {}, 'Licznik_1 ' + this.state.counter),
                React.createElement('button', {onClick: this.decrement}, 'odemij')
            )
        );
    }
});

var Counter_2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0,            
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return (
            React.createElement('div', {}, 
                React.createElement('button', {onClick: this.increment}, 'dodaj'),
                React.createElement('span', {}, 'Licznik_2 ' + this.state.counter),
                React.createElement('button', {onClick: this.decrement}, 'odemij')
            )
        );
    }
}); 

var Element = React.createClass({
  render: function(){
    return (
        React.createElement('div', {},
            React.createElement(Counter, {}, ),
            React.createElement(Counter_2, {},)
        )      
    );
  }
})

var app = React.createElement(Element);
ReactDOM.render(app, document.getElementById('app'));