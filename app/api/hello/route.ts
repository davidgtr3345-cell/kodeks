export const dynamic = "force-static";
export async function GET() {
  return Response.json({
    message: "Pozdrav iz Next.js API route handlera!",
    success: true,
  });
}
