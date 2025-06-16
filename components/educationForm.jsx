import { useState } from "react";

export default function EducationForm({ education, setEducation }) {
  const [isAdding, _setAdding] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [_education, _setEducation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    _setEducation({ ..._education, [name]: value });
  };

  const toggleAdding = () => {
    _setEducation({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    });
    setEditingIndex(null);
    _setAdding((prevValue) => {
      return !prevValue;
    });
  };

  const addEducation = () => {
    if (editingIndex !== null) {
      const updatedEducation = [...education];
      updatedEducation[editingIndex] = _education;
      setEducation(updatedEducation);
    } else {
      setEducation([...education, _education]);
    }
    toggleAdding();
  };

  const editEducation = (index) => {
    _setEducation(education[index]);
    setEditingIndex(index);
    _setAdding(true);
  };

  const deleteEducation = () => {
    if (editingIndex !== null) {
      const filteredEducation = education.filter((item, id) => {
        return id !== editingIndex;
      });
      setEducation(filteredEducation);
      toggleAdding();
    }
  };

  return (
    <div className="form" id="education">
      <p className="form-head">Education Details</p>
      {isAdding ? (
        <div>
          <div className="form-fields">
            <div className="form-field">
              <label htmlFor="school">School/University</label>
              <input
                onChange={handleChange}
                type="text"
                name="school"
                id="school"
                value={_education.school}
                placeholder="Enter school name"
              />
            </div>
            <div className="form-field">
              <label htmlFor="degree">Degree</label>
              <input
                type="text"
                name="degree"
                onChange={handleChange}
                id="degree"
                value={_education.degree}
                placeholder="Enter degree"
              />
            </div>
            <div className="form-field">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                value={_education.startDate}
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
                value={_education.endDate}
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
                value={_education.location}
              />
            </div>
            <div className="btn-container">
              {editingIndex !== null && (
                <button onClick={deleteEducation}>Delete</button>
              )}
              <div className="btn-container">
                <button onClick={addEducation}>Submit</button>
                <button onClick={toggleAdding}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <ul className="education-list">
            {education.map((item, index) => {
              return (
                <li
                  className="education-item-list"
                  key={index}
                  onClick={() => editEducation(index)}
                >
                  {item.school}
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
