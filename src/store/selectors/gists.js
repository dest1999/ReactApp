export const selectGists = (state) => {
    return state.gists;
}

export const selectGistsError = (state) => {
  return state.gists.error;
}

export const selectGistsLoading = (state) => {
  return state.gists.loading;
}