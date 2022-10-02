import React, { Component, Fragment } from "react";
import danhSachGheData from "./danhSachGhe.json";
import HangGhe from "./HangGhe";
import ThongTinDatGhe from "./ThongTinDatGhe";
export default class TrangChuSanPham extends Component {
  renderHangGhe = () => {
    return danhSachGheData.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: `url("./bookingTicket/bgmovie.jpg")`,
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0,0,0,0.8)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-warning display-4">Đặt vé xem phim</div>
                <div className="mt-5 text-light" style={{ fontSize: "25px" }}>
                  Màn Hình
                </div>
                <div
                  className="mt-2"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen pl-2"></div>
                  {this.renderHangGhe()}
                </div>
              </div>
              <div className="col-4">
                <div style={{ fontSize: "35px" }} className="text-light mt-2">
                  Danh sách ghế bạn chọn
                </div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
