require('dotenv').config()
const Discord = require('discord.js')
const client = new Discord.Client()
var auth = require('./auth.json')
var event2 = true

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if(msg.content.match(/:/g) || msg.content.match(/@/g)){
	return
  }
  if (msg.content.match(/2/g) && !msg.author.bot && event2){
    msg.channel.send('https://66.media.tumblr.com/7e90a3f354d94d9d3c128e21787d7d14/tumblr_inline_pbbd6fURZ01r2vvqk_540.gif')
	event2 = false
	setTimeout(() => {event2 = true}, 60000)
  }
})

client.login(auth.token)