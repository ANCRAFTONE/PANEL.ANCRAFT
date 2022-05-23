

// import './ANCRAFTONE.css';
// import ANCRAFTONE from './ANCRAFTONE';
import NavList from './NavList';
import navlistj from './nav'
import * as React from 'react';

export default function NavMenuBarSection({}) {
	return (
		<section class="navmenubar NETANCRAFTONE" id="ANCRAFTONE">
        <div class="menu" id="ANCRAFTONE">
          <div class="fixede">
            <div>
              <a class="head" onclick="sidebar()">
                <i class='bx bx-cube-alt'></i>
                <h3 class="ANCRAFT.ONE">ANCRAFT</h3>
                {/* <ANCRAFTONE/><ANCRAFTONE/><ANCRAFTONE/> */}
              </a>
            </div>
  
            <div class="nav">
              <nav>
                <ul class="navl">
				  {navlistj.map((list) => 
					<NavList href={list.href} icon={list.i} span={list.span}/>
				  )}
				  
                </ul>
              </nav>
            </div>
  
            <div class="end">
            </div>
          </div>
        </div>
      </section>
	);
}