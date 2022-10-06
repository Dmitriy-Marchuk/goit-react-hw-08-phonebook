import { NavItem } from 'components/SharedLayout/SharedLayout.styled';

const Authorization = () => {
  return (
    <>
      <NavItem end to="/login">
        Log in
      </NavItem>
      <NavItem end to="/register">
        Register
      </NavItem>
    </>
  );
};

export default Authorization;
