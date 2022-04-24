export const selectSeqPattern = (state) => state.seqState.seqPattern;

export const SavedPatterns = (state) => state.seqState.SavedPatterns;

export const Transportstate = (state) => state.seqState.Transportstate;

export const selectSeqSound = (state) =>
  state.seqState.Settings.seqSoundSelected;

// export const seqSettingsVol = (state) => state.seqState.Settings.seqSettingsvol;
// export const seqSettingsDel = (state) => state.seqState.Settings.seqSettingsdel;
// export const seqSettingsDelfeedback = (state) =>
//   state.seqState.Settings.seqSettingsDelfeedback;

export const seqSettings = (state) => state.seqState.Settings;
