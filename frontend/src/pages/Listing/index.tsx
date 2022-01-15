import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";

function Listing() {

  // useState
  const [pageNumber, setPageNumber] = useState(0);

  // Forma correta: fazendo a requisição dentro de uma hook
  // useEffect
  useEffect(() => {
      axios.get(`${BASE_URL}/movies?size=4&page=1`)
        .then(response => {
          console.log(response.data);
          const data = response.data as MoviePage;
          setPageNumber(data.number);
        }
      );
    }, 
    []
  );



  // Forma errada: deixando a requisição solta no ciclo de vida do componente
  // axios.get(`${BASE_URL}/movies?size=4&page=0`)
        // .then(response => {
          // console.log(response.data);
          // const data = response.data as MoviePage;
          // setPageNumber(data.number);
        // });


  return(
    <>
      <p>{pageNumber}</p>

      <Pagination />

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
      
    </>

  );
}

export default Listing;