import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import DefaultPathline from './DefaultPathline';

const WIDTH = 25;
const HEIGHT = 30;

const PositionRight = styled.div`
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
`;

const SourceLink = ({ path }) => (
  <PositionRight>
    <a
      href={`https://github.com/dallonf/example/tree/master/${path}`}
      target="_blank"
    >
      View Source
    </a>
  </PositionRight>
);
SourceLink.propTypes = {
  path: PropTypes.string.isRequired,
};

const Pathline = ({ children }) => (
  <div style={{ position: 'relative' }}>
    <DefaultPathline>{children}</DefaultPathline>
    <SourceLink path={children} />
  </div>
);
Pathline.propTypes = {
  children: PropTypes.string,
};

export default Pathline;
