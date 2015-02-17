var React = require('react');
var SearchResult = require('./SearchResult');

var SearchResults = React.createClass({

	render: function(){
		return (
			<table>
			{this.props.results.map(function(result, index){
				return <SearchResult result={result} key={index}/>
			})}
			</table>
			)
	}
});

module.exports = SearchResults;