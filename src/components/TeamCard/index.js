import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {information} = props
  const {id, name, teamImageUrl} = information
  return (
    <Link to={`/team-matches/${id}`}>
      <li>
        <img src={teamImageUrl} alt={name} />
        <p className="heading1">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
