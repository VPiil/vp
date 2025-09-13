import './App.css';
import React, { useState } from 'react';

import Toggle from './components/Toggle';

function App() {
  const [isLight, setIsLight] = useState(false);

  return (
    <div className="App" data-theme={isLight ? "light" : "dark"}>
      <Toggle handleChange={() => setIsLight(!isLight)} toggleTheme={isLight} />

      <header className="App-header">
        <footer></footer>
        <h1>Veeti Piilonen</h1>
      </header>

      <div className="me">
        <div className="mep">
          <h2>Kuka olen</h2>
          <p>
            Olen Veeti Piilonen, 22-vuotias tieto- ja ohjelmistotekniikan opiskelija Jyväskylästä. 
            Opiskelujen kautta olen löytänyt ohjelmoinnista itselleni uuden mielenkiinnonkohteen. 
            Lisäksi kiinnostukseni tietotekniikkaan on kasvanut opintieni myötä. 
            Loogiseen ajattelun ja ongelmanratkaisun kanssa tykkään puuhata, 
            mutta luova graafinen suunnittelu on heikkouteni ei ole vahvuus (niinkuin tämä sivu ehkä osoittaa). 
            Toisena opintokokonaisuutena suoritan liiketoimintaosaamisen opintokokonaisuuden.
            Vapaa-ajallani tykkään pelata videopelejä, moottoripyöräillä tai urheilla eri lajeja.
          </p>
        </div>
      </div>

      <div className="timeline">
        <div className="timeline-content">
         <h3>2022</h3>
          Äänekosken lukio
        </div>
        
        <div className="arrow">&rarr;</div>
        <div className="timeline-content">
          <h3>2023</h3>
          <p>Varusmiespalvelus/aliupseerikoulu</p>
        </div>

        <div className="arrow">&rarr;</div>
        <div className="timeline-content">
          <h3>2024 &rarr;</h3>
          <p>Jyväskylän yliopiston tieto- ja ohjelmistotekniikan koulutusohjelma.</p>
        </div>
      </div>

      <div className="skills">
        <h2>Taidot</h2>
        <div className="skills-container">
          <div className="skillset">
           <h3></h3>
           <ul>
            <h3>Tekniset taidot</h3>
            <li></li>
            <li>Ohjelmointi: Java, C#, HTML, CSS, SQL, C++/C</li>
            <li>Työkalut: Git, Visual Studio Code, Eclipse</li>
            <li>Kielet: Suomi (äidinkieli), Englanti (hyvä), Ruotsi (hyvä)</li>
           </ul>
          </div>
          <div className="skillset">
            <h3>pehmeät taidot</h3>
            <ul>
              <li>Tiimityöskentely</li>
              <li>Ongelmanratkaisukyky</li>
              <li>Sopeutumiskyky</li>
              <li>Itsenäinen työskentely</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contact">
        <p>Yhteystiedot</p>
        <div className="social-icons">
          <a href="tel:+358458079633" class="fa fa-phone"></a>
          <a href="mailto:piilonenveeti@gmail.com" class="fa fa-google"></a>
          <a href="https://www.instagram.com/veeti_piilonen/" target="_blank" rel="noopener noreferrer" class="fa fa-instagram"></a>
          <a href="https://www.linkedin.com/in/veeti-piilonen-1786582b1/" target="_blank" rel="noopener noreferrer" class="fa fa-linkedin"></a>
        </div>
      </div>

      <footer className="App-footer">
        <p>© 2025 Veeti Piilonen</p>
      </footer>
    </div>
  );
}

export default App;
