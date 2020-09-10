import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import {API_KEY, BASE_URL} from "./index"
import Photo from "./Photo"
import DatePicker from './DatePicker'


export default function App() {
  const [photoURL, setPhotoURL] = useState('')
  const [date, setDate] = useState('')
  const [copyright, setCopyright] = useState('')
  const [title, setTitle] = useState(null)
  const [explanation, setExplanation] = useState(null)

  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

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
    <div className="App">
      <div className = "title-container">
        
        <h1>NASA photo of the day</h1>
        <span>Date: </span><DatePicker date={date} setDate={setDate} />
        <h2>{title}</h2>
      </div>
      <div className="photo-container">
        <Photo url={photoURL}/> 
        {/* Line 35 is where url comes from on line 3 on Photo.js */}
      </div>
      <div className = "info-container">
        <p>{explanation}</p>
        <p><b>Copyright:</b> {copyright}©</p>
      </div>
    </div>
  );
}