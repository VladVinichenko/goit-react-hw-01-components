// import propTypes from "prop-types";
import s from './Profile.module.css'
const Profile = () => {
  return (
    <div className={s.profile}>
      <div className="s.description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          className="s.avatar"
        />
        <p className="s.name">Petra Marica</p>
        <p className="s.tag">@pmarica</p>
        <p className="s.location">Salvador, Brasil</p>
      </div>

      <ul className="s.stats">
        <li>
          <span className="s.label">Followers</span>
          <span className="s.quantity">1000</span>
        </li>
        <li>
          <span className="s.label">Views</span>
          <span className="s.quantity">2000</span>
        </li>
        <li>
          <span className="s.label">Likes</span>
          <span className="s.quantity">3000</span>
        </li>
      </ul>
    </div>
  )
}

export default Profile