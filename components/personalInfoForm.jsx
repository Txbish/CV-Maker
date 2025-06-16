export default function PersonalInfoForm({ personalInfo, setPersonalInfo }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  return (
    <div className="form" id="personal-info">
      <p className="form-head">Personal Details</p>
      <div className="form-fields">
        <div className="form-field">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            placeholder="First and last name"
            value={personalInfo.name || ""}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleChange}
            value={personalInfo.email || ""}
            placeholder="Enter email"
          />
        </div>
        <div className="form-field">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            onChange={handleChange}
            placeholder="Enter Phone Number"
            value={personalInfo.phone || ""}
          />
        </div>
        <div className="form-field">
          <label htmlFor="address">Address</label>
          <input
            value={personalInfo.address || ""}
            type="text"
            name="address"
            id="address"
            onChange={handleChange}
            placeholder="City, Country"
          />
        </div>
      </div>
    </div>
  );
}
