/**
 * AI Client - OpenRouter Compatible
 * 统一的AI调用接口，支持OpenRouter
 */

const OpenAI = require('openai');

class AIClient {
  constructor() {
    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
      this.client = new OpenAI({
        apiKey,
        baseURL: 'https://openrouter.ai/api/v1',
        defaultHeaders: {
          'HTTP-Referer': 'https://ai-tools.vercel.app',
          'X-Title': 'AI Tools'
        }
      });
      this.model = 'openai/gpt-4o-mini';
    }
  }

  async generate(prompt, systemPrompt = '你是一个专业的AI助手。') {
    if (!this.client) {
      throw new Error('未配置 API Key');
    }

    const response = await this.client.chat.completions.create({
      model: this.model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: prompt }
      ],
      temperature: 0.7,
      max_tokens: 2000
    });

    return response.choices[0].message.content;
  }
}

module.exports = AIClient;
