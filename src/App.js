import React, {useState, useEffect} from "react";
import axios from 'axios'
import {API_KEY, BASE_URL} from "./index"
import Title from "./Components/Title"
import Photo from "./Components/Photo"
import Explanation from "./Components/Explanation"
import Copyright from "./Components/Copyright"
import formatDate from './Components/Formatdate'
import styled from "styled-components"


export default function App() {
  const [photoURL, setPhotoURL] = useState('')
  const [date, setDate] = useState('')
  const [copyright, setCopyright] = useState('')
  const [title, setTitle] = useState(null)
  const [explanation, setExplanation] = useState(null)

  useEffect(() => {
    axios
    .get(`${BASE_URL}?api_key=${API_KEY}${date ? `&date=${formatDate(date)}` : ''}`)
    .then((res) => {
      setPhotoURL(res.data.url)
      setCopyright(res.data.copyright)
      setTitle(res.data.title)
      setExplanation(res.data.explanation)
    })
    .catch(err => {
      console.log(err)
    })
    }, [date]) 
    // ^^ include date because it wouldn't update when date changes otherwise 
  return (
    <StyledApp>
      <Title date={date} setDate={setDate} title={title} />
      <div className="photo-container">
        <Photo url={photoURL}/>
        {/* Line 35 is where url comes from on line 3 on Photo.js */}
      </div>
      <div className = "info-container">
        <Explanation prop = {explanation}/>
        <Copyright prop = {copyright}/>
      </div>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  text-align: center;
  background-color: #3a243b;
`
