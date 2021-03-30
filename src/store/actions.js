import { newsUrl } from '../utils/serviceUrl'

export default {
    increment({ commit }, str) {
        console.log('actions')
        commit('increment', str)
    },
    setIsLoading({ commit }, isLoading) {
        commit('setIsLoading', isLoading)
    },
    queryNews({ commit }, http) {
        console.log(newsUrl)
        http.axios.post(`${newsUrl}`)
            .then(function (response) {
                commit('queryNews', response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}