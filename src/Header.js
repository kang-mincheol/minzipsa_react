import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="Header">
            <div className="logo_wrap">
            로고
            </div>
            <div className="menu_wrap">
                <div className="menu_btn">민집사 소개</div>
                <div className="menu_btn">이용방법</div>
                <div className="menu_btn">제품선택</div>
                <div className="menu_btn">민집사 결제</div>
            </div>
            <div className="nav_btn">메뉴</div>
        </div>
    );
}

export default Header;