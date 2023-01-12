import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <header>
      <div className="title">
        <FontAwesomeIcon icon="stopwatch" size="3x" className="icon" />
        <h1>React Counter V2</h1>
      </div>
    </header>
  );
};

export default Header;
