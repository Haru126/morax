module.exports = {
  name: "help",
  code:`
  $author[You seek wisdom, very well I shall give it to you;$authorAvatar]
  $description[
  \`$getServerVar[prefix]charrec\` - Building characters

  \`$getServerVar[prefix]arti\` - Artifact routes
  
  \`$getServerVar[prefix]team-comp\` - Team composition guides
   
  \`$getServerVar[prefix]rec-arti\` - Character recommended artifacts
  ]
    $color[#E8C215]
    $footer[USAGE: /charrec, /team-comp etc.]
    $onlyIf[$message==tips;]
  `
}