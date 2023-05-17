import Trollface from "../assets/Troll Face.png"
import Form from "./form"

function Header(){
    return(
        <div className="Card">
            <div className="header">
                <div className="wrapper">
                <img src={Trollface} className="timg"></img>
                <h3 className="title">Meme Generator</h3>
                </div>
                <h4>React Course Project-3</h4>
                
                
                

            </div>
            <Form/>
            
        </div>
    )
}

export default Header