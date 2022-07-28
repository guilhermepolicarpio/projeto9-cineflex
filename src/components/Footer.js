export default function Footer({image,titlemovie}){

    return(
    <div className="footer-container">
        <div className="selected-movie-box">
            <div>
                <img src={image} alt=""/>
            </div>
        </div>
        <div className='title-selected-movie'>
            <div className='title'>{titlemovie}</div>
        </div>
    </div>
    )
}