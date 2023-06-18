import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    initialId: languageFiltersData[0].language,
    isLoading: true,
    list: [],
    errDisplay: false,
  }

  componentDidMount() {
    this.getRepoList()
  }

  getRepoList = async () => {
    const {initialId} = this.state
    this.setState({isLoading: true})

    const url = `https://apis.ccbp.in/popular-repos?language=${initialId}`
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const updatedList = data.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))

      this.setState({list: updatedList, isLoading: false})
    } else {
      this.setState({errDisplay: true, isLoading: false})
    }
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  onClickLanguage = language => {
    this.setState({initialId: language}, this.getRepoList)
  }

  render() {
    const {initialId, isLoading, list, errDisplay} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        <ul className="list-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              item={each}
              key={each.id}
              onClickLanguage={this.onClickLanguage}
              isTrueId={initialId === each.language}
            />
          ))}
        </ul>

        <div className="container">
          {!isLoading ? (
            <ul className="cont">
              {list.map(each => (
                <RepositoryItem eachItem={each} key={each.id} />
              ))}
            </ul>
          ) : (
            this.renderLoader()
          )}
        </div>

        {errDisplay && (
          <img
            src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
            alt="failure view"
            className="view"
          />
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
