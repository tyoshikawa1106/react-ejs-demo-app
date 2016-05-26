import React from 'react'
import CounterItemValue from '../CounterItemValue/CounterItemValue'
import CounterItemMenu from '../CounterItemMenu/CounterItemMenu'

export default React.createClass({
  getInitialState: function(){
    return {
      countNum: 0
    }
  },

  _countup: function(){
    this.setState({countNum: this.state.countNum + 1});
  },
  _countdown: function(){
    this.setState({countNum: this.state.countNum - 1});
  },

  render: function(){
    return (
      <tr className="counter-item-component">
        <td>
          <CounterItemValue countNum={this.state.countNum} />
        </td>
        <td>
          <CounterItemMenu _countup={this._countup} _countdown={this._countdown} />
        </td>
      </tr>
    );
  }
})