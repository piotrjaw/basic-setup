import React from 'react';
import PropTypes from 'prop-types';
import BasePage from 'pages/BasePage';

export default class About extends BasePage {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        Hello AboutPage
      </div>
    );
  }
}
