export default defineEventHandler(
  (response) => ({
    requestIP: getRequestIP(response),
  })
);
