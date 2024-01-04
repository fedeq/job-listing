import "./App.css";
import { JobsList } from "./components/JobsList";
import { Filters } from "./components/Filters";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App bg-light_grayish_cyan_background min-h-screen w-screen">
      <Header />
      <Filters />
      <JobsList />
    </div>
  );
}

export default App;
