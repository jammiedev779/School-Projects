import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./ConfigStorage";


export default async function UploadProfile(file) {
    if (!file) return;
    const storageRef = ref(storage, `profile/${Date.now() + '' + Math.random() + file.name}`);
    return new Promise((resolve) => {
        uploadBytes(storageRef, file).then((e) => {
            getDownloadURL(storageRef).then((downloadURL) => {
                resolve(downloadURL)
            })
        })
    })
};
