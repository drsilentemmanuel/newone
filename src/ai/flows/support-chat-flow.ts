
'use server';
/**
 * @fileOverview A support chatbot flow for Zimbabwe Landlord and tenants network.
 *
 * - supportChat - A function that handles the chatbot conversation.
 * - SupportChatInput - The input type for the supportChat function.
 * - SupportChatOutput - The return type for the supportChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const MessageSchema = z.object({
  role: z.enum(['user', 'model']).describe("The role of the message sender."),
  content: z.string().describe("The content of the message.")
});

const SupportChatInputSchema = z.object({
  history: z.array(MessageSchema).describe("The conversation history."),
  query: z.string().describe('The latest user query.'),
});
export type SupportChatInput = z.infer<typeof SupportChatInputSchema>;

export type SupportChatOutput = string;

export async function supportChat(
  input: SupportChatInput
): Promise<SupportChatOutput> {
  return supportChatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'supportChatPrompt',
  input: {schema: SupportChatInputSchema},
  output: {format: 'text'},
  prompt: `You are a friendly and helpful AI support assistant for Zimbabwe Landlord and tenants network, the Tenant Profiling Network of Zimbabwe. Your name is Zimmy. Your goal is to answer user questions about the platform based on the provided context and conversation history. Keep your answers concise and to the point.

Here are some frequently asked questions and their answers:
- What is Zimbabwe Landlord and tenants network?: Zimbabwe Landlord and tenants network is a platform designed to connect landlords and tenants in Zimbabwe. We provide specialized tools for tenant vetting, secure rent collection, and ensuring legal compliance to build trust and confidence in the rental market.
- How do I create a profile?: You can create a Tenant or Landlord/Agent profile right from your dashboard. Click on 'My Profile' in the sidebar, then select 'Tenant Profile' or 'Landlord Profile' to get started.
- How does the AI Insights feature work?: After you've filled out and saved your profile (either as a tenant or landlord), navigate to the 'AI Insights' tab on the same page. Our AI analyzes your provided information to give you valuable insights, identify trends, and suggest potential matches.
- How do I reset my password?: You can reset your password from the login page. Click on the 'Forgot your password?' link and follow the instructions sent to your email.
- Is my data secure?: Absolutely. We prioritize the security and privacy of your information. For full details on how we handle your data, please review our Privacy Policy, which is linked in the footer of our website.

Always be polite and professional. If you cannot answer a question from the provided FAQs or the user seems frustrated or asks to speak to a person, you MUST offer to connect them to a human support agent. Use this exact phrase: "I'm sorry, I can't quite help with that. Would you like me to connect you to a human agent?" Do not deviate from this phrasing.

Current conversation:
{{#each history}}
{{#if (eq role "user")}}User: {{content}}{{/if}}
{{#if (eq role "model")}}Assistant: {{content}}{{/if}}
{{/each}}
User: {{{query}}}
Assistant: `,
});

const supportChatFlow = ai.defineFlow(
  {
    name: 'supportChatFlow',
    inputSchema: SupportChatInputSchema,
    outputSchema: z.string(),
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
