import React, { useEffect, useState } from 'react'
import Banner from '../components/banner/banner'
import Item from '../components/item/Item';
const Home = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/books")
            .then(res => res.json())
            .then(
                (data) => {
                    setItems(data)
                }
            )
    }, [])
    const bestSaller = () => {
        let html = <div className="page-products-items">
            {items.map(book => {
                if (book.view > 500) return (<Item key={book.id} book={book} />)

            })}
        </div>
        return html;
    }
    const booksHot = () => {
        let html = <div className="page-products-items">
            {items.map(book => {
                if (book.hot === 1) return (<Item key={book.id} book={book} />)

            })}
        </div>
        return html;
    }
    const booksNew = () => {
        let html = <div className="page-products-items">
            {items.map(book => {
                if (book.new === 1) return (<Item key={book.id} book={book} />)

            })}
        </div>
        return html;
    }
    return (
        <div className="home container">
            <div className="home-marketing">Chào mừng đến với Namu Store</div>
            <Banner />
            <div className="titleHome">
                Sản phẩm bán chạy
            </div>
            <div className="bestSaller">
                {bestSaller()}
            </div>
            <div className="titleHome">
                Sản phẩm HOT!
            </div>
            <div className="bookHot">
                {booksHot()}
            </div>
            <div className="titleHome">
                Sản Phẩm mới
            </div>
            <div className="bookNew">
                {booksNew()}
            </div>
        </div>
    )
}


export default Home

