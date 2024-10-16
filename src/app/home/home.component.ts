import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
  imports: [CommonModule, FormsModule],
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
  isPlaying = false;
  currentAudio = new Audio();
  currentTime = 0;
  totalTime = 0;

  ngOnInit() {
    // Escuchar el evento timeupdate para actualizar el tiempo actual
    this.currentAudio.addEventListener('timeupdate', () => {
      this.currentTime = this.currentAudio.currentTime;
    });

    // Escuchar el evento loadedmetadata para obtener la duración total del audio
    this.currentAudio.addEventListener('loadedmetadata', () => {
      this.totalTime = this.currentAudio.duration;
    });
  }

  selectEpisode(episode: any) {
    this.selectedEpisode = episode;
    this.playEpisode(episode.audioUrl);
  }

  playEpisode(url: string) {
    if (this.currentAudio.src !== url) {
      this.currentAudio.src = url;
      this.currentAudio.load();
    }
    this.currentAudio.play();
    this.isPlaying = true;
  }
  
  togglePlay() {
    if (this.isPlaying) {
      this.currentAudio.pause();
    } else {
      this.currentAudio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  seekAudio(event: any) {
    const time = event.target.value;
    this.currentAudio.currentTime = time;
  }

  // Método para formatear el tiempo en minutos y segundos
  formatTime(time: number): string {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
}
