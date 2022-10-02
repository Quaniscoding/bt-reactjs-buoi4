import { DAT_GHE, HUY_GHE } from "../type/BaiTapDatGheType";
const stateDefault = {
    danhSachGheDangDat: [

    ]
}
export const BaiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let danhSachgheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachgheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            if (index !== -1) {//khi người dùng click ghế đang đặt đã có trong mảng =>remove đi
                danhSachgheDangDatUpdate.splice(index, 1);
            }
            else {//khi người dùng click ghế đang đặt chưa có trong mảng=> push vào mảng
                danhSachgheDangDatUpdate.push(action.ghe);
            }
            //cập nhật lại state =>giao diện  render lại
            state.danhSachGheDangDat = danhSachgheDangDatUpdate;
            return { ...state }
        }
        case HUY_GHE: {
            let danhSachgheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachgheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            if (index !== -1) {
                danhSachgheDangDatUpdate.splice(index, 1);
            }
            state.danhSachGheDangDat = danhSachgheDangDatUpdate;
            return { ...state }
        }

        default: return { ...state }
    }
}