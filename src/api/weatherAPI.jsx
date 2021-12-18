const key = "47191d608ed6f0a1ea0af53a02358c6c";
import axios from "axios";
let apiData;
const apiFunction = (location, setData) => {
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
    )
    .then(function (response) {
      // handle success
      apiData = response;
      console.log(response);
      setData(response);
      return response;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return error;
    });
};

export default apiFunction;
