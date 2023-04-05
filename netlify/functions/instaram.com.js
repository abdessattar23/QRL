const igScraping = require('instagram-scraping');

exports.handler = async (event, context) => {
  const username = event.queryStringParameters.username;

  const profile = await igScraping.getProfile(username);

  const data = {
    name: profile.name,
    username: profile.username,
    followers: profile.followers,
    following: profile.following,
    posts: profile.posts,
    media: profile.media,
    profilePicture: profile.profilePicUrl
  };

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};
