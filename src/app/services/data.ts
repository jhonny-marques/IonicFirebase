import { Injectable } from '@angular/core';

// Importações do SDK Modular do Firestore
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
import { Observable } from 'rxjs';

export interface Item {
  id?: string;
  name: string;
  description: string;
  createdAt?: number;
}

@Injectable({
  providedIn: 'root'
})
export class Data {
  constructor(private firestore: Firestore){}
  
  // Retorna todos os itens
  getItems(): Observable<Item[]> {
    const itemsCollectionRef = collection(this.firestore, 'items');
    const q = query(itemsCollectionRef, orderBy ('createdAt', 'desc'));
    return collectionData(q, {idField: 'id'}) as Observable<Item[]>;
  }

  // Retorna um item específico pelo ID
  getItem(id: string): Observable<Item | undefined>{
    const itemDocRef = doc(this.firestore, `items${id}`);
    return docData(itemDocRef, {idField: 'id'}) as Observable<Item | undefined>;
  }

  // Adiciona um novo item
  addItem(item: Item) {
    const itemsCollectionRef = collection(this.firestore, 'items');
    return addDoc(itemsCollectionRef, {...item, createdAt: Date.now() });
  }

  // Atualiza um item existente
  updateItem(item: Item) {
    const itemDocRef = doc(this.firestore, `items/${item.id}`);
    return updateDoc(itemDocRef, {name: item.name, description: item.description });
  }

  // Deleta um item pelo ID
  deleteItem(id: string) {
    const itemDocRef = doc(this.firestore, `items/${id}`);
    return deleteDoc(itemDocRef);
  }
}
