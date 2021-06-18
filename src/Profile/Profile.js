import React from 'react'
import PropTypes from "prop-types";

export default function Profile(props) {
    const handleName = e => {
        e.preventDefault();
        alert(props.fullname);
    };
    return (
        <div className="Profile">
            <div className="photo zoom">
                <img className="photo" src={props.children} alt="profile"></img>
            </div>
            <div className="fullname" onClick={handleName}>
                <span className="column">Full Name :</span>
                <h2 className="column">{props.fullname}</h2>
            </div>
            <div>
                <span className="column">Profession :</span>
                <h2 className="column">{props.profession}</h2>
            </div>
            <div>
                <span className="column">Bio :</span>
                <h2 className="column">{props.bio}</h2>
            </div>
        </div>
    )
}

Profile.defaultProps = {
    fullname: "Monkey D.Luffy",
    bio: "I Decided To Be Pirate King. I Don’t Care If I Die For It.",
    profession: "Saving the world",
    children: "https://cutewallpaper.org/21/luffy-profile-pic/Monkey-D-Luffy-YouTube.jpg"
};

Profile.propTypes ={
    fullname:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    children:PropTypes.element.isRequired
};