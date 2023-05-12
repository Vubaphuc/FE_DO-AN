import * as yup from "yup";

export const forgotPasswordSchema = yup.object ({
    email: yup
    .string()
    .required("Email không được để trống")
    .matches(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "Email không hợp lệ"
    )
});