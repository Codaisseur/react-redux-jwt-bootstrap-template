import axios from "axios";

export const saveHomepages = homepages => ({
  type: "SAVE_HOMEPAGES",
  payload: homepages, // => [{}, {}, {}]
});

export const fetchHomepages = () => async (dispatch, getState) => {
  try {
    const response = await axios.get("http://localhost:4000/homepages/");
    console.log(response);
    // make axios call to our endpoint
    // dispatch saveHomepages.
    dispatch(saveHomepages(response.data));
  } catch (error) {
    console.log(error);
  }
};
