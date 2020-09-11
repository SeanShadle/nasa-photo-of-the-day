import React from 'react'
import styled from 'styled-components'

const StyledExplanation = styled.p`
    color: white;
    width: 75vw;
    font-size: 1.25rem;
    line-height: 1.5;
    margin-left: 12.5vw;
    padding: 3rem 0;
`

export default function Explanation({prop}){
return <StyledExplanation><p>{prop}</p></StyledExplanation>
}