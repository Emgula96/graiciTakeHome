import { useState, useEffect } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import document1 from '../assets/document1.svg';
import document2 from '../assets/document2.svg';
import FormField from '../components/FormField';
import SectionHeader from '../Components/SectionHeader';

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
    <div className="min-h-screen bg-[#CBD7D0] p-8 relative font-['Jost']">
        {/* HAMBURGER MENU ICON */}
      <div className="absolute top-8 left-8">
        <i className="fas fa-bars text-2xl"></i>
      </div>
      <div className={`max-w-5xl mx-auto mt-16 ${isEditing ? 'bg-transparent border-2 border-dashed' : 'bg-[#FFF3EC]'} rounded-lg shadow-md p-6 border-[#B95319]`}>
        <div className="flex flex-col gap-2 pl-4">
          {/* ID and Icon */}
          <div className="flex justify-between items-center mb-3">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-[#B95319]">ID</h2>
              <i className="fas fa-user text-2xl text-[#B95319]"></i>
            </div>
            <button
              onClick={() => isEditing ? handleSubmit() : setIsEditing(true)}
              className="text-[#B95319] text-xl"
            >
              {isEditing ? <i className="fas fa-check"></i> : <i className="fas fa-pen"></i>}
            </button>
          </div>
          {/* ACCOUNT INFORMATION */}
          <section>
            <SectionHeader title="Account Information" />
            <div className="flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-1">
                <FormField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  isEditing={isEditing}
                  onChange={handleChange}
                />
                <FormField
                  label="Registered Email"
                  name="email"
                  value={formData.email}
                  isEditing={isEditing}
                  onChange={handleChange}
                />
                <FormField
                  label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  isEditing={isEditing}
                  onChange={handleChange}
                />
                <FormField
                  label="Cell Phone Number"
                  name="phone"
                  value={formData.phone}
                  isEditing={isEditing}
                  onChange={handleChange}
                />
              </div>
            </div>
          </section>
          {/* ADDRESS */}
          <section>
            <SectionHeader title="Address" />
            <div className="flex flex-col">
              <FormField
                label="Home Address"
                name="homeAddress"
                value={formData.homeAddress}
                isEditing={isEditing}
                onChange={handleChange}
              />
              <FormField
                label="Mailing Address"
                name="mailingAddress"
                value={formData.mailingAddress}
                isEditing={isEditing}
                onChange={handleChange}
              />
            </div>
          </section>
          {/* PERSONALLY IDENTIFIABLE INFORMATION */} 
          <section>
            <SectionHeader title="Personally Identifiable Information" />
            <div className="flex flex-col">
              <FormField
                label="Social Security Number(SSN)"
                name="ssn"
                value={formData.ssn}
                isEditing={isEditing}
                onChange={handleChange}
              />
              <FormField
                label="Date of Birth"
                name="dob"
                value={formData.dob}
                isEditing={isEditing}
                onChange={handleChange}
              />
              <FormField
                label="Medicare Beneficiary ID (MBI)"
                name="mbi"
                value={formData.mbi}
                isEditing={isEditing}
                onChange={handleChange}
              />
            </div>
          </section>
          {/* DOCUMENTS */}
          <section>
            <SectionHeader title="Documents" />
            <div className="flex items-start gap-4">
              <img src={document1} alt="Document 1" className="w-16 h-16" />
              <img src={document2} alt="Document 2" className="w-16 h-16" />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}