import React from 'react';

import css from './ThemeSelect.module.css';

type PropsType = {
  themeNames: string[];
  activeTheme: string;
  setActiveTheme: (string: string) => void;
};

const ThemeSelect: React.FC<PropsType> = (props) => (
  <select
    className={css.select}
    value={props.activeTheme}
    onChange={(e) => {
      e.preventDefault();
      if (e.target) {
        props.setActiveTheme(e.target.value);
      }
    }}
  >
    {props.themeNames.map((themeName) => (
      <option value={themeName} key={themeName}>
        {themeName}
      </option>
    ))}
  </select>
);

export default ThemeSelect;