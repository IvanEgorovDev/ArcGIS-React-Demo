import Map from "./components/Map";
import useInitMap from "./hooks/useInitMap";

function App() {
  useInitMap();

  return (
    <div className="w-screen h-screen">
      <Map />
    </div>
  );
}

export default App;
