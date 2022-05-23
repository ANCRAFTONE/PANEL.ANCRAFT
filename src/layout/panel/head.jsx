

// import './ANCRAFTONE.css';
// import ANCRAFTONE from './ANCRAFTONE';
import * as React from 'react';
import { Helmet } from 'react-helmet';

export default function ANCRAFTONE({}) {
	return (
		<Helmet>
			{/* <!--- main head---> */}
			<title>ANCRAFTONE</title>
			<link rel="icon" href="https://i.imgur.com/BatHs5l.png" />
			{/* <link rel="stylesheet" href="style.css" /> */}
			{/* <script src='script.js'></script> */}
			{/* <script src='ajax.js'></script> */}
			<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.6.0.min.js"></script>
			<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			{/* <!--- javascript src ---> */}
			<script src='https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js'></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
			{/* <!--- css src ---> */}
			<link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300,400,500,600,700,800,900,1000&display=swap" rel="stylesheet" />
		</Helmet>
	);
}