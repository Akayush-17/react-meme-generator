import memesData from "./memesData"
import {useState} from 'react'





function Form(){

    // const [memeImage, showmemeImage] = useState("http://i.imgflip.com/1bij.jpg")
    const [memes,setMemes]=useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"

    })
    const [allMemeImages, setAllMemeImages]=useState(memesData)

     
   function getMemeImage(){
    const memesArray=allMemeImages.data.memes
    const randomNumber=Math.floor(Math.random() * memesArray.length)
    const url= (memesArray[randomNumber].url)
    setMemes(prevMemes=> {
        return{
            ...prevMemes,
            randomImage:url
        }
    })
    
   }

    return(
        <div className="form-com">
            <div>
                <div className="input-wrapper">
                <input type="text" placeholder="Top Text"></input>
                <input type="text" placeholder="Bottom Text"></input>
                </div>
                <button type="submit" onClick={getMemeImage} className="btn1">Get A New Meme Image </button>
                <img  className="memeimage" src={memes.randomImage} ></img>
            </div>
            
        </div>
    )
}

export default Form 