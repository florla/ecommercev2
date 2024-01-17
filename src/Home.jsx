import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Footer />
        </div>
    );
};

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Navbar from './Navbar'; 

// const App = () => {
//     return (
//         <div>
//             <Navbar />
//         </div>
//     );
// };

// Render the App component into the root element of your HTML
// ReactDOM.render(<App />, document.getElementById('root'));
