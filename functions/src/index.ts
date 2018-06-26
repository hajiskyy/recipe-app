import * as functions from 'firebase-functions';
import * as  admin from 'firebase-admin';

admin.initializeApp(functions.config().firebase);

exports.aggregateRatings = functions.firestore
    .document('recepie/{recepieID}/ratings/{ratingId}')
    .onWrite((change, context) => {
        const ratingId = context.params.ratingId;
        const recepie_id = context.params.recepieID;

        //ref to the parent document
        const docRef = admin.firestore().collection('recepie').doc(recepie_id)

        //get all ratings and aggregate
        return docRef.collection('ratings').orderBy('rating', 'desc')
        .get()
        .then(querySnapshot => {
            const ratingCount = querySnapshot.size
            const ratings = []
            let sum:number
            let averageRating: number

            querySnapshot.forEach(doc => {
                ratings.push(doc.data());
            });

            console.log("ratings array: ", ratings);

            ratings.forEach(rating => {
                sum += rating.rating;
            });

            console.log("sum: ", sum)

            averageRating = sum / ratingCount;
            console.log("average rating: ",averageRating);

            let data: any
            data = { averageRating }

            console.log("data object: ", data);
            return docRef.update(data);
        })
        .catch(err => console.log(err))
    })

