import React from 'react';
import { Container, PageLink} from './ContactLinkElements';

const ContactLink = () => {
    return (
        <Container>
                <h3>Need a designer?</h3>
                <PageLink to='/contact' >Let's work together &rarr;</PageLink>
        </Container>
    );
}

export default ContactLink;