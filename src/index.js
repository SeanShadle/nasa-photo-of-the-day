import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from 'styled-components'
import App from "./App";
import theme from "./Theme"
import './index.css'

export const BASE_URL = 'https://api.nasa.gov/planetary/apod'
export const API_KEY = 'ckOdodKqt8iSwhd4i1CmGtfeavuUd2LIpPymbjSy'

// ReactDOM.render(<App />, document.getElementById("root"));

render(
    <ThemeProvider theme = {theme}><App /></ThemeProvider>,
    document.querySelector('#root')
)

