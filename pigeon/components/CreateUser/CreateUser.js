import React from 'react';

const CreateUser = ({
  formTitle,
  fields,
  profilePicture,
  onSubmit,
  alertMessage,
}) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-semibold mb-4 ">{formTitle}</h2>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {fields.map((field, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <input
                type={field.type}
                className="mt-1 p-2.5 block w-full rounded-lg border border-gray-300 focus:ring focus:ring-purple-500 focus:border-purple-500 outline-none"
                placeholder={field.placeholder}
                value={field.value}
                name={field.name}
                onChange={field.onChange}
                required
              />
            </div>
          ))}

          {profilePicture && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                {profilePicture.label}
              </label>
              <input
                type="file"
                accept="image/*"
                className="mt-1 p-2.5 block w-full rounded-lg border border-gray-300 focus:ring focus:ring-purple-500 focus:border-purple-500 outline-none"
                placeholder={profilePicture.placeholder}
                name={profilePicture.name}
                onChange={profilePicture.onChange}
              />
            </div>
          )}

          {alertMessage && (
            <div
              className={`p-4 mb-4 text-white ${
                alertMessage.type === 'success' ? 'bg-green-500' : 'bg-red-500'
              }`}
            >
              {alertMessage.message}
            </div>
          )}
          <div className="flex md:justify-end sm:justify-center items-end   mt-6">
            <button
              type="submit"
              className="py-2 px-4 bg-purple-900 hover:bg-blue-600 text-white rounded-lg focus:ring focus:ring-blue-300 w-full md:w-auto"
            >
              Submit
              </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default CreateUser;
