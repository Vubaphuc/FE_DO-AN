import * as yup from "yup";

export const dangKyKhachHangSanPhamSchemas = yup.object({
  fullNameKH: yup.string().required("Họ và Tên không được để trống"),
  phoneKH: yup.string().required("Số Điện Thoại không được để trống"),
  emailKH: yup.string().required("Email không được để trống"),
  addressKH: yup.string().required("Địa chỉ không được để trống"),
  hangSanPham: yup.string().required("Hãng sản xuất không được để trống"),
  model: yup.string().required("Dòng máy không được để trống"),
  soIME: yup.string().required("Số IME không được để trống"),
  tenLoi: yup.string().required("Mô tả lỗi không được để trống"),
  soLuong: yup.string().required("Số Lượng không được để trống"),
  giaTien: yup.string().required("Giá Tiền không được để trống"),
});
