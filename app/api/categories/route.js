import db from '@/app/lib/db'

export async function GET() {
  const categories = db.prepare('SELECT * FROM category').all()
  return Response.json(categories)
}
