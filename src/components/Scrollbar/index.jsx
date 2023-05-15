import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar'

export const Scrollbar = ({ ...props }) => {
  return (
    <PerfectScrollbar {...props}></PerfectScrollbar>
  );
};

Scrollbar.propTypes = {
  children: PropTypes.node,
};
