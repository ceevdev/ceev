import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin-bottom: 10px;
`

const Title = styled.h1`
    color: #000;
    font-weight: 400;
    font-size: 20px;
    font-family: "Carme", sans-serif;
    line-height: 24px;
    margin: 0;
    margin-bottom: 10px;
`;

const Subtitle = styled.p`
    color: #000;
    opacity: 50%;
    font-family: "Carme", sans-serif;
    font-weight: 400;
    line-height: 18px;
    font-size: 15px;
    margin: 0;
`

const StyledLink = styled(Link)`
    color: #000;
    font-family: Carme;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    text-transform: uppercase;
    text-decoration: none;
`

export default function More({title, subtitle, path} : {title: string, subtitle: string, path: string}) {
    return (
        <Container>
            <div>
                <Title>{title}</Title>
                <Subtitle>{subtitle}</Subtitle> 
            </div>
            <StyledLink to={path}>Ver mais {'>'}</StyledLink>
        </Container>
    )
}