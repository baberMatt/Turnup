import axios from "axios";

export default {
  // Gets all Users
  getUsers: function () {
    return axios.get("/api/user");
  },
  // Gets User by id
  getUser: function (id) {

    return axios.get("/api/user/" + id);
  },
  // Gets User by user name if exists
  getUsername: function (usernameData) {
    var userPublic = { Username : usernameData.Username}
    return axios.post("/api/user/one", userPublic);
  },
  // Gets the User with the given id
  signIn: function (userData) {
    return axios.post("/login", userData);
  },
  // Deletes the User with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Updates the User with the given id
  updateUser: function (id, update) {
    return axios.put("/api/user/" + id, update);
  },
  // Saves a User to the database
  saveUser: function (userData) {
    return axios.post("/api/user/", userData);
  },
  getEvents: function(){
    return axios.get("/api/event")
  },
  saveEvent: function (userData) {
    console.log(userData);
    return axios.post("/api/event/", userData);
  },
  getEventname: function (eventNameData) {
    console.log(eventNameData)
    // var userPublic = { Username : usernameData.Username}
    return axios.post("/api/event/one", eventNameData);
  }
};