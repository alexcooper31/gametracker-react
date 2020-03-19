import * as React from 'react';

const Icon = (props) => (
  <i className={props.children ? 'material-icons' : `fas fa-${props.name.toString()}`} style={{userSelect: 'none'}}>
    {props.children}
  </i>
);

export default Icon;
