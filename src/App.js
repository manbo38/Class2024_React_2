import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main name="홍길동" color="blue"/>
        <Footer/>
    </div>
  );
}

export default App;
