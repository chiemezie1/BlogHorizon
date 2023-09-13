const createError = require('http-errors');

module.exports = {
    // This middleware is for catching 404 errors
    notFound: (req, res, next) => {
        next(createError(404, 'Resource not found'));
    },

    // This middleware handles all errors thrown in the application
    generalError: (err, req, res, next) => {
        // Display error information only in non-production environments
        const errorDetails = req.app.get('env') === 'development' ? err : {};

        // Set the status (default to 500 if it's not an HTTP error or if it's an unknown error)
        const status = err.status || 500;

        // Log the error (you can integrate more sophisticated logging mechanisms like 'winston')
        console.error(err.stack);

        // Send the error response
        res.status(status).json({
            message: err.message,
            error: errorDetails
        });
    }
};