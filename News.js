import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  static defaultProps = {
    pagesize: 6,
    category: 'general',
    country: 'in'
  }
  static propTypes = {
    pagesize: PropTypes.number,
    general: PropTypes.string,
    country: PropTypes.string,
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      loading: false,
      totalResults:0
    }
    document.title = `${this.capitalizeL(this.props.category)} -Manav News`;
  }

  capitalizeL = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async componentDidMount() {
    this.setState({ loading: true });
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    this.props.setProgress(50);
    let parse = await data.json();
    this.props.setProgress(70);
    this.setState({ articles: parse.articles, loading: false, totalResults: parse.totalResults });
    this.props.setProgress(100);

  }

  // next = async () => {
  //   this.setState({ loading: true });
  //   if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {
  //     this.setState({ loading: false });
  //   }
  //   else {

  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=303c8961d12d4e94819e417679dcd69e&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
  //     let data = await fetch(url);
  //     let parse = await data.json();
  //     this.setState({
  //       articles: parse.articles,
  //       page: this.state.page + 1,
  //       loading: false,
  //       totalResults: parse.totalResults
  //     })
  //   }
  // }
  // prev = async () => {
  //   this.setState({ loading: true });
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=303c8961d12d4e94819e417679dcd69e&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
  //   let data = await fetch(url);
  //   let parse = await data.json();
  //   this.setState({
  //     articles: parse.articles,
  //     page: this.state.page - 1,
  //     loading: false,
  //     totalResults: parse.totalResults
  //   })
  // }

  fetchMoreData = async () => {
     this.setState({page:this.state.page+1,loading:false});
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parse = await data.json();
    this.setState({ articles:this.state.articles.concat(parse.articles), loading: false, totalResults: parse.totalResults });

  };

  render() {
    return (
      <div className='my-5'>
        <h1 className='text-center'>Manav News - Today's Top Headlines on {this.capitalizeL(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
          <div className="container">

          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title == null ? "" : element.title} desc={element.description == null ? "Hey Manav" : element.description} imageURL={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}

          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="conteiner d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prev}> &larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark" onClick={this.next}>Next &rarr;</button>
        </div> */}
      </div>
    )
  }
}
