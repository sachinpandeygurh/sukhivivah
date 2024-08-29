import React, { useState } from "react";
import {
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const Enquiries = ({ style, className }) => {
  const [gender, setGender] = useState("");
  const [isGenderDropdownOpen, setGenderDropdownOpen] = useState(false);
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [selectedReligion, setSelectedReligion] = useState("");
  const [isReligionDropdownOpen, setReligionDropdownOpen] = useState(false);
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);

  const religions = [
    "Hinduism",
    "Islam",
    "Christianity",
    "Sikhism",
    "Buddhism",
    "Jainism",
    "Zoroastrianism",
    "Judaism",
    "Other",
  ];

  const ageOptions = Array.from({ length: 80 }, (_, i) => i + 18);

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setGenderDropdownOpen(false);
  };

  const handleMinAgeSelect = (age) => {
    setMinAge(age);
  };

  const handleMaxAgeSelect = (age) => {
    setMaxAge(age);
  };

  const handleReligionSelect = (religion) => {
    setSelectedReligion(religion);
    setReligionDropdownOpen(false);
  };

  return (
    <div
      className={`search-form p-3 d-flex justify-content-center align-items-center ${className}`}
      style={style}
    >
      <form className="row  g-2 w-100 justify-content-around">
        <h1 className="text-sm sm:text-base text-start text-white font-normal">
          I'm looking{" "}
        </h1>
        {/* Gender Selector */}
        <div className="col-md-1 col-6 ">
          <div style={{ position: "relative" }}>
            <div className="stdropdown-container">
              <div
                className="stdropdown-input stsearch-box"
                onClick={() => setGenderDropdownOpen(!isGenderDropdownOpen)}
              >
                <input placeholder="Select Gender" value={gender} readOnly />
                <div className="stdropdown-tools">
                  <div className="stdropdown-tool">
                    <svg height="20" width="20" viewBox="0 0 20 20">
                      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {isGenderDropdownOpen && (
                <div className="stdropdown-menu">
                  
                  <div
                    className="stdropdown-item"
                    onClick={() => handleGenderSelect("Man")}
                  >
                    Man
                  </div>
                  <div
                    className="stdropdown-item"
                    onClick={() => handleGenderSelect("Woman")}
                  >
                    Woman
                  </div>
                  <div
                    className="stdropdown-item"
                    onClick={() => handleGenderSelect("Other")}
                  >
                    Other
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Age Selector */}
       
        <div className="col-md-3 col-6">
          <div className="flex items-center">
            {/* Minimum Age Selector */}
            <div className="">
              <select
                id="minAgeSelect"
                className="p-2 rounded-lg border border-gray-300 text-gray-700 w-full"
              >
                <option>Min Age</option>
                {ageOptions.map((age, index) => (
                  <option key={index} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>

            <div className="mx-2 text-white">To</div>

            {/* Maximum Age Selector */}
            <div className="flex items-center">
              <select
                id="maxAgeSelect"
                className="p-2 rounded-lg border border-gray-300 text-gray-700 w-full"
              >
                <option>Max Age</option>
                {ageOptions.map((age, index) => (
                  <option key={index} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Religion Selector */}
        <div className="col-md-2 col-6">
          <div style={{ position: "relative" }}>
            <div className="stdropdown-container">
              <div
                className="stdropdown-input stsearch-box"
                onClick={() => setReligionDropdownOpen(!isReligionDropdownOpen)}
              >
                <input
                  placeholder="Select Religion"
                  value={selectedReligion}
                  readOnly
                />
                <div className="stdropdown-tools">
                  <div className="stdropdown-tool">
                    <svg height="20" width="20" viewBox="0 0 20 20">
                      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                    </svg>
                  </div>
                </div>
              </div>

              {isReligionDropdownOpen && (
                <div className="stdropdown-menu">
                  {religions.map((religion) => (
                    <div
                      className="stdropdown-item"
                      key={religion}
                      onClick={() => handleReligionSelect(religion)}
                    >
                      {religion}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Country Select */}
        <div className="col-md-2 col-6">
        <CountrySelect
        onChange={(e) => {
          setCountryid(e.id);
        }}
        placeHolder="Select Country"
      />
        </div>

        {/* State Select */}
        <div className="col-md-2 col-6">
        <StateSelect
        countryid={countryid}
        onChange={(e) => {
          setstateid(e.id);
        }}
        placeHolder="Select State"
      />
        </div>

        {/* Language Select */}
        <div className="col-md-2 col-6">
          <LanguageSelect  placeHolder="Select Language"/>
        </div>
         {/* Submit Button */}
         <div className="col-md-2 col-6 mx-auto my-2">
                    <button type="submit" className="btn btn-pink">Let's Begin</button>
                </div>
      </form>
    </div>
  );
};

export default Enquiries;