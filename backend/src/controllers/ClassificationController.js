// const language = require('@google-cloud/language');
const { PredictionServiceClient } = require('@google-cloud/automl');
const { projectId, location, modelId } = require('../config/project.config')

module.exports = {
  async read(req, res) {
    const { text } = req.query;
    try {

      const client = new PredictionServiceClient();
      
      const request = {
        name: client.modelPath(projectId, location, modelId),
        payload: {
          textSnippet: {
            content: text,
            mimeType: 'text/plain', // Types: 'test/plain', 'text/html'
          },
        },
      };
      
      
      const [response] = await client.predict(request);
      
      let result = {
        displayName: "none",
        classification: {
          score: 0
        },
      };
      
      response.payload.map(value => {
        if (result.classification.score < value.classification.score) {
          result = value;
        }
      })
      res.send(result)
    } catch (error) {
      res.status(201).send(error)
    }
  }
}