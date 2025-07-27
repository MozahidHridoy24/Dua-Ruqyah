import db from "@/app/lib/db";

export async function GET(_, { params }) {
  const subcats = db
    .prepare("SELECT * FROM sub_category WHERE cat_id = ?")
    .all(params.catId);

  return Response.json(subcats);
}
