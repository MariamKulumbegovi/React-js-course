import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import { logGroup } from '../../helpers/logger';
import { formatUser } from '../../helpers/User';
import { UserModel } from '../../models/userModel';

export const Home = ({ user, title, bio, age, again }) => {
  return (
    <>
      <div className="container mt3 is-flex is-flex-direction-column">
        {title && <code>title {title} </code>}
        <em>user: {formatUser(user)} </em>
        <em hidden={!bio}>bio: {user.bio} </em>
        <em hidden={!age}>age: {user.age} </em>

        <em>{formatUser(again)} </em>
      </div>
    </>
  );
};

Home.defaultProps = {
  user: new UserModel('missing fn', 'missing ln'),

  again: new UserModel('missing fn', 'missing ln'),
};

Home.propTypes = {
  user: PropTypes.instanceOf(UserModel).isRequired,
  title: PropTypes.string.isRequired,
  bio: PropTypes.bool.isRequired,
};
