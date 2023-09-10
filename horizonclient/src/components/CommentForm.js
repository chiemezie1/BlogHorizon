import React, { useState } from 'react';

function CommentForm({ onPostComment }) {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      onPostComment(comment);
      setComment('');
    }
  };

  return (
    <div className="rounded-md shadow-md bg-white p-4">
      <form onSubmit={handleSubmit} className='flex gap-1 justify-start items-center'>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Type your comment here..."
          rows="1"
          className="w-full md:w-3/5 p-1 rounded-md border border-gray-300 focus:outline-none focus:border-gray-700"
        ></textarea>
        <div className="mt-4 flex justify-end">
          <button
            type="submit"
            className="bg-gray-600 text-white text-sm px-2 py-1 rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700 mb-3"
          >
          Comment
          </button>
        </div>
      </form>
    </div>
  );
}

export default CommentForm;
