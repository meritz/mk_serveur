import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FirestoreMessagService } from '../services/firestore-messag.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public message;

  constructor(private firestoreMessagService: FirestoreMessagService,
    private router: Router,){}

    ngOnInit() {
      this.message = this.firestoreMessagService.getMessageList().valueChanges();
    }

    
}
