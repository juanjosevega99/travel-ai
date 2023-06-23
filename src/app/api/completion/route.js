import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export const runtime = 'edge';

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
