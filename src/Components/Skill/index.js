import React from 'react';
import { Container } from './SkillElements';

const Skill = (props) => {
    const name = props.name;
    const image = props.image;

    return (
        <Container>
            <img src={image} alt={name} />
            <span>{name}</span>
        </Container>
    );
}

export default Skill;