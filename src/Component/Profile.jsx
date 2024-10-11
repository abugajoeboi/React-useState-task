import React, { useState } from 'react';

const Profile = () => {
  // Step 3: Initialize state with an object containing name and age
  const [profile, setProfile] = useState({ name: '', age: '' });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      
      {/* Input fields to update name and age */}
      <form>
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleInputChange}
            placeholder="Enter name"
          />
        </div>
        <div>
          <label>Age: </label>
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleInputChange}
            placeholder="Enter age"
          />
        </div>
      </form>

      {/* Display the updated profile information */}
      <div>
        <h3>Updated Profile</h3>
        <p>Name: {profile.name}</p>
        <p>Age: {profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;
