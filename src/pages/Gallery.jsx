import React, { useEffect, useState } from "react";
import SearchBar from "../components/Gallery/SearchBar";
import PhotoGallery from "../components/Gallery/PhotoGallery";
import axios from "axios";

const Gallery = () => {
  const [photo, setPhoto] = useState([]);
  const [showPhoto,setShowPhoto] = useState([])
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4000/gallery")
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
      <div className="loading">
        <img
          src="https://res.cloudinary.com/dlqpq9wxh/image/upload/v1646379070/Jisooworld/preload_teoqtf.gif"
          alt=""
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
