import { NavItem } from 'components/SharedLayout/SharedLayout.styled';

const Navigation = () => {
  return (
    <>
      <NavItem to="/" end>
        Home
      </NavItem>
      <NavItem to="phonebook" end>
        Phonebook
      </NavItem>
    </>
  );
};

export default Navigation;
