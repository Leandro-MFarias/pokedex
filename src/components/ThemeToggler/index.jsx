import styled from "styled-components";
import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";

import { useContext } from "react";
import { ThemeContext, themes } from "../../Context";

export function ThemeToggler(props) {
    const { theme, setTheme } = useContext(ThemeContext)

    return (
        <Container>
            <Toggler {...props} 
                onClick={() => setTheme(theme === themes.darkTheme ? themes.lightTheme : themes.darkTheme)}>
                {theme === themes.lightTheme ? <Sunny /> : <Moon />}
            </Toggler>
        </Container>
    )
}

const Container = styled.div`
    margin-left: 20px;
`

const Toggler = styled.button`
    background: transparent;
    margin-top: 40px;
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
`
const Moon = styled(FaMoon)`
    background-color: #ccc;
    border-radius: 100%;
    padding: 3px;
    color: #000;
    font-size: 25px;
`

const Sunny = styled(IoIosSunny)`
    background-color: #000;
    border-radius: 100%;
    padding: 3px;
    color: #fff;
    font-size: 30px;
`
