module.exports = {
  name: "welcomechannel",
  code: `
$author[Set up complete.;$authorAvatar]
$thumbnail[$userAvatar[$clientid]]
$description[Welcome messages will now be sent to <#$mentionedChannels[1;yes]>]
$setServerVar[welcomechannel;$mentionedChannels[1;yes]]$color[#E8C215]
$onlyPerms[admin;You can't use this comamnd you need \`Administrator\` permission!]
  
  `
}