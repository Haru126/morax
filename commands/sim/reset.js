module.exports = {
  name:"reset",
  code: `
  $setGlobalUserVar[$message[1];$message[2];$authorID]
  `
}