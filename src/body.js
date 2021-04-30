import React, { useState } from 'react'
import styled from 'styled-components'

function Body (props) {
    const {data} = props;
    const gif = 'https://media.giphy.com/media/JszKEk8vNGtCXehi7w/giphy.gif'
    const clickMeGif = 'https://media.giphy.com/media/KBJTi1lxDGrfPsl8Hf/giphy.gif'
    const img = data.url
    const description = data.explanation

    const [sunImg, setSunImg] = useState(true)
    const [info, setInfo] = useState(true)
    const [astroGif, setAstroGif] = useState(true);

    const hiddenPage = () => {
        setSunImg(!sunImg)
        setInfo(!info)
        setAstroGif(!astroGif)
        
    }

    return (
        <div>
            <Button onClick={hiddenPage}>{sunImg === true ? '👉🏾Click Me👈🏾' : '🌠Home🌠'}</Button> <br/>
            <br/>
            {sunImg === true ? <Image1 src={clickMeGif}/> : <Image2  onClick={hiddenPage} src={img}/> }
            {info === true ? null : <Text>{description}</Text>}
            {astroGif === true ? null : <img src={gif}/>}
            {astroGif === true ? <h3></h3> : <h3>Fun Fact: I've been there (⌐■◡■)</h3>}
        </div>
    )
};



const Button = styled.button`
border-radius: .5em;
border: 2px solid black;
font-weight: 600;
margin-top: .3rem;

&:hover {
    background-color: gold;
  }`


const Image1 = styled.img`
    border-radius: 30px;
    padding: 20px;
    width: 700px;
    height: 550px;
    margin: -1.5rem;`
    

const Image2 = styled.img`
    border-radius: 30px;
    padding: 20px;
    width: 700px;
    height: 550px;`

const Text = styled.p`
border: 2px dotted gray;
margin-left: 20rem;
margin-right: 20rem;
background-color: #ddccff;
font-weight: 600`

export default Body