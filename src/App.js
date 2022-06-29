import './App.css';
import Hero from './components/Hero.jsx';
import data from './components/data.json';

function App() {
  return (
    <div className="App">
		<h1 className="title">Герои Marvel</h1>
		<div className="wrapper">
			  {/* {data.map(hero => <Hero name={hero.name} id={hero.id} url={hero.image} ></Hero>)} */}
			  {data.map(hero => <Hero hero={hero}></Hero>)}
		</div>
	</div>
  );
}

export default App;
