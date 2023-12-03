
export default function (app , allMiddleware) {
  for (const middleware of allMiddleware) {
    middleware(app)
  }
}
