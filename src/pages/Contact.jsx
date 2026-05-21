import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useState } from "react";
import { contactSchema } from "../schemas/RegisterFromSchemas";

const textFiledStyles = {
  position: "relative",
  "& .MuiOutlinedInput-root": {
    color: "#ffffff",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#2563eb !important",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#60a5fa !important",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#60a5fa !important",
  },
  "& .MuiInputLabel-root": {
    color: "#9ca3af !important",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#60a5fa !important",
  },
  "& .MuiFormHelperText-root": {
    position: "absolute",
    bottom: "-20px", 
    left: "4px",
    margin: "0px !important", 
    padding: "0px !important",
    fontSize: "0.75rem",
    lineHeight: "1",
    zIndex: 5,
  },
};

function Contact() {
  const [result, setResult] = useState("");
  const { values, handleChange, errors, handleSubmit, touched } = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm }) => {
      setResult("Mesaj Göndərilir...");
      const formData = new FormData();
      formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("subject", values.subject);
      formData.append("message", values.message);
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        if (data.success) {
          setResult(
            "Mesaj Uğurla Göndərildi. Yaxında Sizinlə Əlaqə Saxlanılacaq!",
          );
          resetForm();
        } else {
          setResult("Xəta Baş Verdi. Zəhmə Olmasa Birdaha Cəhd Edin!");
        }
      } catch (error) {
        setResult("Xəta Baş Verdi. Zəhmə Olmasa Birdaha Cəhd Edin!");
        console.error("Error: ", error);
      }
    },
  });

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-blue-900 via-blue-800 to-blue-950 text-white pt-20 pb-10 flex items-center justify-center">
      <div className="max-w-xl w-full px-6">
        <h1 className="text-5xl font-bold mb-2 text-center">Əlaqə Saxlayın</h1>
        <p className="text-center text-gray-300 mb-8">
          Mənimlə əlaqə saxlamaq üçün aşağıdakı formu doldurun.
        </p>

        <form className="flex flex-col gap-7" onSubmit={handleSubmit}>
          <TextField
            id="name"
            label="Ad"
            variant="outlined"
            name="name"
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
            value={values.name}
            onChange={handleChange}
            className="w-full rounded-lg bg-blue-800/50"
            sx={textFiledStyles}
          />

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            name="email"
            type="email"
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            value={values.email}
            onChange={handleChange}
            className="w-full rounded-lg bg-blue-800/50"
            sx={textFiledStyles}
          />

          <TextField
            id="subject"
            label="Mövzu"
            variant="outlined"
            name="subject"
            error={touched.subject && Boolean(errors.subject)}
            helperText={touched.subject && errors.subject}
            value={values.subject}
            onChange={handleChange}
            className="w-full rounded-lg bg-blue-800/50"
            sx={textFiledStyles}
          />

          <TextField
            id="message"
            label="Ətraflı Mesaj"
            multiline
            name="message"
            error={touched.message && Boolean(errors.message)}
            helperText={touched.message && errors.message}
            value={values.message}
            onChange={handleChange}
            rows={5}
            className="w-full rounded-lg bg-blue-800/50"
            sx={textFiledStyles}
          />
          
          <Button
            type="submit"
            className="w-full cursor-pointer bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 py-3 rounded-lg font-bold transition duration-300 shadow-lg hover:shadow-2xl text-white mt-2"
            variant="contained"
          >
            Mesaj Göndər
          </Button>
        </form>
        
        <span className="text-white flex items-center justify-center pt-10 text-center animate-pulse font-medium">
          {result}
        </span>
      </div>
    </div>
  );
}

export default Contact;