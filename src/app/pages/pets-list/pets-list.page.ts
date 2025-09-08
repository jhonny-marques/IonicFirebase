import { Component, OnInit } from '@angular/core';
import { DataPets, Pet } from '../../services/data-pets';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.page.html',
  styleUrls: ['./pets-list.page.scss'],
  standalone: false
})
export class PetsListPage implements OnInit {
pets: Pet[] = [];

  constructor(
    private data: DataPets,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.data.getPets().subscribe((res) => {
      this.pets = res;
    });
  }

  addPet() {
    this.router.navigateByUrl('/pets-detail');
  }

  editPet(pet: Pet) {
  this.router.navigate([`/pets-detail/${pet.id}`]);
}

async deletePet(id: string) {
  const alert = await this.alertController.create({
    header: 'Confirmar exclusão',
    message: 'Tem certeza que deseja excluir este pet?',
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        cssClass: 'secondary'
      },
      {
        text: 'Excluir',
        handler: () => {
          this.data.deletePet(id);
        }
      }
    ]
  });

  await alert.present();
}

}
