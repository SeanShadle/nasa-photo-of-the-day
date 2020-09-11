import React from 'react'
import styled from 'styled-components'

const StyledCopyright = styled.p`
    color: red;
`


export default function Copyright({prop}){
    return <StyledCopyright><p>©{prop}</p></StyledCopyright>
}