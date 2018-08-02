/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import CenteredSection from './CenteredSection';
import Form from './Form';
import TextArea from './Input';
import { saveEntry } from '../App/actions';
import { changeEntry } from './actions';
import { makeSelectUsername } from './selectors'; // what do selectors do??????
import reducer from './reducer';
import saga from './saga';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  /**
   * when initial state entry is not null, submit the form to save to database
   */
  componentDidMount() {
    if (this.props.entry && this.props.entry.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    // const { loading, error, repos } = this.props;
    // const reposListProps = {
    //   loading,
    //   error,
    //   repos,
    // };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="Simple Save homepage"
          />
        </Helmet>
        <div>
          <CenteredSection>
            <div>SIMPLE SAVE</div>
            <Form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="entry">
                <TextArea
                  id="entry"
                  type="entry"
                  placeholder="save something...entry cannot be empty..."
                  value={this.props.entry}
                  onChange={this.props.onChangeEntry}
                />
              </label>
              <div>
                <input name="Submit" type="button" value="SAVE" />
              </div>
            </Form>
          </CenteredSection>
        </div>
      </article>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  entry: PropTypes.string,
  onChangeEntry: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeEntry: evt => dispatch(changeEntry(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(saveEntry(evt.target.value));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  entry: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
