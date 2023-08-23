"use client"
import React, { useState, useEffect } from 'react';
import CreateUser from '@/components/CreateUser/CreateUser';
import axios from 'axios';
import alertStyles from '../../styles/alert.module.css';

const baseUrl = 'http://localhost:8000/api/parent/';

const initialParentData = {
  fullName: '',
  childName: '',
  childRollNo: '',
  parentId: '',
  phoneNo: '',
  address: '',
  email: '',
  password: '',
  status: '',
};

const RegisterParent = () => {
  const [alertMessage, setAlertMessage] = useState(null);
  const [parentData, setParentData] = useState(initialParentData);
  const [profilePictureFile, setProfilePictureFile] = useState(null); // New state for profile picture

  const handleChange = (event) => {
    const { name, value } = event.target;
    setParentData((prevData) => ({
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
    const requiredFields = ['fullName', 'childName', 'parentId', 'phoneNo', 'email', 'password'];
    const hasEmptyFields = requiredFields.some((field) => !parentData[field]);
    if (hasEmptyFields) {
      setAlertMessage({ message: 'Please fill in all required fields.', type: 'error' });
      return;
    }

    const parentFormData = new FormData();
    Object.entries(parentData).forEach(([key, value]) => {
      parentFormData.append(key, value);
    });

    // Append profile picture if available
    if (profilePictureFile) {
      parentFormData.append('profilePicture', profilePictureFile);
    }

    try {
      const response = await axios.post(baseUrl, parentFormData);
      console.log('Parent registered successfully!', response.data);
      setParentData(initialParentData);
      setProfilePictureFile(null); // Clear profile picture file
      setAlertMessage({ message: 'Form submitted successfully.', type: 'success' });
    } catch (error) {
      console.error(error);
      setParentData({ 'status': false });
      setAlertMessage({ message: 'Fill Details Correctly', type: 'error' });
    }
  };

  useEffect(() => {
    if (alertMessage) {
      const timer = setTimeout(() => {
        setAlertMessage(null);
      }, 3000);
  
      return () => {
        clearTimeout(timer);
        setProfilePictureFile(null); // Reset profile picture
      };
    }
  }, [alertMessage]);
  

  return (
    <div>
      <CreateUser
        formTitle={"Parent's Registration Form"}
        fields={[
          {
            label: "Parent's Name",
            type: 'text',
            placeholder: "Parent's Full Name",
            value: parentData.fullName,
            name: 'fullName',
            onChange: handleChange,
          },
          {
            label: "Child's Name",
            type: 'text',
            placeholder: "Child's Full Name",
            value: parentData.childName,
            name: 'childName',
            onChange: handleChange,
          },
          {
            label: "Child's Roll No",
            type: 'text',
            placeholder: "Child's Roll No",
            value: parentData.childRollNo,
            name: 'childRollNo',
            onChange: handleChange,
          
          },
          {
            label: 'Parent ID',
            type: 'text',
            placeholder: 'Parent ID',
            value: parentData.parentId,
            name: 'parentId',
            onChange: handleChange,
          },
          {
            label: 'Phone Number',
            type: 'tel',
            placeholder: '123-45-678',
            value: parentData.phoneNo,
            name: 'phoneNo',
            onChange: handleChange,
          },
          
          {
            label: 'Address',
            type: 'text',
            placeholder: 'Address',
            value: parentData.address,
            name: 'address',
            onChange: handleChange,
          },
          {
            label: 'Email',
            type: 'email',
            placeholder: "Enter Parent's E-mail",
            value: parentData.email,
            name: 'email',
            onChange: handleChange,
          },
          {
            label: 'Password',
            type: 'password',
            placeholder: 'Password',
            value: parentData.password,
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
      {alertMessage && (
        <div className={`${alertStyles.alert} ${alertMessage.type === 'success' ? alertStyles.success : alertStyles.error}`}>
          {alertMessage.message}
        </div>
      )}
    </div>
  );
};

export default RegisterParent;
