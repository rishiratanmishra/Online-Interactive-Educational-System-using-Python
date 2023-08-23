"use client"

import React, { useState, useEffect } from 'react';
import CreateUser from '@/components/CreateUser/CreateUser';
import axios from 'axios';
import alertStyles from '../../styles/alert.module.css';

const baseUrl = 'http://localhost:8000/api/student/';

const initialStudentData = {
  fullName: '',
  std: '',
  rollNo: '',
  dob: '', 
  phoneNo: '',
  parentName: '',
  address: '',
  email: '',
  password: '',
  status: '',
};

const RegisterStudent = () => {
  const [alertMessage, setAlertMessage] = useState(null);
  const [studentData, setStudentData] = useState(initialStudentData);
  const [profilePictureFile, setProfilePictureFile] = useState(null); // New state for profile picture

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = (event) => {
    setProfilePictureFile(event.target.files[0]);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    // Check if required fields are empty
    const requiredFields = ['fullName', 'std', 'rollNo', 'phoneNo', 'email', 'password'];
    const hasEmptyFields = requiredFields.some((field) => !studentData[field]);
    if (hasEmptyFields) {
      setAlertMessage({ message: 'Please fill in all required fields.', type: 'error' });
      return;
    }

    const studentFormData = new FormData();
    Object.entries(studentData).forEach(([key, value]) => {
      studentFormData.append(key, value);
    });

    // Append profile picture if available
    if (profilePictureFile) {
      studentFormData.append('profilePicture', profilePictureFile);
    }

    try {
      const response = await axios.post(baseUrl, studentFormData);
      console.log('Student registered successfully!', response.data);
      setStudentData(initialStudentData);
      setProfilePictureFile(null); // Clear profile picture file
      setAlertMessage({ message: 'Form submitted successfully.', type: 'success' });
      
      const profilePictureInput = document.querySelector('input[name="profilePicture"]');
    if (profilePictureInput) {
      profilePictureInput.value = ''; 
    }
    } catch (error) {
      console.error(error);
      setAlertMessage({ message: 'Fill Details Correctly', type: 'error' });
    }
  };

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [alertMessage]);

  return (
    <div>
    <CreateUser
    formTitle={"Student Registration Form"}
    fields={[
      {
        label: "Student's Name",
        type: 'text',
        placeholder: 'Full Name',
        value: studentData.fullName,
        name: 'fullName',
        onChange: handleChange,
      },
      {
        label: 'Class',
        type: 'text',
        placeholder: 'Class',
        value: studentData.std,
        name: 'std',
        onChange: handleChange,
      },
      {
        label: 'Roll No',
        type: 'text',
        placeholder: 'Roll No',
        value: studentData.rollNo,
        name: 'rollNo',
        onChange: handleChange,
      },
      {
        label:'Date of Birth',
        type:'date',
        placeholder:'Date of Birth',
        value:studentData.dob,
        name:'dob',
        onChange:handleChange,
      },
      {
        label: 'Phone Number',
        type: 'tel',
        placeholder: '123-45-678',
        value: studentData.phoneNo,
        name: 'phoneNo',
        onChange: handleChange,
      },
      {
        label: 'Parent Name',
        type: 'text',
        placeholder: "Student's Parent Name",
        value: studentData.parentName,
        name: 'parentName',
        onChange: handleChange,
      },
      {
        label: 'Address',
        type: 'text',
        placeholder: 'Address',
        value: studentData.address,
        name: 'address',
        onChange: handleChange,
      },
      {
        label: 'Email',
        type: 'email',
        placeholder: "Enter Student's E-mail",
        value: studentData.email,
        name: 'email',
        onChange: handleChange,
      },
      {
        label: 'Password',
        type: 'password',
        placeholder: 'Password',
        value: studentData.password,
        name: 'password',
        onChange: handleChange,
      },
    ]}
        profilePicture={{ // Prop for profile picture upload
          label: 'Profile Picture',
          placeholder: 'Upload Profile Picture',
          value: profilePictureFile,
          name: 'profilePicture',
          onChange: handleProfilePictureChange,
        }}
        onSubmit={submitForm}
      />
      {/* Alert message display */}
      {alertMessage && (
        <div className={`${alertStyles.alert} ${alertMessage.type === 'success' ? alertStyles.success : alertStyles.error}`}>
          {alertMessage.message}
        </div>
      )}
    </div>
  );
};

export default RegisterStudent;
