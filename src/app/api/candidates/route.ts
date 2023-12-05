import joi from "joi";

import { candidatesRepo } from "_helpers/server";
import { apiHandler } from "_helpers/server/api";

module.exports = apiHandler({
  GET: getAll,
  POST: create,
});

async function getAll() {
  return await candidatesRepo.getAll();
}

async function create(req: Request) {
  const body = await req.json();
  await candidatesRepo.create(body);
}

create.schema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  username: joi.string().required(),
  password: joi.string().min(6).required(),
  emailAddress: joi.string().required(),
});
