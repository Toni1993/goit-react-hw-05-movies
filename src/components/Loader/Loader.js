import { SpinnerRoundOutlined } from 'spinners-react';
import { Box } from 'components/Box';

const Loader = ({ size, color }) => (
  <Box display="flex" alignItems="center" justifyContent="center">
    <SpinnerRoundOutlined size={size} color={color} />
  </Box>
);

export default Loader;
