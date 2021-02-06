import axios from "axios";

export default {
  // Gets all Users
  getUsers: function() {
    return axios.get("/api/user");
  },
  getUser: function(query) {
    return axios.get("/api/user/one",  query);
  },
  // Gets the User with the given id
  signIn: function(userData) {
      
    return axios.post("/login", userData);
  },
  // Deletes the User with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a User to the database
  saveUser: function(userData) {
    return axios.post("/api/user/", userData);
  }
};