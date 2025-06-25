'use server';
/**
 * @fileOverview AI-powered insights for landlord profiles to help tenants find suitable matches.
 *
 * - generateLandlordProfileInsights - A function that generates insights for landlord profiles.
 * - GenerateLandlordProfileInsightsInput - The input type for the generateLandlordProfileInsights function.
 * - GenerateLandlordProfileInsightsOutput - The return type for the generateLandlordProfileInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLandlordProfileInsightsInputSchema = z.object({
  landlordProfile: z.string().describe('The landlord profile information.'),
  tenantRequirements: z.string().describe('The tenant requirements and preferences.'),
});
export type GenerateLandlordProfileInsightsInput = z.infer<typeof GenerateLandlordProfileInsightsInputSchema>;

const GenerateLandlordProfileInsightsOutputSchema = z.object({
  insights: z.string().describe('AI-generated insights and trends for the landlord profile.'),
  suggestedMatches: z.string().describe('Suggested tenant matches based on the profile analysis.'),
});
export type GenerateLandlordProfileInsightsOutput = z.infer<typeof GenerateLandlordProfileInsightsOutputSchema>;

export async function generateLandlordProfileInsights(input: GenerateLandlordProfileInsightsInput): Promise<GenerateLandlordProfileInsightsOutput> {
  return generateLandlordProfileInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLandlordProfileInsightsPrompt',
  input: {schema: GenerateLandlordProfileInsightsInputSchema},
  output: {schema: GenerateLandlordProfileInsightsOutputSchema},
  prompt: `You are an AI assistant designed to analyze landlord profiles and provide insights to tenants.

  Based on the landlord profile and tenant requirements, provide valuable insights, identify trends, and suggest potential tenant matches.

  Landlord Profile: {{{landlordProfile}}}
  Tenant Requirements: {{{tenantRequirements}}}

  Provide insights, trends, and suggested matches in a clear and concise manner.
  `, 
});

const generateLandlordProfileInsightsFlow = ai.defineFlow(
  {
    name: 'generateLandlordProfileInsightsFlow',
    inputSchema: GenerateLandlordProfileInsightsInputSchema,
    outputSchema: GenerateLandlordProfileInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
