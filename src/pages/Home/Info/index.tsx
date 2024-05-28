import styled from "styled-components";
import school from "./assets/school.png";

const Container = styled.div`
    display: flex;
    width: 100%;
    background-color: #FEFEFE;
    border: 1px solid #000;
    border-radius: 20px;
    padding: 20px;
    gap: 10px;
    margin-bottom: 40px;
`;

const Image = styled.img`
    width: 52px;
    height: 52px;
`

const TextContainer = styled.div`
    font-family: "Carme", sans-serif;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-weight: 400;
`;

const StyledP = styled.p`
    opacity: 80%;
`

const SubContainer = styled.div`
    display: flex;
    gap: 30px;
    margin-top: 5px;
    margin-bottom: 20px;
`;

const BoxP = styled.p`
    padding: 2px 8px 2px 8px;
    border-radius: 10px;
    color: #000;
    background-color: #D9D9D9;
`;

export default function Info() {
    return (
        <Container>
            <Image src={school}/>
            <TextContainer>
                <Title>ERNANI VIDAL C E EF M</Title>
                <StyledP>Escola Estadual</StyledP>
                <SubContainer>
                    <StyledP>Paraná/Curitiba</StyledP>
                    <BoxP>NSE Médio-alto</BoxP>
                </SubContainer>
            </TextContainer>
        </Container>
    )
}