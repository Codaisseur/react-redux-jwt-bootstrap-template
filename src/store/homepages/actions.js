import axios from "axios";

export const saveHomepages = homepages => ({
  type: "SAVE_HOMEPAGES",
  payload: homepages, // => [{}, {}, {}]
});

export const saveUserHomepage = homepage => ({
  type: "SAVE_USER_HOMEPAGE",
  payload: homepage,
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

export const updateHomepage = (id, newHomepage) => async (
  dispatch,
  getState
) => {
  try {
    const { token } = getState().user;
    const { title, description, color, bgColor } = newHomepage;
    const response = await axios.patch(
      `http://localhost:4000/homepages/${id}`,
      {
        title,
        description,
        color,
        backgroundColor: bgColor,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(saveUserHomepage(response.data));
    console.log(response);
  } catch (e) {
    console.log(e);
  }
};
