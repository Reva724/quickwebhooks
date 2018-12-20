const Discord = require('discord.js');

module.exports.hook = async (channel, name, {content, username, avatar, color, title, description, footer, author, image, thumbnail, fields}) => {
  if(!channel) throw new TypeError(`[easyhook] Include a valid channel object!`)
  if(!typeof name === 'string') throw new TypeError(`[easyhook] Name must be a string!`)
    let contents = {
            username: username,
            avatarURL: avatar,
            embeds: [
              {
                title: title,
                color: parseInt(`0x${color}`),
                description: description,
                footer: footer,
                author: author,
                image: image,
                thumbnail: thumbnail,
                fields: fields
              }
                    ]
          }
     
    let hook = await channel.fetchWebhooks().then(webhook => {
      let hook = webhook.find(h => h.name === name)
      if(!hook) hook = await channel.createWebhook(name, {
        avatar: avatar
      }).then(webhook => {
          webhook.send(content, contents).catch(err => {
            throw new TypeError(`[easyhook] Failed to send webhook, reason: ${err.message}`)
          })
        })
      else {
          hook.send(content, contents).catch(err => {
            throw new TypeError(`[easyhook] Failed to send webhook, reason: ${err.message}`)
          })
      }
    })
    return hook;
  }

  module.exports.create = async (channel, name, avatarURL) => {
    const channelTypes = [
      'dm',
      'group',
      'text',
      'voice',
      'category'
    ]
    if(!channel.type) throw new TypeError(`[easyhook] You must include a valid channel!`);
    if(!channelTypes.includes(channel.type)) throw new TypeError(`[easyhook] You must include a valid channel!`);
    if(!typeof(name) === 'string') throw new TypeError(`[easyhook] You must include a name for the webhook!`);
    if(!avatarURL) throw new TypeError(`[easyhook] You must include a URL for the webhook's avatar!`)
    let webhooks = await channel.fetchWebhooks()
    if(webhooks.length >= 10) throw new TypeError('Channels can\'t have more than 10 webhooks, delete some and try again.')
    const hook = await channel.createWebhook(name, {
        avatar: avatarURL
    }).catch(err => {
        throw new TypeError(`Webhook creation unsuccessful, reason: ${err.message}`)
    })
    
    return hook;
}

  module.exports.edit = async (channel, webhook, {newName, newAvatar, newChannel}) => {
    channel.fetchWebhooks().then(webhooks => {
      let hook = webhooks.find(u => u.name === webhook) || webhooks.get(webhook);
      if(!hook) throw new TypeError(`[easyhook] Hook was not found.`)
      let edit = await hook.edit({
        name: newName,
        avatar: newAvatar
      }).catch(err => {
        throw new TypeError(`[easyhook] Failed to edit webhook, reason: ${err.message}`)
      })
      return edit;
    })
    
  }

