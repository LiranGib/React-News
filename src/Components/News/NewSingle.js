import React from 'react';

const NewSingle = ({item}) => (

    <div className="news-list">
        <div className = "news-list-wraper" >
            <div className ="news-list-tile">
                <img src={item.urlToImage} alt="News"/>
                <div className="news-list-title">{item.title}</div>
                <div className="news-list-description">{item.description}</div>
            </div>
        </div> 
    </div>
  
       
);

export default NewSingle;
