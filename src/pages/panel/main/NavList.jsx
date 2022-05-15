

// import './ANCRAFTONE.css';
// import ANCRAFTONE from './ANCRAFTONE';
import * as React from 'react';

export default function NavList({href,icon,span}) {
	return (
		<li>
			<a href={href}>
				<i class={icon}></i>
				<span> {span} </span>
			</a>
			<span class="navtag"> {span} </span>
		</li>
	);
}