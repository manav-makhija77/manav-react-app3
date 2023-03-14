import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {
    let {title,desc,imageURL,newsurl,author,date,source}=this.props;
    return (
      <div>
        <div className="card my-4">
          <img src={imageURL==null?"https://www.financialexpress.com/wp-content/uploads/2023/03/Untitled-design-2-7.jpg":imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <h6><span className="badge bg-secondary">{source}</span></h6>
            <p className="card-text">{desc}...</p>
            <p className='card-text'>News By :{!author?"Unknown":author} on {new Date(date).toLocaleString()}</p>
            <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}
