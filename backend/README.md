# 

# **🌍 BlogHorizon Social Media Application Backend**

A comprehensive backend solution for **BlogHorizon** social media applications. Designed with scalability in mind, this backend seamlessly handles user authentication, dynamic post creation, intuitive comment management, and robust image handling.

## **🚀 Features**

- **JWT Authentication**: Secure authentication using JSON Web Tokens.
- **Image Handling**: Upload, retrieve, and delete images efficiently.
- **Error Handling**: A middleware that provides detailed error feedback, ensuring robustness.
- **Validation**: Utility functions to validate user input, ensuring data integrity.

## **🛠️ Installation & Set Up**

1. **Clone the repository**
    
    ```bash
    git clone https://github.com/chiemezie1/BlogHorizon.git
    ```
    
2. **Navigate to the project directory**
    
    ```bash
    cd backend
    ```
    
3. **Install dependencies**
    
    ```bash
    npm install
    ```
    
4. **Environment Variables**: Ensure you have the **`.env`** file set up with:
    - **`MONGO_URI`**: Your MongoDB connection string.
    - **`JWT_SECRET`**: A secret passphrase for JWT.
5. **Start the development server**
    
    ```bash
    nodemon server.js
    ```
    

You should now have the API running on **`http://localhost:4000`**.

## **📂 Project Structure**

```
backend/
├── node_modules/
├── controllers/
│   ├── userController.js
│   ├── postController.js
│   ├── commentController.js
│   └── imageController.js
├── models/
│   ├── userModel.js
│   ├── postModel.js
│   ├── commentModel.js
│   └── imageModel.js
├── routes/
│   ├── userRoutes.js
│   ├── postRoutes.js
│   ├── commentRoutes.js
│   └── imageRoutes.js
├── config/
│   └── db.js
├── middleware/
│   ├── auth.js
│   └── errorHandling.js
├── utils/
│   └── validation.js
├── .env
├── .gitignore
├── package.json
├── README.md
└── server.js
```

## **🔗 API Documentation**

### **Users**

- Register: **`POST /register`**
- Login: **`POST /login`**
- Get Profile: **`GET /profile`**
- Update Profile: **`PUT /profile`**
- Delete Profile: **`DELETE /profile`**

### **Posts**

### **Comments**

### **Images**

- Upload: **`POST /image/upload`**
- Retrieve: **`GET /image/:id`**
- Delete: **`DELETE /image/:id`**

## **⛑️ Error Management**

The backend uses a dedicated error-handling middleware found in **`errorHandling.js`**. This guarantees uniformity in error responses and aids in debugging.

## **🤝 Contributing**

Contributions to enhance the capabilities of this backend is welcomed. Whether it's fixing bugs, improving documentation, or proposing new features.

## **📄 License**

This project is licensed under the MIT License. For more details, see our **[LICENSE](https://chat.openai.com/c/LINK_TO_LICENSE)** file.