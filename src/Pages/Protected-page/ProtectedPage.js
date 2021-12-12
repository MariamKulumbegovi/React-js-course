import { withUserList } from '../../hoc/withUserList';
import ReactPaginate from 'react-paginate';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import styles from './ProtectedPage.module.css';
export const ProtectedPage = () => {
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  let limit = 3

  useEffect(() => {
    const getUserList = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get('x-total-count');
      setPageCount(Math.ceil(total / 12));

      setItems(data);
    };
    getUserList();
  }, []);

  const fetchNewData = async currentPage => {
    try {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
      );
      return result.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageClick = async data => {
    let currentPage = data.selected + 1;

    const getNewComments = await fetchNewData(currentPage);

    setItems(getNewComments);
  };

  return (
    <div className="container ">
      {items.map(item => {
        return (
          <div className={`box ${styles[`boxColor`]}`} key={item.id}>
            <div>{item.id} </div>
            <div>{item.name} </div>
            <div> {item.body}</div>
            <div>{item.email} </div>
          </div>
        );
      })}

      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        breakLabel={'. . .'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={'pagination-list is-flex is-justify-content-center'}
        pageLinkClassName={'pagination-link'}
        previousLinkClassName={'pagination-link'}
        nextLinkClassName={'pagination-link'}
        breakLinkClassName={'pagination-link'}
        activeClassName={'active'}
      />
    </div>
  );
};
