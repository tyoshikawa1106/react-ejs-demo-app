import React from 'react'
import Slider from 'react-slick'
import ReactSlickStarter from '../ReactSlickStarter/ReactSlickStarter'
import ReactSlickImages from '../ReactSlickImages/ReactSlickImages'
require('./ReactSlickBox.scss');

export default React.createClass({
  render: function () {
    return (
      <div>
        <div className="bottom-margin">
          <ReactSlickStarter />
        </div>
        <div className="bottom-margin">
          <ReactSlickImages />
        </div>
      </div>
    );
  }
})