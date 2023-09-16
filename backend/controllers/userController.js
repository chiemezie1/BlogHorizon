const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const UserController = {
    register: async (req, res) => {
        try {
            const existingUser = await User.findOne({ email: req.body.email });
            if (existingUser) {
                return res.status(400).json({ error: "User already exists" });
            }

            const user = new User(req.body);
            const savedUser = await user.save();

            savedUser.password = undefined;
            res.status(201).json(savedUser);
        } catch (error) {
            res.status(500).json({ error: "Registration failed" });
        }
    },

    login: async (req, res) => {
        try {
            const user = await User.findOne({
                $or: [
                    { email: req.body.username },
                    { username: req.body.username },
                ],
            });

            if (!user) {
                return res.status(400).json({ error: "User not found" });
            }

            const isPasswordValid = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!isPasswordValid) {
                return res.status(400).json({ error: "Invalid password" });
            }

            // Generate JWT token
            const token = jwt.sign({ id: user._id }, secret, { expiresIn: "1h" });

            user.password = undefined;
            res.cookie('token', token, { httpOnly: true, maxAge: 3600000, secure: true }); 
            res.json({ user });
        } catch (error) {
            res.status(500).json({ error: "Login failed" });
        }
    },

    getProfile: async (req, res) => {
        try {
          // After decoding the JWT, the user's ID is on req.user._id
          const user = await User.findById(req.user._id).select('-password');
      
          if (!user) {
            console.log('User not found.');
            return res.status(404).json({ error: "User not found" });
          }
      
          res.json(user);
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: "Failed to fetch profile" });
        }
      },
      
    

    updateProfile: async (req, res) => {
        try {
            const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
                new: true,
            });
            updatedUser.password = undefined;
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: "Failed to update profile" });
        }
    },

    deleteProfile: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.user._id);
            res.json({ message: "User deleted successfully" });
        } catch (error) {
            res.status(500).json({ error: "Failed to delete profile" });
        }
    },
};

module.exports = UserController;
