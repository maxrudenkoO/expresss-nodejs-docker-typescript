import * as crypto from "crypto";

export const getHash = async (input: string) => {
  const hash = crypto
    .createHash("sha256")
    .update(input)
    .digest("hex");
  return hash;
};
