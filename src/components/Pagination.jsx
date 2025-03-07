import './pagination.css'
import Arrow from '../assets/Arrow.svg?react'

export default function Pagination(props) {
    let pageNumbers = [];

    for(let i = 1; i <= Math.ceil(props.totalPosts/props.blogsPerPage); i++) {
        pageNumbers.push(i)
    }

    const pages = pageNumbers.map((pageNumber, index) => (
        <button className={pageNumber == props.currentPage ? 'pagination-item active' : 'pagination-item'} key={index} onClick={() => props.setCurrentPage(pageNumber)}>{pageNumber}</button>
    ))

    return (
        <div className='pagination-wrapper'>
            <fieldset className='pagination'>                
                <button 
                    className='pagination-item' 
                    disabled={pageNumbers.length < 1 || props.currentPage == 1} 
                    onClick={() => props.setCurrentPage(prevPageNumber => prevPageNumber > 1 ? prevPageNumber - 1 : prevPageNumber)}>
                    {<Arrow />}
                    Previous
                </button>
                {pages}
                <button 
                    className='pagination-item' 
                    disabled={pageNumbers.length < 1 || props.currentPage == pageNumbers.length} 
                    onClick={() => props.setCurrentPage(prevPageNumber => prevPageNumber < pageNumbers.length ? prevPageNumber + 1 : prevPageNumber)}>
                    Next
                    {<Arrow />}
                </button>
            </fieldset>
        </div>
    )
}