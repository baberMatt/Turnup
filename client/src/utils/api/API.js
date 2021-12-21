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
    // console.log("axios user " + update)
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
   
    return axios.post("/api/event/", userData);
  },
  getEventname: function (eventNameData) {
    
    var eventRequest = { eventName : eventNameData.eventName}
    return axios.post("/api/event/one", eventRequest);
  },
  getEventstring: function (eventStringData) {
    
    var eventRequest = { eventString : eventStringData.eventString}
    return axios.post("/api/event/one", eventRequest);
  },
  updateEvent: function (id, update) {
    return axios.put("/api/event/" + id, update);
  },
  deleteEvent: function (id) {
    return axios.delete("/api/event/" + id);
  },
  postProfileImage: function (id, imageData) {
    return axios.post("/api/upload/profileImage/" + id, imageData);
  },

  deleteProfileImage: function (id, imageData) {
    return axios.delete("/api/upload/profileImage/" + id, imageData);
  },

  postEventImage: function (id, imageData) {   
    return axios.post("/api/upload/eventImage/" + id, imageData);
  },
  
  deleteEventImage: function (id, imageData) {
    return axios.delete("/api/upload/eventImage/" + id, imageData);
  },

  // postThumbImage: function (id, imageData) {
  //   return axios.post("/api/upload/eventImage/" + id, imageData);
  // },
  
  // deleteThumbImage: function (id, imageData) {
  //   return axios.delete("/api/upload/eventImage/" + id, imageData);
  // },
};