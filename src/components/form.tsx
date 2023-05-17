import memesData from "./memesData"
import {useState} from 'react'





function Form(){

    const [memeImage, showmemeImage] = useState("")

     
   function getMemeImage(){
    const memesArray=memesData.data.memes
    const randomNumber=Math.floor(Math.random() * memesArray.length)
    showmemeImage(memesArray[randomNumber].url)
    
   }

    return(
        <div className="form-com">
            <div>
                <div className="input-wrapper">
                <input type="text" placeholder="Top Text"></input>
                <input type="text" placeholder="Bottom Text"></input>
                </div>
                <button type="submit" onClick={getMemeImage} className="btn1">Get A New Meme Image </button>
                <img  className="memeimage" src={memeImage} ></img>
            </div>
            
        </div>
    )
}

export default Form 