import { Component, OnInit } from "@angular/core";
import * as M from "materialize-css/dist/js/materialize";
import { AngularFirestore } from "angularfire2/firestore";
import { AngularFireStorage } from "angularfire2/storage";
import { map } from "rxjs/operators";
import { RecepiesService } from "../../services/recepies.service";
import { StepsService } from "../../services/steps.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-recepie-form",
  templateUrl: "./add-recepie-form.component.html",
  styleUrls: ["./add-recepie-form.component.css"]
})
export class AddRecepieFormComponent implements OnInit {
  numOfIngredients: number;
  timeDigit: number;
  timeString: String;
  ingredients: string[];
  ingFormControl: number[];
  steps: string[];
  stepFormControl: number[];
  addSteps: boolean;
  image: File;
  name: String;
  difficulty: String;
  description: String;

  constructor(
    private afs: AngularFirestore,
    private afStorage: AngularFireStorage,
    private stepsServe: StepsService,
    private recepieServe: RecepiesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.UIselects();

    //initialize ingredients
    this.ingredients = [];

    //initialize step
    this.steps = [];

    //ingredients form controller
    this.ingFormControl = [0];

    //steps form controller
    this.stepFormControl = [0];

    //init add steps controller
    this.addSteps = false;

    //init difficulty
    this.difficulty = "easy";

    //init time string
    this.timeString = "minutes";
  }

  difficultyChange(e) {
    this.difficulty = e.target.value;
  }

  addIngredientForm(e: any) {
    e.preventDefault();
    this.ingFormControl.push(
      this.ingFormControl[this.ingFormControl.length] + 1
    );
  }

  addStepForm(e: any) {
    e.preventDefault();
    this.stepFormControl.push(
      this.stepFormControl[this.stepFormControl.length] + 1
    );
  }

  minusIngredientForm(e: any, i) {
    e.preventDefault();
    if (this.ingFormControl.length === 1) {
      // TODO ERROR MESSAGE
    } else {
      this.ingFormControl.splice(i, 1);
      this.ingredients.splice(i, 1);
    }
  }

  minusStepForm(e: any, i) {
    e.preventDefault();
    this.stepFormControl.splice(i, 1);
    this.steps.splice(i, 1);
  }

  newIngredient(e, i) {
    this.ingredients[i] = e.target.value;
  }

  newStep(e, i) {
    this.steps[i] = e.target.value;
  }

  minusHover(e) {
    let instances = M.Tooltip.init(e.target, {
      position: "left",
      html: "Remove"
    });
  }

  addHover(e) {
    let instances = M.Tooltip.init(e.target, {
      position: "bottom",
      html: "Add more"
    });
  }

  UIselects() {
    let elems = document.querySelectorAll("#difficulty");
    let instances = M.FormSelect.init(elems, {});

    let elems2 = document.querySelectorAll("#timeString");
    let instances2 = M.FormSelect.init(elems2, {});
  }

  fileChange(e) {
    this.image = e.target.files[0];
  }

  timeChange(e) {
    this.timeString = e.target.value;
  }

  onSubmit(e) {
    e.preventDefault();
    interface Recepie {
      name: String;
      description: String;
      difficulty: String;
      ingredients: String[];
      time: String;
      imageUrl?: any;
      imagePath?: any;
      userId: string;
    }
    interface Steps {
      recepieId: string;
      steps: string[];
    }

    //set image storage path
    let storagePath = `images/${this.image.name}_OD45ZJRBa1flzhWj49myqvzL7oh2`; //TODO- UID

    let Recepie: Recepie = {
      name: this.name,
      description: this.description,
      difficulty: this.difficulty,
      ingredients: this.ingredients,
      time: this.timeDigit + " " + this.timeString,
      userId: "OD45ZJRBa1flzhWj49myqvzL7oh2",
      imagePath: storagePath
    };

    if (
      Recepie.name &&
      Recepie.description &&
      Recepie.difficulty &&
      Recepie.ingredients &&
      Recepie.time
    ) {
      if (this.image) {

        //create Id
        let id = this.afs.createId();

        if (this.addSteps) {
          let steps: Steps = {
            recepieId: id,
            steps: this.steps
          };
          //upload steps
          this.stepsServe.setSteps(steps);
        }
        // Upload image
        this.recepieServe.uploadImage(this.image, storagePath).then(res => {
          Recepie.imageUrl = res;
          this.recepieServe.setRecepie(id, Recepie);
          M.toast({ html: "recepie added" });
          this.router.navigate(["/dashboard"]);
        });

      } else {
        M.toast({ html: "select an image to upload" });
      }
    } else {
      //TODO ERROR MESSAGE
      M.toast({ html: "fill out all fields" });
    }
  }
}
