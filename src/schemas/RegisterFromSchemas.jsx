import * as yup from "yup";

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .required("Ad Soyad sahəsi məcburidir")
    .min(3, "Ad ən az 3 simvol olmalıdır")
    .max(20, "Ad 20 simvoldan az olmalıdır"),
  email: yup
    .string()
    .email("Doğru bir email ünvanı daxil edin")
    .required("Email sahəsi məcburidir")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Doğru bir email ünvanı daxil edin",
    )
    .max(50, "Email ünvanı 50 simvoldan az olmalıdır"),
  subject: yup
    .string()
    .required("Mövzu sahəsi məcburidir")
    .min(5, "Mövzu ən az 5 simvol olmalıdır")
    .max(50, "Mövzu 50 simvoldan az olmalıdır"),
  message: yup
    .string()
    .required("Mesaj sahəsi məcburidir")
    .min(10, "Mesaj ən az 10 simvol olmalıdır")
    .max(1000, "Mesaj 300 simvoldan az olmalıdır"),
});
