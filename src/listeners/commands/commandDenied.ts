import { UserError, CommandDeniedPayload, Listener } from '@sapphire/framework';

export class CommandDeniedListener extends Listener {
  public run(error: UserError, { message }: CommandDeniedPayload) {
    if (Reflect.get(Object(error.context), 'silent')) return;
    return message.reply({content: error.message})
  }
}