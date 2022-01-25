import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Nav';
import Benner from './Benner';
import Card from './Card';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Benner></Benner>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
