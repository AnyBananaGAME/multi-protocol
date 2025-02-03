import { type TextPacketType, getPacketId, type Packet, Packets } from "@serenityjs/protocol";
import type { TextPacket, DataPacket } from "@serenityjs/protocol";
import type { Buffer } from "node:buffer";

import * as v12140 from "./versions/1.21.40/";
import * as v12150 from "./versions/1.21.50/";
import * as v12160 from "./versions/1.21.60/";

type SupportedVersions = "1.21.40" | "1.21.50" | "1.21.60";

type VersionPackets = {
    "1.21.40": typeof v12140;
    "1.21.50": typeof v12150;
    "1.21.60": typeof v12160;
};

// Map packet IDs to their names
const PacketIdToName = (packetId: number) => {
    return Packets[packetId as keyof typeof Packets];
}

type DataProperties<T> = {
    [K in keyof T]: T[K] extends (...args: unknown[]) => unknown ? never : K;
}[keyof T];

type PacketDataOnly<T> = Pick<T, DataProperties<T>>;

interface PacketConstructor<T extends DataPacket = DataPacket> {
    new (buffer?: Buffer): T;
}

export function createPacket<
    V extends SupportedVersions,
    T extends keyof VersionPackets[V]
>(
    version: V,
    packetName: T,
    initialData?: Partial<PacketDataOnly<InstanceType<VersionPackets[V][T]>>>
): InstanceType<VersionPackets[V][T]> {
    const versionModule = version === "1.21.50" ? v12150 :
    version === "1.21.60" ? v12160 : v12140;

    const PacketClass = versionModule[packetName as keyof typeof versionModule] as PacketConstructor;
    
    if (typeof PacketClass !== 'function') {
        throw new Error(`Packet ${String(packetName)} not found in version ${version}`);
    }
    
    const packet = new PacketClass();
    
    if (initialData) {
        Object.assign(packet, initialData);
    }
    
    return packet as InstanceType<VersionPackets[V][T]>;
}

export function readPacket<V extends SupportedVersions>(
    version: V,
    buffer: Buffer
): DataPacket {
    const versionModule = version === "1.21.50" 
        ? v12150 
        : version === "1.21.60" 
            ? v12160 
            : v12140;

    const packetId = getPacketId(buffer);
    const packetName = PacketIdToName(packetId)?.name;
    if(!packetName) {
        throw new Error(`Unknown packet ID ${packetId}`);
    }

    const PacketClass = versionModule[packetName as keyof typeof versionModule] as PacketConstructor;

    if (typeof PacketClass !== 'function') {
        throw new Error(`Packet ${PacketClass} not found in version ${version}`);
    }

    const packet = new PacketClass(buffer);
    packet.deserialize();
    return packet;
}
