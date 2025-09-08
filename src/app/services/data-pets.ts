import { Injectable } from '@angular/core';

import {
  Firestore,
  collection,
  doc,
  collectionData,
  docData,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy
} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface Pet {
  id?: string;
  nome: string;
  especie: string;
  raca: string;
  idade: string;
  observacoes: string;
  createdAt?: number
}

@Injectable({
  providedIn: 'root'
})

export class DataPets {
  constructor(private firestore: Firestore){}

  getPets(): Observable<Pet[]> {
    const petsCollectionRef = collection(this.firestore, 'pets');
    const q = query(petsCollectionRef, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<Pet[]>;
  }

  getPet(id: string): Observable<Pet | undefined> {
  const petDocRef = doc(this.firestore, `pets/${id}`);
  return docData(petDocRef, { idField: 'id' }) as Observable<Pet | undefined>;
  }

  addPet(pet: Pet) {
  const petsCollectionRef = collection(this.firestore, 'pets');
  return addDoc(petsCollectionRef, { ...pet, createdAt: Date.now() });
  }

  updatePet(pet: Pet) {
  const petDocRef = doc(this.firestore, `pets/${pet.id}`);
  return updateDoc(petDocRef, { nome: pet.nome, especie: pet.especie, raca: pet.raca,
                                 idade: pet.idade, observacoes: pet.observacoes });
  }

  deletePet(id: string) {
  const petDocRef = doc(this.firestore, `pets/${id}`);
  return deleteDoc(petDocRef);
  }
}
