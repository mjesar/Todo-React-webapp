import axios from "axios";
import { readCookie } from "../../src/utils/readyCookies";

function showData(id) {
    console.log("ID SHOW", id);
    
  return axios({
    method: "get",
    url: "http://localhost:3000/api/v1/todos/" + id,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-User-Email": readCookie("userEmail"),
      "X-User-Token": readCookie("userToken")
    },
  })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default showData;
