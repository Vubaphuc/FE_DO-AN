import * as yup from "yup";

export const capNhatThongTinCaNhanSchema = yup.object ({
    fullName: yup.string().required("Họ và Tên không được để trống"),
    phone: yup.string().required("Số Điện Thoại không được để trống"),
    address: yup.string().required("Địa chỉ không được để trống")
});