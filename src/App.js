import React ,{useEffect, useState}from 'react';
import ButtonComponent from './components/ButtonComponent';
import SearchComponent from './components/Searchcomponent';
import AddPhotoForm from './components/AddPhotoForm';
import ImageItem from './components/ImageItem';
import './App.css'; 
import axios from 'axios';

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [images,setImages]=useState([]);
  const [fetchdata,setfetchdata]=useState(false);
  const handleSearch = (searchTerm) => {
    if (searchTerm.length===0) setfetchdata(!fetchdata);
    else{
      setImages(
        images.filter((image) => {
          return image.label.includes(searchTerm);
        })
      );
    }
  
  
  };



  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (label, imageUrl) => {
 
    axios.post('https://my-unsplash-u1e5.onrender.com/addimage', {label,imageUrl})
      .then(response => {
      
        setfetchdata(!fetchdata);
      })
      .catch(error => {
  
      });
  };

  const handleImageDelete = (id) => {
   axios.request({
    method: 'delete',
    url: `https://my-unsplash-u1e5.onrender.com/deleteimage/${id}`,
  })
    .then(response => {

      setfetchdata(!fetchdata);
    })
    .catch(error => {
    
    });
  };
  useEffect(()=>{
    axios.get("https://my-unsplash-u1e5.onrender.com/images")
    .then(response=>{
      setImages(response.data);
    }).catch(error=>{
      console.error('get request error:', error);
    })
  },[fetchdata])
  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="app-container">
      <div className="top-section">
        <SearchComponent onSearch={handleSearch} />
        <ButtonComponent onClick={handleButtonClick} />
      </div>
      {showForm && (
        <AddPhotoForm onClose={closeForm} onSubmit={handleFormSubmit} />
      )}
      <div className="image-container">
        {images.map((image, index) => (
          <ImageItem
            key={index}
            url={image.Imagurl}
            label={image.label}
            id={image._id}
            onDelete={handleImageDelete}
          />
        ))}
      </div>
    </div>
  );

      }
export default App;