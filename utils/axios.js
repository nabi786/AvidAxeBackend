const axios = require("axios");

exports.checkStatus = async (url) => {
  return new Promise((resolve) => {
    (async () => {
      try {
        axios
          .get(url)
          .then((response) => {
            console.log("this is response ", response.status);
            resolve(response.status);
          })
          .catch((error) => {
            if (error.response) {
              resolve(error.response.status);
            } else {
              resolve(200);
            }
          });

          // console.log("this is err", )
      } catch (err) {
        console.log("error ", err);
      }
    })();
  });
};
