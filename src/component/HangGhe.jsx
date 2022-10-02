import React, { Component } from "react";
import { connect } from "react-redux";
import { datGheAction } from "../redux/actions/BaiTapDatVeAction";
class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;

      //trang thai ghe da bi nguoi khac dat
      if (ghe.daDat) {
        cssGheDaDat = "gheDuocChon";
        disabled = true;
      }
      //xet trang thai ghe dang dat
      let cssGheDangDat = "";
      let indexGheDangDat = this.props.danhSachGheDangDat.findIndex(
        (gheDangDat) => gheDangDat.soGhe === ghe.soGhe
      );
      if (indexGheDangDat !== -1) {
        cssGheDangDat = "gheDangChon";
      }
      return (
        <button
          onClick={() => {
            this.props.datGhe(ghe);
          }}
          disabled={disabled}
          className={`ghe ${cssGheDaDat} ${cssGheDangDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };
  renderSoHang = () => {
    return (
      <span className="rowNumber">
        {" "}
        {this.props.hangGhe.danhSachGhe.map((hang, index) => {
          return (
            <button key={index} className="rowNumber">
              {hang.soGhe}
            </button>
          );
        })}
      </span>
    );
  };
  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="">
          {this.props.hangGhe.Hang}
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="text-light text-left ml-5 mt-3"
        style={{ fontSize: "30px" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeReducer.danhSachGheDangDat,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    datGhe: (ghe) => {
      dispatch(datGheAction(ghe));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe);
