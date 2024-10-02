require('dotenv').config();
const { TextAnalyticsClient, AzureKeyCredential } = require("@azure/ai-text-analytics");

const apiKey = process.env.TEXT_ANALYTICS_API_KEY;
const endpoint = process.env.TEXT_ANALYTICS_ENDPOINT;

const textAnalyticsClient = new TextAnalyticsClient(endpoint, new AzureKeyCredential(apiKey));

async function analyzeText() {
    const documents = ["I love programming in JavaScript! It's amazing.", "This weather is terrible."];
    
    const sentimentResult = await textAnalyticsClient.analyzeSentiment(documents);
    sentimentResult.forEach(doc => {
        console.log(`Document Sentiment: ${doc.sentiment}`);
        console.log(`Confidence Scores:`, doc.confidenceScores);
    });

    const keyPhrasesResult = await textAnalyticsClient.extractKeyPhrases(documents);
    keyPhrasesResult.forEach(doc => {
        console.log(`Key Phrases: ${doc.keyPhrases.join(', ')}`);
    });
}

analyzeText();
