export const TriggerAanUitAtrig = (Payload) => ({
  type: "triggeraanuitAtrig",
  payload: Payload,
});

export const TriggerAanUitBtrig = (Payload) => ({
  type: "triggeraanuitBtrig",
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
