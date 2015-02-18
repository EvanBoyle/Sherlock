var React = require('react');
var SearchResult = require('./SearchResult');

var SearchResults = React.createClass({

	render: function(){
		return (
			<div className="table-responseive">
			<table className="table">
			<tbody>
			<thead>
			<tr><th>#</th><th>Content</th></tr>
			</thead>
			{this.props.results.map(function(result, index){
				return <SearchResult result={result} key={index} index={index + 1}/>
			})}
			</tbody>
			</table>
			</div>
			)
	}
});

module.exports = SearchResults;