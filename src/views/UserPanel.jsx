import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1`
    text-align: center;
    color: #737373;
`;

const StyledLink = styled(Link)`
    margin-left: 1rem;
    text-decoration: none;
    color: #FF005C;
    font-weight: 500;
    &:hover{
        border-bottom: 2px solid #FF005C;
    }
`

const UserPanel = () => {
    return(
        <React.Fragment>
            <header>
                <StyledLink to='/'>Home</StyledLink>
            </header>
            <Title>Panel de usuario</Title>
        </React.Fragment>
    )
}

export default UserPanel;