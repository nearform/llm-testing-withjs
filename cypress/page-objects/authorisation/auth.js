/* eslint no-undef: 0 */
class OpenAi {
  constructor() {
    this.apiUrl = 'https://api.openai.com/v1/chat/completions'
    this.authHeader = {
      Authorization: `Bearer ${Cypress.env('openai_api_key')}`,
      'Content-Type': 'application/json'
    }
  }

  sendMessage(message) {
    return cy.request({
      method: 'POST',
      url: this.apiUrl,
      headers: this.authHeader,
      body: {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }]
      }
    })
  }
}

export default OpenAi
