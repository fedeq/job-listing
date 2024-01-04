import "./App.css";
import JobsList from "./components/JobsList";
import Filters from "./components/Filters";
function App() {
  return (
    <div className="App p-10 bg-teal-50 min-h-screen">
      <Filters />
      <JobsList />
    </div>
  );
}

export default App;
