const instagram = require('info-instagram');

await instagram.authenticate('elyagoubiabdessattar', 'Simou2007');

exports.handler = async (event, context) => {
  const username = event.queryStringParameters.username;

  instagram.getUserData(username).then(info => {

  const data = {
    fullname: info.getFullName(),
    username: info.getUsername(),
    followers: info.ggetFollowersCount(),
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
