import {motion} from "framer-motion";
import styled from "styled-components";

import Logo from "../subComponents/Logo";
import PowerButton from "../subComponents/PowerButton";
import SocialMediaIcons from "../subComponents/SocialMediaIcons";
import paperImg from "../assets/Images/paper.jpg";
import ProjectsComponent from "../components/Projects"

import {Projects} from "../data/ProjectData"
import AnchorComponent from "../subComponents/Anchor";
import {useEffect, useState} from "react";
import BigTitle from "../subComponents/BigTitle";

const MainContainer = styled(motion.div)`
  background-image: url(${paperImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;

`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;


const containerAnimation = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5
        }
    }
}

const ProjectsPage = () => {
    const [numbers, setNumbers] = useState(0)

    useEffect(() => {
        let num = (window.innerHeight - 70) / 28
        setNumbers(parseInt(num))
    }, [])

    return (
        <MainContainer variants={containerAnimation} initial="hidden" animate="show" exit={{
            opacity: 0,
            transition: {
                duration: 0.5
            }
        }}>
            <Container>
                <Logo/>
                <PowerButton/>
                <SocialMediaIcons/>
                <AnchorComponent numbers={numbers}/>

                <Center>
                    <Grid>
                        {Projects.map(item =>
                            <ProjectsComponent key={item.id} project={item}/>
                        )}
                    </Grid>
                </Center>
                <BigTitle text="PROJECTS" top="5rem" left="5rem"/>
            </Container>
        </MainContainer>
    );
};

export default ProjectsPage;
