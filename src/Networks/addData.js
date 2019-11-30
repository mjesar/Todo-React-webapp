import axios from "axios";
import { readCookie } from "../../src/utils/readyCookies";
import { baseURL } from "./baseURL";
function addData(data) {
  console.log("AddData ", data);
  return axios({
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-User-Email": readCookie("userEmail"),
      "X-User-Token": readCookie("userToken")
    },
    url: baseURL,
    data: data
  })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default addData;
