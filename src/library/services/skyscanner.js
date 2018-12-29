import Axios from 'axios'

const defaultParameters = () => ({
  adults: 1,
  country: 'US',
  currency: 'USD',
  locale: 'en-US',
  originPlace: 'SLC-sky',
  destinationPlace: 'JFK-sky',
  outboundDate: 'anytime',
  inboundDate: 'anytime',
})

export default class SkyscannerApi {
  static allQuotes(options = {}) {
    return Axios.get('http://localhost:8080/quotes/allQuotes', options)
      .then(({data}) => {
        return data
      })
      .catch((error) => {
        throw error
      })
  }

  static batchQuotes(options = {}) {
    const params = Object.assign({}, defaultParameters())
    delete params.originPlace
    delete params.destinationPlace

    params.destinationPlaces = ['BNA-sky', 'LAX-sky', 'PHX-sky']
    params.originPlaces = ['SLC-sky']
    return Axios.post('http://localhost:8080/quotes/batchQuotes', params, options).then(
      ({ data }) => {
        return data
      }
    )
  }

  /**
   * get a single quote from the skyscanner api
   * @param {object} params Request parameters for skyscanner quotes api
   * @param {string} params.outboundDate The outbound date
   * @param {string} params.currency Currency
   * @param {string} params.locale Locale
   * @param {string} params.originPlace Origin Place
   * @param {string} params.outboundDate Outbound Date
   * @param {number} params.adults Number of adults travelling
   * @param {string} params.inboundDate Inbound Date
   */
  static getQuote(params, options = {}) {
    const requestParams = {
      ...defaultParameters(),
      ...params,
    }
    requestParams.adults = parseInt(requestParams.adults, 10)
    return Axios.post('http://localhost:8080/quotes/getQuote', requestParams, options)
      .then(({ data }) => {
        return data
      })
      .catch((error) => {
        throw error
      })
  }
}
