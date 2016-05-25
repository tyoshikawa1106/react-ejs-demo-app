import React from 'react'
require('./SideMenu.scss');

export default React.createClass({
  render() {
    return (
      <div>
        <div className="sideMenu">
          <ul className="slds-list--vertical slds-has-dividers">
            <li className="slds-list__item nav-list"><a href="/home">Home</a></li>
            <li className="slds-list__item nav-list"><a href="/todo">Todo</a></li>
            <li className="slds-list__item nav-list"><a href="/discussion">Discussion</a></li>
            <li className="slds-list__item nav-list"><a href="/counter">Counter</a></li>
            <li className="slds-list__item nav-list"><a href="/reactslick">ReactSlick</a></li>
            <li className="slds-list__item nav-list"><a href="/">Logout</a></li>
          </ul>
        </div>
      </div>
    )
  }
})