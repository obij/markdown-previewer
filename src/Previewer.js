import React from 'react'
import marked from "marked";

const Previewer = (props) => {
    var markdown= marked(props.markdown, {breaks: true});
    return (
        <div>
         <div className="toolbar2"><bold><h3 className="text-center">Previewer</h3></bold></div>
         <div id= "preview" dangerouslySetInnerHTML={{__html: markdown}} />
        </div> 
    )
}

export default Previewer


