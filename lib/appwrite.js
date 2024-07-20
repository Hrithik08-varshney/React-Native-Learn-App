import { Client, Account, ID } from "react-native-appwrite";
export const config = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "com.jsm.aora",
  projectId: "669bdfbd002efc4a3ad2",
  databaseId: "669be116002130f7fd96",
  userCollectionId: "669be13000161bf98c9d",
  videoCollectionId: "669be159001456a46669",
  storageId: "669be373003a6d062405",
};

let client;
let account;
client = new Client();
client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform);

account = new Account(client);

export const createUser = () => {
  account.create(ID.unique(), "xyz@gmail.com", "password", "JanDoe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
