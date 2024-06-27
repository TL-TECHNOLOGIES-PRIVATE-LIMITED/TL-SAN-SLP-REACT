import React, { useState } from "react";
import {
  Box,
  IconButton,
  TextField,
  Tooltip,
  Button,
  Typography,
} from "@mui/material";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import Select from "react-select";
import { styled } from "@mui/material/styles";
import { tooltipClasses } from "@mui/material/Tooltip";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaMapMarkerAlt,
} from "react-icons/fa";
import TL_Logo from "../images/Logo-TL.png";
import { SiGooglemybusiness } from "react-icons/si";
import { HiOfficeBuilding } from "react-icons/hi";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from "react-phone-input-2";
import { DatePicker, DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const options = [
  "Aviation",
  "Ayurveda BAMS",
  "B.Sc. Cardiac Care",
  "B.Sc. Dialysis",
  "B.Sc. Neuro Science",
  "B.Sc. Optometry",
  "B.Sc. Perfusion Technology",
  "B.Sc. Physician",
  "B.Sc. Radiology",
  "B.Sc. Respiratory",
  "B.Sc. Radiotherapy",
  "B.Tech (Engineering)",
  "BASLP(Speech Therapy)",
  "BBM/LLB",
  "B.Com with CA",
  "BHM/BHS(Hotel Management)",
  "BPT(Physiotherapy)",
  "Cyber Security",
  "Dental BDS",
  "Dental MDS",
  "FD/ID(Fashion/Interior Design)",
  "Homeopathy BHMS",
  "Hospital Management",
  "M.Sc. & B.Sc Agriculture",
  "M.Tech (Engineering)",
  "Medical MBBS",
  "Medical MD/MS",
  "MLT",
  "MSW/BSW",
  "Nursing",
  "Pharmacy B.PHARM",
  "Travel & Tourism",
].map((course) => ({ value: course, label: course }));

const years = [
  2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036,
  2037, 2038, 2039, 2040,
];

const months = [
  { value: "January", label: "January" },
  { value: "February", label: "February" },
  { value: "March", label: "March" },
  { value: "April", label: "April" },
  { value: "May", label: "May" },
  { value: "June", label: "June" },
  { value: "July", label: "July" },
  { value: "August", label: "August" },
  { value: "September", label: "September" },
  { value: "October", label: "October" },
  { value: "November", label: "November" },
  { value: "December", label: "December" },
];

const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Costa Rica",
  "Cote d’Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia, Federated States of",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Republic of Moldova",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Sweden",
  "Switzerland",
  "Syria",
  "Tajikistan",
  "Thailand",
  "The Gambia",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United Republic of Tanzania",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "VietNam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
].map((country) => ({ value: country, label: country }));

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} placement="right" />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#777777",
    color: "rgba(255, 255, 255)",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const AppointmentLayout = () => {
  const currentDate = dayjs();
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    selectedOption: null,
    message: "",
    selectedDate: currentDate,
    selectedCountry: null,
    countryCode: "+", // New field for country code
  });

  const [errors, setErrors] = useState({});
  
  const [characterCount, setCharacterCount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Limit message to 500 characters
    if (name === "message" && value.length > 500) return;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  
    // Update character count for message
    if (name === "message") {
      setCharacterCount(value.length);
    }
  };
  const handleClick = () => {
    window.location.href = "http://gkumar2018-001-site2.ktempurl.com/";
  };

  const handleDateChange = (newDate) => {
    setFormData({ ...formData, selectedDate: newDate });
  };

  const handleSelectChange = (selectedOption, { name }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedOption,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleCountryChange = (selectedOption) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      selectedCountry: selectedOption,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      selectedCountry: "",
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      number: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      number: "",
    }));
  };

  const validateForm = () => {
    let formValid = true;
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please Enter Your Name";
      formValid = false;
    } else if (!/^[A-Za-z. ]{3,}$/.test(formData.name.trim())) {
      newErrors.name = "Please Enter a Valid Name";
      formValid = false;
    }
    if (!formData.number.trim()) {
      newErrors.number = "Please Enter a Valid Phone Number";
      formValid = false;
    } else if (formData.number.length < 12) {
      newErrors.number = "Phone number must be at least 10 digits";
      formValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please Enter Your Email";
      formValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
      formValid = false;
    }
    if (!formData.selectedOption) {
      newErrors.selectedOption = "Please select a course";
      formValid = false;
    }
    if (!formData.selectedCountry) {
      newErrors.selectedCountry = "Please select a country";
      formValid = false;
    }
   
    setErrors(newErrors);
    return formValid;
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const name = encodeURIComponent(formData.name);
      const email = encodeURIComponent(formData.email);
      const phoneNumber = encodeURIComponent(formData.number);
      const selectedOptions = formData.selectedOption.value;
      const userMessage = encodeURIComponent(formData.message);
      const selectedYear = formData.selectedDate.year();
      const selectedMonth = formData.selectedDate.format("MMMM");
      const selectedCountry = formData.selectedCountry.value;
      const message = `Name: ${name}%0AEmail: ${email}%0APhone Number: ${"+",phoneNumber}%0ASelected Course: ${selectedOptions}%0AYear: ${selectedYear}%0AMonth: ${selectedMonth}%0ACountry: ${selectedCountry}%0AUser Message: ${userMessage}`;
      const whatsappUrl = `https://wa.me/+917207205885?text=${message}`;
      window.open(whatsappUrl, "_blank");
      console.log("Form submitted:", formData);
    } else {
      console.log("Form has errors. Please fix them.");
    }
  };


  return (
    <Box className="w-[405px] md:w-[480px] md:h-auto md:min-h-[760px] rounded-md bg-white md:bg-opacity-95 flex flex-col justify-start items-center">
      <form onSubmit={handleSubmit} className="ml-5 mt-8 ">
        <h2 className=" md:mr-0 ">Unfold Your Future !</h2>
        <div
          className=" w-[280px] md:w-[350px] text-center"
          style={{ display: "flex" }}
        >
          <TextField
            id="name"
            name="name"
            label="Name *"
            fullWidth
            value={formData.name}
            onChange={handleInputChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <HtmlTooltip
            placement="right"
            title={
              <React.Fragment>
                <Typography color="inherit">
                  •Please enter your full name.
                  <br />• Use your first name and last name.
                  <br />• Ensure there are no numbers.
                  <br />• Only use alphabetic characters. eg: "Jane Das"
                </Typography>
              </React.Fragment>
            }
          >
            <IconButton aria-label="info">
              <InfoRoundedIcon />
            </IconButton>
          </HtmlTooltip>
        </div>
        <div
          className=" w-[280px] md:w-[350px]  mt-4"
          style={{ display: "flex" }}
        >
           <PhoneInput
              country={"in"} // default country
              value={formData.number}
              onChange={handlePhoneChange}
              inputProps={{
                name: "number",
                autoFocus: true,
                require: true,
              }}
              containerStyle={{ width: "100%", zIndex: 40 }} // Increase container width
              inputStyle={{ width: "100%", height: "50px", opacity: 0.7 }} // Increase input field width and height if needed
              error={!!errors.number}
            />

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">
                  • Enter your 10-digit phone number.
                  <br />• Do not include spaces or special characters.
                  <br />• Only use numeric characters.
                  <br />• eg: 8547854785
                </Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <IconButton aria-label="info">
              <InfoRoundedIcon />
            </IconButton>
          </HtmlTooltip>
        </div>
        {errors.number && (
            <div
              className="w-[280px] md:w-[350px]"
              style={{ color: "red", fontSize: "10px" }}
            >
              {errors.number}
            </div>
          )}
        <div
          className=" w-[280px] md:w-[350px] mt-4"
          style={{ display: "flex" }}
        >
          <TextField
            id="outlined-email-input"
            name="email"
            label="Email *"
            type="email"
            fullWidth
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">
                  • Enter a valid email address.
                  <br />
                  • Do not include spaces.
                  <br />• Use the format: example@domain.com.
                </Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <IconButton aria-label="info">
              <InfoRoundedIcon />
            </IconButton>
          </HtmlTooltip>
        </div>
        <div
          className="w-[280px] md:w-[350px] mt-4"
          style={{ display: "flex" }}
        >
          <Select
            name="selectedOption"
            options={options}
            placeholder="Select preferred Course *"
            value={formData.selectedOption}
            onChange={handleSelectChange}
            className="w-full z-30"
            isSearchable
          />
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">
                  • Choose the course you are interested in.
                  <br />
                  • Ensure the course aligns with your goals.
                  <br />
                  • You can select only one course at a time.
                  <br />• Contact us if you need guidance in selecting a course.
                </Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <IconButton aria-label="info">
              <InfoRoundedIcon />
            </IconButton>
          </HtmlTooltip>
        </div>
        {errors.selectedOption && (
          <Typography fontSize={"11px"} color="error">
            {errors.selectedOption}
          </Typography>
        )}
        <div
          className="w-[280px] md:w-[350px] mt-4"
          style={{ display: "flex" }}
        >
          <Select
            name="selectedCountry"
            value={formData.selectedCountry}
            onChange={handleCountryChange}
            options={countries}
            isClearable
            placeholder="Select preferred Country"
            className="w-full z-20"
          />
          <HtmlTooltip
            placement="right"
            title={
              <React.Fragment>
                <Typography color="inherit">
                  • Please select your preferred country.
                  <br /> • Ensure it matches your intended study destination.
                  <br /> • Verify the availability of the chosen course in this
                  country.
                  <br />
                  • Consider the visa requirements for this country.
                  <br />
                </Typography>
              </React.Fragment>
            }
          >
            <IconButton>
              <InfoRoundedIcon />
            </IconButton>
          </HtmlTooltip>
        </div>
        {errors.selectedCountry && (
          <p className="text-red-500 text-xs mt-1 ml-1">
            {errors.selectedCountry}
          </p>
        )}

        <div
          className="w-[280px] md:w-[350px] mt-4"
          style={{ display: "flex", gap: "10px" }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>

          <DesktopDatePicker
          label="Select preferred Date"
          inputFormat="MMMM YYYY"
          views={['year', 'month']}
          value={formData.selectedDate}
          onChange={handleDateChange}
          minDate={currentDate}
          renderInput={(params) => <input {...params} />}
        />
                            </LocalizationProvider>

          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">
                  • Select the year you plan to join.
                  <br />
                  • Choose the corresponding month.
                  <br />
                  • Ensure the date aligns with your schedule.
                  <br />• Both fields are required to proceed.
                </Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <IconButton aria-label="info">
              <InfoRoundedIcon />
            </IconButton>
          </HtmlTooltip>
        </div>
        <div
          className="w-[280px] md:w-[350px] mt-4"
          style={{ display: "flex", gap: "10px" }}
        >
          {errors.selectedYear && (
            <Typography fontSize={"11px"} color="error">
              {errors.selectedYear}
            </Typography>
          )}
          {errors.selectedMonth && (
            <Typography marginLeft={"50px"} fontSize={"11px"} color="error">
              {errors.selectedMonth}
            </Typography>
          )}
        </div>
        <div
          className="w-[280px] md:w-[350px] mt-1"
          style={{ display: "flex" }}
        >
          <TextField
            id="outlined-message"
            name="message"
            label="Message"
            multiline
            rows={2}
            fullWidth
            value={formData.message}
            onChange={handleInputChange}
            error={!!errors.message}
            helperText={`${characterCount}/500`}
            />
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography color="inherit">
                  • Provide any additional information or questions.
                  <br />
                  • Be clear and concise in your message.
                  <br />
                  • This field is optional but recommended.
                  <br />• Maximum length is 500 characters.
                </Typography>
              </React.Fragment>
            }
            placement="right"
          >
            <IconButton aria-label="info">
              <InfoRoundedIcon />
            </IconButton>
          </HtmlTooltip>
        </div>
        <div
          style={{ display: "grid", placeItems: "center", marginTop: "20px" }}
        >
          <Button
            variant="contained"
            color="success"
            type="submit"
            className="h-12 w-40"
            style={{ fontWeight: "bold", fontSize: "1rem" }}
          >
            Contact us !
          </Button>
        </div>
      </form>
      <div className="countries flex mt-4">
        <span className="mt-2 flex font-extrabold">
          <HiOfficeBuilding className="mr-1 ml-2 mt-1 " /> INDIA
        </span>
        <span className="flex mt-2 font-extrabold">
          <HiOfficeBuilding className="mr-1 ml-2 mt-1 " /> USA
        </span>
        <span className="flex mt-2 font-extrabold">
          <HiOfficeBuilding className="mr-1 ml-2 mt-1 " /> UK
        </span>
      </div>
      {/* <===============Social media icons starts here =============>*/}
      <div className="social-media mt-4 md:mt-[17px] flex items-center">
        <a
          href="https://wa.me/+917207205885?text=Hello,%20I%20am%20interested%20to%20know%20more%20about%20your%20service"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-2"
        >
          <IconButton>
            <FaWhatsapp className="text-green-600 text-3xl" />
          </IconButton>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100091355913219"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <IconButton>
            <FaFacebookF className="text-blue-600 text-3xl" />
          </IconButton>
        </a>
        <a
          href="https://www.instagram.com/study_abroad_network/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <IconButton>
            <FaInstagram className="text-pink-600 text-3xl" />
          </IconButton>
        </a>
        <a
          href="https://www.youtube.com/channel/UCLxPsQvVTfYNiLLmTC7NgKg"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <IconButton>
            <FaYoutube className="text-red-600 text-3xl" />
          </IconButton>
        </a>
        <a
          href="https://www.pinterest.com/sanstudyabroadnetwork/"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          <IconButton>
            <FaPinterest className="text-red-600 text-3xl" />
          </IconButton>
        </a>
        <a
          href="https://www.linkedin.com/in/study-abroad-network-san-22562326b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconButton>
            <FaLinkedinIn className="text-blue-700 text-3xl" />
          </IconButton>
        </a>
        <a
          href="https://www.google.com/maps/place/Study+Abroad+Network/@8.583061,76.8599598,17z/data=!3m1!4b1!4m6!3m5!1s0x3b05bfededcaa77d:0x7d78087f17d88c50!8m2!3d8.5830557!4d76.8625401!16s%2Fg%2F11vxvvc12h?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-3"
        >
          <IconButton>
            <SiGooglemybusiness className="text-blue-600 text-3xl" />
          </IconButton>
        </a>
      </div>

      {/*<================ Social media icons end here====================> */}
      {/* <=================Footer section starts here====================> */}
      <div className="flex row md:mt-2 mt-4 md:mb-3 mb-4">
        <Button
          onClick={handleClick}
          style={{
            display: "block",
            textAlign: "left",
            padding: 10,
            borderRadius: "12px",
            overflow: "hidden",
            border: "2px solid red",
            backgroundColor: "white",
          }}
          className="footer-container p-4 md:p-6 mt-2 md:mt-2 md:mb-3 mb-3"
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-black">
            <span
              style={{ color: "red" }}
              className="text-sm text-color-red md:text-base mr-0 md:mr-0 mb-4 md:mb-0"
            >
              Your IT & Marketing Partner<br />
            </span>
          </div>
        </Button>
        <div className="flex items-end text-xs md:text-sm">
          <img
            src={TL_Logo}
            className="h-12 w-12 ml-4 md:ml-2 mb-2 md:h-16 md:w-16 "
            alt="TL Technologies Logo"
          />
        </div>
      </div>

      {/*<======================== Footer section ends Here=====================> */}
    </Box>
  );
};

export default AppointmentLayout;
