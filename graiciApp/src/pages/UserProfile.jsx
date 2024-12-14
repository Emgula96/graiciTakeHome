import { useState, useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    homeAddress: '',
    mailingAddress: '',
    ssn: '',
    dob: '',
    mbi: ''
  })

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('formData')
    console.log('Loading from localStorage:', savedData)
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    localStorage.setItem('formData', JSON.stringify(formData))
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-[#CBD7D0] p-8 relative">
      <div className="absolute top-8 left-8">
        <i className="fas fa-bars text-2xl text-[#B95319]"></i>
      </div>
      <div className={`max-w-5xl mx-auto ${isEditing ? 'bg-transparent border-2 border-dashed' : 'bg-[#FFF3EC]'} rounded-lg shadow-md p-6 border-[#B95319]`}>
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-semibold text-[#B95319]">ID</h2>
            <i className="fas fa-user text-2xl text-[#B95319]"></i>
          </div>
          <button
            onClick={() => isEditing ? handleSubmit() : setIsEditing(true)}
            className="text-[#B95319]"
          >
            {isEditing ? <i className="fas fa-check"></i> : <i className="fas fa-pen"></i>}
          </button>
        </div>

        <div className="flex flex-col gap-6">
          <section>
            <h3 className="text-[#B95319] font-medium mb-3 text-left">Account Information</h3>
            <div className="flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                <div className="flex flex-col md:flex-row md:items-center">
                  <label className="text-sm font-medium w-32 text-left">First Name</label>
                  <div className="flex-1">
                    {isEditing ? (
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-left"
                      />
                    ) : (
                      <span className="block p-2 text-left">{formData.firstName}</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <label className="text-sm font-medium w-40 text-left whitespace-nowrap">Registered Email</label>
                  <div className="flex-1">
                    {isEditing ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-left"
                      />
                    ) : (
                      <span className="block p-2 text-left">{formData.email}</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <label className="text-sm font-medium w-32 text-left">Last Name</label>
                  <div className="flex-1">
                    {isEditing ? (
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-left"
                      />
                    ) : (
                      <span className="block p-2 text-left">{formData.lastName}</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center">
                  <label className="text-sm font-medium w-40 text-left whitespace-nowrap">Cell Phone Number</label>
                  <div className="flex-1">
                    {isEditing ? (
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 border rounded text-left"
                      />
                    ) : (
                      <span className="block p-2 text-left">{formData.phone}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[#B95319] font-medium mb-3 text-left">Address</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="text-sm font-medium w-32 text-left">Home Address</label>
                <div className="flex-1">
                  {isEditing ? (
                    <input
                      type="text"
                      name="homeAddress"
                      value={formData.homeAddress}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-left"
                    />
                  ) : (
                    <span className="block p-2 text-left">{formData.homeAddress}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="text-sm font-medium w-32 text-left whitespace-nowrap">Mailing Address</label>
                <div className="flex-1">
                  {isEditing ? (
                    <input
                      type="text"
                      name="mailingAddress"
                      value={formData.mailingAddress}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-left"
                    />
                  ) : (
                    <span className="block p-2 text-left">{formData.mailingAddress}</span>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[#B95319] font-medium mb-3 text-left">Personally Identifiable Information</h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="text-sm font-medium w-56 text-left whitespace-nowrap">Social Security Number(SSN)</label>
                <div className="flex-1">
                  {isEditing ? (
                    <input
                      type="text"
                      name="ssn"
                      value={formData.ssn}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-left"
                    />
                  ) : (
                    <span className="block p-2 text-left">{formData.ssn}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="text-sm font-medium w-56 text-left">Date of Birth</label>
                <div className="flex-1">
                  {isEditing ? (
                    <input
                      type="text"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-left"
                    />
                  ) : (
                    <span className="block p-2 text-left">{formData.dob}</span>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <label className="text-sm font-medium w-56 text-left whitespace-nowrap">Medicare Beneficiary ID (MBI)</label>
                <div className="flex-1">
                  {isEditing ? (
                    <input
                      type="text"
                      name="mbi"
                      value={formData.mbi}
                      onChange={handleChange}
                      className="w-full p-2 border rounded text-left"
                    />
                  ) : (
                    <span className="block p-2 text-left">{formData.mbi}</span>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-[#B95319] font-medium mb-3 text-left">Documents</h3>
            <div className="flex items-start gap-4 pl-[96px]">
              <div className="w-16 h-16 border rounded flex items-center justify-center">
                <i className="fas fa-file text-3xl text-[#B95319]"></i>
              </div>
              <div className="w-16 h-16 border rounded flex items-center justify-center">
                <i className="fas fa-file text-3xl text-[#B95319]"></i>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}