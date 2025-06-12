import { BitField, enumToObject } from '@sapphire/bitfield';
import { objectEntries, omitKeysFromObject } from '@sapphire/utilities';
import { GuildSystemChannelFlags, PermissionFlagsBits } from 'discord.js';

export const PermissionsBits = new BitField(
  omitKeysFromObject(PermissionFlagsBits, 'ManageEmojisAndStickers'),
);
export const PermissionsBitsList = objectEntries(PermissionsBits.flags);
export function toPermissionsArray(bits: bigint) {
  return PermissionsBits.toArray(bits);
}

export const SystemChannelFlags = new BitField(enumToObject(GuildSystemChannelFlags));
export const SystemChannelFlagList = objectEntries(SystemChannelFlags.flags);
export function toChannelsArray(bits: number) {
  return SystemChannelFlags.toArray(bits);
}
