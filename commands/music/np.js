module.exports = {
  name: "now-playing",
  aliases: ['np'],
  code: `
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$advancedTextSplit[$songInfo[duration]; ;1];{description: 

:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 

$advancedTextSplit[$songInfo[duration_left]; ;3;(;2;);1] Left}{color:00ffff}{thumbnail:$songInfo[thumbnail]}]
$onlyIf[$advancedTextSplit[$songInfo[duration_left]; ;1]>=$sub[$advancedTextSplit[$songInfo[duration]; ;1];$multi[$divide[$advancedTextSplit[$songInfo[duration]; ;1];8];2]];{description: 

▬:radio_button:▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ 

$advancedTextSplit[$songInfo[duration_left]; ;3;(;2;);1] Left}{color:00ffff}{thumbnail:$songInfo[thumbnail]}] `
}