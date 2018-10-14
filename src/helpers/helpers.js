export const emailValidation = function emailValidation(email) {
  return /\S+@\S+/.test(email)
}

export const lengthValidation = function lengthValidation(string, integer = 3) {
  return string.length >= integer
}
