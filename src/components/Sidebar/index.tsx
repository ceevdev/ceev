import styled from "styled-components"
import Button from "./Button"

const Container = styled.div`
    background-color: #FEFEFE;
    height: 100%;
    padding: 30px;
    border-right: 1px solid #000;
    border-left: 1px solid #000;
    margin-left: 30px;
    display: flex;
    flex-direction: column;
`

export default function Sidebar() {
    return (
        <Container>
            <Button text="Página Inicial" image="home.png" path="/" />
            <Button text="Distorção idade-serie" image="door.png" path="#" />
            <Button text="Censo escolar" image="classes.png" path="#" />
            <Button text="Projetos" image="people.png" path="#" />
            <Button text="Enem" image="student.png" path="#" />
            <Button text="Ideb" image="positive.png" path="#" />
            <Button text="Taxa de Rendimento" image="onboarding.png" path="#" />
        </Container>
    )
}