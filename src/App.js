import './App.css';
import { Nav, Header, Article, Footer } from './components/HTMLParts';
import CityData from './components/CityData';

function App() {
  return (
    <div>
     <Header focim="Városok" color="red"/>

<section>
 <Nav />

 <Article data={CityData.london}/>

</section>
  <Footer  labjegyzet='teszt 1' color='blue'/>

    </div>
  );
}

export default App;
