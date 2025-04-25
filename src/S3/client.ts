import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const bucketName = "elmosco";

const client = new S3Client({
  region: "us-east-1",
  credentials: {
    accessKeyId: "",
    secretAccessKey: "",
  },
});

export async function putObject() {
  const response = await client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: "test.txt",
      Body: "Hello, world!",
    })
  );

  console.log("response", response);
}
