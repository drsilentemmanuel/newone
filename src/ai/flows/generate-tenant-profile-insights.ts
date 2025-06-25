'use server';

/**
 * @fileOverview AI-powered insights generator for tenant profiles.
 *
 * - generateTenantProfileInsights - A function that generates insights, trends, and suggested matches for tenant profiles.
 * - GenerateTenantProfileInsightsInput - The input type for the generateTenantProfileInsights function.
 * - GenerateTenantProfileInsightsOutput - The return type for the generateTenantProfileInsights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTenantProfileInsightsInputSchema = z.object({
  tenantProfile: z
    .string()
    .describe('The tenant profile information as a string.'),
  landlordPreferences: z
    .string()
    .describe('The landlord preferences as a string.'),
});
export type GenerateTenantProfileInsightsInput = z.infer<
  typeof GenerateTenantProfileInsightsInputSchema
>;

const GenerateTenantProfileInsightsOutputSchema = z.object({
  insights: z.string().describe('Insights derived from the tenant profile.'),
  trends: z.string().describe('Trends identified from the tenant profile.'),
  suggestedMatches: z
    .string()
    .describe('Suggested property matches for the tenant.'),
});
export type GenerateTenantProfileInsightsOutput = z.infer<
  typeof GenerateTenantProfileInsightsOutputSchema
>;

export async function generateTenantProfileInsights(
  input: GenerateTenantProfileInsightsInput
): Promise<GenerateTenantProfileInsightsOutput> {
  return generateTenantProfileInsightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTenantProfileInsightsPrompt',
  input: {schema: GenerateTenantProfileInsightsInputSchema},
  output: {schema: GenerateTenantProfileInsightsOutputSchema},
  prompt: `You are an AI assistant designed to analyze tenant profiles and provide insights to landlords.

  Analyze the following tenant profile and landlord preferences to provide insights, identify trends, and suggest potential matches.

  Tenant Profile: {{{tenantProfile}}}
  Landlord Preferences: {{{landlordPreferences}}}

  Provide insights into the tenant's suitability, trends in their profile, and suggest property matches based on the landlord's stated preferences.
  Ensure the output is clear, concise, and actionable for the landlord.
  `,
});

const generateTenantProfileInsightsFlow = ai.defineFlow(
  {
    name: 'generateTenantProfileInsightsFlow',
    inputSchema: GenerateTenantProfileInsightsInputSchema,
    outputSchema: GenerateTenantProfileInsightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
