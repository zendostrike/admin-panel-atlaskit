import React from "react";
import PropTypes from "prop-types";

const Profile = ({ user }) => (
  <div>
    <h2>
      {`Perfil de ${user.name}`}
    </h2>
    <p>
Esta es la página del perfil
    </p>
  </div>
);

Profile.defaultProps = {
  user: {
    name: "Gian"
  }
};

Profile.propTypes = {
  user: PropTypes.shape({})
};

export default Profile;
