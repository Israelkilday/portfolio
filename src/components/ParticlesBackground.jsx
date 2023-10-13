import React, { useCallback } from 'react';
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";
import particlesConfid from './config/particlesConfig';
import './Particles.css';

const ParticlesBackground = () => {
    const particlesInit = useCallback((engine) => {
        loadFull(engine)
    }, [])

    return (
        <div className="custom-particles">
            <Particles
                // id="tsparticles"
                options={particlesConfid}
                init={particlesInit}
            />
        </div>
    )
}

export default ParticlesBackground;