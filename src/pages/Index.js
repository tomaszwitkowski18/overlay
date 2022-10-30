import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Link to="/overlay">Overlay</Link>
      <Link to="/panel">Panel</Link>
      <Link to="/start-match">Zacznij mecz</Link>
    </>
  );
}

export default Index