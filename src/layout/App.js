import React from 'react';
import PropTypes from 'prop-types';
import BaseComponent from 'components/BaseComponent';

export default class App extends BaseComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <div>App layout</div>
        { this.props.children }
      </div>
    );
  }
}
