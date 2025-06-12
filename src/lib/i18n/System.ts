import { T } from 'lib/types/Utils.js';

export const FetchBansFail = T('system:fetchBansFail');
export const Loading = T('system:loading');
export const DiscordAbortError = T('system:discordAbortError');
export const HelpTitles = T<{
  aliases: string;
  usages: string;
  extendedHelp: string;
  explainedUsage: string;
  possibleFormats: string;
  examples: string;
  reminders: string;
}>('system:helpTitles');
