import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
function Contact() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white pt-20 pb-10 flex items-center justify-center ">
      <div className="max-w-xl w-full px-6">
        <h1 className="text-5xl font-bold mb-2 text-center">Get In Touch</h1>
        <p className="text-center text-gray-300 mb-8">
          Have a project? Let's talk about it!
        </p>

        <form className="space-y-6 flex flex-col gap-8">
          <TextField
            id="outlined-basic"
            label="Name Surname"
            variant="outlined"
            className="w-full px-4 py-3 rounded-lg bg-blue-800/50 text-white"
            sx={{
              // Border stilləri
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
            }}
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="w-full px-4 py-3 rounded-lg bg-blue-800/50 text-white"
            sx={{
              // Border stilləri
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
            }}
          />

          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            className="w-full px-4 py-3 rounded-lg bg-blue-800/50 text-white"
            sx={{
              // Border stilləri
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
            }}
          />

          <TextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={7}
            sx={{
              // Border stilləri
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
            }}
          />
          <Button className="w-full cursor-pointer bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 py-3 rounded-lg font-bold transition duration-300 shadow-lg hover:shadow-2xl" variant="contained">Send Message</Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
