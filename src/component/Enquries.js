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

    const ageOptions = Array.from({ length: 80 }, (_, i) => i + 18); 

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        setGenderDropdownOpen(false);
    };

    return (
        <div className={`search-form p-3 d-flex justify-content-center align-items-center ${className}`} style={style}>
            <form className="row g-2 w-100 justify-content-around">
            <h1 className="text-sm sm:text-base text-start  text-white font-normal">I'm looking </h1>
                {/* Gender Selector */}
                <div className="col-md-1 col-6">
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
                <div className="col-md-3 col-6">
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

                        <span className="mx-2 text-white">To</span>

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
                <div className="col-md-2 col-6">
                    <CountrySelect
                        onChange={(e) => {
                            setCountryid(e.id);
                        }}
                        placeHolder="Select Country"
                    />
                </div>
                <div className="col-md-2 col-6">
                    <StateSelect
                        countryid={countryid}
                        onChange={(e) => {
                            setstateid(e.id);
                        }}
                        placeHolder="Select State"
                    />
                </div>
                <div className="col-md-2 col-6">
                    <LanguageSelect
                        onChange={(e) => {
                            console.log(e);
                        }}
                        placeHolder="Select Language"
                    />
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


// import React, { useState } from 'react';

// const Enquiries = () => {
//     const [selectedGender, setSelectedGender] = useState('woman');
//     const [ageRange, setAgeRange] = useState({ min: 22, max: 27 });

//     return (
//         <div className="flex items-center justify-center w-full">
//             <div className="absolute top-[55vh] sm:top-[80vh] min-[1220px]:top-[70vh] w-fit sm:max-w-[80vw] flex flex-wrap gap-2 lg:gap-4 items-center justify-center bg-[#0000003d] rounded pb-6 p-3">
//                 <div className="flex items-center justify-center max-w-full gap-1">
//                     <div>
//                         <h1 className="text-sm sm:text-base text-white font-normal">I'm looking for a</h1>
//                         <div className="relative">
//                             <select
//                                 className="bg-default-100 rounded h-8 min-h-8 px-2 rounded-small text-small"
//                                 value={selectedGender}
//                                 onChange={(e) => setSelectedGender(e.target.value)}
//                             >
//                                 <option value="woman">Woman</option>
//                                 <option value="man">Man</option>
//                                 <option value="gay">Gay</option>
//                                 <option value="transgender">Transgender</option>
//                                 <option value="bisexual">Bisexual</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div className="flex justify-center items-center h-fit w-fit max-w-[10rem] gap-1">
//                         <div>
//                             <h1 className="text-sm sm:text-base text-white font-normal">Aged</h1>
//                             <div className="relative">
//                                 <select
//                                     className="bg-default-100 rounded h-8 min-h-8 px-2 rounded-small text-small"
//                                     value={ageRange.min}
//                                     onChange={(e) => setAgeRange({ ...ageRange, min: e.target.value })}
//                                 >
//                                     {[...Array(63)].map((_, i) => (
//                                         <option key={i} value={i + 18}>{i + 18}</option>
//                                     ))}
//                                 </select>
//                             </div>
//                         </div>
//                         <p className="mt-4 text-white">to</p>
//                         <div className="relative mt-4">
//                             <select
//                                 className="bg-default-100 rounded h-8 min-h-8 px-2 rounded-small text-small"
//                                 value={ageRange.max}
//                                 onChange={(e) => setAgeRange({ ...ageRange, max: e.target.value })}
//                             >
//                                 {[...Array(63)].map((_, i) => (
//                                     <option key={i} value={i + 18}>{i + 18}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     </div>
//                     <div>
//                         <h1 className="text-sm sm:text-base text-white font-normal">of religions</h1>
//                         <div className="relative">
//                             <select
//                                 className="bg-default-100 rounded h-8 min-h-8 px-2 rounded-small text-small"
//                                 value={selectedGender}
//                                 onChange={(e) => setSelectedGender(e.target.value)}
//                             >
//                                 <option value="woman">Hindu</option>
//                                 <option value="man">muslim</option>
//                                 <option value="gay">sikkh</option>
//                                 <option value="transgender">Bhai</option>
//                                 <option value="bisexual">basordia</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div>
//                         <h1 className="text-sm sm:text-base text-white font-normal">Mother Tounges</h1>
//                         <div className="relative">
//                             <select
//                                 className="bg-default-100 rounded h-8 min-h-8 px-2 rounded-small text-small"
//                                 value={selectedGender}
//                                 onChange={(e) => setSelectedGender(e.target.value)}
//                             >
//                                 <option value="woman">Hindi</option>
//                                 <option value="man">Man</option>
//                                 <option value="gay">Gay</option>
//                                 <option value="transgender">Transgender</option>
//                                 <option value="bisexual">Bisexual</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div>
//                         <h1 className="text-sm sm:text-base text-white font-normal">Country state</h1>
//                         <div className="relative">
//                             <select
//                                 className="bg-default-100 rounded h-8 min-h-8 px-2 rounded-small text-small"
//                                 value={selectedGender}
//                                 onChange={(e) => setSelectedGender(e.target.value)}
//                             >
//                                 <option value="woman">Woman</option>
//                                 <option value="man">Man</option>
//                                 <option value="gay">Gay</option>
//                                 <option value="transgender">Transgender</option>
//                                 <option value="bisexual">Bisexual</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div>
//                         <h1 className="text-sm sm:text-base text-white font-normal">State</h1>
//                         <div className="relative">
//                             <select
//                                 className="bg-default-100 rounded h-8 min-h-8 px-2 rounded-small text-small"
//                                 value={selectedGender}
//                                 onChange={(e) => setSelectedGender(e.target.value)}
//                             >
//                                 <option value="woman">Woman</option>
//                                 <option value="man">Man</option>
//                                 <option value="gay">Gay</option>
//                                 <option value="transgender">Transgender</option>
//                                 <option value="bisexual">Bisexual</option>
//                             </select>
//                         </div>
//                     </div>
//                    <div className="col-md-2 col-6 mx-auto my-2">
//                    <button type="submit" className="btn btn-pink">Let's Begin</button>
//                </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Enquiries;
