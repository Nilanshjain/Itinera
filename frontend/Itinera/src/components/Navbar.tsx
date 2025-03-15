import React, { useState } from "react";
import { TextField, Slider, IconButton, Button, Autocomplete, MenuItem } from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Search, Tune, Menu } from "@mui/icons-material";
import { countries } from "../constants/countries";
import { Dayjs } from "dayjs";
import logo from "../assets/logo.png";
import ItineraryDisplay from "./ItineraryDisplay"; // Import ItineraryDisplay

const Navbar: React.FC = () => {
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, setLocation] = useState<string | null>(null);
  const [budget, setBudget] = useState<number>(10000);
  const [dateRange, setDateRange] = useState<[Dayjs | null, Dayjs | null]>([null, null]);
  const [interests] = useState<string[]>([]);
  const [travelStyle, setTravelStyle] = useState<string>("");
  const [showItinerary, setShowItinerary] = useState(false); // ✅ New state to control visibility

  const handleGenerateItinerary = () => {
    if (!location) {
      alert("Please select a destination before generating an itinerary!");
      return;
    }
    setShowItinerary(true); // ✅ Show itinerary when button is clicked
  };

  return (
    <nav className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-black p-4 shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Itinera Logo" className="h-10 w-auto" />
          <h1 className="text-3xl font-bold tracking-wide" style={{ fontFamily: "Bodoni, serif" }}>Itinera</h1>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <IconButton onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 hover:text-black">
            <Menu />
          </IconButton>
        </div>

        {/* Toggle Icons */}
        <div className="hidden md:flex gap-3">
          <IconButton onClick={() => setShowAdvanced(false)} className="text-gray-700 hover:text-black transition-transform hover:scale-110">
            <Search />
          </IconButton>
          <IconButton onClick={() => setShowAdvanced(true)} className="text-gray-700 hover:text-black transition-transform hover:scale-110">
            <Tune />
          </IconButton>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <button onClick={() => setShowAdvanced(false)} className="block w-full text-left text-gray-700 py-2">Prompt Search</button>
          <button onClick={() => setShowAdvanced(true)} className="block w-full text-left text-gray-700 py-2">Advanced Search</button>
        </div>
      )}

      {/* Search & Advanced Form */}
      <div className="mt-4 transition-opacity duration-300 ease-in-out">
        {showAdvanced ? (
          <div className="bg-white p-6 rounded-lg shadow-lg text-black animate-fadeIn">
            <h2 className="text-lg font-semibold mb-4 text-gray-700" style={{ fontFamily: "Futura, sans-serif" }}>Plan Your Trip</h2>

            {/* Country Selection */}
            <Autocomplete
              options={countries}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <li {...props} key={option.code}>
                  <img loading="lazy" width="20" src={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png`} alt={`${option.label} flag`} className="mr-2" />
                  {option.label}
                </li>
              )}
              onChange={(_, newValue) => setLocation(newValue ? newValue.label : null)}
              renderInput={(params) => <TextField {...params} label="Select Country" fullWidth InputLabelProps={{ shrink: Boolean(params.inputProps.value) }} />}
              className="mb-4 bg-gray-200 rounded-lg hover:shadow-md transition-all"
            />

            {/* Date Range Picker */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateRangePicker
                value={dateRange}
                onChange={(newValue) => setDateRange(newValue)}
                slotProps={{ textField: { fullWidth: true, className: "bg-gray-200 text-black rounded-lg", InputLabelProps: { shrink: true } } }}
              />
            </LocalizationProvider>

            {/* Budget Slider */}
            <div className="mt-6">
              <label className="block mb-2 font-semibold text-gray-700">Budget: ₹{budget.toLocaleString()}</label>
              <Slider
                value={budget}
                onChange={(_, newValue) => setBudget(newValue as number)}
                min={1000}
                max={500000}
                step={1000}
                valueLabelDisplay="auto"
                sx={{ color: "#1db954" }}
              />
            </div>

            {/* Travel Style Selection */}
            <TextField
              label="Travel Style"
              select
              fullWidth
              value={travelStyle}
              onChange={(e) => setTravelStyle(e.target.value)}
              className="mb-4 bg-gray-200 rounded-lg hover:shadow-md transition-all"
              SelectProps={{ native: false }}
              InputLabelProps={{ shrink: true }}
            >
              <MenuItem value="">Select Style</MenuItem>
              <MenuItem value="Backpacking">Backpacking</MenuItem>
              <MenuItem value="Luxury">Luxury</MenuItem>
              <MenuItem value="Family">Family</MenuItem>
              <MenuItem value="Solo">Solo</MenuItem>
            </TextField>

            {/* Generate Itinerary Button */}
            <Button
              variant="contained"
              sx={{ backgroundColor: "#1db954", color: "white", mt: 3, width: "100%", borderRadius: "8px", transition: "all 0.3s", '&:hover': { backgroundColor: "#17a74a" } }}
              onClick={handleGenerateItinerary}
            >
              Generate Itinerary
            </Button>
          </div>
        ) : (
          <TextField placeholder="Where do you want to go?" fullWidth className="bg-gray-200 text-black rounded-lg shadow-lg p-3 hover:shadow-xl transition-all" InputLabelProps={{ shrink: true }} />
        )}
      </div>

      {/* Display Itinerary when Generated */}
      {showItinerary && (
        <ItineraryDisplay
          location={location}
          dateRange={[
            dateRange[0]?.format("YYYY-MM-DD") || null,
            dateRange[1]?.format("YYYY-MM-DD") || null
          ]}
          budget={budget}
          interests={interests}
          travelStyle={travelStyle}
        />
      )}
    </nav>
  );
};

export default Navbar;
