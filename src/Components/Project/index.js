import React from 'react';
import { Container, Details, Tags, Tag, ProjectTitle, ProjectButton } from './ProjectElements';

const Project = (props) => {
    const tags = props.tags;
    const title = props.title;
    const image = props.image;

    const listTags = tags.map((tag) =>
        <Tag key={tag}>{tag}</Tag>
    );

    return (
        <Container image={image}>
            <Details>
                <Tags>{listTags}</Tags>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectButton to='/portfolio'>View Project</ProjectButton>
            </Details>
        </Container>
    );
}

export default Project;