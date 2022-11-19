// - Gain Coins -
let CoinsPerMsg = 5; // How many coins the user get for each message.
let Channels = ['779498135239655424', '779501716583481365', '779498135239655424', '867554338267594753', '876841727372181514']; // where the users can earn their coins.

// - Main -
let CommandsChannel = ['867554338267594753', '876841727372181514', '779502297423806484']; // If commands are limited to one channel, otherwise comment this line.
let LogsChannel = '876461054039846933';
let InfoChan = '867554310207176714';
let RolesEmbd = '867574379171676210';
let EmojiSuccess = '772329978606911508'; // V emoji ID, Comment for the regular one.
let EmojiFailed = '772329978598785034'; // X emoji ID, Comment for the regular one.
let CmdDelay = 2; // Delay in seconds for commands 

// - Daily -
let DailyDelay = 86400; // Delay in *seconds* between dailies (Formula: Hours*60(min)*60(sec); 24 Hours Exa: 24*60*60 = 86400)
let DailyPrize = 200; // Coins to give for each daily

// - CoinFlip -
let CoinFlip_Min = 15; // Minimum to gamble at one time
let CoinFlip_Max = 100000; // Maximum to gamble at one time

// - BlackJack -
let Bj_Min = 15; // Minimum to gamble at one time
let Bj_Max = 100000; // Maximum to gamble at one time

// - Trivia -
let TriviaTime = 25; // Trivia time in seconds
let TriviaImage = 'https://img.next-il.co.il/welcome.gif';

// - Works -
let WorkDelay = 3.5*60; // Delay between works in seconds

// - GAMES
let GamesDelay = 20; // Delay between games in seconds


// ============================================================================================================== \\
// =========================					   - CONSTRUCT -					   ========================== \\
// ============================================================================================================== \\

const Discord = require('discord.js');
const config = require("./config.json");
const questions = require("./trivia.js");
const works = require("./works.js");
const { Client } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'REACTION'] });
const mysql = require("mysql2");
const chalk = require("chalk");
const figlet = require("figlet");
const blackjack = require("discord-blackjack");
const disbut = require("discord-buttons");
const disbutpages = require("discord-embeds-pages-buttons")
disbut(client);

const GamesCD = new Set();
const WorkCD = new Set();
const CommandsCD = new Set();

// - Login -
const PREFIX = '!';
client.login(config.token);

// - Database -
var conn = mysql.createConnection({
	host: config.host,
	user: config.user,
	password: config.password,
	database: config.database
});

