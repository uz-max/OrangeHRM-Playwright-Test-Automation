
import { error } from "console";
import CryptoJS from "crypto-js";

export default class CommonUtils {
    private secretKey: string;

    constructor() {
        this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "";
        if(process.env.SECRET_KEY) {
            this.secretKey = process.env.SECRET_KEY;
        } else {
            throw new Error ("Please provide key");
        }
    }
    public encryptData(data: string) {
        const encryptedData = CryptoJS.AES.encrypt(data, this.secretKey).toString();
        console.log(encryptedData);
        return encryptedData;
    }

    public decryptData(encData: string) {
        const decryptedData = CryptoJS.AES.decrypt(encData, this.secretKey).toString(CryptoJS.enc.Utf8);
        return decryptedData;
    }
}