import React from 'react'
import styled from 'styled-components'


const StyledPhoto = styled.img`
opacity: .5;
`

export default function Photo({url}){
    return <StyledPhoto src={url} alt="NASA photo of the day"/>
}