function between(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Time() {
	return Math.floor(new Date().getTime() / 1000);
}

function Log(uid, action) {
	/* 
		Use: Log(${message.author.id}, 'WHAT HE DID');
	*/
	conn.query(`INSERT INTO Logs (Time, UserID, Action) VALUES ('${Time()}', '${uid}', '${action}');`, (err, rows) => {
		if(err) throw err;
	});

	const log_channel = client.channels.cache.get(LogsChannel); if (!log_channel) return;
	const UserGet = client.users.cache.get(uid);

	log_channel.send(
		new Discord.MessageEmbed()
		.setTitle("Logs:")
		.setColor("RANDOM")
		.setDescription(`**User:** ${UserGet.username}\n**Action:** ${action}`)
	);
}

function getTime(Format) {
	// Current formats
	// 1 = Time H:M:S
	// 2 = Time H:M
	// 3 = Date D/M/Y
	// 4 = Date D/M
	// 5 = Time+Date D/M/Y • H:M:S
    let currentdate = new Date();
    let seconds = (currentdate.getSeconds() < 10 ? '0' : '') + currentdate.getSeconds();
    let minutes = (currentdate.getMinutes() < 10 ? '0' : '') + currentdate.getMinutes();
    let hours = (currentdate.getHours() < 10 ? '0' : '') + currentdate.getHours();
    let days = (currentdate.getDate() < 10 ? '0' : '') + currentdate.getDate();
    let month = ((currentdate.getMonth() + 1) < 10 ? '0' : '') + (currentdate.getMonth() + 1);

	let FullTime = `${hours}:${minutes}:${seconds}`;
	let HalfTime = `${hours}:${minutes}`;

	let FullDate = `${days}/${month}/${currentdate.getFullYear()}`;
	let HalfDate = `${days}/${month}`;

    let DateTime = days + "/" + month + "/" + currentdate.getFullYear() + " • " + hours + ":" + minutes + ":" + seconds;
    
	if(Format = 1) return FullTime;
	else if(Format = 2) return HalfTime;
	else if(Format = 3) return FullDate;
	else if(Format = 4) return HalfDate;
	else if(Format = 5) return DateTime;
	else return DateTime;
}

function toFutureTime(seconds) {
	if(seconds < 60)
		return Math.floor(seconds)+' שניות';
	if(seconds > 60 && seconds < 60*60)
		return Math.floor(seconds/60)+' דקות';
	if(seconds > 60*60 && seconds < 60*60*24)
		return Math.floor(seconds/60/60)+' שעות';
	if(seconds > 60*60*24)
		return Math.floor(seconds/60/60/24)+' ימים';

	if(seconds == 60)
		return 'דקה';
}

async function RefershShop() {
	if(!InfoChan || !RolesEmbd) return console.log(chalk.red("You didn't specify the roles embed or info channel id, aborting the refresh shop function..."));
	// Get the Channel + MSG
	const channel = client.channels.cache.get(InfoChan); if (!channel) return;
	const toEdit = await channel.messages.fetch(RolesEmbd); if (!toEdit) return;

	conn.query('SELECT * FROM Roles;', async (err, rows) => {
		if(err) throw err;
		if(rows.length < 1) return
		let Roles = '';
		let row = new disbut.MessageActionRow();
		let row2 = new disbut.MessageActionRow();
		let row3 = new disbut.MessageActionRow();
		let row4 = new disbut.MessageActionRow();
		let row5 = new disbut.MessageActionRow();
		let row6 = new disbut.MessageActionRow();
		const embed = new Discord.MessageEmbed()
		.setTitle('חנות רולים:')
		.setColor('RANDOM')
		.setImage(TriviaImage)
		.setThumbnail('https://i.imgur.com/dFcqpSm.png')
		.setTimestamp()
		.setFooter('לקניית רול יש ללחוץ על הכפתור של אותו הרול');

		for (i = 0; i < rows.length; i++) {
			const data = rows[i];
			Roles += `#${i + 1} - <@&${data.RoleID}>  - ${data.Price}\n`;

			let button = new disbut.MessageButton()
				.setEmoji(`${data.Emoji}`)
				.setLabel(`- #${i + 1}`)
			    .setStyle("blurple")
			    .setID(`BuyRole_${data.ID}`);
			
			if(i < 5) row.addComponents(button);
			if(i >= 5 && i < 10) row2.addComponents(button);
			if(i >= 10 && i < 15) row3.addComponents(button);
			if(i >= 15 && i < 20) row4.addComponents(button);
			if(i >= 20 && i < 25) row5.addComponents(button);
		}
		
		embed.setDescription(`**# - Role - Coins\n ${Roles}**`)

		return await toEdit.edit({embed: embed, components: [row, row2, row3, row4, row5]});
	});
}

// Functions
function GiveCredits(user, Coins) {
	conn.query(`UPDATE Users SET Coins = Coins + ${Coins} WHERE UserID = ${user};`, (err) => {
		if(err) throw err;
	});
}

function TakeCredits(user, Coins) {
	conn.query(`UPDATE Users SET Coins = Coins - ${Coins} WHERE UserID = ${user};`, (err) => {
		if(err) throw err;
	});
}

// - Ready -
client.on('ready', () =>
{
	// Start
	console.log('─────────────────────────────────────────────');
	console.log(chalk.green(figlet.textSync('Shop', { horizontalLayout: 'full' })+'ShiNxz#0001'));
	console.log('─────────────────────────────────────────────');
	console.log(chalk.red(`Bot started!\n---\n`
	+ `> Users: ${client.users.cache.size}\n`
	+ `> Channels: ${client.channels.cache.size}\n`
	+ `> Servers: ${client.guilds.cache.size}`));
	console.log('─────────────────────────────────────────────');
	client.user.setActivity(`${PREFIX}shop`, {type: 'WATCHING'});

	// Check Users
	conn.connect(err => {
		if(err) throw err;
		console.log("- Database Connected.");
		console.log("- Checking if Users Table exist...");
		conn.query(`SHOW TABLES LIKE 'Users'`, (err, rows) => {
			if(err) throw err;
			if(rows.length < 1) {
				console.log('$ Error loading Servers Table...');
			} else {
				conn.query(`SELECT * FROM Users ORDER BY Coins DESC`, (err, rows) => {
					if(err) throw err;
						console.log(chalk.green(`- Users: ${rows.length}`));
						i = 0;
						while(i < rows.length) {
							//console.log(chalk.green(`#${i} / ${client.users.cache.get(rows[i].UserID).username} - ${rows[i].Coins}`));
							i++;
						}
				});
			}
		});
		console.log('─────────────────────────────────────────────');
	});

	console.log(chalk.red('Admin Commands:\n')
	+ `> ${PREFIX}create [number] (Making empty embeds)\n`);
	console.log('─────────────────────────────────────────────');
	
	console.log(chalk.green('User Commands:\n')
	+ `> ${PREFIX}RPS [Coins]\n`
	+ `> ${PREFIX}Top\n`
	+ `> ${PREFIX}Coins\n`
	+ `> ${PREFIX}Give [@user] [Coins]\n`
	+ `> ${PREFIX}Daily\n`
	+ `> ${PREFIX}Coinflip [Coins] [heads / tails]\n`
	+ `> ${PREFIX}Trivia\n`
	+ `> ${PREFIX}Work\n`
	+ `> ${PREFIX}Blackjack\n`
	);
	console.log('─────────────────────────────────────────────');
	console.log(`> Loaded ${questions.length} Trivia Questions`);
	console.log(`> Loaded ${works.length} Works`);
	console.log('─────────────────────────────────────────────');

	RefershShop();

	// Get the emojies
	if(EmojiSuccess) 
		EmojiSuccess = client.emojis.cache.get(EmojiSuccess);
	else
		EmojiSuccess = '✅';

	if(EmojiFailed) 
		EmojiFailed = client.emojis.cache.get(EmojiFailed);
	else
		EmojiFailed = '❎';

});

// Earn Coins
client.on('message', message => {
	if(message.content.startsWith(PREFIX) || message.author.bot) return; // Check if its not a bot or a command executed
	Channels.forEach(Chan => { // check if the channel id included in the 'Channels' array
		if(Chan == message.channel.id)
		{
			// Check if the user has a row;
			conn.query(`SELECT * FROM Users WHERE UserID = '${message.author.id}'`, (err, rows) => {
				if(err) throw err;
					if(rows.length < 1) {
						// Insert New Row
						conn.query(`INSERT INTO Users (UserID, Coins) VALUES ('${message.author.id}', '${CoinsPerMsg}');`, (err, rows) => {
							if(err) throw err;
						});
					} else {
						GiveCredits(message.author.id, CoinsPerMsg);
					}
			});
		}
	});
});

// User Commands
client.on('message', async message => {
	//if(typeof CommandsChannel !== 'undefined') return; //if(message.channel.id != CommandsChannel) return;
	if (!message.content.startsWith(PREFIX) || message.author.bot) return;
	let args = message.content.substring(PREFIX.length).split(" ");

	CommandsChannel.forEach(async Chan => { // check if the channel id included in the 'Channels' array
		if(Chan == message.channel.id)
		{
			// Cooldown
			if(CommandsCD.has(message.author.id)){
				return message.reply(`עליך לחכות **${toFutureTime(CmdDelay)}** בין כל פקודה!`);
			}
		
			CommandsCD.add(message.author.id);
			setTimeout(() => {
				CommandsCD.delete(message.author.id);
			}, CmdDelay*1000);
		
			switch(args[0]) {
				case 'rps':
				case 'RPS':
					if(!args[1])
						return message.channel.send(`**[USE]** ${PREFIX}rps [coins]`);

					let Rps_Coins = parseInt(args[1]);
					if(isNaN(Rps_Coins))
						return message.channel.send(`**[USE]** ${PREFIX}rps [coins]`);

					// Cooldown
					if(GamesCD.has(message.author.id)){
						return message.reply(`עליך לחכות **${toFutureTime(GamesDelay)}** בין כל משחק!`);
					}
					GamesCD.add(message.author.id);
					setTimeout(() => {
						GamesCD.delete(message.author.id);
					}, GamesDelay*1000);
				
					// start the game
					const RPSEmbed = new Discord.MessageEmbed()
						.addField('הבחירה שלך', `-`, true)
						.addField('הבחירה של הבוט', `-`, true)
						.setColor('RANDOM')
						.setTimestamp()
						.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
						.setFooter(`Next-il | Rock, Paper, Scissors`);
				
					const RPS_game = new Discord.MessageEmbed()
						.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL());

					let rock = new disbut.MessageButton()
						.setEmoji('🪨')
						.setStyle("blurple")
						.setID('rock');
					let paper = new disbut.MessageButton()
						.setEmoji('🧻')
						.setStyle("blurple")
						.setID('paper');
					let scissors = new disbut.MessageButton()
						.setEmoji('✂️')
						.setStyle("blurple")
						.setID('scissors');
				
					let buttons = new disbut.MessageActionRow()
						.addComponents(rock)
						.addComponents(paper)
						.addComponents(scissors);

					const msg = await message.channel.send({embed: RPSEmbed, component: buttons});
					const rps_filter = (button) => button.clicker.user.id === message.author.id;
					const rps_collector = msg.createButtonCollector(rps_filter, { time: 15*1000, max: 1 });
					rps_collector.on('collect', b => {
					
						rock.setDisabled();
						paper.setDisabled();
						scissors.setDisabled();
					
					let newButtons = new disbut.MessageActionRow()
						.addComponents(rock)
						.addComponents(paper)
						.addComponents(scissors);
					
						try{
							b.reply.defer(true);
						} catch{
							try{
								b.defer(true);
							} catch (err){
								console.log("Cannot defer button!\nFull error:\n" + err)
							}
						}
					
						const choices = ['rock', 'scissors', 'paper']
    		    		const me = choices[Math.floor(Math.random() * choices.length)]
					
						function toRPS(id){
							if(id == 'rock') return '🪨';
							if(id == 'paper') return '🧻';
							if(id == 'scissors') return '✂️';
						}
						RPS_game.addField('הבחירה שלך', toRPS(rps_collector.collected.first().id), true);
						RPS_game.addField('הבחירה של הבוט', toRPS(me), true);

						if ((me === "rock" && rps_collector.collected.first().id === "scissors") || (me === "paper" && rps_collector.collected.first().id === "rock") || (me === "scissors" && rps_collector.collected.first().id === "paper")) {
    		               	// Wrong answer
							TakeCredits(message.author.id, Rps_Coins);
							RPS_game.setDescription(`${message.author} | הפסדת! \n ניתן לנסות שוב בעוד **${toFutureTime(GamesDelay)}**`)
							.setColor('RED');
							msg.edit({embed: RPS_game, component: newButtons});
							Log(message.author.id, `RPS: user lost rps and lost ${Rps_Coins}`);
    		        	} else if (me === rps_collector.collected.first().id) {
							RPS_game.setDescription(`${message.author} | תיקו! \n ניתן לנסות שוב בעוד **${toFutureTime(GamesDelay)}**`)
							.setColor('BLUE');
							msg.edit({embed: RPS_game, component: newButtons});
    		        	} else {
    		        	    // Good answer
							GiveCredits(message.author.id, Rps_Coins);
							RPS_game.setDescription(`${message.author} | ניצחת! \n זכית ב-**${Rps_Coins} מטבעות**!\nניתן לנסות שוב בעוד **${toFutureTime(GamesDelay)}**`)
								.setColor('GREEN');
							msg.edit({embed: RPS_game, component: newButtons});
							Log(message.author.id, `RPS: user won rps and won ${Rps_Coins}`);
    		        	}
					});
				
					rps_collector.on('end', b => {
						if(b.size < 1)
							return msg.edit(
								new Discord.MessageEmbed()
									.setTitle('הזמן נגמר!')
									.setDescription(`ניתן לנסות שוב בעוד ${toFutureTime(GamesDelay)}`));
					});
				
				
				break;
				
				case 'top':
				case 'Top':
				case 'Leaderboard':
				case 'leaderboard':
					conn.query(`SELECT * FROM Users ORDER BY Coins DESC LIMIT 30`, (err, rows) => {
				if(err) throw err;

				var pages = [];

				// page 1: 0 - 10
				let members = '';
				let coins = '';
				for (i = 0; i < 10; i++) {
					const data = rows[i];
					members += `**[${i+1}]** - <@${data.UserID}>\n`;
					coins += `**${data.Coins}** 🪙\n`;
				}
				const embed1 = new Discord.MessageEmbed()
    			.setColor("RANDOM")
				.setTimestamp()
				.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
    			.setFooter(`Leaderboard • Page 1`, `https://i.imgur.com/dFcqpSm.png`)
				.setTitle("Next-il | Coins Leaderboard")
				.addField(`[#] - Member`, members, true)
				.addField(`Coins`, coins, true);

				pages.push(embed1);

				if(rows.length > 20) {
					// page 2: 10 - 20
					let members = '';
					let coins = '';
					for (i = 10; i <= 19; i++) {
						const data = rows[i];
						members += `**[${i+1}]** - <@${data.UserID}>\n`;
						coins += `**${data.Coins}** 🪙\n`;
					}
					const embed2 = new Discord.MessageEmbed()
    				.setColor("RANDOM")
					.setTimestamp()
					.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
    				.setFooter(`Leaderboard • Page 2`, `https://i.imgur.com/dFcqpSm.png`)
					.setTitle("Next-il | Coins Leaderboard")
					.addField(`[#] - Member`, members, true)
					.addField(`Coins`, coins, true);
					pages.push(embed2);
				}
    			
				if(rows.length > 3) {
					// page 3: 20 - 30
					let members = '';
					let coins = '';
					for (i = 19; i <= 29; i++) {
						const data = rows[i];
						members += `**[${i+1}]** - <@${data.UserID}>\n`;
						coins += `**${data.Coins}** 🪙\n`;
					}
					const embed2 = new Discord.MessageEmbed()
    				.setColor("RANDOM")
					.setTimestamp()
					.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
    				.setFooter(`Leaderboard • Page 3`, `https://i.imgur.com/dFcqpSm.png`)
					.setTitle("Next-il | Coins Leaderboard")
					.addField(`[#] - Member`, members, true)
					.addField(`Coins`, coins, true);
					pages.push(embed2);
				}
					
    			disbutpages.pages(client, message, pages, 100000, disbut, "blurple", "blurple", "876144811881685042", "876144811512574012", "772329978598785034");
					});
				break;
				
				// Aliases for "coins" command
				case 'coins':
				case 'Coins':
				case 'Bal':
				case 'Balance':
				case 'balance':
				case 'bal':
			let person = false;
			if(args[1])
				person = message.guild.member(message.mentions.users.first());

			if(person && message.member.hasPermission("ADMINISTRATOR")) {
				// Make the embed
				let CoinsEmbed = new Discord.MessageEmbed()
					.setAuthor(`${message.mentions.users.first().username}#${message.mentions.users.first().discriminator}`, message.mentions.users.first().displayAvatarURL())
					.setColor('RANDOM')
					.setTimestamp();

				// Check the user coins
				conn.query(`SELECT * FROM Users WHERE UserID = '${person.id}'`, (err, rows) => {
					if(err) throw err;
						if(rows.length < 1) {
							CoinsEmbed.setDescription(`${person} | \`0\` מטבעות.`);
						} else {
							CoinsEmbed.setDescription(`${person} | \`${rows[0].Coins}\` מטבעות.`);
						}
					
					message.channel.send(CoinsEmbed);
				});
			} else {
				// Make the embed
				let CoinsEmbed = new Discord.MessageEmbed()
					.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
					.setColor('RANDOM')
					.setTimestamp();

				// Check the user coins
				conn.query(`SELECT * FROM Users WHERE UserID = '${message.author.id}'`, (err, rows) => {
					if(err) throw err;
						if(rows.length < 1) {
							CoinsEmbed.setDescription(`${message.author} | יש ברשותך \`0\` מטבעות.`);
						} else {
							CoinsEmbed.setDescription(`${message.author} | יש ברשותך \`${rows[0].Coins}\` מטבעות.`);
						}
					
					message.channel.send(CoinsEmbed);
				});
			}
		break;

				case 'Give':
				case 'give':
			if(!args[2])
				return message.channel.send(`**[USE]** ${PREFIX}give [@user] [coins]`);

			let toGive = false;
			toGive = message.guild.member(message.mentions.users.first());
			let toGiveCoins = parseInt(args[2]);
			if(isNaN(toGiveCoins))
				return;

			if(toGiveCoins > 10000)
				return message.channel.send(
					new Discord.MessageEmbed()
					.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
					.setDescription(`שגיאה! ניתן להעביר עד 10.000 מטבעות בכל העברה.`)
					.setColor('RED')
					.setTimestamp()
				);

			// check if the user have the amount specified
			conn.query(`SELECT * FROM Users WHERE UserID = '${message.author.id}'`, (err, rows) => {
				if(err) throw err;
				if(rows.length < 1) {
					return message.channel.send(
						new Discord.MessageEmbed()
						.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
						.setDescription(`אין ברשותך מספיק מטבעות!`)
						.setColor('RED')
						.setTimestamp()
					);
				} else {
					if(rows[0].Coins < toGiveCoins)
					return message.channel.send(
						new Discord.MessageEmbed()
						.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
						.setDescription(`אין ברשותך מספיק מטבעות!\nיש ברשותך ${rows[0].Coins} מטבעות.`)
						.setColor('RED')
						.setTimestamp()
					);
					else {
						if(toGive) {
							GiveCredits(toGive.id, toGiveCoins);
							TakeCredits(message.author.id, toGiveCoins);
							message.channel.send(
								new Discord.MessageEmbed()
								.setAuthor(`${message.author.username}#${message.author.discriminator}`, message.author.displayAvatarURL())
								.setDescription(`${message.author} | העברת למשתמש ${toGive} ${toGiveCoins} מטבעות!`)
								.setColor('RANDOM')
								.setTimestamp()
							);
							Log(message.author.id, `Give: user gave ${toGiveCoins} coins to ${toGive.id}`);
						}
						else 
							return message.channel.send(`**[USE]** ${PREFIX}give [@user] [coins]`);
					}
				}
			});
		break;

				// Aliases for "daily" command
				case 'daily':
				case 'Daily':
			// Make the embed
			let DailyEmbed = new Discord.MessageEmbed()
				.setTimestamp();

			conn.query(`SELECT Daily FROM Users WHERE UserID = '${message.author.id}'`, (err, rows) => {
				if(err) throw err;
					if(rows.length < 1) {
						// Insert New Row with the credits + time
						conn.query(`INSERT INTO Users (UserID, Coins, Daily) VALUES ('${message.author.id}', '${DailyPrize}', '${Time()}');`, (err) => {
							if(err) throw err;
						});
					} else {
						// Check if daily is available for the user
						if ( ( Time() - rows[0].Daily ) > DailyDelay || rows[0].Daily == null) {
							// Available
							conn.query(`UPDATE Users SET Coins = Coins + ${DailyPrize}, Daily = ${Time()} WHERE UserID = ${message.author.id};`, (err) => {
								if(err) throw err;
							});
							DailyEmbed.setTitle(`${EmojiSuccess} Daily`);
							DailyEmbed.setDescription(`${message.author} | קיבלת \`${DailyPrize}\` מטבעות! תחזור מחר על מנת לקבל עוד מטבעות.`);
							DailyEmbed.setColor(`GREEN`);
							Log(message.author.id, `DAILY: user took his daily (${DailyPrize})`);
						}
						else {
							// Not Available
							DailyEmbed.setTitle(`${EmojiFailed} Daily`);
							DailyEmbed.setDescription(`${message.author} | עליך להמתין עוד ${toFutureTime( DailyDelay - (Time()-rows[0].Daily) )} על מנת לקבל את הבונוס היומי.`);
							DailyEmbed.setColor(`RED`);
						}
					}
					message.channel.send(DailyEmbed);
				});
		break;

				// Aliases for "flip" command
				case 'flip':
				case 'Flip':
				case 'coinflip':
				case 'Coinflip':
			if(!args[2])
				return message.channel.send(`**[USE]** ${PREFIX}coinflip [Coins] [heads / tails]`);
			let Coins = parseInt(args[1]);
			if(Coins < CoinFlip_Min)
				return message.channel.send(`עליך לבחור לפחות ${CoinFlip_Min} מטבעות בכל פעם`);
			if(Coins > CoinFlip_Max)
				return message.channel.send(`ניתן לבחור עד ${CoinFlip_Max} מטבעות בכל פעם`);
			let Selection = args[2];
			if(isNaN(Coins))
				return message.channel.send(`**[USE]** ${PREFIX}coinflip [Coins] [heads / tails]`);
			if(Selection != 'heads' && Selection != 'tails')
				return message.channel.send(`**[USE]** ${PREFIX}coinflip [Coins] [heads / tails]`);
			
			// Cooldown
			if(GamesCD.has(message.author.id)){
				return message.reply(`עליך לחכות **${toFutureTime(GamesDelay)}** בין כל משחק!`);
			}
			GamesCD.add(message.author.id);
			setTimeout(() => {
				GamesCD.delete(message.author.id);
			}, GamesDelay*1000);

			let options = ['heads', 'tails'];
			var Index = options[Math.floor(Math.random() * options.length)];

			// Make the embed
			let CoinflipEmbed = new Discord.MessageEmbed()
				.setTimestamp();

			conn.query(`SELECT * FROM Users WHERE UserID = '${message.author.id}'`, (err, rows) => {
				if(err) throw err;
					if(rows.length < 1) {
						// Insert New Row
						conn.query(`INSERT INTO Users (UserID, Coins) VALUES ('${message.author.id}', '5');`, (err, rows) => {
							if(err) throw err;
						});
						return message.channel.send(`אין ברשותך ${Coins} מטבעות.`);
					} else {
						if(rows[0].Coins < Coins)
							return message.channel.send(`אין ברשותך ${Coins} מטבעות.`);

						conn.query(`SELECT * FROM Users WHERE UserID = '${message.author.id}'`, (err, rows) => {
							if(err) throw err;
								if(rows.length >= 1) {
									if (Selection == Index) {
										// Won
										GiveCredits(message.author.id, Coins);
										CoinflipEmbed.setTitle(`${EmojiSuccess} ${Index}`);
										CoinflipEmbed.setDescription(`${message.author} | ניצחת וקיבלת \`${Coins}\` מטבעות!`);
										CoinflipEmbed.setColor(`GREEN`);
										Log(message.author.id, `COINFLIP: user won coinflip and got ${Coins}`);
									}
									else {
										// Lost
										TakeCredits(message.author.id, Coins);
										CoinflipEmbed.setTitle(`${EmojiFailed} ${Index}`);
										CoinflipEmbed.setDescription(`${message.author} | הפסדת \`${Coins}\` מטבעות.`);
										CoinflipEmbed.setColor(`RED`);
										Log(message.author.id, `COINFLIP: user lost coinflip and got ${Coins}`);
									}
									message.channel.send(CoinflipEmbed);
								}
						});
					}
			});
		break;

		// Aliases for "trivia" command
		case 'Trivia':
		case 'trivia':
			// Cooldown
			if(GamesCD.has(message.author.id)){
				return message.reply(`עליך לחכות **${toFutureTime(GamesDelay)}** בין כל טריוויה!`);
			}
			GamesCD.add(message.author.id);
			setTimeout(() => {!
				GamesCD.delete(message.author.id);
			}, GamesDelay*1000);

			// Check if the user has a row;
			conn.query(`SELECT * FROM Users WHERE UserID = '${message.author.id}'`, async (err, rows) => {
				if(err) throw err;
					if(rows.length < 1) {
						// Insert New Row
						conn.query(`INSERT INTO Users (UserID, Coins) VALUES ('${message.author.id}', '5');`, (err, rows) => {
							if(err) throw err;
						});
					}
					let q = questions[Math.floor(Math.random()*(questions.length))];
					let i = 0;
					const TriviaEmbed_Answer = new Discord.MessageEmbed();
					const TriviaEmbed = new Discord.MessageEmbed()
						.setTitle(`שאלת טריוויה: ${q.category}`)
						.setDescription(`יש לך **${TriviaTime} שניות** לענות על השאלה!\nעל התשובה הנכונה תקבלו **${q.coins} מטבעות**!\n**רמת קושי:** ${q.difficulty}\n-\n**שאלה:** ${q.title}\n`);
						let opts = '';
						let row = new disbut.MessageActionRow()
						for (i = 0; i < q.options.length; i++) {
							opts += `#\`${i+1}\` - ${q.options[i]}\n`;
							let button = new disbut.MessageButton()
			    			.setLabel(`#${i+1} | ${q.options[i]}`)
			    			.setStyle("blurple")
			    			.setID(i+1)
							row.addComponents(button);
						}
						TriviaEmbed.addField('# / Answer', `${opts}`)
						.setColor('RANDOM')
						.setImage(TriviaImage)
						.setTimestamp()
						.setFooter(`${q.difficulty} • ${q.coins} מטבעות`);
					const msg = await message.channel.send({embed: TriviaEmbed, component: row});
					const filter = (button) => button.clicker.user.id === message.author.id;
					const collector = msg.createButtonCollector(filter, { time: TriviaTime*1000, max: 1 });
					collector.on('collect', b => {
						if(collector.collected.first().id == q.correct) {
							// Good answer
							GiveCredits(message.author.id, q.coins);
							TriviaEmbed_Answer.setTimestamp()
								.setTitle(`${EmojiSuccess} תשובה נכונה!`)
								.setDescription(`${message.author} | זכית ב-**${q.coins} מטבעות**!\nניתן לנסות שוב בעוד **${toFutureTime(GamesDelay)}**`)
								.setColor('GREEN');
							msg.delete();
							Log(message.author.id, `TRIVIA: user won trivia and got ${q.coins}`);
							return message.channel.send(TriviaEmbed_Answer);
						} else {
							// Wrong answer
							TriviaEmbed_Answer.setTimestamp()
								.setTitle(`${EmojiFailed} תשובה שגויה!`)
								.setDescription(`${message.author} | ניתן לנסות שוב בעוד **${toFutureTime(GamesDelay)}**`)
								.setColor('RED');
							msg.delete();
							return message.channel.send(TriviaEmbed_Answer);
						}
					});
					collector.on('end', b => {
						if(b.size < 1)
							return msg.edit(
								new Discord.MessageEmbed()
									.setTitle('הזמן נגמר!')
									.setDescription(`ניתן לנסות שוב בעוד ${toFutureTime(GamesDelay)}`));
					});
					
			});
			
		break;

				// Aliases for "work" command
				case 'work':
				case 'Work':
			// Cooldown
			if(WorkCD.has(message.author.id)){
				return message.reply(`עליך לחכות **${toFutureTime(WorkDelay)}** בין כל עבודה!`);
			}
			WorkCD.add(message.author.id);
			setTimeout(() => {
				WorkCD.delete(message.author.id);
			}, WorkDelay*1000);

			// Check if the user has a row;
			conn.query(`SELECT * FROM Users WHERE UserID = '${message.author.id}'`, async (err, rows) => {
				if(err) throw err;

				if(rows.length < 1) {
					// Insert New Row
					conn.query(`INSERT INTO Users (UserID, Coins) VALUES ('${message.author.id}', '5');`, (err, rows) => {
						if(err) throw err;
					});
				}
				let w = works[Math.floor(Math.random()*(works.length))];
				let coins = between(w.minCoins, w.maxCoins);
				GiveCredits(message.author.id, coins);
				const workEmbed = new Discord.MessageEmbed()
					.setTitle(`${EmojiSuccess} Work:`)
					.setDescription(`${message.author} | עבדת בתור **${w.title}** וקיבלת **${coins}** מטבעות!\nניתן לעבוד שוב בעוד **${toFutureTime(WorkDelay)}**.`)
					.setColor('RANDOM')
					.setTimestamp()
				message.channel.send(workEmbed);

				Log(message.author.id, `WORK: user worked and get ${coins}`);
			});
		break;

				case 'bj':
				case 'BJ':
				case 'blackjack':
				case 'Blackjack':
			if(!args[1])
				return message.channel.send(`**[USE]** ${PREFIX}blackjack [Coins]`);
			let bjCoins = parseInt(args[1]);

			if(bjCoins < Bj_Min)
				return message.channel.send(`עליך לבחור לפחות ${Bj_Min} מטבעות בכל פעם`);
			if(bjCoins > Bj_Max)
				return message.channel.send(`ניתן לבחור עד ${Bj_Max} מטבעות בכל פעם`);
			if(isNaN(bjCoins))
				return message.channel.send(`**[USE]** ${PREFIX}blackjack [Coins]`);

			// Cooldown
			if(GamesCD.has(message.author.id)){
				return message.reply(`עליך לחכות **${toFutureTime(GamesDelay)}** בין כל משחק!`);
			}
			GamesCD.add(message.author.id);
			setTimeout(() => {
				GamesCD.delete(message.author.id);
			}, GamesDelay*1000);

			conn.query(`SELECT * FROM Users WHERE UserID = '${message.author.id}'`, async (err, rows) => {
				if(err) throw err;
					if(rows.length < 1) {
						// Insert New Row
						conn.query(`INSERT INTO Users (UserID, Coins) VALUES ('${message.author.id}', '5');`, (err, rows) => {
							if(err) throw err;
						});
						return message.channel.send(`אין ברשותך ${bjCoins} מטבעות.`);
					} else {
						if(rows[0].Coins < bjCoins)
							return message.channel.send(`אין ברשותך ${bjCoins} מטבעות.`);

							let game = await blackjack(message, client, {resultEmbed: false})

        					switch (game.result) {
        					    case 'Win':
									message.channel.send(
										new Discord.MessageEmbed()
										.setTitle("Win!")
										.setColor('GREEN')
										.setDescription(`${message.author} | הגעת ל${game.yvalue} נקודות וזכית ב${bjCoins} מטבעות!`)
									);
									GiveCredits(message.author.id, bjCoins);
									Log(message.author.id, `BJ: user won (${bjCoins})`);
        					    break;
        					    case 'Tie':
									message.channel.send(
										new Discord.MessageEmbed()
										.setTitle("Tie!")
										.setColor('BLUE')
										.setDescription(`${message.author} | תיקו! לא זכית או הפסדת מטבעות`)
									);
									Log(message.author.id, `BJ: user tekko (${bjCoins})`);
        					    break;
        					    case 'Lose':
									message.channel.send(
										new Discord.MessageEmbed()
										.setTitle("Lose")
										.setColor("RED")
										.setDescription(`${message.author} | הגעת ל${game.yvalue} נקודות והפסדת ${bjCoins} מטבעות!`)
									);
									TakeCredits(message.author.id, bjCoins);
									Log(message.author.id, `BJ: user lost (${bjCoins})`);
        					    break;
								case 'Double Win':
									message.channel.send(
										new Discord.MessageEmbed()
										.setTitle("Double Win!")
										.setColor('GREEN')
										.setDescription(`${message.author} | הגעת ל${game.yvalue} נקודות וזכית ב${bjCoins*2} מטבעות!`)
									);
									GiveCredits(message.author.id, bjCoins*2);
									Log(message.author.id, `BJ: user double won (${bjCoins})`);
       							break;
       							case 'Double Lose':
									message.channel.send(
										new Discord.MessageEmbed()
										.setTitle("Double Lose")
										.setColor("RED")
										.setDescription(`${message.author} | הגעת ל${game.yvalue} נקודות והפסדת ${bjCoins*2} מטבעות!`)
									);
									TakeCredits(message.author.id, bjCoins*2);
									Log(message.author.id, `BJ: user double lost (${bjCoins})`);
       							break;
       							case 'ERROR':
									   message.channel.send(
										new Discord.MessageEmbed()
										.setTitle("Error!")
										.setColor('BLUE')
										.setDescription(`${message.author} | חלה שגיאה, לא זכית או הפסדת מטבעות\nבמידה והתקלה נמשכת יש לפתוח טיקט.`)
										);
								break;
								case 'Cancel':
									message.channel.send(
										new Discord.MessageEmbed()
											.setTitle("Lose")
											.setColor("RED")
											.setDescription(`${message.author} | ביטלת את המשחק והפסדת ${bjCoins} מטבעות!`)
									);
									TakeCredits(message.author.id, bjCoins);
									Log(message.author.id, `BJ: user canceled and lost (${bjCoins})`);
								break;
								case 'Timeout':
									message.channel.send(
										new Discord.MessageEmbed()
											.setTitle("Lose")
											.setColor("RED")
											.setDescription(`${message.author} | עבר הזמן והפסדת ${bjCoins} מטבעות!`)
									);
									TakeCredits(message.author.id, bjCoins);
									Log(message.author.id, `BJ: user timeouted and lost (${bjCoins})`);
								break;
							}
						}
					});
		break;
			}
		}});
});

