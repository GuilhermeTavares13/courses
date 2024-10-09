import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data';


const reactDescriptions = ['Fundamental','Crucial','Core'];

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header({concept}) {
  
  const description = reactDescriptions[getRandomInt(2)] 

  return (
    <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
    </header>
  )
}

function CoreConcept({title,description,imgSrc}) {
  return (
    <li>
      <img src={imgSrc}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            
            <CoreConcept title='Components' description='The core UI building block.' imgSrc=''/>
          </ul> 
        </section>
      </main>
    </div>
  );
}

export default App;
