import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
    image: string;
    text: string;
    path: string;
}

const StyledLink = styled(Link)`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    margin-right: 45px;
`

const Img = styled.img`
    height: 24px;
    width: 24px;
`;

const Span = styled.span`
    font-family: "Carme", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000;
`;

export default function Button({ image, text, path }: Props) {
    return (
        <StyledLink to={path}>
            <Img src={require(`./assets/${image}`)} alt={text}/>
            <Span className="button-text">{text}</Span>
        </StyledLink>
    );
}