// Admin Commands
client.on('message', message => {
	if(!message.member.hasPermission("ADMINISTRATOR")) return; // check if the user has "admininstrator" permission, otherwise don't continue
	if (!message.content.startsWith(PREFIX) || message.author.bot) return; // check if the command started with the defined prefix, and if the author isn't bot
	let args = message.content.substring(PREFIX.length).split(" ");
		switch(args[0]) {
			// Create Embeds: - [USE] !create [Number] -
			case 'create':
				message.delete();
				if(!args[1]) return message.channel.send('You must write the number of embeds you want to create.');
				let embd1 = new Discord.MessageEmbed()
					embd1.setColor(Embed_Color);
				let i = 0;
				while (i < args[1]) {
					message.channel.send(embd1);
					i++;
				}
			break;
		}
});

client.on('clickButton', async (button) => {
	let user = button.clicker.member;
	let User = client.users.cache.get(user.id);

	if(button.id.startsWith('BuyRole')){
		let RID = button.id.slice(8);
		conn.query(`SELECT Price, RoleID FROM Roles WHERE ID = ${RID}`, (err, rows) => {
			if(err) throw err;
			if(rows.length < 1) {
				return;
			} else {
				let RoleID = rows[0].RoleID;
				let Price = rows[0].Price;
				// check if the user have enough coins
				conn.query(`SELECT * FROM Users WHERE UserID = '${user.id}'`, async (err, rows) => {
					if(err) throw err;
					if(rows.length < 1) {
						return button.reply.send(
							new Discord.MessageEmbed()
							.setDescription(`${User} | אין ברשותך מספיק מטבעות!`)
							.setColor('RED')
							.setTimestamp(), true
						);
					} else {
						if(rows[0].Coins < Price)
							return await button.reply.send(
								new Discord.MessageEmbed()
								.setDescription(`${User} | אין ברשותך מספיק מטבעות!\nיש ברשותך ${rows[0].Coins} מטבעות.`)
								.setColor('RED')
								.setTimestamp(), true
							);
						else {
							// give the user the role + take his coins
							let Role = button.channel.guild.roles.cache.get(RoleID);
							if(user.roles.cache.has(RoleID))
							{
								return button.reply.send(
									new Discord.MessageEmbed()
									.setDescription(`${User} | שגיאה, יש ברשותך כבר את הרול שנבחר!`)
									.setColor('RED')
									.setTimestamp(), true
								);
							}
							else
							{
								user.roles.add(Role);
								TakeCredits(user.id, Price);

								Log(user.id, `Bought Role ${RoleID}`);


								return button.reply.send(
									new Discord.MessageEmbed()
									.setDescription(`${User} | קיבלת את הרול בהצלחה!\nיש ברשותך עוד: ${rows[0].Coins-Price} מטבעות.`)
									.setColor('GREEN')
									.setTimestamp(), true
								);
							}
						}
					}
				});
			}
		});
	}

	switch(button.id) {

	}
});