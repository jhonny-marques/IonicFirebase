import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataPets, Pet} from '../../services/data-pets';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pets-detail',
  templateUrl: './pets-detail.page.html',
  styleUrls: ['./pets-detail.page.scss'],
  standalone: false
})
export class PetsDetailPage implements OnInit {

  pet: Pet = {
    nome: '',
    especie: '',
    raca: '',
    idade: '',
    observacoes: ''
  };

  petId: string | null = null;
  isNewPet = true;

  constructor(private route: ActivatedRoute, private data: DataPets, private router: Router, 
              private loadingController: LoadingController, private toastController: ToastController) {}

    ngOnInit() {
    this.petId = this.route.snapshot.paramMap.get('id');
    if(this.petId){
      this.isNewPet = false;
      this.loadPet();
    }
  }

  async loadPet() {
  const loading = await this.loadingController.create({
    message: 'Carregando pet...'
  });
  await loading.present();

  this.data.getPet(this.petId!).subscribe(res => {
    loading.dismiss();

    if (res) {
      this.pet = res;
    } else {
      this.presentToast('Pet não encontrado!', 'danger');
      this.router.navigateByUrl('/pets-list');
    }
  }, err => {
    loading.dismiss();
    this.presentToast('Erro ao carregar o pet.', 'danger');
    this.router.navigateByUrl('/pets-list');
  });
  }

  async savePet(){
    const loading = await this.loadingController.create({
      message: 'Salvando pet...'
    });
    await loading.present();

    if(this.isNewPet) {
      this.data.addPet(this.pet).then(() => {
        loading.dismiss();
        this.presentToast('Pet adicionado com sucesso.', 'success');
        this.router.navigateByUrl('/pets-list');
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao adicionar o pet.', 'danger');
      });
    }else{
      this.data.updatePet(this.pet).then(() => {
        loading.dismiss();
        this.presentToast('Pet atualizado com sucesso.', 'success');
        this.router.navigateByUrl('/pets-list');
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao atualizar o pet.', 'danger');
      });
    }
  }

  async presentToast(message: string, color: string = 'primary'){
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });

    toast.present();
  }

}
