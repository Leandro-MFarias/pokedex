import styled from "styled-components"

export function Button(props) {
    return (
        <Btn className='btn' id='btn' {...props}/>
    )
}

const Btn = styled.button`
    background-color: #30a7d7;
    color: #ffffff; 
    padding: 16px 34px;
    margin-bottom: 10px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: hsl(197, 68%, 62%);
    }
`
