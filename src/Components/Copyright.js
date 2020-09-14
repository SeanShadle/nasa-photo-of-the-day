import React from 'react'
import styled from 'styled-components'

const StyledCopyright = styled.p`
    color: white;
    font-size: .75rem;
    margin: 0;
`


export default function Copyright({prop}){
    return <StyledCopyright>©{prop}</StyledCopyright>
}