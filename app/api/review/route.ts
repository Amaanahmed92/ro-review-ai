import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET() {
  try {
    const completion = await openai.responses.create({
      model: "gpt-5-nano",
      input: `
You are helping a customer write a Google review for an RO water purifier repair and service shop.

Write a natural, human-like review in 40–70 words based only on the customer's real experience. If the customer doesn't provide specific details, keep the review general and avoid inventing facts. Mention aspects such as technician behavior, repair quality, response time, pricing, cleanliness, or problem resolution only if appropriate. Use simple, conversational language. Make every review unique. Do not use emojis or hashtags.
`
    });

    return NextResponse.json({
      review: completion.output_text
    });

  } catch (error) {
    return NextResponse.json({
      review: "
