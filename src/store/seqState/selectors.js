export const selectSeqPattern = (state) => state.seqState.seqPattern;
export const selectSeqPatternMeta = (state) => state.seqState.seqPatternMeta;
export const selectSeqSound = (state) => state.seqState.seqSoundSelected;

export const SavedPatterns = (state) => state.seqState.SavedPatterns;

export const Transportstate = (state) => state.seqState.Transportstate;

export const seqSettingsVol = (state) => state.seqState.seqSettingsvol;
export const seqSettingsDel = (state) => state.seqState.seqSettingsdel;
export const seqSettingsDelfeedback = (state) =>
  state.seqState.seqSettingsDelfeedback;
