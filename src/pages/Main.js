import {useState} from "react";
import {motion} from "framer-motion"

import styled, {keyframes} from "styled-components";
import ReactTooltip from "react-tooltip";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LogoComponent from "../subComponents/Logo";
import PowerButton from "../subComponents/PowerButton";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import {Gmail, YinYang} from "../components/AllSvgs";
import {NavLink} from "react-router-dom";
import Intro from "../components/Intro";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.theme.body};
  overflow: hidden;
  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const Container = styled.div`
  padding: 2rem;
`;

const Email = styled.div`
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  z-index: 1;
  cursor: pointer;
`;

const Projects = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 1vw);
  transform: rotate(90deg) translate(-50%, -50%);
  z-index: 1;
  text-decoration: none;
  cursor: pointer;
`;

const Work = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  z-index: 1;
  text-decoration: none;
  cursor: pointer;
`;

const About = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  cursor: pointer;
  z-index: 1;
`;

const Skills = styled(NavLink)`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  cursor: pointer;
`;

const BottomBar = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 1rem;

  display: flex;
  justify-content: space-evenly;
`;

const rotate = keyframes`

  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & span {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 0.5rem;
  }
`;

const DarkDiv = styled.div`
  width: ${(props) => (props.click ? "50%" : "0")};
  height: ${(props) => (props.click ? "100%" : "0")};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  background-color: #000;
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Main = () => {
    const [click, setClick] = useState(false);

    const notify = () => toast.success("Gmail Copied Successfully");

    const copyToClipboard = () => {
        navigator.clipboard.writeText("aligodosi@gmail.com");
        notify();
    };

    return (
        <MainContainer>
            <DarkDiv click={click}/>
            <Container>
                <LogoComponent theme={click ? "dark" : "light"}/>
                <SocialMediaIcons theme={click ? "dark" : "light"}/>

                <Center click={click}>
                    <YinYang
                        onClick={() => setClick(!click)}
                        width={click ? 120 : 200}
                        height={click ? 120 : 200}
                        fil="currentColor"
                    />
                    <span>Click Here</span>
                </Center>

                <Email data-tip="Click Me" onClick={copyToClipboard}>
                    <ToastContainer
                        position="top-center"
                        autoClose={2000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        draggable
                        pauseOnHover={false}
                    />
                    <ReactTooltip effect="solid" delayHide={2000} place="left"/>
                    <motion.div initial={{y: -200, transition: {type: "spring", duration: 1.5, delay: 1}}}
                                animate={{y: 0, transition: {type: "spring", duration: 1.5, delay: 1}}}
                                whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>
                        <Gmail width={40} height={40}/>
                    </motion.div>
                </Email>

                <Projects to="/projects">
                    <motion.h2 initial={{y: -200, transition: {type: "spring", duration: 1.5, delay: 1}}}
                               animate={{y: 0, transition: {type: "spring", duration: 1.5, delay: 1}}}
                               whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Projects
                    </motion.h2>
                </Projects>

                <Work to="/work" click={click}>
                    <motion.h2 initial={{y: -200, transition: {type: "spring", duration: 1.5, delay: 1}}}
                               animate={{y: 0, transition: {type: "spring", duration: 1.5, delay: 1}}}
                               whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>Work
                    </motion.h2>
                </Work>

                <BottomBar>
                    <About to="/about" click={click}>
                        <motion.h2 initial={{y: 200, transition: {type: "spring", duration: 1.5, delay: 1}}}
                                   animate={{y: 0, transition: {type: "spring", duration: 1.5, delay: 1}}}
                                   whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>About Me
                        </motion.h2>
                    </About>

                    <Skills to="/skills">
                        <motion.h2 initial={{y: 200, transition: {type: "spring", duration: 1.5, delay: 1}}}
                                   animate={{y: 0, transition: {type: "spring", duration: 1.5, delay: 1}}}
                                   whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>My Skills
                        </motion.h2>
                    </Skills>
                </BottomBar>
            </Container>

            {click ? <Intro click={click}/> : null}
        </MainContainer>
    );
};

export default Main;
