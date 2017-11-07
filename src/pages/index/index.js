import React from 'react';
import PropTypes from 'prop-types';
import BasePage from 'pages/BasePage';

export default class Index extends BasePage {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        Hello IndexPage
      </div>
    );
  }
}
