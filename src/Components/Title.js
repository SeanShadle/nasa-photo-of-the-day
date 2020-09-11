import React from 'react'
import styled from 'styled-components'
import DatePicker from './DatePicker'

export default function Title({date, setDate, title}){
    return (
        <TitleDiv>
            <PageTitle><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/640px-NASA_Worm_logo.svg.png" alt="NASA logo">NASA photo of the day</PageTitle>
            <SpanStyle>Date: </SpanStyle><DatePicker date={date} setDate={setDate} />
            <PictureTitle>{title}</PictureTitle>
        </TitleDiv>
    )
}

const TitleDiv = styled.div`
    display: flex;
    background: rgb(2,0,36);
    background: linear-gradient(22deg, rgba(2,0,36,1) 10%, rgba(4,2,58,1) 54%, rgba(9,9,121,1) 94%);
    height: 12rem;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
`

const PageTitle = styled.h1`
    
    margin: 0;
    width: 100%;
    margin: 3rem 0;
`

const PictureTitle = styled.h2`
    color: white;
`
const SpanStyle = styled.span`
    color: white;
    font-size: 1.3rem;
`