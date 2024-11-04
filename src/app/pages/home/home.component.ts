import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormatTimePipe } from '../../core/pipes/format-time';
import { MusicPlayerComponent } from '../../shared/components/music-player/music-player.component';
interface Episode {
  title: string;
  description: string;
  date: string;
  duration: string;
  image: string;

  audioUrl: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, FormatTimePipe, MusicPlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  episodes: Episode[] = [
    {
      title: 'Capítulo 6 - ¿Qué es una liebre en una carrera de atletismo?',
      description: 'En este episodio, hablamos sobre las liebres en las carreras de fondo...',
      date: '2024-10-15',
      duration: '18:26',
      image: 'https://example.com/path-to-image.jpg',
      audioUrl: '/cap-9-ed-withlock.mp3'
    },
    {
      title: 'Capítulo 5 - Lecciones de una carrera complicada...',
      description: 'En este episodio, se cuenta la crónica de una carrera reciente que...',
      date: '2024-10-12',
      duration: '22:01',
      image: 'https://example.com/path-to-image.jpg',
      audioUrl: 'https://example.com/path-to-audio.mp3'
    },
    // Agrega más episodios aquí
  ];

  selectedEpisode: any;
  

  ngOnInit() {
    
  }

  selectEpisode(episode: any) {
    this.selectedEpisode = episode;
    // this.playEpisode(episode.audioUrl);
  }
}
