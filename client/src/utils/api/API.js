import axios from "axios";

export default {
  // Gets all Users
  getUsers: function() {
    return axios.get("/api/user");
  },
  // Gets User by id
  getUser: function(id) {
    
    return axios.get("/api/user/" + id);
  },
  // Gets User by user name if exists
  getUsername: function(query) {
    console.log(query)
    return axios.get("/api/user/", query);
  },
  // Gets the User with the given id
  signIn: function(userData) {
    return axios.post("/login", userData);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Updates the User with the given id
  updateUser: function(id, update) {
    return axios.put("/api/user/" + id, update);
  },
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/user/", userData);
  }
};