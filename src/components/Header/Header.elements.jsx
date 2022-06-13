import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FDFDFD;
    font-weight: 600;
    color: #737373;
    box-sizing: border-box;
    & .top{
        width: 85%;
        display: flex;

        /* Responsive for mobile */
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    /* Responsive for Mobile */
    & .mobile{
        display: none;

        @media screen and (max-width: 768px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding-bottom: 1.5rem;
            & .options{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 95%;
                & #burgerIcon{
                    font-size: 1.5rem;
                    color: #FF005C;
                    cursor: pointer;
                    &:hover{
                        background-color: #FF005C;
                        color: #FDFDFD;
                    }
                }
            }
            & .fatherSearch{
                width: 95%;
                position: relative;
                display: flex;
                & .searchIcon{
                    position: absolute;
                    margin-left: 0.8rem;
                    margin-top: 0.5rem;
                    font-size: 1.3rem;
                    cursor: pointer;
                }
            }
        }
    }
`;

export const LogoImg = styled.img`
    width: 20%;
    height: 8rem;

    /* Responsive for Mobile */
    @media screen and (max-width: 768px) {
        min-height: auto;
        width: 50%;
        height: 6rem;
    }
`

export const Options = styled.div`
    box-sizing: border-box;
    width: 80%;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    & .searchAndIcons{
        display: flex;
        justify-content: space-between;
        & .fatherSearch{
            width: 75%;
            position: relative;
            display: flex;
            & .searchIcon{
                position: absolute;
                margin-left: 0.8rem;
                margin-top: 0.5rem;
                font-size: 1.3rem;
                cursor: pointer;
            }
        }
    }
`;

export const Buscador = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 2.5rem;
    padding: 0 2.3rem;
    border-radius: 2rem;
    background-color: #1578bf13;
    border: solid 2px #56636c20;
    font-family: 'Open Sans', sans-serif;
    font-weight: 600;
    font-size: 0.8rem;
    color: #737373;
    outline-color: #666464c4;
`;

export const Iconos = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    /* Responsive for Mobile */
    @media screen and (max-width: 768px) {
        justify-content: space-between;
    }
`;

export const IconLink = styled(Link)`
    cursor: pointer;
    & .icono{
        font-size: 1.5rem;
        color: #FF005C;
        @media screen and (max-width: 992px) {
            font-size: 1rem;
        }
    }
    &:hover{
        & .icono{
            color: #9d0505;
        }
    }

    /* Responsive for Mobile */
    @media screen and (max-width: 768px) {
        & .icono{
            font-size: 1.5rem; 
        }
    }
`;  

export const Menu = styled.div`
    box-sizing: border-box;
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .menuLink{
        text-decoration: none;
        font-size: 0.8rem;
        @media screen and (max-width: 1100px){
            font-size: 0.6rem;
        }
        @media screen and (max-width: 992px) {
            font-size: 0.5rem;
        }
        cursor: pointer;
        color: #737373;
        & #rebajasIcon{
            color: #FF005C;
        }
        & #blogIcon{
            color: #737373;
        }
        &:hover{
            color: #373636;
        }

    }
    & .optionWithIcon{
        display: flex;
        align-items: center;
        & div{
            margin-right: 0.2rem;
        }
    }

    /* Responsive for Mobile */
    @media screen and (max-width: 768px) {
        display: none;
        flex-direction: column;
        background-color: #FF005C;
        width: 100%;
        border: solid 2px #FF005C;
        margin-bottom: 1.5rem;
        & .menuLink{
            width: 100%;
            color: #FDFDFD;
            font-weight: 500;
            font-size: 0.75rem;
            & .menuLinkIcon{
                color: #FDFDFD;
            }
            &:hover{
                background-color: #FDFDFD;
                color: #FF005C;
                & .menuLinkIcon{
                    color: #FF005C;
                }
            }
        }
    }
`;

export const Banner = styled.div`
    background-color: #FF005C;
    width: 100%;
    text-align: center;
    color: #FDFDFD;
    font-weight: 500;
    padding: 3px;
    font-size: 0.92rem;
    box-sizing: border-box;
`;

export const FatherPopup = styled.div`
    display: none;
    z-index: 100;
    position: fixed;
    background-color: #ddcece68;
    width: 100%;
    height: 100%;
`;

export const Popup = styled.div`
    background-color: #FF005C;
    width: 40%;
    height: 20%;
    position: relative;
    top: 40%;
    left: 30%;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    color: #FDFDFD;
    & button{
        align-self: flex-end;
        margin: 5px 5px 0 0;
        cursor: pointer;
        border: solid 2px #FDFDFD;
        background-color: #FF005C;
        color: #FDFDFD;
        font-weight: bold;
        border-radius: 5px;
        &:hover{
            background-color: #FDFDFD;
            color: #FF005C;
        }
    }
    
    /* Responsive for Mobile */
    @media screen and (max-width: 768px) {
        width: 90%;
        left: 5%;
        & h1{
            font-size: 1.5rem;
        }
    }
`;