const fs = require("fs");

const configAsString = `const config = {
  BACKPACK_BACKEND: "${process.env.BACKPACK_BACKEND}",
  BACKPACK_FRONTEND: "${process.env.BACKPACK_FRONTEND}",
  EXPERIENCE: "${process.env.EXPERIENCE}",
  AVATAR_ROOM: "${process.env.AVATAR_ROOM}",
  IPFS_GATEWAY: "${process.env.IPFS_GATEWAY}",
};
`;

fs.writeFile("./src/js/config.js", configAsString, (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log("Config written: ", configAsString);
});
