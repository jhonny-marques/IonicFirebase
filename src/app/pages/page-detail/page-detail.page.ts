import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from '../../services/data';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.page.html',
  styleUrls: ['./page-detail.page.scss'],
  standalone: false,
})
export class PageDetailPage implements OnInit {
  item = {
    name: '',
    description: '',
  };

  itemId: string | null = null;
  isNewItem = true;
form: any;

  constructor(
    private route: ActivatedRoute,
    private dataService: Data,
    private router: Router,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.itemId = this.route.snapshot.paramMap.get('id');
    if (this.itemId) {
      this.isNewItem = false;
      this.loadItem();
    }
  }

  async loadItem() {
    const loading = await this.loadingController.create({
      message: 'Carregando item...',
    });

    await loading.present();

    this.dataService.getItem(this.itemId!).subscribe(
      (item) => {
        loading.dismiss();

        if (item) {
          this.item = item;
        } else {
          this.presentToast('Item não encontrado!', 'danger');
          this.router.navigateByUrl('/home');
        }
      },
      (err) => {
        loading.dismiss();
        this.presentToast('Erro ao carregar item.', 'danger');
        this.router.navigateByUrl('/home');
      }
    );
  }

  async saveItem() {
    const loading = await this.loadingController.create({
      message: 'Salvando item...',
    });

    await loading.present();

    if (this.isNewItem) {
      this.dataService
        .addItem(this.item)
        .then(() => {
          loading.dismiss();
          this.presentToast('Item adicionado com sucesso!', 'success');
          this.router.navigateByUrl('/home');
        })
        .catch(() => {
          loading.dismiss();
          this.presentToast('Erro ao adicionar item.', 'danger');
        });
    } else {
      this.dataService
        .updateItem(this.item)
        .then(() => {
          loading.dismiss();
          this.presentToast('Item atualizado com sucesso!', 'success');
          this.router.navigateByUrl('/home');
        })
        .catch(() => {
          loading.dismiss();
          this.presentToast('Erro ao atualizar item.', 'danger');
        });
    }
  }

  async presentToast(message: string, color: string = 'primary') {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color,
    });
    toast.present();
  }
}
