import React, { useState } from 'react';

const EditPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      const formData = new FormData();
      formData.append('title', title);
      formData.append('content', content);
      if(image) formData.append('image', image);

      try {
          // Assuming your API endpoint is /api/posts
          // const response = await axios.post('/api/posts', formData);
          setFeedback('Post created successfully!');
          
          setTitle('');
          setContent('');
          setImage(null);
      } catch (error) {
          setFeedback('Error creating post. Please try again.');
      }
  }

    return (
        <div className="container mx-auto mt-10 p-4 md:p-8 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Edit Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Title Input */}
                <div>
                    <label htmlFor="title" className="block mb-2 font-medium text-gray-600">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-3 border rounded-md"
                        placeholder="Enter post title"
                        required
                    />
                </div>

                {/* Content Textarea */}
                <div>
                    <label htmlFor="content" className="block mb-2 font-medium text-gray-600">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows="5"
                        className="w-full p-3 border rounded-md"
                        placeholder="Enter your post content"
                        required
                    ></textarea>
                </div>

                {/* Image Upload */}
                <div>
                    <label htmlFor="image" className="block mb-2 font-medium text-gray-600">Change Image</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={(e) => setImage(e.target.files[0])}
                        className="w-full p-2 border rounded-md"
                    />
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
                    >
                        Edit Post 
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditPost;
