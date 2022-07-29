export default function Footer({image,titlemovie,showtime,day,hours}){

    return(
    <div className="footer-container">
        <div className="selected-movie-box">
            <div>
                <img src={image} alt=""/>
            </div>
        </div>
        <div className='title-selected-movie'>
            <div>{titlemovie}</div>
            <div className='title-selected-movie-box'>{showtime}</div>
            <div className='title-selected-movie-box'>{day} {hours}</div>

        </div>
    </div>
    )
}