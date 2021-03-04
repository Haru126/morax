const Discord = require("discord.js");
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "eu02-sql.pebblehost.com",
  user: "customer_166639_morax",
  password: "-2dCmgj@RBVl@Zg9xJW7",
  database: "customer_166639_morax"
});
const prefix = require("discord-prefix");
module.exports = {
  name: "shop",
  description: "",
  execute(message, args) {
    const king = "815151875753639956";
    const jarl = "815151834670694420";
    const ulfsark = "815151789400653845";
    const berserker = "815151742739808277";
    const hird = "815151704466784276";
    const heisir = "815151641988431893";
    const thegn = "815151599575105558";
    const dreng = "815151526162464778";
    const huskarl = "815151373267238932";
    const skald = "815151093847687190";
    const thrall = "815150972854468628";
    const einherjar = "815166107031699476";

    let field1 = [
      "expeTicket - `10,000` <:mora:808492540100608041>",
      "Huskarl - `275,000` <:mora:808492540100608041>",
      "Berserker - `700,000` <:mora:808492540100608041>"
    ];
    let value1 = [
      "*expeTicket <:expi:814706396653813831> is used for expedition*",
      "*Gives you the role `Huskarl`*",
      "*Gives you the role `Berserker`*"
    ];
    let field2 = [
      "raffleticket - `20` <:iron1:814675545441697802>",
      "Dreng - `350,000` <:mora:808492540100608041>",
      "Ulfsark  - `850,000` <:mora:808492540100608041>"
    ];
    let value2 = [
      "*Gives you <:raffle:814706156836225066> to have one entry in our monthly raffle*",
      "*Gives you the role `Dreng`*",
      "*Gives you the role `Ulfsark`*"
    ];
    let field3 = [
      "blessingore - `20` <:crystal:814675697787600917>",
      "Thegn - `400,000` <:mora:808492540100608041>",
      "Jarl - `1,000,000` <:mora:808492540100608041>"
    ];
    let value3 = [
      "*Can redeem Blessing of Welkin Moon ! Only 2 members per month can redeem*",
      "*Gives you the role `Thegn` and Ability to Harvest Crystal*",
      "*Gives you the role `Jarl`*"
    ];
    let field4 = [
      "Thrall - Free",
      "Heisir - `500,000` <:mora:808492540100608041>",
      "King - `1,500,000` <:mora:808492540100608041>"
    ];
    let value4 = [
      "*Gives you the role `Thrall`*",
      "*Gives you the role `Heisir`*",
      "*Gives you the role `King` and Ability to Rob*"
    ];
    let field5 = [
      "Skald - `200,000` <:mora:808492540100608041>",
      "Hird - `650,000` <:mora:808492540100608041>",
      "Einherjar - `2,000,000` <:mora:808492540100608041>"
    ];
    let value5 = [
      "*Gives you the role `Skald`*",
      "*Gives you the role `Hird`*",
      "*Gives you the role `Einherjar'*"
    ];
    let page = 1;
    const haverole = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setDescription(`You already this role!`)
      .setColor('#E8c215')
    const nofundsembed = new Discord.MessageEmbed()
      .setAuthor("Insufficient Funds!", message.author.displayAvatarURL())
      .setColor("#E8C215");
    const { guild } = message;
    const guildmem = guild.members.cache.get(message.author.id);
    var userId = message.author.id;
    let guildPrefix = prefix.getPrefix(message.guild.id);
    var username = message.author.username;
    var displayAvatarURL = message.author.displayAvatarURL();
    if (args[0] === "list") {
      const embed = new Discord.MessageEmbed()
        .setAuthor("Shop list", message.guild.iconURL())
        .setDescription("**Items you can buy! just type shop {itemname}**")
        .addFields(
          { name: field1[page - 1], value: value1[page - 1] },
          {
            name: field2[page - 1],
            value: value2[page - 1]
          },
          {
            name: field3[page - 1],
            value: value3[page - 1]
          },
          {
            name: field4[page - 1],
            value: value4[page - 1]
          },
          {
            name: field5[page - 1],
            value: value5[page - 1]
          }
        )
        .setTimestamp()
        .setColor("#E8C215")
        .setFooter(username, displayAvatarURL);
      message.channel.send(embed).then(msg => {
        msg.react("◀").then(r => {
          msg.react("▶");

          const backwardFilter = (reaction, user) =>
            reaction.emoji.name === "◀" && user.id === message.author.id;
          const forwardFilter = (reaction, user) =>
            reaction.emoji.name === "▶" && user.id === message.author.id;

          const backward = msg.createReactionCollector(backwardFilter, {
            time: 60000
          });
          const forward = msg.createReactionCollector(forwardFilter, {
            time: 60000
          });

          backward.on("collect", r => {
            if (page === 1) return;
            page--;
            embed.fields = [];
            msg.edit(embed);
            embed.setAuthor(message.guild.name);
            embed.setTitle("Shop List");
            embed.setDescription(
              "**Items you can buy! just type shop {itemname}**"
            );
            embed.addFields(
              { name: field1[page - 1], value: value1[page - 1] },
              {
                name: field2[page - 1],
                value: value2[page - 1]
              },
              {
                name: field3[page - 1],
                value: value3[page - 1]
              },
              {
                name: field4[page - 1],
                value: value4[page - 1]
              },
              {
                name: field5[page - 1],
                value: value5[page - 1]
              }
            );
            embed.setTimestamp();
            embed.setColor("#E8C215");
            embed.setFooter(username, displayAvatarURL);

            msg.edit(embed);
            msg.reactions.cache
              .find(r => r.emoji.name == "◀")
              .users.remove(message.author.id);
          });
          forward.on("collect", r => {
            if (page === field1.length) return;
            page++;
            embed.fields = [];
            msg.edit(embed);
            embed.setAuthor(message.guild.name);
            embed.setTitle("Shop List");
            embed.setDescription(
              "**Items you can buy! just type shop {itemname}**"
            );
            embed.addFields(
              { name: field1[page - 1], value: value1[page - 1] },
              {
                name: field2[page - 1],
                value: value2[page - 1]
              },
              {
                name: field3[page - 1],
                value: value3[page - 1]
              },
              {
                name: field4[page - 1],
                value: value4[page - 1]
              },
              {
                name: field5[page - 1],
                value: value5[page - 1]
              }
            );
            embed.setTimestamp();
            embed.setColor("#E8C215");
            embed.setFooter(username, displayAvatarURL);
            msg.reactions.cache
              .find(r => r.emoji.name == "▶")
              .users.remove(message.author.id);
            msg.edit(embed);
          });
        });
      });
    } else {
      db.query(
        "SELECT * FROM Economy where userid = " + message.author.id,
        (err, rows) => {
          if (rows.length < 1) {
            const embed = new Discord.MessageEmbed()
              .setAuthor("No Currency yet! try using the work function")
              .setColor("#E8C215");
            message.channel.send(embed);
          } else {
            db.query(
              "SELECT * FROM Inventory where UserId = " + message.author.id,
              (err, rows2) => {
                if (rows2.length < 1) {
                  const embed = new Discord.MessageEmbed()
                    .setAuthor("Creating inventory space. Please Try Again!")
                    .setColor("#E8C215");
                  message.channel.send(embed);

                  let sql =
                    "INSERT INTO Inventory (UserId, ServerId) VALUES ('" +
                    message.author.id +
                    "','" +
                    message.guild.id +
                    "')";
                  db.query(sql, console.log);
                } else {
                  var mora = rows[0].mora;
                  var mineTicket = parseFloat(rows2[0].MineTicket);
                  var RaffleTicket = parseFloat(rows2[0].RaffleTicket);
                  var BlessingOre = parseFloat(rows2[0].BlessingOre);
                  var IronChunk = parseFloat(rows2[0].IronChunk);
                  var Crystal = parseFloat(rows2[0].Crystal);

                  var isSuccess = false;
                  var isExist = true;
                  let sqlEconomy;
                  let sqlInventory;

                  if (args[0] === "expeTicket") {
                    if (mora >= 5000) {
                      isSuccess = true;
                      mora = mora - 5000;
                      mineTicket = mineTicket + 1;
                      sqlEconomy =
                        "UPDATE Economy SET" +
                        " mora=" +
                        mora +
                        " WHERE userid='" +
                        message.author.id +
                        "'";
                      sqlInventory =
                        "UPDATE Inventory SET" +
                        " MineTicket=" +
                        mineTicket +
                        " WHERE userid='" +
                        message.author.id +
                        "'";
                    }
                  } else if (args[0] === "raffleticket") {
                    if (IronChunk >= 20) {
                      isSuccess = true;
                      IronChunk = IronChunk - 20;
                      RaffleTicket = RaffleTicket + 1;
                      sqlInventory =
                        "UPDATE Inventory SET" +
                        " RaffleTicket=" +
                        RaffleTicket +
                        "," +
                        " IronChunk=" +
                        IronChunk +
                        " WHERE userid='" +
                        message.author.id +
                        "'";
                    }
                  } else if (args[0] === "blessingore") {
                    if (Crystal >= 20) {
                      isSuccess = true;
                      Crystal = Crystal - 20;
                      BlessingOre = BlessingOre + 1;
                      sqlInventory =
                        "UPDATE Inventory SET" +
                        " BlessingOre=" +
                        BlessingOre +
                        "," +
                        " Crystal=" +
                        Crystal +
                        " WHERE userid='" +
                        message.author.id +
                        "'";
                    }
                  } else if (args[0] === "thrall") {
                    if (guildmem.roles.cache.get(thrall)) {
                      message.channel.send(haverole);
                    } else if (mora >= 0) {
                      isSuccess = true;
                      mora = mora - 0;
                      sqlEconomy =
                        "UPDATE Economy SET" +
                        " mora=" +
                        mora +
                        " WHERE userid='" +
                        message.author.id +
                        "'";
                      guildmem.roles.add(thrall);
                    }
                  } else if (args[0] === "skald") {
                    if(guildmem.roles.cache.get(skald)){
                      message.channel.send(haverole)
                    }
                    else if (!guildmem.roles.cache.get(thrall)) {
                      const embed = new Discord.MessageEmbed()
                        .setAuthor(
                          message.author.tag,
                          message.author.displayAvatarURL()
                        )
                        .setDescription(
                          `You need to get **Thrall** role first before getting skald!`
                        )
                        .setColor("#E8C215");
                      message.channel.send(embed);
                    } else if (mora >= 200000) {
                      isSuccess = true;
                      mora = mora - 200000;
                      sqlEconomy =
                        "UPDATE Economy SET" +
                        " mora=" +
                        mora +
                        " WHERE userid='" +
                        message.author.id +
                        "'";
                      guildmem.roles.add(skald);
                    } else {
                      message.channel.send(nofundsembed);
                    }
                  } else if (args[0] === "huskarl") {
                    if (!guildmem.roles.cache.get(skald)) {
                      const embed = new Discord.MessageEmbed()
                        .setAuthor(
                          message.author.tag,
                          message.author.displayAvatarURL()
                        )
                        .setDescription(
                          `You need to get **Skald** role first before getting Huskarl!`
                        )
                        .setColor("#E8C215");
                      message.channel.send(embed);
                    } else if(guildmem.roles.cache.get(huskarl)){
                      message.channel.send(haverole)
                    } else if(mora >= 275000){
                      isSuccess = true;
                      mora = mora - 275000;
                      sqlEconomy = 
                        "UPDATE Economy SET" +
                        "mora=" +
                        mora +
                        "WHERE userid='" +
                        message.author.id +
                        "'";
                      guildmem.roles.add(huskarl)
                    } else {
                      message.channel.send(nofundsembed)
                    }
                  } else if (args[0] === "dreng") {
                    if (!guildmem.roles.cache.get(huskarl)) {
                      const embed = new Discord.MessageEmbed()
                        .setAuthor(
                          message.author.tag,
                          message.author.displayAvatarURL()
                        )
                        .setDescription(
                          `You need to get **Huskarl** role first before getting Dreng!`
                        )
                        .setColor("#E8C215");
                      message.channel.send(embed);
                    } else if(guildmem.roles.cache.get(dreng)){
                      message.channel.send(haverole)
                    } else if(mora >= 350000){
                      isSuccess = true;
                      mora = mora - 350000;
                      sqlEconomy = 
                        "UPDATE Economy SET" +
                        "mora=" +
                        mora +
                        "WHERE userid='" +
                        message.author.id +
                        "'";
                      guildmem.roles.add(dreng)
                    } else {
                      message.channel.send(nofundsembed)
                    }
                  } else if (args[0] === "thegn") {
                    if (!guildmem.roles.cache.get(dreng)) {
                      const embed = new Discord.MessageEmbed()
                        .setAuthor(
                          message.author.tag,
                          message.author.displayAvatarURL()
                        )
                        .setDescription(
                          `You need to get **Dreng** role first before getting Thegn!`
                        )
                        .setColor("#E8C215");
                      message.channel.send(embed);
                    } else if(guildmem.roles.cache.get(thegn)){
                      message.channel.send(haverole)
                    } else if(mora >= 400000){
                      isSuccess = true;
                      mora = mora - 400000;
                      sqlEconomy = 
                        "UPDATE Economy SET" +
                        "mora=" +
                        mora +
                        "WHERE userid='" +
                        message.author.id +
                        "'";
                      guildmem.roles.add(thegn)
                    } else {
                      message.channel.send(nofundsembed)
                    }
                  } else if (args[0] === "heisir") {
                    if (!guildmem.roles.cache.get(thegn)) {
                      const embed = new Discord.MessageEmbed()
                        .setAuthor(
                          message.author.tag,
                          message.author.displayAvatarURL()
                        )
                        .setDescription(
                          `You need to get **Thegn** role first before getting Heisir!`
                        )
                        .setColor("#E8C215");
                      message.channel.send(embed);
                    } else if(guildmem.roles.cache.get(heisir)){
                      message.channel.send(haverole)
                    } else if(mora >= 500000){
                      isSuccess = true;
                      mora = mora - 500000;
                      sqlEconomy = 
                        "UPDATE Economy SET" +
                        "mora=" +
                        mora +
                        "WHERE userid='" +
                        message.author.id +
                        "'";
                      guildmem.roles.add(heisir)
                    } else {
                      message.channel.send(nofundsembed)
                    }
                  } else if (args[0] === "hird") {
                    if (!guildmem.roles.cache.get(heisir)) {
                      const embed = new Discord.MessageEmbed()
                        .setAuthor(
                          message.author.tag,
                          message.author.displayAvatarURL()
                        )
                        .setDescription(
                          `You need to get **Heisir** role first before getting Hird!`
                        )
                        .setColor("#E8C215");
                      message.channel.send(embed);
                    } else if(guildmem.roles.cache.get(hird)){
                      message.channel.send(haverole)
                    } else if(mora >= 650000){
                      isSuccess = true;
                      mora = mora - 650000;
                      sqlEconomy = 
                        "UPDATE Economy SET" +
                        "mora=" +
                        mora +
                        "WHERE userid='" +
                        message.author.id +
                        "'";
                      guildmem.roles.add(hird)
                    } else {
                      message.channel.send(nofundsembed)
                    }
                  } else if (args[0] === "berserker") {
                    if (!guildmem.roles.cache.get(hird)) {
                      const embed = new Discord.MessageEmbed()
                        .setAuthor(
                          message.author.tag,
                          message.author.displayAvatarURL()
                        )
                        .setDescription(
                          `You need to get **Hird** role first before getting Berserker!`
                        )
                        .setColor("#E8C215");
                      message.channel.send(embed);
                    } else if(guildmem.roles.cache.get(berserker)){
                      message.channel.send(haverole)
                    } else if(mora >= 700000){
                      isSuccess = true;
                      mora = mora - 700000;
                      sqlEconomy = 
                        "UPDATE Economy SET" +
                        "mora=" +
                        mora +
                        "WHERE userid='" +
                        message.author.id +
                        "'";
                      guildmem.roles.add(berserker)
                    } else {
                      message.channel.send(nofundsembed)
                    }
                  } else if (args[0] === "ulfsark") {
                    if (!guildmem.roles.cache.get(berserker)) {
                      const embed = new Discord.MessageEmbed()
                        .setAuthor(
                          message.author.tag,
                          message.author.displayAvatarURL()
                        )
                        .setDescription(
                          `You need to get **Berserker** role first before getting Ulfsark!`
                        )
                        .setColor("#E8C215");
                      message.channel.send(embed);
                    } else if(guildmem.roles.cache.get(ulfsark)){
                      message.channel.send(haverole)
                    } else if(mora >= 850000){
                      isSuccess = true;
                      mora = mora - 850000;
                      sqlEconomy = 
                        "UPDATE Economy SET" +
                        "mora=" +
                        mora +
                        "WHERE userid='" +
                        message.author.id +
                        "'";
                      guildmem.roles.add(ulfsark)
                    } else {
                      message.channel.send(nofundsembed)
                    }
                  } else if (args[0] === "jarl") {
                    if (!guildmem.roles.cache.get(ulfsark)) {
                      const embed = new Discord.MessageEmbed()
                        .setAuthor(
                          message.author.tag,
                          message.author.displayAvatarURL()
                        )
                        .setDescription(
                          `You need to get **Ulfsark** role first before getting Jarl!`
                        )
                        .setColor("#E8C215");
                      message.channel.send(embed);
                    } else if(guildmem.roles.cache.get(jarl)){
                      message.channel.send(haverole)
                    } else if(mora >= 1000000){
                      isSuccess = true;
                      mora = mora - 1000000;
                      sqlEconomy = 
                        "UPDATE Economy SET" +
                        "mora=" +
                        mora +
                        "WHERE userid='" +
                        message.author.id +
                        "'";
                      guildmem.roles.add(jarl)
                    } else {
                      message.channel.send(nofundsembed)
                    }
                  } else if (args[0] === "king") {
                    if (!guildmem.roles.cache.get(jarl)) {
                      const embed = new Discord.MessageEmbed()
                        .setAuthor(
                          message.author.tag,
                          message.author.displayAvatarURL()
                        )
                        .setDescription(
                          `You need to get **Jarl** role first before getting King!`
                        )
                        .setColor("#E8C215");
                      message.channel.send(embed);
                    } else if(guildmem.roles.cache.get(king)){
                      message.channel.send(haverole)
                    } else if(mora >= 1500000){
                      isSuccess = true;
                      mora = mora - 1500000;
                      sqlEconomy = 
                        "UPDATE Economy SET" +
                        "mora=" +
                        mora +
                        "WHERE userid='" +
                        message.author.id +
                        "'";
                      guildmem.roles.add(king)
                    } else {
                      message.channel.send(nofundsembed)
                    }
                  } else if (args[0] === "einherjar") {
                    if (!guildmem.roles.cache.get(king)) {
                      const embed = new Discord.MessageEmbed()
                        .setAuthor(
                          message.author.tag,
                          message.author.displayAvatarURL()
                        )
                        .setDescription(
                          `You need to get **King** role first before getting Einherjar!`
                        )
                        .setColor("#E8C215");
                      message.channel.send(embed);
                    } else if(guildmem.roles.cache.get(einherjar)){
                      message.channel.send(haverole)
                    } else if(mora >= 2000000){
                      isSuccess = true;
                      mora = mora - 2000000;
                      sqlEconomy = 
                        "UPDATE Economy SET" +
                        "mora=" +
                        mora +
                        "WHERE userid='" +
                        message.author.id +
                        "'";
                      guildmem.roles.add(einherjar)
                    } else {
                      message.channel.send(nofundsembed)
                    }
                  }
                   
                  
                  
                  
                  
                  
                  
                  
                  
                  
                  else {
                    isExist = false;
                    const embed = new Discord.MessageEmbed()
                      .setAuthor("Item does not Exist!")
                      .setColor("#E8C215");
                    message.channel.send(embed);
                  }
                  if (isExist) {
                    if (isSuccess) {
                      if (sqlEconomy != "") {
                        db.query(sqlEconomy, console.log);
                      }
					  if (sqlInventory != "") {
                        db.query(sqlInventory, console.log);
                      }
                     
                      const embed = new Discord.MessageEmbed()
                        .setDescription(`Sucessfully purchased ${args[0]}`)
                        .setColor("#E8C215")
                        .setAuthor(message.author.tag, message.author.displayAvatarURL())
                      message.channel.send(embed);
                    } 
                  }
                }
              }
            );
          }
        }
      );
    }
  }
};
