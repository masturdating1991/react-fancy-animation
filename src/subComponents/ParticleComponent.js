import styled from "styled-components";
import Particles from "react-tsparticles";

// particle config files
import configLight from "../config/particlesjs-config-light.json"
import configDark from "../config/particlesjs-config.json"

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`


const ParticleComponent = (props) => {


    return (
        <Box>
            <Particles
                style={{position: "absolute", top: 0}}
                params={props.theme === "light" ? configLight : configDark}/>
        </Box>
    );
};

export default ParticleComponent;
