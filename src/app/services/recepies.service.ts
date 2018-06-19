import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable, Subject } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root"
})
export class RecepiesService {
  recepieCollections: AngularFirestoreCollection<any>;
  recepieDoc: AngularFirestoreDocument<any>;
  recepies: Observable<any[]>;
  recepie: Observable<any>;

  constructor(private afs: AngularFirestore) {
    this.recepieCollections = this.afs.collection("recepie");
  }

  getRecepies(): Observable<any[]> {
    this.recepies = this.recepieCollections.snapshotChanges().pipe(map(changes => {
      return changes.map(actions => {
        const data = actions.payload.doc.data() as any;
        data.id = actions.payload.doc.id;
        return data;
      });
    }));

    return this.recepies;
  }
}
