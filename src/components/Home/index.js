import {Component} from 'react'
import './index.css'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {initaildata: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const formatted = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({initaildata: formatted, isLoading: false})
  }

  render() {
    const {initaildata, isLoading} = this.state
    return (
      <div className="back1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
        />
        <h1 className="heading">IPL Dashboard</h1>
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bff" height={50} width={50} />
          </div>
        ) : (
          <ul>
            {initaildata.map(item => (
              <TeamCard key={item.id} information={item} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default Home
