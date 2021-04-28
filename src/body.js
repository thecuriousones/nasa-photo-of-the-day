import React, { useState } from 'react'

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
            <button onClick={hiddenPage}>{sunImg === true ? '👉🏾Click Me👈🏾' : '🌠Home🌠'}</button> <br/>
            <br/>
            {sunImg === true ? <img src={clickMeGif}/> : <img  onClick={hiddenPage} src={img}/> }
            {info === true ? null : <p>{description}</p>}
            {astroGif === true ? null : <img src={gif}/>}
        </div>
    )
};

export default Body