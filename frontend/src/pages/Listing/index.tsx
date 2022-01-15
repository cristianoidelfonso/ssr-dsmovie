import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";

function Listing() {

  // useState
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>(
    {
      content: [],
      last: true,
      totalPages: 0,
      totalElements: 0,
      size: 8,
      number: 0,
      first: true,
      numberOfElements: 0,
      empty: true,
    }
  );

  // Forma correta: fazendo a requisição dentro de uma hook
  // useEffect
  useEffect(() => {
    axios.get(`${BASE_URL}/movies?size=${page.size}&page=${pageNumber}`)
      .then(response => {
        // console.log(response.data);
        // setPageNumber(data.number);
        const data = response.data as MoviePage;
        setPage(data);
      }
      );
  },
    [pageNumber]
  );

  const handlePageChange = (newNumber: number) => {
    setPageNumber(newNumber);
  }

  // Forma errada: deixando a requisição solta no ciclo de vida do componente
  // axios.get(`${BASE_URL}/movies?size=4&page=0`)
  // .then(response => {
  // console.log(response.data);
  // const data = response.data as MoviePage;
  // setPageNumber(data.number);
  // });


  return (
    <>
      <Pagination page={page} onChange={handlePageChange} />

      <div className="container">
        <div className="row">

          {page.content.map(item => {
                return (
                  <div key={item.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                    <MovieCard movie={item} />
                  </div>
                )
              }
            )
          }

        </div>
      </div>

    </>

  );
}

export default Listing;