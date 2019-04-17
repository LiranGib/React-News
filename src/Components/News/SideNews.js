import React, {Component} from 'react';
import SingleSide from './SingleSide';
import axios from 'axios';

class SideNews extends Component {

    constructor(props) {
        super(props)
        this.state ={
            sideNews: []
        }
    }
    componentDidMount(){
        const url = 
            'https://newsapi.org/v2/top-headlines?country=us&apiKey=b3b5c70300cc47058190a5fddc9e6687'
            
        axios.get(url)
            .then((res) => {
                this.setState({
                    sideNews: res.data.articles
                })
                console.log(this.state.sideNews)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderItems() {
        return this.state.sideNews.map((item ,index) => 
            <SingleSide key={index} item = {item} />   
        )
    }
    render(){
        return(
            <div>
                <div className="sideNews-list">
                    <div className="sideNews-list_wrapper" >
                        <h1 className="sideNews-header">Top headlines</h1>
                        {this.renderItems()}
                    </div>
                </div>
            </div>
        )
    }
}

export default SideNews;