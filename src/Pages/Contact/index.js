import { Container, Hero, Gradient, Content, PageTitle, SubTitle, ContactForm, Title, InputContainer, ContactContainer, SubmitButton } from './ContactElements';
import Background from '../../Images/contact-background.jpg';
import emailjs from "emailjs-com";

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_yv3z9t6', 'template_qdrlrqh', e.target, 'sXxthm8MzmhDqIpYq').then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }

    return (
        <Container>
            <Hero image={Background}>
                <Gradient>
                    <PageTitle>Contact</PageTitle>
                    <SubTitle>Let's work together</SubTitle>
                    <ContactContainer>
                        <ContactForm onSubmit={sendEmail}>
                            <Title>Tell me about yourself</Title>
                            <InputContainer className='half'>
                                <span>Name</span>
                                <input type="text" placeholder="Name" name="name" />
                            </InputContainer>
                            <InputContainer className='half'>
                                <span>Phone</span>
                                <input type="tel" placeholder="Phone" name="phone" />
                            </InputContainer>
                            <InputContainer>
                                <span>Name</span>
                                <input type="email" placeholder="Email" name="email" />
                            </InputContainer>
                            <InputContainer>
                                <span>Name</span>
                                <textarea placeholder="How can I help?" rows="8" name="message" />
                            </InputContainer>
                            <SubmitButton type="submit" value="Submit Message" />
                        </ContactForm>
                    </ContactContainer>
                </Gradient>
            </Hero>
        </Container>
    );
}

export default Contact;