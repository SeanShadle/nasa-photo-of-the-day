import React from 'react'
import styled from 'styled-components'
import DatePicker from './DatePicker'
import Button from "@material-ui/core/Button";

export default function Title({date, setDate, title}){
    return (
        <TitleDiv>
            <PageTitle>NASA photo of the day</PageTitle>
            <SpanStyle>Date: </SpanStyle><DatePicker date={date} setDate={setDate} />
            <PictureTitle>"{title}"</PictureTitle>
                {/* <Button onclick="buttonClick" variant="contained" color="primary">
      Select Date
    </Button> */}
        </TitleDiv>
    )
}

const TitleDiv = styled.div`
    display: flex;
    height: 12rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;
`

const PageTitle = styled.h1`
    color: white;
    font-size: 2.5rem;
    padding-top: 3rem;
`

const PictureTitle = styled.h2`
    color: white;
`
const SpanStyle = styled.span`
    color: white;
    font-size: 1.3rem;
`
