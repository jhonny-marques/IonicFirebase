import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DataCuidadores, Cuidador} from '../../services/data-cuidadores';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cuidadores-detail',
  templateUrl: './cuidadores-detail.page.html',
  styleUrls: ['./cuidadores-detail.page.scss'],
  standalone: false
})
export class CuidadoresDetailPage implements OnInit {

  cuidador: Cuidador = {
    nome: '',
    telefone: '',
    experiencia: '',
    especialidades: ''
  };

  cuidadorId: string | null = null;
  isNewCuidador = true;

  constructor(private route: ActivatedRoute, private data: DataCuidadores, private router: Router, 
              private loadingController: LoadingController, private toastController: ToastController) {}

    ngOnInit() {
    this.cuidadorId = this.route.snapshot.paramMap.get('id');
    if(this.cuidadorId){
      this.isNewCuidador = false;
      this.loadCuidador();
    }
  }

  async loadCuidador() {
  const loading = await this.loadingController.create({
    message: 'Carregando cuidador(a)...'
  });
  await loading.present();

  this.data.getCuidador(this.cuidadorId!).subscribe(res => {
    loading.dismiss();

    if (res) {
      this.cuidador = res;
    } else {
      this.presentToast('Cuidador não encontrado!', 'danger');
      this.router.navigateByUrl('/cuidadores-list');
    }
  }, err => {
    loading.dismiss();
    this.presentToast('Erro ao carregar o pet.', 'danger');
    this.router.navigateByUrl('/cuidadores-list');
  });
  }

  async saveCuidador(){
    const loading = await this.loadingController.create({
      message: 'Salvando cuidador...'
    });
    await loading.present();

    if(this.isNewCuidador) {
      this.data.addCuidador(this.cuidador).then(() => {
        loading.dismiss();
        this.presentToast('Cuidador adicionado com sucesso.', 'success');
        this.router.navigateByUrl('/cuidadores-list');
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao adicionar o cuidador.', 'danger');
      });
    }else{
      this.data.updateCuidador(this.cuidador).then(() => {
        loading.dismiss();
        this.presentToast('Cuidador atualizado com sucesso.', 'success');
        this.router.navigateByUrl('/cuidadores-list');
      }, err => {
        loading.dismiss();
        this.presentToast('Erro ao atualizar o cuidador.', 'danger');
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
