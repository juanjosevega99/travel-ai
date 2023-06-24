import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';


const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const runtime = 'edge';

export async function POST(req) {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: 'system',
        content:
          'Compórtotate como si fueras un agente de viajes muy amable y dispuesto  a recomendarme las mejores lugares para viajar',
      },
      {
        role: 'user',
        content:
          'Hola, quiero ir a perú de vacaciones, tengo 10 días para conocer lugares',
      },
    ],
    max_tokens: 500,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 1,
    presence_penalty: 1
  });
  console.log("🚀 ~ file: route.js:30 ~ POST ~ response:", response)

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}

export async function GET(req) {
  return new Response(
    JSON.stringify({
      message: 'Message generated with AI',
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
}
