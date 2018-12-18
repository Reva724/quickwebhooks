# easyhook
Easily create, edit, and send discord.js webhooks!

I will try to keep this as updated as I can!


Before someone messages me angrily saying "Maxson, we could already do this!," I want to clarify, this is only meant to make the process a little faster, and anyone is welcome to edit the source code!


# Documentation:


First, lets create a webhook, this is the easy part:

```js
const { create } = require('easyhook');

//create(channel, 'name', 'avatarURL');
create(channel, 'EasyHook Webhook', 'https://i.imgur.com/kM0vh1x.png');
//Channel could be any valid channel 
//The name will be whatever the webhook will be called, call it something 
//simple, and don't worry about it too much, it can be overidden later.
//The avatar can be any valid image url
```
Easy(hook), right?

Lets get to editing the webhook:

```js
const { edit } = require('easyhook');

//edit(channel, webhook, {options});
edit(channel, 'EasyHook Webhook', {
  newName: 'EasyWebhook',
  newAvatar: 'https://i.imgur.com/wJdmpIT.png',
  newChannel: message.channel
});
//This is pretty straight forward.
//Channel = the channel the webhook is located in currently
//Webhook = the name of the webhook you want to search for!
//newName = the new name for the webhook (pretty straight forward)
//newAvatar = Do I even have to explain this one? It's the new avatar URL
//newChannel = used to reassign the webhook to a new channel
//Note: None of these fields are required!
```


This next one is the big Kahuna, and most likely the one that will be used the most:


The last two didn't need that much explaining, however, this one is a little different
With more usability, comes more compliation!

Essentially, this will search for the desired webhook, and if it doesn't exist, it will create it (and then send it).

I warn you, it is **always** better to create the webhook __first__

channel = The channel to search/create the webhook in.
webhook = The webhook to search for (use the webhook's name)
options:

**__If sending a simple text message:__**
```
  options.username = username override for the webhook
  options.avatar = avatar override for the webhook
  options.content = content of a the message you want to send
```
  
**__Embed:__**
For info on how to structure embeds (properly), click [here](https://discordapp.com/developers/docs/resources/channel#embed-object). NO, you can't use the built in discord.js embed builder, sorry not sorry.



```
  options.username = username override for the webhook
  options.avatar = avatar override for the webhook
  options.color = hex color code (only if using embed) without #
  options.title = title of the embed
  options.description = description of the embed
  options.footer = footer of the embed
  options.author = author of the embed
  options.image = URL of image
  options.thumbnail = URL of thumbnail
  options.fields = additional fields (max 25)
```  
You can include options.content in the embed, and it will simple send both.  

Example:
```js
const { hook } = require('easyhook');

hook(channel, 'EasyWebhook', {
  username: 'Welcomer',
  avatar: 'https://linkto.avatar.com/avatar.png',
  content: 'Welcome to our server!',
  color: '2E8B57',
  title: 'Example Title',
  description: 'Example Description',
  footer: {
    text: 'This is a footer',
  },
  author: {
    name: 'This is an author'
  },
  image: 'https://linkto.image.com/image.png',
  thumbnail: 'https://linkto.image.com/image.png',
	fields: [
		{name: 'Example Field', value: 'Example Field Value', inline: true},
		{name: 'Example Field 2', value: 'Example Field Value 2'}
	]
})
```
