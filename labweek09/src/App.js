import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome/Welcome'
import Title from './components/title/Title'
import MyInfo from './components/myInfo/MyInfo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome/>
        <Title/>
        <MyInfo sid="101391045" name="Yang Hai" collegeName="George Brown College"/>
      </header>
    </div>
  );
}

export default App;
