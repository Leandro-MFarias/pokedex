import styled, { ThemeProvider } from 'styled-components'

import { ThemeToggler } from '../ThemeToggler'
import logo from '../../assets/pokemon-logo.png'
import { ThemeContext } from '../../Context'
import { useContext } from 'react'

export function Header() {
    const { theme } = useContext(ThemeContext)

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Img src={logo} alt="Logo Pokemon" />
                <ThemeToggler />
            </Container>
            <Line></Line>
        </ThemeProvider>
    )
}

const Container = styled.div`
    background-color: ${(props) => props.theme.background};
    display: flex;
    align-items: center;
    justify-content: center;
`

const Line = styled.div`
    height: 1px;
    width: 100%;
    background-color: #94a3b8;
`

const Img = styled.img`
    width: 400px;
    margin-bottom: 10px;

    @media (max-width: 600px) {
        width: 300px;
    }

    @media (max-width: 420px) {
        width: 200px;
    }
`
