import { Component, Input } from '@angular/core';
import { FormatTimePipe } from '../../../core/pipes/format-time';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-music-player',
  standalone: true,
  imports: [CommonModule, FormatTimePipe],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.scss',
})
export class MusicPlayerComponent {
  @Input() selectedEpisode: any;
  @Input() isPlaying = false;
  currentAudio = new Audio();
  currentTime = 0;
  totalTime = 0;

  ngOnInit() {
    if (this.selectedEpisode) {
       this.playEpisode(this.selectedEpisode.audioUrl)
    }
   
    // Escuchar el evento timeupdate para actualizar el tiempo actual
    this.currentAudio.addEventListener('timeupdate', () => {
      this.currentTime = this.currentAudio.currentTime;
    });

    // Escuchar el evento loadedmetadata para obtener la duración total del audio
    this.currentAudio.addEventListener('loadedmetadata', () => {
      this.totalTime = this.currentAudio.duration;
    });
    
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
}
