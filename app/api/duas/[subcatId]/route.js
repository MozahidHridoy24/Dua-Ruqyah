import db from "@/app/lib/db";

export async function GET(_, { params }) {
  const duas = db
    .prepare("SELECT * FROM dua WHERE subcat_id = ?")
    .all(params.subcatId);

  return Response.json(duas);
}
