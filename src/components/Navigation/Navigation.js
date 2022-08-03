import { NavigationLink } from './Navigation.styled';

const Navigation = () => (
  <nav>
    <NavigationLink to="/">Home</NavigationLink>
    <NavigationLink to="/movies">Movies</NavigationLink>
  </nav>
);

export default Navigation;
