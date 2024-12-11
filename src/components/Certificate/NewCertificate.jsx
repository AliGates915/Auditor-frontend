/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
// import axios from "axios";
import { Link } from 'react-router-dom'
import { FadeLoader } from 'react-spinners';

// import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

function NewCertificatesBody() {

  const [pictureUrl, setPictureUrl] = useState("");
  const [file, setFile] = useState(null);

  const [ownerCode, setOwnerCode] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [address, setAddress] = useState('');
  const [cinc, setCNIC] = useState('');
  const [city, setCity] = useState('');



  const [Loading, setLoading] = useState(false);

  // Handle form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // const formData = {
    //     ownerCode,
    //     regDate,
    //     ownerName,
    //     fatherName,
    //     cinc,
    //     address,
    //     city,
    //     mobileNo,
    //     phone,
    //     profession,
    //     selectedRegistration,
    //     carType: selectedVehicle.carType,
    //     carModel: selectedVehicle.carModel,
    //     carMake: selectedVehicle.carMake,
    //     profilePhotoUrl: pictureUrl, // Image URL from Cloudinary
    // };

    try {

      // Optional: Simulated delay for UX purposes (optional)
      setTimeout(() => {
        setLoading(false);
        alert('Data saved successfully!');
        resetForm()
      }, 2000);

    } catch (error) {
      console.error(
        'Error:',
        error.response?.data || error.message // Log detailed error message
      );
      alert(error.response?.data?.message || "An error occurred. Please try again.");
      setLoading(false); // Ensure loading is stopped in case of an error
    }
  };




  // picture upload on the cloudinary 
  // const handleUpload = async (e) => {
  //     e.preventDefault();

  //     if (!file) {
  //         console.error("No file selected");
  //         return;
  //     }

  //     try {
  //         // Create a FormData object
  //         const data = new FormData();
  //         data.append("file", file);
  //         data.append("upload_preset", "upload"); // Cloudinary preset

  //         // Upload to Cloudinary
  //         const uploadRes = await axios.post(
  //             "https://api.cloudinary.com/v1_1/daexycwc7/image/upload",
  //             data
  //         );

  //         // Get the uploaded image URL
  //         const imageUrl = uploadRes.data.secure_url;

  //         // Update the state with the uploaded image URL
  //         setPictureUrl(imageUrl);

  //         // Reset the file input
  //         setFile(null);
  //     } catch (err) {
  //         console.error("Error uploading image:", err);
  //     }
  // };

  // Reset form fields
  const resetForm = () => {
    setFile(null);
    setOwnerCode('');
    setOwnerName('');
    setFatherName('');
    setAddress('');
    setCNIC('');
    setCity('');
    setPictureUrl('')

  };





  return (
    <>
      <nav className='flex justify-between my-4 mx-10'>
        <div className='text-2xl font-extrabold text-[#0096FF] tracking-wide '>
          Add New Certificate Body
        </div>

        <Link to='/certification-bodies'>
          <button className='bg-[#0096FF] font-extrabold px-2 py-1 rounded-full transition-all duration-300 
                text-xl text-white tracking-wide flex items-center justify-center hover:bg-[#4a32b3] 
               hover:scale-105 hover:shadow-lg hover:shadow-[#0096FF]/80'
          >
            ➡
          </button>
        </Link>

      </nav>
      <hr className='bg-gray-400 mb-4' />

      <div className="bg-white mx-auto w-[44rem] border my-4 p-6 shadow-xl rounded-md z-50 relative">
        {Loading ? (
          <div className=" flex justify-center mt-48 min-h-screen">
            <FadeLoader
              color="#0095ff"
              radius={2}
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-3 space-y-6">
            {/* Top Section: Company ID and Logo */}
            <div className="flex justify-between items-start">
              {/* Company code */}
              <div className="w-1/2">
                <label className="block text-gray-700 font-semibold mb-2">Company Code</label>
                <input
                  type="text"
                  readOnly
                  className="w-[12rem] bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
                  value={ownerCode}
                />
              </div>

              {/* Logo Image */}
              <div className="absolute right-10">
                <label
                  htmlFor="file"
                  className="flex items-center cursor-pointer 
                  text-gray-800 font-semibold"
                >
                  Logo Image
                </label>
                <input
                  type="file"
                  id="file"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
                {/* Image Preview */}
                <div className="absolute">
                  <img
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : pictureUrl || "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt="Logo Preview"
                    className=" object-cover rounded-full border border-gray-300"
                  />
                </div>
              </div>
            </div>

            {/* Main Fields Section */}
            <div className="grid grid-cols-8 gap-3">
              {/* Company Name */}
              <div className="col-span-4">
                <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter Company Name"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                />
              </div>


            </div>
            {/* Company Address */}
            <div className="col-span-4">
              <label className="block text-gray-700 font-semibold mb-2">Company Address</label>
              <input
                type="text"
                className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter Company Address"
                value={fatherName}
                onChange={(e) => setFatherName(e.target.value)}
              />
            </div>
            {/* Additional Fields */}
            <div className="grid grid-cols-8 gap-3 mt-4">
              {/* Phone No. */}
              <div className="col-span-4">
                <label className="block text-gray-700 font-semibold mb-2">Phone No.</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter Phone No."
                  value={cinc}
                  onChange={(e) => setCNIC(e.target.value)}
                />
              </div>

              {/* Website */}
              <div className="col-span-4">
                <label className="block text-gray-700 font-semibold mb-2">Website</label>
                <input
                  type="text"
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter Website"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-4">
              <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
              <input
                type="text"
                className="w-[20rem] bg-white border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter Email Address"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-[#0096FF] text-white font-bold py-2 px-6 rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                Save
              </button>
            </div>
          </form>

        )}
      </div>
    </>
  );
}

export default NewCertificatesBody;
