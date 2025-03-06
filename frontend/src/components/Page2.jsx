import React, { useState } from 'react';

const Page2 = ({ formData, setFormData, prevPage, handleSubmit }) => {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });

    // Reset team members when team size changes
    if (name === 'teamSize') {
      const teamSize = parseInt(value, 10);
      const teamMembers = Array.from({ length: teamSize }, () => ({
        name: '',
        email: '',
        phone: '',
      }));
      setFormData((prevData) => ({ ...prevData, teamMembers }));
    }
  };

  const handleTeamMemberChange = (index, field, value) => {
    const updatedMembers = [...formData.teamMembers];
    updatedMembers[index][field] = value;
    setFormData({ ...formData, teamMembers: updatedMembers });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.event) newErrors.event = 'Event is required';
    if (!formData.participantType) newErrors.participantType = 'Participant type is required';

    if (formData.participantType === 'team') {
      if (!formData.teamName) newErrors.teamName = 'Team name is required';
      if (!formData.teamSize) newErrors.teamSize = 'Team size is required';
      formData.teamMembers.forEach((member, index) => {
        if (!member.name) newErrors[`teamMemberName${index}`] = `Member ${index + 1} name is required`;
        if (!member.email) newErrors[`teamMemberEmail${index}`] = `Member ${index + 1} email is required`;
        if (!member.phone) newErrors[`teamMemberPhone${index}`] = `Member ${index + 1} phone is required`;
      });
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      handleSubmit();
    }
  };

  return (
    <div className="form-step">
      <h2>Step 2: Event Details</h2>

      <div className="form-group">
        <label htmlFor="event">Event</label>
        <select
          id="event"
          name="event"
          value={formData.event}
          onChange={handleChange}
          required
        >
          <option value="">Select Event</option>
          <option value="Event 1">Paper Presentation</option>
          <option value="Event 2">Poster Presentation</option>
          <option value="Event 3">Project Expo</option>
          <option value="Event 4">Technical Quiz</option>
          <option value="Event 5">Code Clash</option>
          <option value="Event 6">InnoveteX</option>
          <option value="Event 7">Circuit Design</option>
        </select>
        {errors.event && <span className="error">{errors.event}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="participantType">Participant Type</label>
        <select
          id="participantType"
          name="participantType"
          value={formData.participantType}
          onChange={handleChange}
          required
        >
          <option value="">Select Type</option>
          <option value="individual">Individual</option>
          <option value="team">Team</option>
        </select>
        {errors.participantType && <span className="error">{errors.participantType}</span>}
      </div>

      {formData.participantType === 'team' && (
        <>
          <div className="form-group">
            <label htmlFor="teamName">Team Name</label>
            <input
              type="text"
              id="teamName"
              name="teamName"
              placeholder="Enter team name"
              value={formData.teamName}
              onChange={handleChange}
              required
            />
            {errors.teamName && <span className="error">{errors.teamName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="teamSize">Team Size</label>
            <select
              id="teamSize"
              name="teamSize"
              value={formData.teamSize}
              onChange={handleChange}
              required
            >
              <option value="">Select Team Size</option>
              <option value="2">2 Members</option>
              <option value="3">3 Members</option>
              <option value="4">4 Members</option>
            </select>
            {errors.teamSize && <span className="error">{errors.teamSize}</span>}
          </div>

          <div className="form-group">
            <label>Team Members</label>
            {formData.teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <h4>Member {index + 1}</h4>
                <input
                  type="text"
                  placeholder="Name"
                  value={member.name}
                  onChange={(e) => handleTeamMemberChange(index, 'name', e.target.value)}
                  required
                />
                {errors[`teamMemberName${index}`] && (
                  <span className="error">{errors[`teamMemberName${index}`]}</span>
                )}

                <input
                  type="email"
                  placeholder="Email"
                  value={member.email}
                  onChange={(e) => handleTeamMemberChange(index, 'email', e.target.value)}
                  required
                />
                {errors[`teamMemberEmail${index}`] && (
                  <span className="error">{errors[`teamMemberEmail${index}`]}</span>
                )}

                <input
                  type="tel"
                  placeholder="Phone"
                  value={member.phone}
                  onChange={(e) => handleTeamMemberChange(index, 'phone', e.target.value)}
                  required
                />
                {errors[`teamMemberPhone${index}`] && (
                  <span className="error">{errors[`teamMemberPhone${index}`]}</span>
                )}
              </div>
            ))}
          </div>
        </>
      )}

      <div className="button-group">
        <button onClick={prevPage}>Back</button>
        <button onClick={handleNext}>Submit</button>
      </div>
    </div>
  );
};

export default Page2;