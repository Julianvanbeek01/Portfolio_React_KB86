import { Container, Hero, Gradient, Content, PageTitle, SubTitle, ProjectList } from './PortfolioElements';
import Background from '../../Images/portfolio-background.png';
import Project from '../../Components/Project';
import Soulance from '../../Images/soulance.png';
import Greenpeace from '../../Images/greenpeace.png';
import ContactLink from '../../Components/ContactLink';

const Portfolio = () => {
    return (
        <Container>
            <Hero image={Background}>
                <Gradient>
                    <PageTitle>Portfolio</PageTitle>
                    <SubTitle>Projects I have worked on</SubTitle>
                    
                    <ProjectList>
                        <Project tags={['design', 'code', 'work']} title='Soulance Marketing' image={Soulance} />
                        <Project tags={['design', 'school']} title='Greenpeace Plastic Campaign' image={Greenpeace} />
                    </ProjectList>
                </Gradient>
            </Hero>
            <Content>
                <ContactLink />
            </Content>
        </Container>
    );
}

export default Portfolio;