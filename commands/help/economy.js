module.exports = {
  name: "help",
  code: `
  $author[Economy commands;$authorAvatar]
  $thumbnail[$userAvatar[$clientid]]
  $color[#E8C215]
  $description[
  **You want to see how much you have?**
  \`$getServerVar[prefix]bal\`
  
  **You want to see your stuffs?**
  \`$getServerVar[prefix]bag\`
  
  **You want to earn huh**
  \`$getServerVar[prefix]work\`
  
  **Want to do some expedition?**
  \`$getServerVar[prefix]expe\`
  
  **Deposit your mora onhand**
  \`$getServerVar[prefix]depall\`
  
  **Withdraw your mora on inventory**
  \`$getServerVar[prefix]with\` - (*\`$getServerVar[prefix]with\` amount*)
  
  **Paying someone, hmm**
  \`$getServerVar[prefix]gift\` - (*\`$getServerVar[prefix]gift\` @mention amount*)
  
  **Rob someone, hmm**
  \`$getServerVar[prefix]rob\` - (*\`$getServerVar[prefix]rob\` @mention*)
  
  **Buy something?**
  \`$getServerVar[prefix]shop list\`
  
  **You want to try your luck on a slot machine?**
  ~~\`$getServerVar[prefix]slot\`~~
  
  **What about testing it on coin toss.**
  ~~\`$getServerVar[prefix]coin\`~~
  ]
  
  $footer[Requested By: $nickname]

  $onlyIf[$message==economy;]
  `
}