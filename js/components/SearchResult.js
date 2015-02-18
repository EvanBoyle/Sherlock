var React = require('react');

var SearchResult = React.createClass({
	render: function(){
		return(
			<tr key={this.props.key}><td>{this.props.index}</td><td>{JSON.stringify(this.props.result)}</td></tr>   
			)
	}
});

module.exports = SearchResult;