// import { }from '@/models/voter'
import clientPromise from "@/lib/mongodb";
import { NextApiRequest, NextApiResponse } from "next";

import VoterModel from "@/models/voter";
import { NextResponse } from "next/server";

// const VoterModel = require("@/models/voter");

// const bcrypt = require("bcrypt");

// const path = require("path");

// var nodemailer = require("nodemailer");

const saltRounds = 10;

// export async function POST(req: any, res: any) {
//   const data = await req.json();
//   console.log(data);

//   return NextResponse.json(data);
// }

// export async function POST(req: any, res: any) {
//   //   const data1 = await req.json();
//   //   console.log("data1", data1);
//   //   if (req.method !== "POST") {
//   //     res.status(405).send({ message: "Only POST requests allowed" });
//   //     return;
//   //   }
//   const response = await fetch("https://api.publicapis.org/entries", {
//     method: "GET",
//     // headers: {
//     //   "Content-Type": "application/json",
//     //   'API-Key': process.env.DATA_API_KEY,
//     // },
//     // body: JSON.stringify({ time: new Date().toISOString() }),
//   });

//   const data = await response.json(); // How to get response body when using fetch() in JavaScript
//   console.log("data   ==================> ", data);

//   return Response.json({});
// }

// export const POST = async (req: any) => {
//   try {
//     console.log("POST Callled");

//     const client = await clientPromise;
//     const db = client.db("sample_mflix");

//     console.log("db connection ===>", db.databaseName);

//     // const movies = await db
//     //   .collection("movies")
//     //   .find({})
//     //   .sort({ metacritic: -1 })
//     //   .limit(10)
//     //   .toArray();

//     // return res.json(movies);
//     // const data = await movies.json(movies);

//     return Response.json({ data: [] });
//   } catch (e) {
//     console.error(e);
//   }
// };

// export const GET = async (req: any, res: any) => {
//   try {
//     let voterList: { id: any; email: any }[] = [];
//     console.log("call start ===>");

//     const client = await clientPromise;

//     // console.log("client ========> ", client);

//     const db = client.db("block-vote");

//     console.log("db ===============>", db.databaseName);

//     const votersList = await db
//       .collection("voter")
//       .find({})
//       .sort({ metacritic: -1 })
//       .limit(10)
//       .toArray();

//     // { election_address: "abc@yopmail.com" }
//     // return res.json(movies);
//     // const data = await movies.json(movies);
//     console.log("votersList", votersList);

//     return Response.json({ data: votersList });

//     // VoterModel.find(
//     //   { election_address: req.body.election_address },
//     //   function (err:any, voters:any) {
//     //     if (err) cb(err);
//     //     else {
//     //       for (let voter of voters)
//     //         voterList.push({ id: voter._id, email: voter.email });

//     //       count = voterList.length;

//     //       res.json({
//     //         status: "success",
//     //         message: "voters list found!!!",
//     //         data: { voters: voterList },
//     //         count: count,
//     //       });
//     //     }
//     //   }
//     // );
//   } catch (error) {
//     return error;
//   }
// };
