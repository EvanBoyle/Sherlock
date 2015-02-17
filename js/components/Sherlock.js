var React = require('react');
var SearchResults = require('./SearchResults');
var request = require('request');
var Q = require('q');

var Sherlock = React.createClass({
    getInitialState: function(){
        return {
            results: []
        }
    },
    dummySearch: function(){
        console.info("search");
        this.setState({results: [
            "abc",
            "def",
            "hij",
            "klmnop"
            ]});
    },
    search: function(){

        var url = this.props.url +
        "/indexes/" + 
        this.props.index +
        "/docs?search=" +
        encodeURIComponent(this.refs.searchText.getDOMNode().value) + 
        "&api-version=2014-07-31-Preview"
        var headers = {'api-key': this.props.apikey};
        var options = {
            url: url,
            headers: headers,
            withCredentials: false
        };
        
        request.get(options, this.processResults);
    },
    handleKeyDown: function(evt) {
        if (evt.keyCode == 13 ) {
            return this.search();
        }
    },
    processResults: function(error, response, body){
        var data = JSON.parse(body).value
        this.setState({results: data});
    },
    render: function() {
        var self = this;
        return (
            <div>
            <input type="text" ref="searchText" onKeyDown={this.handleKeyDown}/>  
            <button onClick={this.search}>Search</button>
            <SearchResults results={this.state.results}/>
            </div>
            )
    }
});

module.exports = Sherlock;