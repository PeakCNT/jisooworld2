import React, { useEffect, useState } from "react";
import SearchBar from "../components/Gallery/SearchBar";
import PhotoGallery from "../components/Gallery/PhotoGallery";
import axios from "axios";
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';



const Gallery = () => {
  const [photo, setPhoto] = useState([]);
  const [showPhoto,setShowPhoto] = useState([])
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jisooworld-api.herokuapp.com/gallery")
      .then((response) => {
        // handle success
        setPhoto(response.data.data);
        setShowPhoto(response.data.data)
        setLoading(false);

      })
      .catch((error) => {
        // handle error
        setLoading(false);
        console.log(error);
      });
  }, []);

  const newPhoto = photo.filter((el) => {
    return el.name.includes(query);
  });

  useEffect(()=>{
    console.log('query', query)
    const tempphoto = photo.filter((el) => {
      return el.name.toLowerCase().includes(query.toLowerCase());
    });

    setShowPhoto(tempphoto)
  },[query])

  useEffect(()=>{

  },[photo])
  const event = () => {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
      setPage((page) => {
        return page + 1;
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", event);
  }, []);


  if (loading) {
    return (
      <div style={{'display':'flex','height':'75vh',justifyContent:'center',alignItems:'center', backgroundImage: 'linear-gradient(to right, #f650a0, #ff9897)'}}>
      <img
      src="https://res.cloudinary.com/dlqpq9wxh/image/upload/v1646379070/Jisooworld/preload_teoqtf.gif"
      alt=""
      style={{maxWidth:'20vw' ,borderRadius:'50%'}}
    />
      </div>
    );
  }

  return (
    <>
      <SearchBar passQuery={setQuery} />
      <PhotoGallery {...showPhoto.slice(0, 9 * page)} />
    </>
  );
};

export default Gallery;
