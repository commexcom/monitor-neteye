import 'dotenv/config'

import CryptoJS from 'crypto-js'

export default {
  key: process.env.ENCRYPT_KEY || '',
  options: {
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC,
  },
}
