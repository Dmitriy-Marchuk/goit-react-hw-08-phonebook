import Authorization from 'components/Authorization/Authorization';
import Navigation from 'components/Navigation/Navigation';

const AppBar = () => {
  return (
    <div>
      <header>
        <nav>
          <Navigation />
          <Authorization />
        </nav>
      </header>
    </div>
  );
};

export default AppBar;
