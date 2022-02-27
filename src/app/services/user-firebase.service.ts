import { Injectable } from '@angular/core';
import {
  Firestore, addDoc, collection, collectionData,
  doc, docData, deleteDoc, updateDoc, DocumentReference, setDoc
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {IUser} from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class UserFirebaseService {

  constructor(private firestore: Firestore) { }

  addUser(user: IUser) {
    const userRef = collection(this.firestore, 'ys-users'); 
    return addDoc(userRef, user);
  }
}
