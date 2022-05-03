import React, { Component } from 'react';
import { fetchNewsHeadlines, fetchNewsSources } from '../utils/newsApi';
import Options from './Options';
import Sources from './Sources';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      sources: [],
      next: false,
      options: {
        country: '',
        category: '',
        language: '',
      },
    };
  }

  componentDidMount() {
    fetchNewsHeadlines().then((articles) => this.setState({ articles }));
  }

  setCountry = (e) => {
    this.setState({
      options: {
        ...this.state.options,
        country: e.target.value,
      },
    });
  };
  setLanguage = (e) => {
    this.setState({
      options: {
        ...this.state.options,
        language: e.target.value,
      },
    });
  };
  setCategory = (e) => {
    this.setState({
      options: {
        ...this.state.options,
        category: e.target.value,
      },
    });
  };

  //will include later on
  // setSource = (e) => {
  //   this.setState({
  //     sources: Array.from(new Set(...this.state.sources, e.target.value)),
  //   });
  // };

  // handleNext = (e) => {
  //   e.preventDefault();
  //   fetchNewsSources(this.state.options).then((sources) =>
  //     this.setState({ sources, next: !this.state.next }),
  //   );
  // };

  handleNext = (e) => {
    e.preventDefault();
    fetchNewsHeadlines(this.state.options).then((articles) =>
      this.setState({ articles }),
    );
  };

  render() {
    return (
      <div className="Dashboard">
        <Options
          setCountry={this.setCountry}
          setCategory={this.setCategory}
          setLanguage={this.setLanguage}
          handleNext={this.handleNext}
        />
        {/* include it later 
        <Sources
          sources={this.state.sources}
          handleSubmit={this.handleSubmit}
        /> 
        */}

        <div className="news_headlines"></div>
      </div>
    );
  }
}
