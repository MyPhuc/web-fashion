import React from 'react';

const detail = () => {
    return (
        <div className="page-products detail">
            <img src="../images/clothes/dam suong/dam1.jpeg" alt="" />
            <div className="page-products detail-s">
                <h4 className="nameBook">Đầm suông trễ vai</h4>
                <p className="author">Độc quyền của Namu</p>
                <p className="newPrice">
                    Mô tả : Sản phẩm được thiết kế theo yêu cầu của khách hàng
                </p>
                <div className="price">
                    <p className="newPrice">
                        Giá mới:
                        2.340.000đ
                    </p>
                    <p className="oldPrice">
                        Giá cũ: 2.540.000đ
                    </p>
                </div>
                <button>Thanh toán</button>
            </div>
        </div>
    );
}

export default detail;