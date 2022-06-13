import Logo from '../../assets/images/logo_home-design.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUser, BiSearch } from 'react-icons/bi';
import { MdFavoriteBorder, MdOutlineLocalShipping } from 'react-icons/md';
import { GoLocation } from 'react-icons/go';
import { HiFire, HiMenu } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import { StyledHeader,
    LogoImg,
    Options,
    Buscador,
    Iconos,
    IconLink,
    Menu,
    Banner,
    FatherPopup,
    Popup
} from './Header.elements';

const Header = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showRespMenu, setShowRespMenu] = useState(false);

    const handleClickPopup = () => {
        if(showPopup){ 
            document.getElementById("fatherPopup").style.display = "none";
            setShowPopup(false);
        }
        else{ 
            document.getElementById("fatherPopup").style.display = "block";
            setShowPopup(true);
        }
    }

    const handleClickRespMenu = () => {
        if(showRespMenu){
            document.getElementById("respMenu").style.display = "none";
            document.getElementById("burgerIcon").style.backgroundColor = "#FDFDFD";
            document.getElementById("burgerIcon").style.color = "#FF005C";
            setShowRespMenu(false);
        }
        else{
            document.getElementById("respMenu").style.display = "flex";
            document.getElementById("burgerIcon").style.backgroundColor = "#FF005C";
            document.getElementById("burgerIcon").style.color = "#FDFDFD";
            setShowRespMenu(true);
        }
    }
    
    return(
        <StyledHeader>
            {/* Responsive for Desktop */}
            <div className="top">
                <LogoImg src={Logo} alt="Logo"/>
                <Options>
                    <div className='searchAndIcons'>
                        <div className='fatherSearch'>
                            <Buscador type="search" placeholder='¿Qué estás buscando?'/>
                            <span className='searchIcon'>
                                <BiSearch/>
                            </span>
                        </div>
                        <Iconos>
                            <IconLink to='/user_panel'><BiUser className='icono'/></IconLink>
                            <IconLink to='#'><MdFavoriteBorder className='icono' /></IconLink>
                            <IconLink to='#'><GoLocation className='icono'/></IconLink>
                            <IconLink to='#' onClick={handleClickPopup}><MdOutlineLocalShipping className='icono'/></IconLink>
                        </Iconos>
                    </div>
                    <Menu>
                        <Link to='#' className='optionWithIcon menuLink'>
                            <div>Rebajas</div>
                            <HiFire id='rebajasIcon' fontSize='20'/>
                        </Link>
                        <Link to='#' className='menuLink'>Coleccciones</Link>
                        <Link to='#' className='menuLink'>Recámaras</Link>
                        <Link to='#' className='menuLink'>Comedores</Link>
                        <Link to='#' className='menuLink'>Salas</Link>
                        <Link to='#' className='menuLink'>Complementarios</Link>
                        <Link to='#' className='menuLink'>Colchones</Link>
                        <Link to='#' className='menuLink'>Decoración</Link>
                        <Link to='#' className='optionWithIcon menuLink'>
                            <div>Blog</div>
                            <IoMdArrowDropdown id='blogIcon' fontSize='15'/>
                        </Link>
                    </Menu>
                </Options>
            </div>

            {/* Responsive for Mobile */}
            <div className='mobile'>
                <div className='options'>
                    <HiMenu id='burgerIcon' onClick={handleClickRespMenu}/>
                    <LogoImg src={Logo} alt='Logo'/>
                    <Iconos>
                        <IconLink to='#'><MdFavoriteBorder className='icono' /></IconLink>
                        <IconLink to='#' onClick={handleClickPopup}><MdOutlineLocalShipping className='icono'/></IconLink>
                    </Iconos>
                </div>
                <Menu id='respMenu'>
                    <Link to='#' className='optionWithIcon menuLink'>
                        <div>Rebajas</div>
                        <HiFire className='menuLinkIcon' fontSize='20'/>
                    </Link>
                    <Link to='#' className='menuLink'>Coleccciones</Link>
                    <Link to='#' className='menuLink'>Recámaras</Link>
                    <Link to='#' className='menuLink'>Comedores</Link>
                    <Link to='#' className='menuLink'>Salas</Link>
                    <Link to='#' className='menuLink'>Complementarios</Link>
                    <Link to='#' className='menuLink'>Colchones</Link>
                    <Link to='#' className='menuLink'>Decoración</Link>
                    <Link to='#' className='optionWithIcon menuLink'>
                        <div>Blog</div>
                        <IoMdArrowDropdown className='menuLinkIcon' fontSize='15'/>
                    </Link>
                </Menu>
                <div className='fatherSearch'>
                    <Buscador type="search" name="" id="" placeholder='¿Qué estás buscando?'/>
                    <span className='searchIcon'>
                        <BiSearch/>
                    </span>
                </div>
            </div>

            <Banner>COMPRA HOY Y OBTÉN 5% ADICIONAL SOLO COMO CLIENTE PREMIER</Banner>
            <FatherPopup id='fatherPopup'>
                <Popup>
                    <button onClick={handleClickPopup}>X</button>
                    <h1>Mi carrito de compras</h1>
                </Popup>
            </FatherPopup>
        </StyledHeader>
    )
}

export default Header;