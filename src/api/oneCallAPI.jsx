const key = "47191d608ed6f0a1ea0af53a02358c6c";
import axios from "axios";
const apiFunction = (latitude, longitude, setData) => {
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly&appid=${key}`
    )
    .then(function (response) {
      // handle success
      console.log(response);
      setData(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      return error;
    });
};

export default apiFunction;
