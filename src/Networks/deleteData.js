import axios from "axios";
import { readCookie } from "../../src/utils/readyCookies";
function deleteData(id) {
  console.log("deleteData ", id);
  return axios({
    method: "delete",
    url: "http://localhost:3000/api/v1/todos/" + id,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-User-Email": readCookie("userEmail"),
      "X-User-Token": readCookie("userToken")
    },
    id: id
  })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default deleteData;
