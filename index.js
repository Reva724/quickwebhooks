const Discord = require('discord.js');

module.exports.hook = (channel, name, {content, username, avatar, color, title, description, footer, author, image, thumbnail, fields}) => {
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
     
    channel.fetchWebhooks().then(webhook => {
      let hook = webhook.find(h => h.name === name)
      if(!hook) channel.createWebhook(name, {
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
  }

  module.exports.create = async (channel, name, avatarURL) => {
      let webhooks = await channel.fetchWebhooks()
      if(webhooks.length >= 10) throw new TypeError('Channels can\'t have more than 10 webhooks, delete some and try again.')
      channel.createWebhook(name, {
          avatar: avatarURL
      }).catch(err => {
          throw new TypeError(`Webhook creation unsuccessful, reason: ${err.message}`)
      }).then(console.log(`[easyhook] Webhook called ${name} successfully created in channel: ${channel.name}`))
  }

  module.exports.edit = async (channel, webhook, {newName, newAvatar, newChannel}) => {
    channel.fetchWebhooks().then(webhooks => {
      let hook = webhooks.find(u => u.name === webhook)
      if(hooks.length <= 0) throw new TypeError(`[easyhook] Hook called ${name} was not found, check punctuation and spelling, or create one.`)
      hook.edit({
        name: newName,
        avatar: newAvatar,
        channel: newChannel,
      }).catch(err => {
        throw new TypeError(`[easyhook] Failed to edit webhook, reason: ${err.message}`)
      }).then(console.log(`[easyhook] Webhook (${webhook}) successfully edited!`))
    })
  }

