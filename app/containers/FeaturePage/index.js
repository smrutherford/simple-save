/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import List from './List';
import ListItem from './ListItem';

export default class FeaturePage extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Saved Entries Page</title>
          <meta
            name="database"
            content="Entries saved to database"
          />
        </Helmet>
        <List>
          {this.props.savedEntries.map(savedEntry => (
            <ListItem>{savedEntry}</ListItem>
          ))}
        </List>
      </div>
    );
  }
}

FeaturePage.propTypes = {
  savedEntries: PropTypes.array,
};
