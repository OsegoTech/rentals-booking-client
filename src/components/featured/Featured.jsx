import useFetch from "../../hooks/useFetch";
// import { useEffect, useState } from "react";
import "./featured.css";
const Featured = () => {
  // const [data , setData] = useState([]);
  // const [loading, setLoading] = useState(false);

  // Take note
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=Berlin,London,Madrid"
  );
  console.log(data);

  // end of take note
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("http://localhost:8800/api/hotels/countByCity?cities=Berlin,London,Madrid",{
  //   method:"GET"
  // }).then(response => {
  //   if (!response.ok) {
  //     throw new Error('Request failed');
  //   }
  //   return response.json();
  // })
  // .then(data => {
  //   setData(data);
  //   console.log(data);
  // })
  // .catch(error => {
  //   console.error(error);
  // });
  //   setLoading(false);
  // }, []);
  return (
    <div className="featured">
      {loading ? (
        "Loading Please Wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dublin</h1>
              <strong>{data[0]}</strong>
              <h2> properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Madrid</h1>
              <h2>Properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>London</h1>
              <h2> properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
