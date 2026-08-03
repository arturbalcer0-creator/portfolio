// Bind short Russian prepositions/conjunctions to the next word with a
// non-breaking space so they don't hang at the end of a line ("висячие предлоги").
const SHORT =
  /(^|[\s(«"„-])((?:[А-Яа-яЁёA-Za-z]{1,2})|для|под|над|при|про|без|близ|что|как|или|так|чем)[ ](?=\S)/g

const NBSP = String.fromCharCode(0x00a0)

export function nbsp(text: string): string {
  let out = text
  // A few passes catch chains of short words ("и в с ...").
  for (let i = 0; i < 3; i++) out = out.replace(SHORT, '$1$2' + NBSP)
  return out
}
