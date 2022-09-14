import './App.css';
import AccordionGroup from './components/AccordionGroup';

function App() {

  const buttonAndElementText = {
    buttonText: 'Accordion Button',
    elementText: 'Accordion Element'
  }

  return (
    <div className="App">
      <AccordionGroup {...buttonAndElementText} />
    </div>
  );
}

export default App;
