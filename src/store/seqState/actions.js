export const PatternUpdater = (Payload) => ({
  type: "PATTERNUPDATER",
  payload: Payload,
});

export const PatternUpdaterselected = (Payload) => ({
  type: "PATTERNUPDATERSELECTED",
  payload: Payload,
});

export const SeqSoundSetter = (Payload) => ({
  type: "SeqSoundSetter",
  payload: Payload,
});

export const Patterncolorsetter = (Payload) => ({
  type: "Patterncolorsetter",
  payload: Payload,
});

export const Patternnamesetter = (Payload) => ({
  type: "Patternnamesetter",
  payload: Payload,
});

export const PatternSaver = (name, color, pattern) => ({
  type: "PatternSaver",
  payload: { name, color, pattern },
});

export const Transportupdater = (Payload) => ({
  type: "Transportupdater",
  payload: Payload,
});

export const seqSettingsVolaction = (Payload) => ({
  type: "seqSettingsvol",
  payload: Payload,
});

export const seqSettingsDelayaction = (Payload) => ({
  type: "seqSettingsdel",
  payload: Payload,
});
