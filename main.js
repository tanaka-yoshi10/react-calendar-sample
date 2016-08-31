import React from 'react'
import ReactDom from 'react-dom'
import Calendar from 'react-input-calendar'

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});

ReactDom.render(
    <Calendar format="DD/MM/YYYY" date="4-12-2014" closeOnSelect={true}/>,
    document.getElementById('content')
);
