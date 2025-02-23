import './pagination.css'
import arrow from '../assets/Arrow.svg'

export default function Pagination(props) {
    let pageNumbers = [];

    for(let i = 1; i <= Math.ceil(props.totalPosts/props.blogsPerPage); i++) {
        pageNumbers.push(i)
    }

    const pages = pageNumbers.map((pageNumber, index) => (
        <button className={pageNumber == props.currentPage ? 'pagination-item active' : 'pagination-item'} key={index} onClick={() => props.setCurrentPage(pageNumber)}>{pageNumber}</button>
    ))
    console.log(pages)
    console.log(props)
    return (
        <div className='pagination-wrapper'>
            <fieldset className='pagination'>                
                <button className='pagination-item' disabled={pageNumbers.length < 10} onClick={() => props.setCurrentPage(prevPageNumber => prevPageNumber > 1 ? prevPageNumber - 1 : prevPageNumber)}><img src={arrow} alt="left-arrow" />Previous</button>
                {pages}
                <button className='pagination-item' disabled={pageNumbers.length < 10} onClick={() => props.setCurrentPage(prevPageNumber => prevPageNumber < pageNumbers.length ? prevPageNumber + 1 : prevPageNumber)}>Next<img src={arrow} alt="right-arrow" /></button>
            </fieldset>
        </div>
    )
}