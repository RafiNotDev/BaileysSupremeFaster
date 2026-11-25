// Run after installing the package dependencies: node tests/sound-sticker-protobuf-test.js
const { proto } = require('../WAProto')
const payload = {
  url: 'https://example.invalid/sticker.webp',
  mimetype: 'image/webp',
  audioMessage: {
    mimetype: 'audio/ogg; codecs=opus',
    fileSha256: Buffer.from([1, 2, 3]),
    fileLength: 3,
    seconds: 1,
    ptt: false,
    mediaKey: Buffer.from([4, 5, 6]),
    fileEncSha256: Buffer.from([7, 8, 9]),
    directPath: '/mms/audio/test',
    mediaKeyTimestamp: 1
  }
}
const encoded = proto.Message.StickerMessage.encode(proto.Message.StickerMessage.fromObject(payload)).finish()
const decoded = proto.Message.StickerMessage.decode(encoded)
if (!decoded.audioMessage || decoded.audioMessage.mimetype !== payload.audioMessage.mimetype) {
  throw new Error('SoundSticker protobuf field 26 encode/decode test failed')
}
console.log('SoundSticker protobuf field 26 round-trip: OK')
