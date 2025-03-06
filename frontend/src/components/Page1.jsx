import React from 'react';

const Page1 = ({ formData, setFormData, nextPage }) => {
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (formData.name && formData.class && formData.hallTicketNumber && formData.email) {
      nextPage();
    } else {
      alert('Please fill out all fields before proceeding.');
    }
  };

  return (
    <div className="form-step">
      <h2>Step 1: Personal Details</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="class">Class</label>
        <input
          type="text"
          id="class"
          name="class"
          placeholder="Enter your class"
          value={formData.class}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="hallTicketNumber">Hall Ticket Number</label>
        <input
          type="text"
          id="hallTicketNumber"
          name="hallTicketNumber"
          placeholder="Enter your hall ticket number"
          value={formData.hallTicketNumber}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Page1;