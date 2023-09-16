const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET;

function ensureAuthenticated(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        console.log('No token, authorization denied');
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, secret);
        req.user = { _id: decoded.id };
        next();
    } catch (error) {
        console.log('Token verification error:', error);
        res.status(401).json({ message: 'Token is not valid' });
    }
}

module.exports = ensureAuthenticated;
