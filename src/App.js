import './App.css';
import { Nav, Header, Article, Footer, Counter } from './components/HTMLParts'; // Counter importálása hozzáadva
import CityData from './components/CityData';

function App() {
  return (
    <div>
     <Header focim="Városok" color="red"/>

<section>
 <Nav />

 <Counter/>

</section>
  <Footer  labjegyzet='teszt 1' color='blue'/>

    </div>
  );
}

export default App;
