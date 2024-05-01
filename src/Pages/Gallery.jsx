import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import InfiniteScroll from "react-infinite-scroll-component";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [dataLength, setDataLength] = useState(9);

  useEffect(() => {
    fetch("img.json")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);

  const btnWidth = {
    textAlign: 'center',
    paddingTop: '50px',
    paddingBottom: '100px'
  }

  return (
    <div className="mb-10">
      <Helmet>
        <title>FitPulse | Gallery</title>
      </Helmet>

      <h2 className="text-center my-10 text-2xl lg:text-4xl text-[#920638] font-bold">
        Gallery
      </h2>

      <div className='w-[90%] gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto'>
            {
                gallery.slice(0, dataLength).map(item => 
                (<img key={item.id} src={item.image}></img>))
            }
        </div>
        <div className={dataLength === gallery.length ? 'hidden' : ''} style={btnWidth}>
        <button onClick={()=> setDataLength(gallery.length)} className="text-lg font-semibold mt-5 text-[#920638] py-2 px-7 hover:bg-[#920638] hover:text-white hover:border-[#920638] border-2 border-[#920638]">Show All</button>
      </div>
    </div>
  );
};

export default Gallery;
