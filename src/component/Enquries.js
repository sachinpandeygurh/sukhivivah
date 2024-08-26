import React, { useState } from 'react';
import { CountrySelect, StateSelect, LanguageSelect, } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const Enquiries = ({ style, className }) => {
    const [gender, setGender] = useState('');
    const [isGenderDropdownOpen, setGenderDropdownOpen] = useState(false);
    const [minAge, setMinAge] = useState('');
    const [maxAge, setMaxAge] = useState('');
    const [isMinAgeDropdownOpen, setMinAgeDropdownOpen] = useState(false);
    const [isMaxAgeDropdownOpen, setMaxAgeDropdownOpen] = useState(false);
    const [selectedReligion, setSelectedReligion] = useState('');
    const [isReligionDropdownOpen, setReligionDropdownOpen] = useState(false);
    const [countryid, setCountryid] = useState(0);
    const [stateid, setstateid] = useState(0);


    const religions = [
        'Hinduism',
        'Islam',
        'Christianity',
        'Sikhism',
        'Buddhism',
        'Jainism',
        'Zoroastrianism',
        'Judaism',
        'Other'
    ];

    const handleReligionSelect = (religion) => {
        setSelectedReligion(religion);
        setReligionDropdownOpen(false);
    };

    const handleMinAgeSelect = (age) => {
        setMinAge(age);
        setMinAgeDropdownOpen(false);
    };

    const handleMaxAgeSelect = (age) => {
        setMaxAge(age);
        setMaxAgeDropdownOpen(false);
    };

    const ageOptions = Array.from({ length: 80 }, (_, i) => i + 18); // Array of ages from 18 to 97

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        setGenderDropdownOpen(false);
    };

    return (
        <div className={`search-form p-3 d-flex justify-content-center align-items-center ${className}`} style={style}>
            <form className="row g-2 w-100 justify-content-around">

                {/* Gender Selector */}
                <div className="col-md-1 col-auto">
                    <div style={{ position: "relative" }}>
                        <div className="stdropdown-container">
                            <div
                                className="stdropdown-input stsearch-box"
                                onClick={() => setGenderDropdownOpen(!isGenderDropdownOpen)}
                            >
                                <input
                                    placeholder="Select Gender"
                                    value={gender}
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
                            {isGenderDropdownOpen && (
                                <div className="stdropdown-menu">
                                    <div
                                        className="stdropdown-item"
                                        onClick={() => handleGenderSelect('Man')}
                                    >
                                        Man
                                    </div>
                                    <div
                                        className="stdropdown-item"
                                        onClick={() => handleGenderSelect('Woman')}
                                    >
                                        Woman
                                    </div>
                                    <div
                                        className="stdropdown-item"
                                        onClick={() => handleGenderSelect('Other')}
                                    >
                                        Other
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Age Selector */}
                <div className="col-md-3 col-auto">
                    <div className="d-flex align-items-center">
                        {/* Minimum Age Selector */}
                        <div style={{ position: "relative" }}>
                            <div className="stdropdown-container">
                                <div
                                    className="stdropdown-input stsearch-box"
                                    onClick={() => setMinAgeDropdownOpen(!isMinAgeDropdownOpen)}
                                >
                                    <input
                                        placeholder="Select Age"
                                        value={minAge}
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
                                {isMinAgeDropdownOpen && (
                                    <div className="stdropdown-menu">
                                        {ageOptions.map(age => (
                                            <div
                                                className="stdropdown-item"
                                                key={age}
                                                onClick={() => handleMinAgeSelect(age)}
                                            >
                                                {age}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        <span className="mx-2">to</span>

                        {/* Maximum Age Selector */}
                        <div style={{ position: "relative" }}>
                            <div className="stdropdown-container">
                                <div
                                    className="stdropdown-input stsearch-box"
                                    onClick={() => setMaxAgeDropdownOpen(!isMaxAgeDropdownOpen)}
                                >
                                    <input
                                        placeholder="Select Age"
                                        value={maxAge}
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
                                {isMaxAgeDropdownOpen && (
                                    <div className="stdropdown-menu">
                                        {ageOptions.map(age => (
                                            <div
                                                className="stdropdown-item"
                                                key={age}
                                                onClick={() => handleMaxAgeSelect(age)}
                                            >
                                                {age}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Religion Selector */}
                <div className="col-md-2 col-auto">
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
                                    {religions.map((religion, index) => (
                                        <div
                                            className="stdropdown-item"
                                            key={index}
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

                {/* City, State, Country Selectors */}
                <div className="col-md-2 col-auto">
                    <CountrySelect
                        onChange={(e) => {
                            setCountryid(e.id);
                        }}
                        placeHolder="Select Country"
                    />
                </div>
                <div className="col-md-2 col-auto">
                    <StateSelect
                        countryid={countryid}
                        onChange={(e) => {
                            setstateid(e.id);
                        }}
                        placeHolder="Select State"
                    />
                </div>
                <div className="col-md-2 col-auto">
                    <LanguageSelect
                        onChange={(e) => {
                            console.log(e);
                        }}
                        placeHolder="Select Language"
                    />
                </div>
                {/* Submit Button */}
                <div className="col-md-2 col-auto mx-auto my-2">
                    <button type="submit" className="btn btn-pink">Let's Begin</button>
                </div>
            </form>
        </div>
    );
};

export default Enquiries;
