import styled from "styled-components";
import escudo from "./assets/escudo.png";

const StyledHeader = styled.header`
    height: 10vh;
    background-color: var(--light-green);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em
`;

const Logo = styled.img`
    width: 60px;
    height: 70px;
`;

const SearchInput = styled.input`
    background-color: var(--light-gray);
    border-radius: 20px;
    width: 20%;
    height: 30px;
    border: 0;
    outline: none;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Logo src={escudo} alt="Escudo Colégio Estadual Ernani Vidal"/>
            <SearchInput></SearchInput>
        </StyledHeader>
    )
}