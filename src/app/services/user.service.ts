import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection
} from "angularfire2/firestore";
import * as M from "materialize-css/dist/js/materialize";

@Injectable({
  providedIn: "root"
})
export class UserService {
  authorCollection: AngularFirestoreCollection<any>;
  constructor(private afs: AngularFirestore) {}

  createAuthor(author: any) {
    this.afs.collection("authors").add(author);
  }

  getAuthor(id: string) {
    this.authorCollection = this.afs.collection("authors", ref =>
      ref.where("userId", "==",`${id}`)
    );

    return this.authorCollection.valueChanges();
  }
}
