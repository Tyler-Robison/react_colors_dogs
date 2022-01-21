
import './App.css';
import RouteList from './RouteList';
import Nav from './Nav';
import dogs from './dogs';

function App() {
  return (
    <div className="App">
      <Nav dogs={dogs} />
      <RouteList dogs={dogs} />
    </div>
  );
}

App.defaultProps = dogs

export default App;
