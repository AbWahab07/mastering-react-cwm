import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const apiEndpoint = "http://jsonplaceholder.typicode.com/posts";
class App extends Component {
  state = {
    posts: []
  };

  // async componentDidMount() {
  //   // intially pending state > resolved (success) OR rejected(failure)
  //   const promise = axios.get("http://jsonplaceholder.typicode.com/posts");
  //   // promise.then()
  //   // console.log(promise);
  //   const response = await promise;
  //   console.log(response);
  // }

  // refactored
  async componentDidMount() {
    const { data: posts } = await axios.get(apiEndpoint);
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await axios.post(apiEndpoint, obj);

    // adding
    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = "Updated";

    // sending the entire post object
    // const { data } = await axios.put(`${apiEndpoint}/${post.id}`, post);

    await axios.put(`${apiEndpoint}/${post.id}`, post);

    // updating the UI
    const posts = [...this.state.posts]; // cloned posts array
    const index = posts.indexOf(post); // finding index of the post in the array
    posts[index] = { ...post }; // created new object on the given index
    this.setState({ posts });

    // sending a custom object containing only the properties that should be updated
    // axios.patch(`${apiEndpoint}/${post.id}`, {title: post.title});
    // console.log(data);
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;
    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
      await axios.delete(`${apiEndpoint}/${post.id}`); // deleted from the server
      // throw new Error(""); // simulates error behavior
    } catch (error) {
      alert("Something failed while deleting a post!");
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
