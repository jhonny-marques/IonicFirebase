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

export interface Cuidador {
  id?: string,
  nome: string;
  telefone: string;
  experiencia: string;
  especialidades: string;
  createdAt?: number
}

@Injectable({
  providedIn: 'root'
})

export class DataCuidadores {
  constructor(private firestore: Firestore){}

  getCuidadores(): Observable<Cuidador[]> {
    const cuidadoresCollectionRef = collection(this.firestore, 'cuidadores');
    const q = query(cuidadoresCollectionRef, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<Cuidador[]>;
  }

  getCuidador(id: string): Observable<Cuidador | undefined> {
  const cuidadorDocRef = doc(this.firestore, `cuidadores/${id}`);
  return docData(cuidadorDocRef, { idField: 'id' }) as Observable<Cuidador | undefined>;
  }

  addCuidador(cuidador: Cuidador) {
  const cuidadoresCollectionRef = collection(this.firestore, 'cuidadores');
  return addDoc(cuidadoresCollectionRef, { ...cuidador, createdAt: Date.now() });
  }

  updateCuidador(cuidador: Cuidador) {
  const cuidadorDocRef = doc(this.firestore, `cuidadores/${cuidador.id}`);
  return updateDoc(cuidadorDocRef, { nome: cuidador.nome, telefone: cuidador.telefone, experiencia: cuidador.especialidades});
  }

  deleteCuidador(id: string) {
  const cuidadorDocRef = doc(this.firestore, `cuidadores/${id}`);
  return deleteDoc(cuidadorDocRef);
  }
}
