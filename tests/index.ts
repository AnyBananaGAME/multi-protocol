import { createPacket } from "../src/index";
import { TextPacketType } from "@serenityjs/protocol";
import { readPacket } from "../src/index";

const textPacket = createPacket("1.21.40", "TextPacket", {
    type: TextPacketType.Chat,
    needsTranslation: false,
    source: "Blob",
    message: "Meowcraft",
    parameters: [],
    xuid: "12345",
    platformChatId: "test",
    filtered: "Watermelon cow"
});

const cleanPacket = (packet: object) => {
    const cleaned: Record<string, unknown> = {};
    for (const key in packet) {
        if (typeof packet[key] !== 'function') {
            cleaned[key] = packet[key];
        }
    }
    return cleaned;
}

const buffer = textPacket.serialize();
const packet = readPacket("1.21.40", buffer);
console.log(cleanPacket(packet));