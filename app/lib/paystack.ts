export async function initializePaystackPayment(data: any) {
  return { status: true, data: { authorization_url: "", reference: "ref_" + Date.now() } };
}

export async function verifyPaystackPayment(ref: string) {
  return { status: true, data: { status: "success", reference: ref } };
}

export const initializePaystackTransaction = initializePaystackPayment;
export const verifyPaystackTransaction = verifyPaystackPayment;
export const paystackVerify = verifyPaystackPayment;
export const paystackInitialize = initializePaystackPayment;
export const initializeTransaction = initializePaystackPayment;
export const verifyTransaction = verifyPaystackPayment;
