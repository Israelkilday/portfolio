import React, { useCallback } from 'react';
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
import particlesConfid from './config/particlesConfig';

const ParticlesBackground = () => {
    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    }, []);

    return (
        <div>
            <Particles
                // id="tsparticles"
                options={particlesConfid}
                init={particlesInit}
            />
        </div>
    )
}

// export default ParticlesBackground;

// import React, { createContext, useContext, useState } from 'react';

// const ThemeContext = createContext();

// export function ThemeProvider({ children }) {
//   const [mainColor, setMainColor] = useState("#0ef");

//   return (
//     <ThemeContext.Provider value={{ mainColor, setMainColor }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// }

// export function useTheme() {
//   return useContext(ThemeContext);
// }

// import React, { useCallback } from 'react';
// import Particles from 'react-tsparticles';
// import { loadFull } from 'tsparticles';
// import { useTheme } from './ThemeContext'; // Importe o contexto

// const ParticlesBackground = () => {
//   const particlesInit = useCallback((engine) => {
//     loadFull(engine);
//   }, []);

//   const { mainColor } = useTheme(); // Use o valor de mainColor do contexto

//   const particlesConfig = {
//     // ... outras configurações ...
//     "particles": {
//       "number": {
//         "value": 65,
//         "density": {
//           "enable": true,
//           "value_area": 800,
//         },
//       },
//       "color": {
//         "value": mainColor, // Use o mainColor do contexto
//       },
//       // ... outras configurações ...
//     },
//   };

//   return (
//     <div>
//       <Particles
//         options={particlesConfig}
//         init={particlesInit}
//       />
//     </div>
//   );
// };

// export default ParticlesBackground;

// import { useTheme } from './ThemeContext';

// function App() {
//   const { setMainColor } = useTheme();

//   // ...

//   const handleColorChange = () => {
//     setMainColor('#ff0000'); // Altere a cor principal para vermelho
//   }

//   // ...
// }
