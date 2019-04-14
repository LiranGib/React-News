import React from 'react';

const NewSingle = ({item}) => (

    <div className ="news-list_col news-tile">
        <div className="news-tile_wrapper">
            <div className ="">
                <img src={item.urlToImage} alt="News"/>
                <div className="news-list_title">{item.title}</div>
                <div className="news-list_description">{item.description}</div>
            </div>
        </div>
    </div>      
);

export default NewSingle;
