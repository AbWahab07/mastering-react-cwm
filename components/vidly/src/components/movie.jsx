import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [], // set to empty array to avoid runtime error
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()]; // added _id to fix the key warning in the console
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
    // let { _id } = movie;
    // let movies = this.state.movies;
    // let index = movies.findIndex(m => m._id === _id);
    // movies.splice(index, 1);
    let movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    // console.log("Like Clicked", movie);
    const movies = [...this.state.movies]; // cloning movies array
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePageChange = page => {
    // console.log(page);
    this.setState({ currentPage: page }); // updating the state will result in re-render
  };

  handleGenreSelect = genre => {
    // console.log(genre);
    this.setState({ selectedGenre: genre, currentPage: 1 }); // will result in re-render
  };

  handleSort = sortColumn => {
    //console.log(path);
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
      sortColumn
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id // when selectedGenre and it's id is truthy, only then filter the movies
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  };

  render() {
    return this.renderMovies();
  }

  renderMovies() {
    const { pageSize, currentPage, sortColumn } = this.state;

    if (this.state.movies.length === 0)
      return "There are no movies in the database";

    const { totalCount, data: movies } = this.getPagedData();
    return (
      <div className="container row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p className="m-2">Showing {totalCount} movies in the database</p>
          <MoviesTable
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}
export default Movies;
