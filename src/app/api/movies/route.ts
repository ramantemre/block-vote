import clientPromise from "../../../../lib/mongodb";

export const GET = async (req: any) => {
  try {
    const client = await clientPromise;
    const db = client.db("sample_mflix");

    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    // return res.json(movies);
    // const data = await movies.json(movies);

    return Response.json({ data: movies });
  } catch (e) {
    console.error(e);
  }
};
