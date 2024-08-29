import React, { useState } from "react";
import {
  CountrySelect,
  StateSelect,
  LanguageSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const Enquiries = ({ style, className }) => {
  const [gender, setGender] = useState("woman");
  const [isGenderDropdownOpen, setGenderDropdownOpen] = useState(false);
  const [minAge, setMinAge] = useState("18");
  const [maxAge, setMaxAge] = useState("21");
  const [selectedReligion, setSelectedReligion] = useState("Hindu");
  const [isReligionDropdownOpen, setReligionDropdownOpen] = useState(false);
  const [countryid, setCountryid] = useState(1);
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
  const ageOptions = Array.from({ length: 30 }, (_, i) => i + 18);

  const handleMinAgeSelect = (event) => {
    setMinAge(event.target.value);
  };

  const handleMaxAgeSelect = (event) => {
    setMaxAge(event.target.value);
  };

  const handleGenderSelect = (selectedGender) => {
    setGender(selectedGender);
    setGenderDropdownOpen(false);
  };

  const handleReligionSelect = (religion) => {
    setSelectedReligion(religion);
    setReligionDropdownOpen(false);
  };
  console.log("countryid", countryid)
  return (
    <div
      className={`search-form p-3 d-flex justify-content-center align-items-center ${className}`}
      style={style}
    >
      <form className="row  g-2 w-100 justify-content-around">
        {/* Gender Selector */}
        <div className="col-md-1 col-6 ">
          <h1 className="text-sm sm:text-base text-start text-white font-normal">
            I'm looking{" "}
          </h1>
          <div className="" style={{ position: "relative" }}>
            <div className="stdropdown-container ">
              <div
                className="stdropdown-input stsearch-box"
                onClick={() => setGenderDropdownOpen(!isGenderDropdownOpen)}
              >
                {/* set defalut 1st options => man */}
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
          <h1 className="text-sm sm:text-base col-auto text-start text-white font-normal">
            Aged
          </h1>
          <div className="flex items-center">
            <div className="">
              <select
                id="minAgeSelect"
                className="p-2 rounded-lg border border-gray-300 text-dark w-full"
                value={minAge} 
                onChange={handleMinAgeSelect} 
              >
                <option>Min Age</option>
                {ageOptions.map((age, index) => (
                  <option key={index} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>

            <div className="mx-2 text-white">to</div>
            <div className="flex items-center">
              <select
                id="maxAgeSelect"
                className="p-2 rounded-lg border border-dark text-gray-700 w-full"
                value={maxAge}
                onChange={handleMaxAgeSelect}
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
          <h1 className="text-sm sm:text-base text-start text-white font-normal">
            of Religion
          </h1>
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

        {/* Language Select */}
        <div className="col-md-2 col-6">
          <h1 className="text-sm sm:text-base text-start text-white font-normal">
            Mother toungue
          </h1>
          <LanguageSelect placeHolder="Marathi" />
        </div>

        {/* Country Select */}
        <div className="col-md-2 col-6">
          <h1 className="text-sm sm:text-base text-start text-white font-normal">
            Country
          </h1>
          <CountrySelect
            onChange={(e) => {
              setCountryid(e.id);
            }}
            placeHolder="India"
          />
        </div>

        {/* State Select */}
        <div className="col-md-2 col-6">
          <h1 className="text-sm sm:text-base text-start text-white font-normal">
            State
          </h1>
          <StateSelect
            countryid={countryid}
            onChange={(e) => {
              setstateid(e.id);
            }}
            placeHolder="Select State"
          />
        </div>

        {/* Submit Button */}
        <div className="col-md-2 col-6 mx-auto my-2">
          <button type="submit" className="z-0 group rounded relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent data-[pressed=true]:scale-[0.97] outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 px-3 h-8 gap-2 rounded-small [&>svg]:max-w-[theme(spacing.8)] transition-transform-colors-opacity motion-reduce:transition-none data-[hover=true]:opacity-hover min-w-[10rem] mt-2 sm:mt-[1.35rem] bg-[#F80263] text-white font-semibold text-base">Let's Begin</button>
        </div>
      </form>
    </div>
  );
};

export default Enquiries;
