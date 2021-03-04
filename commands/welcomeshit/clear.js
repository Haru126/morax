module.exports = {
  name: 'clear',
  code: `
  $deleteIn[3s]
  Deleted \`$message[1]\` messages
  $clear[$message[1]]
  $onlyPerms[managemessages;You can't use this command!]
  `
}