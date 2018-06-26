import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable, Subject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RecepiesService {
  recepieCollections: AngularFirestoreCollection<any>;
  feedRecepieCollections: AngularFirestoreCollection<any>;
  recepieDoc: AngularFirestoreDocument<any>;
  RatingsRef: AngularFirestoreCollection<any>

  ratings: Observable<any>
  recepies: Observable<any[]>;
  recepie: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.recepieCollections = this.afs.collection("recepie");
  }

  getRecepies(): Observable<any[]> {
    this.recepies = this.recepieCollections.snapshotChanges().pipe(
      map(changes => {
        return changes.map(actions => {
          const data = actions.payload.doc.data() as any;
          data.id = actions.payload.doc.id;
          return data;
        });
      })
    );
    return this.recepies;
  }
  getFeedRecepies(): Observable<any[]> {
    this.feedRecepieCollections = this.afs.collection("recepie", ref => ref.limit(3));
    this.recepies = this.feedRecepieCollections.snapshotChanges().pipe(
      map(changes => {
        return changes.map(actions => {
          const data = actions.payload.doc.data() as any;
          data.id = actions.payload.doc.id;
          return data;
        });
      })
    );
    return this.recepies;
  }

  getSingleRecepie(id: string): Observable<any> {
    this.recepieDoc = this.afs.doc(`recepie/${id}`);
    this.recepie = this.recepieDoc.valueChanges();
    return this.recepie;
  }

  addRating(recepieId: string, userId: string, rating: number){
    
    let newRating: Rating = {userId: userId, rating: rating};
    let ratingPath =`recepie/${recepieId}/ratings/${recepieId}_${newRating.userId}`;

    this.afs.doc(ratingPath).set(newRating);
  }
}


interface Rating{
  userId: string,
  rating: number
}