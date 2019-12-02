import axios from "axios";
import { readCookie } from "../../src/utils/readyCookies";
function editData(data, id) {
  console.log("editData ", data);
  return axios({
    method: "put",
    url: "http://localhost:3000/api/v1/todos/" + id,

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-User-Email": readCookie("userEmail"),
      "X-User-Token": readCookie("userToken")
    },
    data: data
  })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default editData;
