import './App.css';
import JobsList from './JobsList';
import Filters from './Filters';
function App() {
  return (
    <div className="App" class="p-10 bg-teal-50 min-h-screen">
      <Filters class=""/>
      <JobsList/>
    </div>
  );
}

export default App;
