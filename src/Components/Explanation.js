import React from 'react'
import styled from 'styled-components'

const StyledExplanation = styled.p`
    color: blue;
`

export default function Explanation({prop}){
return <StyledExplanation><p>{prop}</p></StyledExplanation>
}