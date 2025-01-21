import CarDetailsTest from "./components/CarDetailsTest";
import "./App.css";

function App() {
  const cars = [
    { id: 1, name: "XWZ", marca: "Ferrari", ano: 2020 },
    { id: 2, name: "OMG XTZ", marca: "Lamborguini", ano: 2017 },
    { id: 3, name: "FireBlast", marca: "Jaguar", ano: 2023 },
  ];

  return (
    <div className="App">
      <h1>Concessonária RV</h1>
      <div className="car-container">
        {cars.map((car, i) => (
          <CarDetailsTest car={car} />
        ))}
      </div>
    </div>
  );
}

export default App;