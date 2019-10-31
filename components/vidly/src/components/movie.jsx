import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    movies: [], // set to empty array to avoid runtime error
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
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
    console.log(genre);
  };

  render() {
    return this.renderMovies();
  }

  renderMovies() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (this.state.movies.length === 0)
      return "There are no movies in the database";

    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <div className="container row">
        <div className="col-3">
          <ListGroup
            items={this.state.genres}
            textProperty="name"
            valueProperty="_id"
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p className="m-2">
            Showing {this.state.movies.length} movies in the database
          </p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like
                      liked={movie.liked}
                      onClick={() => this.handleLike(movie)}
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={count}
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
