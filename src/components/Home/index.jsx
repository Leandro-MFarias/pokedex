import styled, { ThemeProvider } from "styled-components";
import { Fragment, useContext } from "react"
import { ThemeContext } from "../../Context"

import { Button } from "../Button"

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchData } from "../../services/api.jsx"
import { Link } from "react-router-dom";

export function Home() {
    const { theme } = useContext(ThemeContext)

    const { data: pokemonsList, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
        useInfiniteQuery(
            {
                queryKey: ['pokemonsList'],
                queryFn: ({ pageParam = 0 }) => fetchData(pageParam),
                getNextPageParam: (lastPage, allPages) => {
                    if (lastPage.length < 12) return <p>ACABOU OS POKEMONS :/</p>;
                    return allPages.length * 12
                }
            })

    if (isLoading) {
        return <Load>
                    <h2>Carregando...</h2>
                </Load>
    }

    return (
        <ThemeProvider theme={theme}>
            <Section>
                <Container>
                    {pokemonsList.pages.map((page, i) => (
                        <Fragment key={i}>
                            {page.map((pokemon) => (
                                <Link to={`/pokemons/${pokemon.id}`} key={pokemon.id}>
                                    <Card>
                                        <Img src={pokemon.sprite} alt={pokemon.name} />
                                        <Info>
                                            <Title>{pokemon.name}</Title>
                                            <Type>Type: {pokemon.type}</Type>
                                        </Info>
                                    </Card>
                                </Link>
                            ))}
                        </Fragment>
                    ))}
                </Container>
                {hasNextPage && (
                    <Button
                        onClick={() => fetchNextPage()}
                        disabled={isFetchingNextPage}>
                        {isFetchingNextPage ? "Carregando mais..." : "Carregar mais Pokémon"}
                    </Button>
                )}
            </Section>
        </ThemeProvider>
    )
}

const Section = styled.section`
    background: ${(props) => props.theme.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    height: 100%;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(auto, 300px));
    height: auto;
    max-width: 80%;
    column-gap: 25px;
    row-gap: 30px;
    background-color: ${(props) => props.theme.card};
    padding: 20px;
    margin: 30px;
    border-radius: 6px;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #c7cbd1;
    border-radius: 15px;
    padding: 20px;
    color: #000;
    transition: all 0.3s ease;
    &:hover {
       transform: translateY(-5px);
    } 
`

const Img = styled.img`
    width: 135px;
    height: 150px;
    margin-bottom: 15px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-transform: capitalize;
    font-family: 'lato', sans-serif;
    gap: 10px;
`

const Title = styled.h3`
    font-size: 25px;
    letter-spacing: 2px;
`

const Type = styled.p`
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 600;
`

const Load = styled.div`
    background-color: #0f172a;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 90vh;
`