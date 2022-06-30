/** @type {import('next').NextConfig} */
const { PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const isProd = phase === PHASE_PRODUCTION_BUILD;

  const HostedApi = "https://us-central1-smart8.cloudfunctions.net/question_classification_backend";

  const env = {
    API_URL: isProd ? HostedApi : 'http://localhost:3333',
  };

  return{
    env,
    reactStrictMode: true
  };
};
