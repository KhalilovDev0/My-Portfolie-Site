import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup.string().required("Ad Soyad sahəsi məcburidir"),
  email: yup
    .string()
    .email("Doğru bir email ünvanı daxil edin")
    .required("Email sahəsi məcburidir")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Doğru bir email ünvanı daxil edin"
    ),
  subject: yup.string().required("Mövzu sahəsi məcburidir"),
  message: yup.string().required("Mesaj sahəsi məcburidir"),
});