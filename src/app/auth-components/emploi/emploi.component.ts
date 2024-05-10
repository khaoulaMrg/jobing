import { Component, OnInit } from '@angular/core';
import { EmploiService } from './emploi-services/emploi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-emploi',
  templateUrl: './emploi.component.html',
  styleUrls: ['./emploi.component.css']
})

export class EmploiComponent implements OnInit {
  jobs: any[];
  subscription: Subscription;

  constructor(private emploiService: EmploiService) { }

  ngOnInit(): void {
    this.subscription = this.emploiService.getJobs().subscribe({
      next: (data: any[]) => {
        this.jobs = data;
      },
      error: (error) => {
        console.error('Une erreur est survenue lors de la récupération des annonces d\'emploi : ', error);
      }
    });
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
