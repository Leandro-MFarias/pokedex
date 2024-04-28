import { Link, useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

import { useContext } from "react"
import { ThemeContext } from "../../Context"
import styled, { ThemeProvider } from "styled-components"

export function PokemonDetails() {
    const { theme } = useContext(ThemeContext)
    const { id } = useParams()

    const PokemonData = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data = response.data
        const pokemon = {
            id: data.id,
            name: data.name,
            type: data.types.map(items => items.type.name).join(', '),
            sprite: data.sprites.other['official-artwork'].front_default,
            ability: data.abilities.map(items => items.ability.name).join(', '),
            move: data.moves.slice(0, 5).map(items => items.move.name).join(', ')
        }
        return pokemon
    }

    const { data: pokemon, isLoading } = useQuery({
        queryKey: ['pokemon'],
        queryFn: PokemonData,
        refetchOnWindowFocus: false
    })

    if (isLoading) return <h1>Carregando informações</h1>

    return (
        <ThemeProvider theme={theme}>
            <Section>
                <BtnContainer>
                    <Link to='/'>
                        <Button>Voltar para Home</Button>
                    </Link>
                </BtnContainer>

                <Container>
                    <ImgContainer>
                        <Img src={pokemon.sprite} alt={name} />
                    </ImgContainer>

                    <ContainerInfo>
                        <Title>#{pokemon.id} {pokemon.name}</Title>
                        <Info>
                            <Text><Strong>Type:</Strong> {pokemon.type}</Text>
                            <Text><Strong>Ability:</Strong> {pokemon.ability}</Text>
                            <Text><Strong>Move:</Strong> {pokemon.move}</Text>
                        </Info>
                    </ContainerInfo>
                </Container>
            </Section>
        </ThemeProvider>
    )
}

const Section = styled.div`
    background-color: ${(props) => props.theme.background};
    height: 83.4vh;

    @media (max-width: 600px) {
        height: 87vh;
    }
    @media (max-width: 425px) {
        height: 91vh;
    }

    @media (max-width: 320px) {
        height: 100%;
    }
`
const BtnContainer = styled.div`
    width: 210px;
    padding: 18px;
`

const Button = styled.div`
    font-family: 'Lato', sans-serif;
    padding: 15px;
    background-color: #30a7d7;
    text-align: center;
    border-radius: 18px;
    color: #fff;
    &:hover {
        background-color: hsl(197, 68%, 62%);
    }

    @media (max-width: 500px) {
        padding: 10px;
    }
`

const Container = styled.div`
    background-color: ${(props) => props.theme.card};
    display: flex;
    max-width: 50%;
    height: 60%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
    padding: 25px;
    border-radius: 20px;

    @media (max-width: 1180px) {
        height: 80%;
        flex-direction: column;
        gap: 10px;
    }

    @media (max-width: 500px) {
        max-width: 90%;
        height: 85%;
        flex-direction: column;
        gap: 10px;
    }

    @media (max-width: 320px) {
        height: 100vh;
    }
`

const ImgContainer = styled.div`
    background-color: #c7cbd1;
    border: 1px solid #fff;
    border-radius: 18px;
`

const Img = styled.img`
    max-height: 400px;

    @media (max-width: 1366px) {
        max-height: 300px;
    }

    @media (max-width: 500px) {
        height: 250px;
    }
`

const ContainerInfo = styled.div`
    background-color: ${(props) => props.theme.info}; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
    margin-left: 10px;
    text-transform: capitalize;
    font-family: 'Lato', sans-serif;
    border-radius: 18px;
    border: 1px solid #000;
`

const Title = styled.h2`
    font-size: 32px;
    margin-bottom: 8px;
    letter-spacing: 2px;

    @media (max-width: 1180px) {
        font-size: 20px;
    }

`

const Info = styled.div`
    font-size: 20px;

    @media (max-width: 580px) {
        font-size: 18px;
    }

    @media (max-width: 428px) {
        font-size: 14px;
    }
`

const Text = styled.p`
    margin-bottom: 10px;

    @media (max-width: 500px) {
        margin-bottom: 10px;
    }
`

const Strong = styled.strong`
    letter-spacing: 2px;
`