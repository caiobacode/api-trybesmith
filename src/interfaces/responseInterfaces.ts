export default interface IResponse {
  type: number,
  data: { token: string } | { message: string }
}