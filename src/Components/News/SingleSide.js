import React from 'react'; 

const SingleSide = ({item}) => (

    <div className ="news-list_col news-tile">
        <div className="news-tile_figure">
            <img src={item.urlToImage} alt="News"/>
        </div>
        <div className="news-list_title">
            {item.title}
        </div>
        <a href = {item.url}>
            <div className="news-list_button">Full Article</div>
        </a>
    </div>
);

export default SingleSide;
