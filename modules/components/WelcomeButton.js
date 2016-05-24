import React from 'react'

export default React.createClass({

  getInitialState: function(){
    return {
      buttonLabel: "Welcome React × Node EJS Demo"
    }
  },

  _onclick: function(){
    location.href="/home";
    return false;
  },

  render() {
    return (
      <div className="slds">
        <button className="slds-button slds-button--brand" onClick={this._onclick}>{this.state.buttonLabel}</button>
      </div>
    )
  }
})