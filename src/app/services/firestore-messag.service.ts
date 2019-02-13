import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class FirestoreMessagService {

  

  constructor(public firestore: AngularFirestore) { }

  getMessageList(): AngularFirestoreCollection<Message> {
    return this.firestore.collection(`message`);
  }
}
