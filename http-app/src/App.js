import React, { Component } from "react";
import http from "http";
import http from "./services/httpService";
import "./App.css";

const apiEndpoint = "http://jsonplaceholder.typicode.com/posts";
class App extends Component {
  state = {
    posts: []
  };

  // refactored
  async componentDidMount() {
    const { data: posts } = await http.get(apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(apiEndpoint, obj);

    // adding
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = "Updated";

    await http.put(`${apiEndpoint}/${post.id}`, post);

    // updating the UI
    const posts = [...this.state.posts]; // cloned posts array
    const index = posts.indexOf(post); // finding index of the post in the array
    posts[index] = { ...post }; // created new object on the given index
    this.setState({ posts });
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
      await http.delete(`${apiEndpoint}/${post.id}`);
    } catch (error) {
      if (error.response && error.response.status === 404)
        alert("This post has already been deleted.");
      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default App;
