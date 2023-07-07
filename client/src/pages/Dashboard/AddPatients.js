import React, { useState } from 'react';

const AddPatients = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [sex, setSex] = useState('Please Select');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new patient object with the entered details
   

    // Perform any additional logic (e.g., API call to add the patient to the database)

    // Reset the form fields
    setFirstName('');
    setLastName('');
    setDay('');
    setMonth('');
    setYear('');
    setSex('Please Select');
    setContactNumber('');
    setEmail('');
    setAddress('');

    // Redirect to the '/patients' route or update the patient list state
  };

  // Options for the date dropdown (1-31)
  const dateOptions = Array.from({ length: 31 }, (_, index) => index + 1);

  // Options for the month dropdown (January-December)
  const monthOptions = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Options for the year dropdown (1900-2023)
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: currentYear - 1900 + 1 }, (_, index) => currentYear - index);


  return (
    <div className="pt-10 px-5 w-[70vw] p-4">
      <form onSubmit={handleSubmit}>
        <div className='flex space-x-3'>
            <div className='font-medium py-3 text-lg'>Name</div>
            <div className="flex flex-col mb-4 pl-[14vw]">
            <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border border-gray-300 p-2 rounded"
            />
            <label htmlFor="firstName" className="mb-2 text-gray-500 font-medium">
                First Name
            </label>
            </div>
            <div className="flex flex-col mb-4">
           
            <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border border-gray-300 p-2 rounded"
            />
             <label htmlFor="lastName" className="mb-2 text-gray-500 font-medium">
                Last Name
            </label>
            </div>
        </div>
        
        <div className='grid grid-cols-4 justify-between'>
          <div className='font-medium py-3 text-lg'>Date of Birth</div>
          <div className="flex mx-5 flex-col mb-4">
            <select
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="border border-gray-300 p-2 rounded w-[15vw]"
            >
              {dateOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <label htmlFor="day" className="mb-2 font-medium text-gray-500">
              Day
            </label>
          </div>
          <div className="flex mx-5 flex-col mb-4">
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="border border-gray-300 p-2 rounded w-[15vw]"
            >
              {monthOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <label htmlFor="month" className="mb-2 font-medium text-gray-500">
              Month
            </label>
          </div>
          <div className="flex mx-5 flex-col mb-4">
            <select
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="border border-gray-300 p-2 rounded w-[15vw]"
            >
              {yearOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <label htmlFor="year" className="mb-2 font-medium text-gray-500">
              Year
            </label>
          </div>
        </div>
        

        <div className="flex items-center space-x-[16vw] mb-4">
            <div className='font-medium py-3 text-lg'>Sex</div>
          <select
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="border border-gray-300 p-3 rounded w-full"
          >
            <option>Please Select</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="contactNumber" className="font-medium py-3 text-lg">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            value={contactNumber}
            minLength={10}
            maxLength={10}
            onChange={(e) => setContactNumber(e.target.value)}
            className="border border-gray-300 p-2 rounded w-[49vw]"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="email" className="font-medium py-3 text-lg">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded w-[49vw]"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="address" className="font-medium py-3 text-lg">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border border-gray-300 p-2 rounded w-[49vw]"
          />
        </div>
        <div className='text-center my-[5vh]'>
        <button
          type="submit"
          className="md:py-3 md:px-10 py-2 px-8 bg-[#455B5D] text-white md:text-[25px] text-[15px] rounded-[6px] shadow"
        >
          Add Patient
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddPatients;
