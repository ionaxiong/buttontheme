import React from 'react';
import { buttonThemes } from './App';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const themeContext = React.useContext(ThemeContext);
  return (
    <div>
        <button style={themeContext == "light" ? buttonThemes.blue : buttonThemes.black}>
          Press me
        </button>
    </div>
  );
}

export default HeaderButton;

