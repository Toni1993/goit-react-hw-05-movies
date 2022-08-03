import Navigation from '../Navigation/Navigation';
import { Box } from 'components/Box';

export default function Header() {
  return (
    <Box
      color="#fff"
      bg="#fac7c7"
      as="header"
      p={4}
      display="flex"
      alignItems="center"
      mx="auto"
      minHeihght="80px"
      flexDirection="column"
    >
      <Navigation />
    </Box>
  );
}
