import './index.css'
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch
    return (
      <div>
        <h1>Lates Match</h1>
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
        <div>
          <p>First Innings</p>
          <p>{firstInnings}</p>
          <p>second Innings</p>
          <p>{secondInnings}</p>
          <p>man of the match</p>
          <p>{manOfTheMatch}</p>
          <p>umpires</p>
          <p>{umpires}</p>
        </div>
      </div>
    )
  }
}
export default LatestMatch
