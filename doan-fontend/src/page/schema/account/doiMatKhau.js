import * as yup from "yup";

export const doiMatKhauSchema = yup.object ({
    oldPassword: yup.string().required("Password cũ không được để trống"),
    newPassword1: yup.string()
        .required("Password mới không được để trống")
        .test('match', "Mật khẩu mới không được trùng mật khẩu cũ", function (value) {
            return value === this.parent.oldPassword ? false : true;
        }),
        newPassword2: yup.string()
        .required("Password mới không được để trống")
        .oneOf([yup.ref('newPassword1'), null], 'Mật khẩu mới không trùng khớp'),
});