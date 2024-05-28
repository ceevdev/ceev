import styled from "styled-components";
import More from "./More";
import Card from "./Card";
import Info from "./Info";

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: start;
    justify: content: center;
    flex-direction: column;
    padding: 40px;
`;

const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`

export default function Home() {
    return (
        <Container>
            <Info />
            <More title="IDEB - Indicador de Qualidade" subtitle="Dados de Ideb 2021" path="#" />
            <CardContainer>
                <Card title="Anos finais" value="5,9" image="chart.png"/>
                <Card title="Ensino médio" value="5,4" image="chart.png"/>
                <Card title="Ensino médio" value="5,4" image="chart.png"/>
            </CardContainer>
        </Container>
    )
}