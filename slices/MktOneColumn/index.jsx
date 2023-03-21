import React from 'react';
import PropTypes from 'prop-types';
import Component from '../../src/common/components/MktOneColumn';
/**
 * @typedef {import("@prismicio/client").Content.MktOneColumnSlice} MktOneColumnSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MktOneColumnSlice>} MktOneColumnProps
 * @param { MktOneColumnProps }
 */
const MktOneColumn = ({ slice }) => <Component slice={slice} />;

MktOneColumn.propTypes = {
  slice: PropTypes.objectOf(PropTypes.any),
};

MktOneColumn.defaultProps = {
  slice: {},
};
export default MktOneColumn;
