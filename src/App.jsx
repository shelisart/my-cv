
import './assets/css/style.css';
import Affiliation from './assets/Affiliation'
import Education from './assets/Education'
import Header from './assets/Header'
import PersonalInformation from './assets/Personal Information'
import Skills from './assets/Skills'
function App() {

  return (
  <div>
  {/* <meta charSet="UTF-8" />
  <title>Shellyne CV</title>
  <meta name="description" content="simple CV example created with HTML and CSS" />
  <meta name="author" content="Fly Nerd" />
  <link rel="icon" href="./img/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
  <link rel="stylesheet" href="./assets/css/style.css" /> */}

        <Header />
        <PersonalInformation />
        <hr />
        <Skills />
        <hr />
        <Education />
        <hr />
        <Affiliation />
    </div>
  )
}

export default App
