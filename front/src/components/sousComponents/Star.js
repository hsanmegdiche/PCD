import React from 'react'

function Star(props) {
    return (
        <div style={{alignItems:"center",gap:"1rem",width:"100%", display:"flex"}}>
            <div style={{flexGrow:"1",backgroundColor:"grey",height:"1px"}}/><p style={{fontFamily:"Candara"}}>{props.texte}</p>
            <div style={{flexGrow:"1",backgroundColor:"grey",height:"1px"}}/>
        </div>
    )
}

export default Star
