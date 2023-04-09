import './general.css'

function WriteMessage()
{
    return (
        <div className='background'>
            <h1 className='header2'>Write your message:</h1>
            <div className='center'>
                <textarea className="txtarea"></textarea>
                <div className='sidebar'>
                    <button className='btn center sidebarBtn'>Upload image</button>
                    <img className="myImage" src={require("./cat.jpg")} alt="emptyInput"></img>
                    <button className='btn center sidebarBtn'>Save Memory</button>
                </div>
            </div>
        </div>
    );
}

function UploadImage()
{
    
}

export default WriteMessage