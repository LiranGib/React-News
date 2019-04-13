import React, {Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component {

    constructor(props) {
        super(props)
        this.state ={
            news: []
        }
    }
    componentDidMount(){
        const url = 'https://newsapi.org/v2/top-headlines?sources=google-news-is&apiKey=b3b5c70300cc47058190a5fddc9e6687'

        fetch(url)
            .then((res) =>{
                return res.json()
            })
            .then((data) => {
                this.setState ({
                    news: data.articles
                })
            })
            .catch((err) => console.log(err))

    }

    renderItems() {
        return this.state.news.map((item ,index) => 
            <NewSingle key={index} item = {item} />   //passing the props to NewSingle component via "item = {item}" and rendering accordingly to NewSingle
        )
    }
    render(){
        return(
            <ul>
                {this.renderItems()}
            </ul>
        )
    }
}

export default News;