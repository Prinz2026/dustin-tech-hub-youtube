export async function initializePaystackTransaction(data: any) {
  return { status: true, data: { authorization_url: "", reference: "ref" } };
}
export async function verifyPaystackTransaction(ref: string) {
  return { status: true, data: { status: "success" } };
}
export const initializePaystackPayment = initializePaystackTransaction;
export const verifyPaystackPayment = verifyPaystackTransaction;
