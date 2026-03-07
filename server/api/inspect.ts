export default defineEventHandler(
  (response) => useCat({
    status: 200,
    message: getRequestIP(response),
  }),
);
