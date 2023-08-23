"use client"
import React, { useState, useEffect } from 'react';
import CreateUser from '@/components/CreateUser/CreateUser';
import axios from 'axios';
import alertStyles from '../../styles/alert.module.css';

const baseUrl = 'http://localhost:8000/api/teacher/';

const initialTeacherData = {
  fullName: '',
  subjectName: '',
  teacherId: '',
  phoneNo: '',
  qualification: '',
  address: '',
  email: '',
  password: '',
  profilePicture: null,
  classTaught: '',
};

const RegisterTeacher = () => {
  const [alertMessage, setAlertMessage] = useState(null);
  const [teacherData, setTeacherData] = useState(initialTeacherData);
  const [profilePictureFile, setProfilePictureFile] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setTeacherData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleProfilePictureChange = (event) => {
    setProfilePictureFile(event.target.files[0]);
  };

  const submitForm = async (event) => {
    event.preventDefault();

    const requiredFields = ['fullName', 'subjectName', 'teacherId', 'phoneNo', 'email', 'password'];
    const hasEmptyFields = requiredFields.some((field) => !teacherData[field]);
    if (hasEmptyFields) {
      setAlertMessage({ message: 'Please fill in all required fields.', type: 'error' });
      return;
    }

    const teacherFormData = new FormData();
    Object.entries(teacherData).forEach(([key, value]) => {
      teacherFormData.append(key, value);
    });

    if (profilePictureFile) {
      teacherFormData.append('profilePicture', profilePictureFile);
    }

    try {
      const response = await axios.post(baseUrl, teacherFormData);
      console.log('Teacher registered successfully!', response.data);
      setTeacherData(initialTeacherData);
      setProfilePictureFile(null);
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
        formTitle={"Teacher Registration Form"}
        fields={[
          {
            label: "Teacher's Name",
            type: 'text',
            placeholder: 'Full Name',
            value: teacherData.fullName,
            name: 'fullName',
            onChange: handleChange,
          },
          {
            label: 'Subject',
            type: 'text',
            placeholder: 'Subject',
            value: teacherData.subjectName,
            name: 'subjectName',
            onChange: handleChange,
          },
          {
            label: 'Classroom',
            type: 'text',
            placeholder: 'class',
            value: teacherData.classTaught,
            name: 'classTaught',
            onChange: handleChange,
          },
          {
            label: 'Teacher ID',
            type: 'text',
            placeholder: 'Teacher ID',
            value: teacherData.teacherId,
            name: 'teacherId',
            onChange: handleChange,
          },
          {
            label: 'Phone Number',
            type: 'tel',
            placeholder: '123-45-678',
            value: teacherData.phoneNo,
            name: 'phoneNo',
            onChange: handleChange,
          },
          {
            label: 'Qualification',
            type: 'text',
            placeholder: "Teacher's qualification",
            value: teacherData.qualification,
            name: 'qualification',
            onChange: handleChange,
          },
          {
            label: 'Address',
            type: 'text',
            placeholder: 'Address',
            value: teacherData.address,
            name: 'address',
            onChange: handleChange,
          },
          {
            label: 'Email',
            type: 'email',
            placeholder: "Enter Teacher's E-mail",
            value: teacherData.email,
            name: 'email',
            onChange: handleChange,
          },
          {
            label: 'Password',
            type: 'password',
            placeholder: 'Password',
            value: teacherData.password,
            name: 'password',
            onChange: handleChange,
          },
        ]}
        profilePicture={{
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

export default RegisterTeacher;
