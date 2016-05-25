import React from 'react'

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
          <span className="slds-text-heading--large">$ {this.state.countNum}</span>
        </td>
        <td>
          <div className="slds-dropdown-trigger" aria-expanded="true">
            <button className="slds-button slds-button--icon-border-filled" aria-haspopup="true">
              <svg aria-hidden="true" className="slds-button__icon slds-button__icon--hint">
                <use xlinkHref="./vendor/salesforce-lightning-design-system/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
              </svg>
              <span className="slds-assistive-text">Show More</span>
            </button>
            <div className="slds-dropdown slds-dropdown--right slds-dropdown--actions slds-dropdown--menu">
              <ul className="dropdown__list" role="menu">
                <li className="slds-dropdown__item">
                  <a onClick={this._countup} role="menuitem">
                    <p className="slds-truncate">Up</p>
                  </a>
                </li>
                <li className="slds-dropdown__item">
                  <a onClick={this._countdown} role="menuitem">
                    <p className="slds-truncate">Down</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </td>
      </tr>
    );
  }
})