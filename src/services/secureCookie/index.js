import cryptoService from "@/services/crypto";
import cookieService from "@/services/cookie";

export default {
  Get,
  Set,
};

export function Get(nameSpace) {
  let cipherText = cookieService.Get(nameSpace);
  let data = cryptoService.decrypt(cipherText);
  return data;
}

export function Set(nameSpace, prop) {
  let data = Get(nameSpace) || {};
  let mergedData = { ...data, ...prop };
  let encrypted = cryptoService.encrypt(mergedData);
  cookieService.Set(nameSpace, encrypted);
}
