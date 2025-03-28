import { AES, enc, lib } from 'crypto-js'
import cryptoConfig from '../configs/crypto-config'

interface CryptoProps {
  data: string
}

class Crypto {
  encrypt({ data }: CryptoProps) {
    const iv = lib.WordArray.random(16)
    const cipher = AES.encrypt(data, cryptoConfig.key, { iv })

    return iv.toString(enc.Hex) + cipher.toString()
  }

  decrypt({ data }: CryptoProps) {
    const ivHex = data.slice(0, 32)
    const iv = enc.Hex.parse(ivHex)

    const ciphertext = data.slice(32)

    const decrypted = AES.decrypt(ciphertext, cryptoConfig.key, { iv })
    return decrypted.toString(enc.Utf8)
  }
}

let crypto = new Crypto()

export { crypto }
