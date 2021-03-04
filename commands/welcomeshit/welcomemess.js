module.exports = {
  name: "welcomemessage",
  code: `
  $author[Set up complete;$authorAvatar]
  $setServerVar[welcomemessage;$message]
  $description[You've set the welcome message to $message]
  $thumbnail[$userAvatar[$clientid]]$color[#E8C215]
  $onlyPerms[admin;You can't use this comamnd you need \`Administrator\` permission!]
  `
}