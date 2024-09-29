import CryptoJS from 'crypto-js';
import environment from '@/environment';

export const crypto = {
  encryptionAES: (plainText: string | number) => {
    if (!plainText) {
      throw new Error('data is require');
    }
    const b64 = CryptoJS.AES.encrypt(JSON.stringify(plainText), environment.cryptoKey).toString();
    const e64 = CryptoJS.enc.Base64.parse(b64);
    const eHex = e64.toString(CryptoJS.enc.Hex);
    return eHex;
  },
  decryptionDES: (cipherText: string) => {
    if (cipherText) {
      const reb64 = CryptoJS.enc.Hex.parse(cipherText);
      const bytes = reb64.toString(CryptoJS.enc.Base64);
      const decrypt = CryptoJS.AES.decrypt(bytes, environment.cryptoKey);
      const plain = decrypt.toString(CryptoJS.enc.Utf8);
      if (!plain) {
        return null;
      }
      return plain;
    }
  },
  encryptionBASE64: (plainText: string | number) => {
    if (!plainText) {
      throw new Error('plainText is require');
    }
    const strText = plainText.toString();
    const wordArray = CryptoJS.enc.Utf8.parse(strText);
    const encoded = CryptoJS.enc.Base64.stringify(wordArray);

    return encoded;
  },
  decryptionBASE64: (encodedText: string) => {
    if (!encodedText) {
      throw new Error('encodedText is require');
    }
    const parsedWordArray = CryptoJS.enc.Base64.parse(encodedText);
    const decoded = parsedWordArray.toString(CryptoJS.enc.Utf8);

    return decoded;
  },
};
