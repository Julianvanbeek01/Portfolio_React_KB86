import { Container, Hero, Gradient, Name, Function, Characteristics, Characteristic, Button, Scroll, ScrollWheel, Content, ProjectList } from './HomeElements';
import Background from '../../Images/home-background.png';
import Project from '../../Components/Project';
import Soulance from '../../Images/soulance.png';
import Greenpeace from '../../Images/greenpeace.png';
import ContactLink from '../../Components/ContactLink';

const Home = () => {
    return (
        <Container>
            <Hero image={Background}>
                <Gradient>
                    <Name>Julian van Beek</Name>
                    <Function>Web Designer</Function>

                    <Characteristics>
                        <Characteristic>Creative</Characteristic>
                        <Characteristic>Tech-savvy</Characteristic>
                        <Characteristic>Passionated</Characteristic>
                        <Characteristic>Eager to learn</Characteristic>
                        <Characteristic>Customer oriented</Characteristic>
                        <Characteristic>Result driven</Characteristic>
                    </Characteristics>
                    
                    <Button to='/portfolio'>View Projects</Button>

                    <Scroll>
                        <ScrollWheel />
                    </Scroll>
                </Gradient>
            </Hero>
            <Content>
                <h2>Recent Projects</h2>
                <ProjectList>
                    <Project tags={['design', 'code', 'work']} title='Soulance Marketing' image={Soulance} />
                    <Project tags={['design', 'school']} title='Greenpeace Plastic Campaign' image={Greenpeace} />
                </ProjectList>
                <ContactLink />
            </Content>
        </Container>
    );
}

export default Home;