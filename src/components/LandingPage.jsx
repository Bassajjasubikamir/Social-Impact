import React, { useState } from 'react';


function App() {

  const [formData, setFormData] = useState({
    name: '',
    service: '',
    areaOfResidence: '',
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    const postData = {data:{formData}}
    console.log(postData);

    try {
      console.log(formData);
      const response = await fetch('http://localhost:1337/api/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        console.log('Data sent successfully');
        // Clear the form or show a success message
      } else {
        console.error('Failed to send data');
        // Handle error
      }
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle error
    }
  };


  return (
    <div className="main bg-gray-100 min-h-screen flex items-center justify-center">
      <div className='trans'>
        <div className="minor text-white mx-auto p-6 rounded-lg shadow-md ">
          <h2 className="text-2xl font-semibold mb-4">Service Request Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name='name'
                className="w-full p-2 border rounded-md"
                value={formData.name}
                onChange={handleInputChange}
                placeholder='Moses Musoke'
              />
            </div>
            <div className="mb-4">
              <label htmlFor="serviceNeeded" className="block font-medium mb-1">
                Service Needed
              </label>
              <input
                type="text"
                id="serviceNeeded"
                name='service'
                className="w-full p-2 border rounded-md"
                value={formData.service}
                onChange={handleInputChange}
                placeholder='service needed'
              />
            </div>
            <div className="mb-4">
              <label htmlFor="areaOfResidence" className="block font-medium mb-1">
                Area of Residence
              </label>
              <input
                type="text"
                id="areaOfResidence"
                name='areaOfResidence'
                className="w-full p-2 border rounded-md"
                value={formData.areaOfResidence}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

