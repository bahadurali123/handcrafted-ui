// Centralized error handling
const handleError = (error) => {
    // console.log('API Error:', error);

    // Check if the error is a 400 Bad Request
    if (error.response && error.response.status === 400) {
        window.location.href = '/error/400';
    }
    if (error.response && error.response.status === 401) {
        window.location.href = '/error/401';
    }
    if (error.response && error.response.status === 403) {
        window.location.href = '/error/403';
    }
    if (error.response && error.response.status === 404) {
        window.location.href = '/error/404';
    }
    if (error.response && error.response.status === 500) {
        window.location.href = '/error/500';
    }
    if (error.response && error.response.status === 503) {
        window.location.href = '/error/503';
    }
}
export default handleError;