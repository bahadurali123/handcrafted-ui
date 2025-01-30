import "../../styles/Others/Pagination.css"
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="pagination-container">
            <button onClick={handlePrevious} disabled={currentPage === 1}><i className="bi bi-caret-left-fill"></i></button>
            <span><button>{currentPage}</button><button><i className="bi bi-three-dots"></i></button><button>{totalPages}</button></span>
            <button onClick={handleNext} disabled={currentPage === totalPages}><i className="bi bi-caret-right-fill"></i></button>
        </div>
    );
};

export default Pagination;
