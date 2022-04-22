import { Container, Hero, Gradient, Content, PageTitle, SubTitle, AboutContainer, Experience, Heading, TimeLine, Skills, SkillsList } from './AboutElements';
import Background from '../../Images/about-background.jpg';
import Skill from '../../Components/Skill';
import ContactLink from '../../Components/ContactLink';

// Skills
import XD from '../../Images/skills/xd.svg';
import Illustrator from '../../Images/skills/illustrator.svg';
import Photoshop from '../../Images/skills/photoshop.svg';
import HTML from '../../Images/skills/html.svg';
import CSS from '../../Images/skills/css.svg';
import Javascript from '../../Images/skills/javascript.svg';
import Magento from '../../Images/skills/magento.svg';
import Git from '../../Images/skills/git.svg';

const About = () => {
    return (
        <Container>
            <Hero image={Background}>
                <Gradient>
                    <PageTitle>About me</PageTitle>
                    <SubTitle>Get to know me</SubTitle>

                    <AboutContainer>
                        <h2>A few words about me</h2>
                        <p>I’m Julian van Beek, a web designer based in Den Hoorn, The Netherlands. Designing and coding is a passion of me. The moment I created my first website, I realized that this is what I like to do as job in the future. I like the combination of designing and coding websites. </p>
                    </AboutContainer>
                </Gradient>
            </Hero>
            <Content>
                <Experience>
                    <Heading>Experience</Heading>
                    <p>Currently I’m studying Communication and Multimedia Design. Besides my study I've also done several commercial projects in web design and coding.</p>

                    <TimeLine>
                        <thead>
                            <tr>
                                <th>Company</th>
                                <th>Function</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Web4Exposure</td>
                                <td>Web Designer</td>
                                <td>Apr 2019 - Apr 2020</td>
                            </tr>
                            <tr>
                                <td>Skopei</td>
                                <td>Internship Web Design</td>
                                <td>Sep 2021 - Feb 2022</td>
                            </tr>
                        </tbody>
                    </TimeLine>
                </Experience>
                <Skills>
                    <Heading>Skills</Heading>
                    <p>It goes without saying that I know how to work with the most commonly used (design)tools and programming languages. Next to that I am eager to learn new programs. 
            I also have experience in customer contacts and sales what I learned during my side job as sales employee.</p>
                    <SkillsList>
                        <Skill name='Adobe XD' image={XD} />
                        <Skill name='Illustrator' image={Illustrator} />
                        <Skill name='Photoshop' image={Photoshop} />
                        <Skill name='HTML 5' image={HTML} />
                        <Skill name='CSS 3' image={CSS} />
                        <Skill name='Javascript' image={Javascript} />
                        <Skill name='Magento 2' image={Magento} />
                        <Skill name='Git' image={Git} />
                    </SkillsList>
                </Skills>
                <ContactLink />
            </Content>
        </Container>
    );
}

export default About;