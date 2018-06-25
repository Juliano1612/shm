const functions = require("firebase-functions");
const os = require("os");
const path = require("path");
const UUID = require("uuid-v4");
const spawn = require("child-process-promise").spawn;
const cors = require("cors")({ origin: true });
const Busboy = require("busboy");
const fs = require("fs");

const gcconfig = {
  projectId: "casorio-2206",
  keyFilename: "casorio-2206-firebase-adminsdk-ktre4-9ed49f387b.json"
};

const gcs = require("@google-cloud/storage")(gcconfig);


exports.uploadFile = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== "POST") {
      return res.status(500).json({
        message: "Not allowed"
      });
    }
    const busboy = new Busboy({ headers: req.headers });
    let uploadData = null;

    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
      const filepath = path.join(os.tmpdir(), filename);
      uploadData = { file: filepath, type: mimetype };
      file.pipe(fs.createWriteStream(filepath));
    });

    busboy.on("finish", () => {
      const bucket = gcs.bucket("gs://casorio-2206.appspot.com");
      let uuid = UUID();
      bucket
        .upload(uploadData.file, {
          uploadType: "media",
          metadata: {
            contentType: uploadData.type,
            metadata: {
              firebaseStorageDownloadTokens: uuid
            }
          }
        //   metadata: {
        //     metadata: {
        //       contentType: uploadData.type,
        //       firebaseStorageDownloadTokens: uuid
        //     }
        //   }
        })
        .then((data) => {
            let file = data[0];
            let url = "https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + uuid
            bucket.getFiles( function(err, files) {
                // files = array of file objects
                // not the contents of these files, we're not downloading the files. 
            
                files.forEach(function(file) {
                  file.getSignedUrl(signedUrlConfig, function(err, fileURL) {
                    console.log(fileURL);
                    fileURLs.push(fileURL);
                  });
                });
            
              });
            res.status(200).json({
            // message: "It worked!"
            message: url
            });
        })
        .catch(err => {
          res.status(500).json({
            error: err
          });
        });
    });
    busboy.end(req.rawBody);
  });
});