import { MessageCommand } from "../types.js";

export const MsgCommand: MessageCommand = {
  name: "ping",
  aliases: ["pong"],
  run: (client, message): void => {
    message.channel.send({
      content: `My ping is ${client.ws.ping}ms.`,
    });
  },
}; // Simple ping message command.
