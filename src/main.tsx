// import "main.css"
// import 'typeface-montserrat'; // Importe a fonte Montserrat
// import React from 'react'
// // import ReactDOM from 'react-dom/client'

// import App from 'app';

// const container = document.getElementById("root") as HTMLElement;
// const root = ReactDOM.createRoot(container);

// root.render(
//   <React.StrictMode>
//     <App></App>
//   </React.StrictMode>
// )


import "main.css"
import 'typeface-montserrat';
import React from 'react'
import ReactDOM from 'react-dom'

import App from 'app';

const container = document.getElementById("root") as HTMLElement;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  container
);