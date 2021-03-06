// == Import
import './styles.scss';
import Logout from '../Logout';

// == Composant
const Header = ({ setToken }) => (
    <div className="header">
      <h1>header</h1>
      <Logout setToken={setToken}/>
    </div>
  );

// == Export
export default Header;
