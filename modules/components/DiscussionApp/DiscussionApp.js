import React from 'react'
import CommentBox from '../CommentBox/CommentBox'

export default React.createClass({
  render() {
    return (
      <CommentBox url="/api/comments" pollInterval={100000} />
    )
  }
})