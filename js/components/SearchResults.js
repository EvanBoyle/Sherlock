var React = require('react');
var SearchResult = require('./SearchResult');

var SearchResults = React.createClass({

	render: function(){
		return (
			<table className="table">
			<tbody>
			{this.props.results.map(function(result, index){
				return <SearchResult result={result} key={index}/>
			})}
			</tbody>
			</table>
			)
	}
});

module.exports = SearchResults;