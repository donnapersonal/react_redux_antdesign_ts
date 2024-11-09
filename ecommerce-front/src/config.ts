export let API: string

if (process.env.NODE_ENV === "development") {
  // ! 表示不会为空
  API = process.env.REACT_APP_DEVLOPMENT_API_URL!
} else if (process.env.NODE_ENV === "production") {
  API = process.env.REACT_APP_PRODUCTION_API_URL!
}