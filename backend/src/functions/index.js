/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
const { PredictionServiceClient } = require('@google-cloud/automl');

const projectId = 'smart8'
const location = 'us-central1'
const modelId = 'TCN7757727435075878912'

exports.main = async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
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

    await client.close()

    res.send(result)
  } catch (error) {
    res.status(201).send(error)
  }
};