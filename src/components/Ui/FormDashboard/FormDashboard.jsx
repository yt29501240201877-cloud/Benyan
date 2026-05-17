import { useEffect, useState } from "react";

const initialFormData = {
  email: "",
  password: "",
  isChecked: false,
};

export default function FormDashboard({ setDraftStatus }) {
  const [formData, setFormData] = useState(initialFormData);

  const isDraft =
    formData.email.trim() !== "" ||
    formData.password.trim() !== "" ||
    formData.isChecked;

  useEffect(() => {
    if (setDraftStatus) {
      setDraftStatus(isDraft);
    }

    return () => {
      if (setDraftStatus) {
        setDraftStatus(false);
      }
    };
  }, [isDraft, setDraftStatus]);

  function handleChange(event) {
    const { id, type, checked, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: type === "checkbox" ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container py-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} aria-describedby="emailHelp"/>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange}/>
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="isChecked" checked={formData.isChecked} onChange={handleChange}/>
          <label className="form-check-label" htmlFor="isChecked">Check me out</label>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
