const adminData = (module.exports = {
  logedInUsers: [],
  latestSearchs: [],
  addLogedInUser: function (name, lastName) {
    console.log("addLogedInUser");
    console.log(name);
    console.log(lastName);
    adminData.logedInUsers.push(name + " " + lastName);
  },
  addSearch: function (search) {
    console.log("addSearch");
    console.log(search);
    adminData.latestSearchs.push(search);
  },
  getLogedInUsers: function () {
    return adminData.logedInUsers;
  },
  getLatestSearchs: function () {
    return adminData.latestSearchs;
  },
});
