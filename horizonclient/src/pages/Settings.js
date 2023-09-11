// Settings.js
import React, { useState } from 'react';

function Settings() {
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSaveChanges = () => {
    // Handle saving the changes here.
    // You might want to make API calls or other operations.
    console.log("Changes saved.");
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-5">User Settings</h2>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Profile Picture</label>
          <input type="file" onChange={e => setProfilePic(e.target.files[0])} />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Username</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter your username"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border p-2 w-full"
            placeholder="Enter new password"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            className="border p-2 w-full"
            placeholder="Confirm new password"
          />
        </div>

        <div className="text-right">
          <button
            onClick={handleSaveChanges}
            className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default Settings;
