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

export default ParticlesBackground;