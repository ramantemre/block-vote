import { candidatesRepo } from "_helpers/server";
import { apiHandler } from "_helpers/server/api";

module.exports = apiHandler({
  GET: getCurrent,
});

async function getCurrent() {
  return await candidatesRepo.getCurrent();
}
