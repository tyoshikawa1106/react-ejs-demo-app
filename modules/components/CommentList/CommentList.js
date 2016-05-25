import React from 'react'
import Comment from '../Comment/Comment'

export default React.createClass({

  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id} text={comment.text} avatar="./vendor/salesforce-lightning-design-system/assets/images/avatar1.jpg"></Comment>
      );
    });
    return (
      <div className="comment-list-component">
        <div className="commentList">
          <div className="slds-feed">
            <ul className="slds-feed__list">
              {commentNodes}
            </ul>
          </div>
        </div>
      </div>
    );
  }
})