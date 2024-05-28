import styled from "styled-components"

const Container = styled.div`
    border: 1px solid #000;
    border-radius: 20px;
    background-color: #FEFEFE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const Title = styled.h2`
    font-family: "Carme", sans-serif;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: left;
    opacity: 80%;
    margin: 0px 0px 10px 0px;
`

const ValueContainer = styled.div`
    display: flex;
    color: #000;
    font-family: "Poetsen One", sans-serif;
    font-size: 25px;
    margin: 0px 30px 0px 30px;
    gap: 5px;
`;

const Image = styled.img`
    width: 60px;
    height: 60px;
`;

export default function Card({title,image,value}:{title: string,image: string, value: string}) {
    return (
        <Container>
            <Title>{title}</Title>
            <ValueContainer>
                <Image src={require(`./assets/${image}`)}/>
                <h1>{value}</h1>
            </ValueContainer>
        </Container>
    )
}