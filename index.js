const client = require('discord-rich-presence')('481812773827772428')

client.updatePresence({
  state: 'Vector Network で遊んでいます！',
  largeImageKey: 'vector_network_discord',
  smallImageKey: 'Vector Network',
  startTimestamp: Date.now(),
  instance: true
})
