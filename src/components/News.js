import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
          "source": {
            "id": null,
            "name": "CBS Sports"
          },
          "author": "",
          "title": "2024 NBA Mock Draft: Dalton Knecht surges up to No. 6, Bronny James goes to Lakers late in second round - CBS Sports",
          "description": "Zaccharie Risacher edges Alex Carr for the top spot in Kyle Boone's two-round mock draft",
          "url": "https://www.cbssports.com/nba/news/2024-nba-mock-draft-dalton-knecht-surges-up-to-no-6-bronny-james-goes-to-lakers-late-in-second-round/",
          "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/06/25/8285b2ab-f385-47c7-a2d5-3d996e1b724e/thumbnail/1200x675/709dbe8138830227f08c94ede5601791/usatsi-22901377-1.jpg",
          "publishedAt": "2024-06-26T06:18:00Z",
          "content": "Months and months of speculation, analyzing (and overanalyzing) have all led to this. The 2024 NBA Draft will begin Wednesday night, where all the questions we have -- about who goes No. 1, about whe… [+814 chars]"
        },
        {
          "source": {
            "id": "fox-news",
            "name": "Fox News"
          },
          "author": "Jamie Joseph",
          "title": "John Curtis wins highly-contested primary Utah challenge to replace Sen. Mitt Romney - Fox News",
          "description": "John Curtis emerged as the Republican champion to face off against Democratic nominee Caroline Gleich in Utah's open Senate race to replace Sen. Mitt Romney.",
          "url": "https://www.foxnews.com/politics/john-curtis-wins-highly-contested-primary-utah-challenge-replace-sen-mitt-romney",
          "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/06/John-Curtis-trent-staggs.jpg",
          "publishedAt": "2024-06-26T02:30:00Z",
          "content": "John Curtis won Tuesday night's primary challenge in Utah, taking one step closer to potentially replacing retiring moderate Republican Sen. Mitt Romney.\r\nCurtis was leading with 52% of the vote when… [+1906 chars]"
        }
      ]
    constructor(){
        super();
        console.log("Hello i am i constructor from news component");
        this.state={
            articles: this.articles,
            loading: false
        }
    }

  render() {
    return (
      <div className="container my-3">
        <h2>newsApp top headlines</h2>
        <div className= "row">
        {this.state.articles.map((element)=>{
          return <div className="col-md-4" key={element.url}>
           <NewsItem  title={element.title.slice(0,45)} description={element.description.slice(0,100)} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div>

        })}
            
    
        </div>
          
        
        
        
      </div>
    )
  }
}

export default News