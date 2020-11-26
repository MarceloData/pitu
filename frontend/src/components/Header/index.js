import React from "react";
import { Logo, HeaderContainer } from "./styles";
import PituLogo from "../../assets/Pitu-Logo.jpg";

function Header(props) {
    return (
        <>
            <HeaderContainer>
                <Logo src={PituLogo} alt="Pitu - Encurtador de URL" />
                <h1>Pitu</h1>
                <p>{props.children}</p>
            </HeaderContainer>
        </>
    );
}

export default Header;
