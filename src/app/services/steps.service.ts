import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import {
  AngularFirestore,
  AngularFirestoreDocument,
  AngularFirestoreCollection,
} from "angularfire2/firestore";

@Injectable({
  providedIn: "root"
})
export class StepsService {
  stepDocuments: AngularFirestoreDocument<any>
  stepCollection: AngularFirestoreCollection<any>
  steps$: Observable<any>;
  constructor( private afs: AngularFirestore ) {
  }

  getSteps(id: string){
    // this.stepDocuments = this.afs.doc(`steps/${id}`);
    this.stepCollection = this.afs.collection('steps', ref => ref.where("recepieId", "==",`${id}`).limit(1));
    this.steps$ = this.stepCollection.valueChanges();
    return this.steps$;
  }
  setSteps(steps: any){
    this.afs.collection('steps').add(steps);
  }
}
