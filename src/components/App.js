import React, { PropTypes } from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router';
import s from '../styles/app.style';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  return (
    <div style={s.root}>
      <h1 style={s.title}>My current useless stats</h1>
      <Interactive
        as="a"
        href="https://github.com/clearnote01"
        style={s.repoLink}
        {...s.link}
      >https://github.com/clearnot01</Interactive>
      {children}
      <div style={s.creditLine}>
        <Interactive
          as="a"
          href="http://github.com/clearnote01"
          interactiveChild
          focus={{}}
          touchActive={{}}
          touchActiveTapOnly
        >
          This belongs to <span {...s.childLink}>Utkarsh Raj</span>
        </Interactive>
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
