module.exports = {
  name: 'prefix',
  code: `
  $setServerVar[prefix;$message[1]]
  Successfully set the prefix to \`$message[1]\`
  $onlyPerms[admin;You can't use this command!]
  $onlyIf[$message!=;You need to input a prefix]
  `
}