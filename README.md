# quickwebhooks
This will allow you to:
- Create webhooks
- Send Webhooks
- Edit Webhooks

### Requirements:
- discord.js (preferably master, but not required)
- Node +8 (can be lower, but I wouldn't take the chance)
- Patience


#### NOTE FROM THE DEVELOPER:
Anyone is free to edit the source code (and make it better if they so choose). 





# Documentation:


First, lets create a webhook, this is the easy part:

```js
const { create } = require('quickwebhooks');

//create(channel, 'name', 'avatarURL');
const hook =  await create(channel, 'EasyHook Webhook', 'https://i.imgur.com/kM0vh1x.png');
console.log(hook)
//Channel could be any valid channel 
//The name will be whatever the webhook will be called, call it something 
//simple, and don't worry about it too much, it can be overidden later.
//The avatar can be any valid image url
//If you would like to console log this (for IDs and the sort), you need to use await (in case you're dumb, like me).
```
Easy(hook), right?

```

```

Lets get to editing the webhook:

```js
const { edit } = require('quickwebhooks');

//edit(channel, webhook, {options});
edit(channel, 'EasyHook Webhook', {
  newName: 'EasyWebhook',
  newAvatar: 'https://i.imgur.com/wJdmpIT.png',
});
//This is pretty straight forward.
//Channel = the channel the webhook is located in currently
//Webhook = name or ID of the webhook you would like to search for
//newName = the new name for the webhook (pretty straight forward)
//newAvatar = Do I even have to explain this one? It's the new avatar URL
//Note: None of these fields are required!
```

```

```

This next one is the big Kahuna, and most likely the one that will be used the most:


The last two didn't need that much explaining, however, this one is a little different, with more usability, comes more complication!

Essentially, this will search for the desired webhook, and if it doesn't exist, it will create it (and then send it).

I warn you, it is **always** better to create the webhook __first__!





Example:
```js
const { hook } = require('quickwebhooks');


//hook(channel, webhook, options)
//channel = The channel to search/create the webhook in.
//webhook = The webhook to search for (use the webhook's name)
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
Here's a full list of options you can use for the webhook:

```
  options.username = username override for the webhook
  options.avatar = avatar override for the webhook
  options.content = Simple text message content
  options.color = hex color code (only if using embed) without #
  options.title = title of the embed
  options.description = description of the embed
  options.footer = footer of the embed
  options.author = author of the embed
  options.image = URL of image
  options.thumbnail = URL of thumbnail
  options.fields = additional fields (max 25)
  
```
If you want to send a simple text message, use options.content without any of the other options!


# DISCLAIMER
This is not recommended for users who do not know how webhooks function, it is my advice to you beginners out there to not only learn how to do everything that this package will do (yes, that means doing it the long way), but to actually do that until it sticks with you. This package is **only** here to speed the proccess along for experienced people!
