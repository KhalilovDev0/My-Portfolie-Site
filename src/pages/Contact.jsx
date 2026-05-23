import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useState } from "react";
import { motion } from "framer-motion";
import { contactSchema } from "../schemas/RegisterFromSchemas";

const textFiledStyles = {
  position: "relative",
  "& .MuiOutlinedInput-root": {
    color: "#ffffff",
    borderRadius: "12px",
    backgroundColor: "rgba(255, 255, 255, 0.02)",
    backdropFilter: "blur(12px)",
    transition: "all 0.3s ease",
    fontSize: { xs: "0.9rem", md: "1rem" },
    "& :hover": {
      backgroundColor: "rgba(255, 255, 255, 0.04)",
    },
    "& textarea": {
      minHeight: { xs: "40px", md: "50px", lg: "60px" },
    },
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(255, 255, 255, 0.1)",
    transition: "all 0.3s ease",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#22d3ee !important",
  },
  "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#3b82f6 !important",
    boxShadow: "0 0 15px rgba(59, 130, 246, 0.15)",
  },
  "& .MuiInputLabel-root": {
    color: "#94a3b8 !important",
    fontSize: { xs: "0.8rem", md: "0.9rem" },
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#22d3ee !important",
  },
  "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ef4444 !important",
  },
  "& .MuiInputLabel-root.Mui-error": {
    color: "#ef4444 !important",
  },
  "& .MuiFormHelperText-root": {
    position: "absolute",
    bottom: "-20px",
    left: "4px",
    margin: "0px !important",
    fontSize: "0.75rem",
    lineHeight: "1",
    color: "#ef4444 !important",
    opacity: 0,
    transform: "translateY(-4px)",
    transition: "all 0.25s ease",
  },
  "& .MuiFormHelperText-root.Mui-error": {
    opacity: 1,
    transform: "translateY(0)",
  },
  "& .MuiOutlinedInput-input": {
    fontSize: { xs: "0.9rem", md: "1rem" },
    lineHeight: "1.6",
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.03 },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 5 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const titleText = "Əlaqə Saxlayın";

  const { values, handleChange, errors, handleSubmit, touched } = useFormik({
    initialValues: { name: "", email: "", subject: "", message: "" },
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      setStatus({ type: "loading", message: "Mesajınız göndərilir..." });

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
          setStatus({
            type: "success",
            message:
              "Möhtəşəm! Mesajınız uğurla göndərildi. Yaxın zamanda əlaqə saxlayacam.",
          });
          resetForm();
        } else {
          setStatus({
            type: "error",
            message: "Xəta baş verdi. Zəhmət olmasa, yenidən cəhd edin.",
          });
        }
      } catch (error) {
        setStatus({
          type: "error",
          message:
            "Şəbəkə xətası! İnternet bağlantınızı yoxlayıb yenidən yoxlayın.",
        });
        console.error("Error: ", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <div className="w-full min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-950 text-white pt-16 sm:pt-24 pb-16 flex items-start justify-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-600/5 rounded-full blur-[130px] pointer-events-none z-0"></div>

      <div className="max-w-3xl mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 flex flex-col gap-3">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent inline-block"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {titleText.split("").map((char, index) => (
              <motion.span key={index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-slate-400 text-xs sm:text-xs md:text-sm lg:text-base max-w-xl mx-auto px-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Yeni bir layihə, ideya və ya iş birliyi var? Formu doldurun,
            danışaq.
          </motion.p>
        </div>

        <motion.div
          className="bg-white/2 border border-white/10 p-5 sm:p-6 rounded-3xl backdrop-blur-xl shadow-2xl mx-2 sm:mx-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <form
            className="flex flex-col gap-5 sm:gap-6"
            onSubmit={handleSubmit}
            onChange={handleChange}
          >
            <TextField
              id="name"
              label="Adınız"
              variant="outlined"
              name="name"
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              value={values.name}
              onChange={handleChange}
              sx={textFiledStyles}
              fullWidth
              slotProps={{
                htmlInput: { maxLength: 20 },
              }}
            />

            <TextField
              id="email"
              label="E-poçt ünvanınız"
              variant="outlined"
              name="email"
              type="email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              value={values.email}
              onChange={handleChange}
              sx={textFiledStyles}
              fullWidth
              slotProps={{
                htmlInput: { maxLength: 50 },
              }}
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
              sx={textFiledStyles}
              fullWidth
              slotProps={{
                htmlInput: { maxLength: 50 },
              }}
            />

            <TextField
              id="message"
              label="Mesajınız"
              multiline
              name="message"
              error={touched.message && Boolean(errors.message)}
              helperText={touched.message && errors.message}
              value={values.message}
              onChange={handleChange}
              sx={textFiledStyles}
              fullWidth
              minRows={4}
              maxRows={8}
              slotProps={{
                htmlInput: { maxLength: 300 },
              }}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              sx={{
                width: "100%",
                background: "linear-gradient(to right, #2563eb, #06b6d4)",
                color: "#ffffff",
                padding: { xs: "10px 0", md: "12px 0" },
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: { xs: "0.95rem", md: "1rem" },
                textTransform: "none",
                transition: "all 0.3s ease",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                "&:hover": {
                  background: "linear-gradient(to right, #1d4ed8, #0891b2)",
                  boxShadow: "0 8px 25px rgba(6, 182, 212, 0.25)",
                  transform: "translateY(-1px)",
                },
                "&:disabled": {
                  background: "rgba(255, 255, 255, 0.05)",
                  color: "#64748b",
                },
              }}
            >
              {isSubmitting ? "Göndərilir..." : "Mesaj Göndər"}
            </Button>
          </form>

          {status.message && (
            <div
              className={`mt-6 p-4 rounded-xl text-xs sm:text-sm font-medium text-center border transition-all duration-300 ${
                status.type === "success"
                  ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                  : status.type === "error"
                    ? "bg-rose-500/10 text-rose-400 border-rose-500/20"
                    : "bg-blue-500/10 text-blue-400 border-blue-500/20 animate-pulse"
              }`}
            >
              {status.message}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
