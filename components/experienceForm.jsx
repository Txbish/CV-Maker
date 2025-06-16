import { useState } from "react";

export default function ExperienceForm({ experience, setExperience }) {
  const [isAdding, _setAdding] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [_experience, _setExperience] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    _setExperience({ ..._experience, [name]: value });
  };

  const toggleAdding = () => {
    _setExperience({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    setEditingIndex(null);
    _setAdding((prevValue) => {
      return !prevValue;
    });
  };

  const addExperience = () => {
    if (editingIndex !== null) {
      const updatedExperience = [...experience];
      updatedExperience[editingIndex] = _experience;
      setExperience(updatedExperience);
    } else {
      setExperience([...experience, _experience]);
    }
    toggleAdding();
  };

  const editExperience = (index) => {
    _setExperience(experience[index]);
    setEditingIndex(index);
    _setAdding(true);
  };

  const deleteExperience = () => {
    if (editingIndex !== null) {
      const filteredExperience = experience.filter((_, id) => {
        return id !== editingIndex;
      });
      setExperience(filteredExperience);
      toggleAdding();
    }
  };

  return (
    <div className="form" id="experience">
      <p className="form-head">Experience Details</p>
      {isAdding ? (
        <div>
          <div className="form-fields">
            <div className="form-field">
              <label htmlFor="company">Company Name</label>
              <input
                onChange={handleChange}
                type="text"
                name="company"
                id="company"
                value={_experience.company}
                placeholder="Enter company name"
              />
            </div>
            <div className="form-field">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                onChange={handleChange}
                id="position"
                value={_experience.position}
                placeholder="Enter Position Title"
              />
            </div>
            <div className="form-field">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                value={_experience.startDate}
                onChange={handleChange}
                name="startDate"
                id="startDate"
              />
            </div>
            <div className="form-field">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                name="endDate"
                onChange={handleChange}
                value={_experience.endDate}
                id="endDate"
              />
            </div>
            <div className="form-field">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                onChange={handleChange}
                id="location"
                value={_experience.location}
              />
            </div>
            <div className="form-field">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                value={_experience.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="btn-container">
              {editingIndex !== null && (
                <button onClick={deleteExperience}>Delete</button>
              )}
              <div className="btn-container">
                <button onClick={addExperience}>Submit</button>
                <button onClick={toggleAdding}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <ul className="education-list">
            {experience.map((item, index) => {
              return (
                <li
                  className="experience-item-list"
                  key={index}
                  onClick={() => editExperience(index)}
                >
                  {item.company}
                </li>
              );
            })}
          </ul>
          <div className="education-add">
            <button onClick={toggleAdding} className="edu-btn">
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
