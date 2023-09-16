import React, { useState, useEffect } from 'react';

function ImageUploader({ onImageSelected, initialImageUrl, apiUrl }) {
    const [currentImage, setCurrentImage] = useState(initialImageUrl);
    const [imagePreview, setImagePreview] = useState(null);

    useEffect(() => {
        // Fetch the current image URL when the component mounts
        const fetchCurrentImage = async () => {
            try {
                const response = await fetch(apiUrl);
                const data = await response.json();
                setCurrentImage(data.imageUrl);
            } catch (error) {
                console.error("Error fetching the image:", error);
            }
        };

        fetchCurrentImage();
    }, [apiUrl]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
            if (onImageSelected) {
                onImageSelected(file);
            }
        }
    };

    const handleSaveImage = async () => {
        const formData = new FormData();
        formData.append('image', imagePreview);

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();

            // Update the current image to the newly uploaded image
            setCurrentImage(data.imageUrl);
        } catch (error) {
            console.error("Error uploading the image:", error);
        }
    };

    return (
        <div className="flex flex-col items-center mb-4">
            <img src={currentImage || imagePreview} alt="profile" className=" rounded-full border-2 border-gray-300  w-32 h-32 object-cover" />

            <label className="text-sm font-medium text-gray-600" htmlFor="imageUpload">
                Upload Image
            </label>





            <div className="mt-2 flex flex-row items-center justify-start gap-2">
               <input
                type="file"
                id="imageUpload"
                name="imageUpload"
                accept="image/*"
                onChange={handleImageChange}
                className="m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary"
            />

            {imagePreview && (
                <button onClick={handleSaveImage} className="bg-blue-500 text-white px-[0.32rem] rounded">
                    Save
                </button>
            )} 
            </div>
            
        </div>
    );
}

export default ImageUploader;
