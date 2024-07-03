import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
   let {title, description, imageUrl, newsUrl,author, date} = this.props;
    return (
      <div>
          <div className="card">
          <img src={!imageUrl?"https://sportshub.cbsistatic.com/i/r/2024/06/25/8285b2ab-f385-47c7-a2d5-3d996e1b724e/thumbnail/1200x675/709dbe8138830227f08c94ede5601791/usatsi-22901377-1.jpg":imageUrl} className="card-img-top" alt="..."/>
           <div className="card-body">
               <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p clasName="card-text"><small className="text-muted">By {!author? "Unknown": author} on {date} </small></p>
              <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
            </div>
        </div>
    </div>
    )
  }
}

export default NewsItem