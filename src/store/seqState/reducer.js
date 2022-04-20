const initialState = {
  seqPattern: [
    { id: 1, Atrig: false, Btrig: false },
    { id: 2, Atrig: false, Btrig: false },
    { id: 3, Atrig: false, Btrig: false },
    { id: 4, Atrig: false, Btrig: false },
  ],
  seqSoundSelected: "Wood",
  seqSongPattern: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "sequencer/triggerToggle": {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};
