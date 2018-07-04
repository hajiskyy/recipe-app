import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";

import {
  AngularFireStorage,
  AngularFireUploadTask
} from "angularfire2/storage";
import { Observable, Subject } from "rxjs";
import { map, finalize } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class RecepiesService {
  recepieCollections: AngularFirestoreCollection<any>;
  feedRecepieCollections: AngularFirestoreCollection<any>;
  dashBoardCollections: AngularFirestoreCollection<any>;
  recepieDoc: AngularFirestoreDocument<any>;
  RatingsRef: AngularFirestoreCollection<any>;

  task: AngularFireUploadTask;
  url: Observable<any>;
  ratings: Observable<any>;
  upload: Observable<any>;
  recepies: Observable<any[]>;
  recepie: Observable<any>;

  constructor(
    private afs: AngularFirestore,
    private afStore: AngularFireStorage
  ) {
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
  getDashboardRecepies(userId: string): Observable<any[]> {
    this.dashBoardCollections = this.afs.collection("recepie", ref =>
      ref.where("userId","==",userId) //TODO-UID
    );
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
    this.feedRecepieCollections = this.afs.collection("recepie", ref =>
      ref.orderBy("averageRating", "desc").limit(3)
    );
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

  setRecepie(id: string, recepie: any) {
    this.afs.doc(`recepie/${id}`).set(recepie);
  }
  
  deleteRecepie(id: string){
    return this.afs.doc(`recepie/${id}`).delete()
  }

  addRating(recepieId: string, userId: string, rating: number) {
    let newRating: Rating = { userId: userId, rating: rating };
    let ratingPath = `recepie/${recepieId}/ratings/${recepieId}_${
      newRating.userId
    }`;

    this.afs.doc(ratingPath).set(newRating);
  }

  uploadImage(file: File, path: string) {
    this.task = this.afStore.upload(path, file);

    // console.log(this.task.task.snapshot.downloadURL);
    return this.task.task.snapshot.ref.getDownloadURL();
  }

}
interface Rating {
  userId: string;
  rating: number;
}
