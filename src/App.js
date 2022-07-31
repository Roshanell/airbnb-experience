import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data';



// - import the array of data from data.js
// - map over the array to create <Card /> components
// - display the array of card components under the navbar
//   (in place of the current <Card /> component)

// Note: We haven't styled the group of components yet, so they'll
// still be block elements, stacked vertically. We'll add styling later.
// */


function App() {
  const listOfCards = data.map(data =>{

    return (
    <Card 
    key={data.id}
    data = {data}
    />
    )
  })

  return (
    <div>
      <NavBar/>
      <Hero/>
      <section className ="cards-list">
      {listOfCards}
      </section>
    </div>
  );
}

export default App;
