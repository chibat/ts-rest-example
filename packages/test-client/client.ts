import { initClient } from "@ts-rest/core";
import { contract } from "@foo-api/contract";

const auth = Buffer.from("user:pass").toString("base64");
const client = initClient(contract, {
  baseUrl: "http://localhost:3000",
  baseHeaders: { "Authorization": `Basic ${auth}` },
});

client.createPost({
  body: {
    title: "Post Title",
    content: "Post Content",
  },
}).then(({ body, status }) => {
  if (status === 201) {
    // body is Post
    console.log(body);
  } else {
    // body is unknown
    console.log(body);
  }
});
