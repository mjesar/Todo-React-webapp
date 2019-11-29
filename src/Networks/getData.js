import axios from "axios";
import { baseURL } from "./baseURL";
import { readCookie } from "../../src/utils/readyCookies";

function getData() {
  return axios({
    method: "get",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-User-Email": readCookie("userEmail"),
      "X-User-Token": readCookie("userToken")
    },
    url: baseURL
  })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      console.log(error);
    });
}

export default getData;
