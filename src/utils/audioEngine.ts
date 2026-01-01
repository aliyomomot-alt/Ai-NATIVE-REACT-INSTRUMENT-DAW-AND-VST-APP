import * as Tone from 'tone';

export class AudioEngine {
  private static instance: AudioEngine;
  public transport: typeof Tone.Transport;
  public context: Tone.BaseContext;

  private constructor() {
    this.transport = Tone.Transport;
    this.context = Tone.getContext();
  }

  public static getInstance(): AudioEngine {
    if (!AudioEngine.instance) {
      AudioEngine.instance = new AudioEngine();
    }
    return AudioEngine.instance;
  }

  public async start(): Promise<void> {
    await Tone.start();
  }

  public startTransport(): void {
    this.transport.start();
  }

  public stopTransport(): void {
    this.transport.stop();
  }

  public pauseTransport(): void {
    this.transport.pause();
  }

  public setTempo(bpm: number): void {
    this.transport.bpm.value = bpm;
  }

  public getTempo(): number {
    return this.transport.bpm.value;
  }

  public getPosition(): string {
    return this.transport.position as string;
  }
}

export default AudioEngine.getInstance();
