import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
import Row3 from "./components/Row3";
import Row4 from "./components/Row4";

export default function App() {
  return (
    <>
      <h1>SUDAN FLAG</h1>
      <div className="flag">
        <Row1 />
        <Row2 />
        <Row3 />
        <Row4 />
      </div>
    </>
  );
}