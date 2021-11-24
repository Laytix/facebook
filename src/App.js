import './App.css';
import Header from './Header';
import './index.css';
import Center from './Center';
import Left from './Left';
import Friendlist from './Friendlist';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="facebook">
        <Left/>
        <Center/>
        <Friendlist/>

      </div>

    </div>
  );
}

export default App;
