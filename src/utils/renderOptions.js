import React from "react";

export const renderOptions = (images) => {
    images = images.edges;
    return {
        renderNode : {
          "embedded-asset-block":(node)=> {
            let file
            for (let i = 0; i < images.length; i ++){
              if (images[i].node.contentful_id === node.data.target.sys.contentful_id){
                file = images[i].node
                console.log(file);
              }
            }
            console.log(file);
            return (<div className="image-in-article" ><img src={file?.file?.url}/> <p>{file?.description}</p></div>)
          }
        }
      }

}