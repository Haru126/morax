module.exports = {
  name: "wish",
  code: `
  $if[$getGlobalUserVar[wish;$authorID]<=8]
  $randomText[3;3;3;3;3;3;3;3;3;3;3;3;3;3;3;3;4;3;3;3;3;3;3;3;3;3;3;3;3]
  $setGlobalUserVar[wish;$sum[$getGlobalUserVar[wish;$authorID];1];$authorID]
  $if[$getGlobalUserVar[wish;$authorID]==9]
  $setGlobalUserVar[wish;$sum[$getGlobalUserVar[wish;$authorID];1];$authorID]
  4
   $endif
  $endif
  $if[$getGlobalUserVar[wish;$authorID]==10]
  $setGlobalUserVar[wish;0;$authorID]
  $endif
  `
}