"use strict";
exports.handler = async (event, context) => {
const instagram = require('info-instagram');

const username = event.queryStringParameters.username;
await instagram.authenticate('elyagoubiabdessattar', 'Simou2007');
instagram.getUserData(username).then(info => {

  const data = {
    fullname: info.getFullName(),
    username: info.getUsername(),
    followers: info.getFollowersCount(),
    following: info.getFollowingCount(),
    biographie: info.getBiography(),
    media: info.getMedias(),
    profilePicture: info.getHdProfilePicture()
  };
})
  

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
