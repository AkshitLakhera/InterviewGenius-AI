import { useState } from "react"
import axios from "axios";

export const Uploadbtn = () => {
  const [file, setFile] = useState<File | null>(null); // state can we null or  file initially it is null
  const handleFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.files && event.target.files.length >0){
      setFile(event.target.files[0])
    }
  }
  const uploadFile = async () => {
    if(!file){
      alert("Please select a file");
      return;
    }
    const formData = new FormData();
    formData.append('file',file);
    // Upload request
    try {
      const response = await axios.post('http://localhost:3000/resumes/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data); // Log the response for debugging
      alert('File uploaded successfully.');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file.');
    }
  };
  const extractData = async()=>{
    try{
      const response = axios.get('http://localhost:3000/resumes/extract');
      const data = await response;
      console.log(data)
    }catch(error){
        console.error("Error while extracting the data", error)
    }
  } 
  return (
    <div className="flex flex-col justify-center items-center">
    <input type="file"  accept=".pdf" onChange={handleFileChange}/>
    <div className="btns p-5">
    <button type="button" onClick={uploadFile} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Upload resume</button>
    <button type="button" onClick={extractData} className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Extract data</button>
    </div>
  </div>
 )
  }