import { Precondition } from '@sapphire/framework';
import type { Message } from 'discord.js';

export class OwnerOnlyPrecondition extends Precondition {
  public run(message: Message) {
    return message.author.id === '387886389800337409'
      ? this.ok()
      : this.error({ 
        message: 'Hanya owner yang bisa menjalankan perintah ini!',
      });
  }
}

declare module '@sapphire/framework' {
  interface Preconditions {
    Moderator: never;
    OwnerOnly: never;
  }
}