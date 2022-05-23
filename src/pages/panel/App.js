//面板程式

// import './App.css';
import NavMenuBarSection from '../../layout/panel/main/NavMenuBarSection';
import MainSection from '../../layout/panel/main/MainSection';
import PanelHead from '../../layout/panel/head';
import * as React from 'react';

function App() {
  return (
    <div>
      <PanelHead/>
      <body name="ANCRAFTONE">  
        <main id="ANCRAFTONE" class="NETANCRAFTONE" name="ANCRAFTONE"> 
          {/* <!--- main ---> */}
          <div class='mainpage'>  
            <NavMenuBarSection />
            <MainSection />
          </div>  
        </main> 
      </body> 
    </div>
  );
}

export default App;


