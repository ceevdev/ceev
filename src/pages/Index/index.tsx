import styled from "styled-components";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const Container = styled.div`
    background-color: #F5F5F5;
    display: flex;
    width: 100%;
    height: 90vh;
`

export default function Index() {
    return (
        <>
            <Header/>
            <Container>
                <Sidebar />
                <Outlet />
            </Container>
        </>
    )
}