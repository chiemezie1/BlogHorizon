import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUploader from "../components/ImageUploader";

function EditProfile() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    introduction: "",
    location: "",
    whatsapp: "",
    twitterHandle: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data, e.g., by making an API call
  };
  const handleImageSelected = (file) => {
    //  set the file in the state here, or directly upload to a server.
  };

  return (
    <div className="flex items-center justify-center mt-5 ">
      <div className="bg-white m-2 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-md w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>

        <ImageUploader
          onImageSelected={handleImageSelected}
          apiUrl="https://your-api-url"
        />
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Username"
          />
          <input
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="First Name"
          />
          <input
            name="lastname"
            value={formData.lastname}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Last Name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Email"
          />
          <input
            name="introduction"
            value={formData.introduction}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Bio Intro"
          />
          <input
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="Location"
          />
          <input
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="WhatsApp Number"
          />
          <input
            name="twitterHandle"
            value={formData.twitterHandle}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
            placeholder="X Handle"
          />

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-300 hover:bg-gray-400 text-black p-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
