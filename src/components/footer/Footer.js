import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="bottom">
                <div className="bottom-Page">
                    <div className="footer container">
                        <div className="footer-left">
                            <div className="footer-left">
                                <h4 className="title">Về chúng tôi</h4>
                                <ul>
                                    <li>
                                        Chính sách mua hàng
                                    </li>
                                    <li>
                                        Hỗ trợ khách hàng
                                    </li>
                                    <li>
                                        Chăm sóc khách hàng
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-center">
                            <div className="footer-left">
                                <h4 className="title">liên hệ</h4>
                                <ul>
                                    <li>
                                        Địa chỉ: 702 lý Thái Tổ, Lagi, Bình Thuận
                                    </li>
                                    <li>
                                        Hotline: 09098008730
                                    </li>
                                    <li>
                                        Tư Vấn: 0908364789
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-right">
                            <div className="footer-right">
                                <h4 className="title">Theo dõi chúng tôi tại</h4>
                                <div className="socialIcon">
                                    <i className="fab fa-facebook-f"></i>
                                    <i className="fab fa-facebook-messenger"></i>
                                    <i className="fab fa-twitter"></i>
                                    <i className="fab fa-youtube"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;