import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Box } from '@mui/material';

const HelmetContainer = forwardRef(
  ({ children, title = '', content = '', ...other }, ref) => (
    <Box ref={ref} {...other}>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Helmet>
      {children}
    </Box>
  )
);

HelmetContainer.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default HelmetContainer;
