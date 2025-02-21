import './pagination.css'
import arrow from '../assets/arrow.svg'

export default function Pagination() {
    return (
        <nav className='pagination-wrapper'>
            <ul className='pagination'>                
                <li className='pagination-item'><img src={arrow} alt="left-arrow" /><a href=""> Previous</a></li>
                <li className='pagination-item'><a href="">1</a></li>
                <li className='pagination-item'><a href="">2</a></li>
                <li className='pagination-item'><a href="">3</a></li>
                <li className='pagination-item'><a href="">...</a></li>            
                <li className='pagination-item'><a href="">8</a></li>
                <li className='pagination-item'><a href="">9</a></li>
                <li className='pagination-item'><a href="">10</a></li>
                <li className='pagination-item'><a href="">Next</a><img src={arrow} alt="right-arrow" /></li>
            </ul>
        </nav>
    )
}