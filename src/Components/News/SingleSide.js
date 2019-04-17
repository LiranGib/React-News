import React from 'react'; 

const SingleSide = ({item}) => (

    <div className ="sideNews-list_col news-tile">
        <div className="news-list_title">
            {item.title}
        </div>
        <a href = {item.url}>
            <div className="sideNews-list_button">Full Article</div>
        </a>
    </div>
);

export default SingleSide;
