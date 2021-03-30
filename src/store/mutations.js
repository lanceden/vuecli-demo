
export default {
    increment(state, str) {
        console.log('mutations')
        state.test = str
        console.log(state.test)
    },
    setIsLoading(state, isLoading) {
        state.isLoading = isLoading
    },
    queryNews(state, data) {
        state.newsList = data.Data.Result
    }
}