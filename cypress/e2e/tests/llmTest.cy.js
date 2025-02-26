import OpenAi from '../../page-objects/authorisation/auth';

describe('OpenAI API Test', () => {
  const openAiApi = new OpenAi();

  it('Should return the correct response', () => {
    openAiApi.sendMessage('What is the capital of England?').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.choices[0].message.content.trim()).to.include('London');
    });
  });
});