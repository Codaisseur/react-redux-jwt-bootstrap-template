export const PatternUpdater = (Payload) => ({
  type: "PATTERNUPDATER",
  payload: Payload,
});

export const PatternUpdatewithSelect = (Payload) => ({
  type: "PATTERNUPDATESELECTOR",
  payload: Payload,
});

// SAVE COMPONENT
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




// TRANSPORT UPDATER
export const Transportupdater = (Payload) => ({
  type: "Transportupdater",
  payload: Payload,
});

// SOUND SETTINGS / SOUNDCHOICE - VOL -DELAY
export const SeqSoundSetter = (Payload) => ({
  type: "seqSettingsSound",
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
export const seqSettingsfilteraction = (Payload) => ({
  type: "seqSettingsfilter",
  payload: Payload,
});

export const seqSettingsDelayfeedbackaction = (Payload) => ({
  type: "seqSettingsdelFeedback",
  payload: Payload,
});
