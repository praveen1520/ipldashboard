import {Component} from 'react'
import Loader from 'react-loader-spinner'
import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/'
class TeamMatches extends Component {
  state = {teamdata: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  renderRecentMatchesList = () => {
    const {teamdata} = this.state
    const {recentMatches} = teamdata
    return (
      <ul>
        {recentMatches.map(recentMatch => (
          <MatchCard matchData={recentMatch} key={recentMatch.id} />
        ))}
      </ul>
    )
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    venue: data.venue,
    date: data.date,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    sedondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  renderTeamMatches = () => {
    const {teamdata} = this.state
    const {bannerUrl, latestMatch} = teamdata
    return (
      <div>
        <img src={bannerUrl} alt="team banner" />
        <LatestMatch latestMatch={latestMatch} />
        {this.renderRecentMatchesList()}
      </div>
    )
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`${teamMatchesApiUrl}${id}`)
    const data = await response.json()

    const updatedData = {
      bannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachmatch =>
        this.getFormattedData(eachmatch),
      ),
    }
    this.setState({teamdata: updatedData, isLoading: false})
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          this.renderTeamMatches()
        )}
      </div>
    )
  }
}

export default TeamMatches
