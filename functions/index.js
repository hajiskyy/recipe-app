const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

exports.aggregateRatings = functions.firestore
  .document("recepie/{recepieID}/ratings/{ratingId}")
  .onWrite((change, context) => {
    const ratingId = context.params.ratingId;
    const recepie_id = context.params.recepieID;

    //ref to the parent document
    const docRef = admin
      .firestore()
      .collection("recepie")
      .doc(recepie_id);

    //get all ratings and aggregate
    return docRef
      .collection("ratings")
      .orderBy("rating", "desc")
      .get()
      .then(querySnapshot => {
        const ratingCount = querySnapshot.size;
        const ratings = [];
        let sum = 0.0;
        let averageRating = 0.0;

        querySnapshot.forEach(doc => {
          ratings.push(doc.data());
        });

        console.log("ratings array: ", ratings);

        ratings.forEach(rating => {
          sum += Number(rating.rating);
        });

        console.log("sum: ", sum);

        averageRating = sum / ratingCount;
        console.log("average rating: ", averageRating);
        data = { averageRating };

        console.log("data object: ", data);
        return docRef.update(data);
      })
      .catch(err => console.log(err));
  });

exports.setAuthorName = functions.firestore
  .document("recepie/{itemId}")
  .onCreate((snapshot, context) => {
    const userId = snapshot.data().userId;
    const authorRef = admin.firestore().collection('authors').where("userId",'==',`${userId}`);
    let author;
    authorRef.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
            author = doc.data().name;
        })
        return snapshot.ref.set({author: author}, {merge: true});
    }).catch((err) => {console.log(err);})
    return "Done";
  })

exports.deleteRecepieImage = functions.firestore
  .document("recepie/{itemId}")
  .onDelete((snapshot) => {
            const imagePath = snapshot.data().imagePath;

            const storage = admin.app().storage()

            const storageRef = storage.bucket("gs://recepie-app.appspot.com")

            return storageRef.file(imagePath).delete()
      });

  exports.deleteSteps = functions.firestore.document("recepie/{itemId}")
  .onDelete((snapshot, context) => {
    const recepieId = context.params.itemId
    const stepsRef = admin.firestore().collection("steps").where("recepieId", "==", recepieId)

    stepsRef.get().then((querySnapshot => {
      querySnapshot.forEach(doc => {
        let id =  doc.doc().id;
        admin.firestore().doc(`steps/${id}`).delete()
      })
      return "deleted"
    }))
    .catch(err => {
      console.log(err)
    })
    return "deleted all";
  })

  exports.deleteRatings = functions.firestore.document("recepie/{itemId}")
  .onDelete((snapshot, context) => {
    const recepieId = context.params.itemId
    const userId = snapshot.data().userId

        return admin.firestore().doc(`rating/${recepieId}_${userId}`).delete()
  })


