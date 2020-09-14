import React from 'react'
import styled from 'styled-components'


const StyledPhoto = styled.img`
    max-height: 75vh;
    overflow: none;
    margin-top: 3px;
`

export default function Photo({url}){
    return <StyledPhoto src={url} alt="NASA photo of the day"/>
}