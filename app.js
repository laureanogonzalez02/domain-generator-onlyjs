const pronoun = ["my", "your", "our", "this", "that"];
const noun = ["cloud", "byte", "node", "data"];
const adjective = ["bold", "brightes", "swiftar", "clever"];
const domainExtensions = [".com", ".io", ".net", ".ch", ".ar", ".es"];

function getRandomPart(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function domainList() {
  let domain = "";
  const domainNames = [];
  for (const p of pronoun) {
    for (const n of noun) {
      for (const a of adjective) {
        for (const d of domainExtensions) {
          domain = p + n + a + d;
          domainNames.push(domain);
        }
      }
    }
  }
  return domainNames.join("\n");
}

console.log("Generated Domain Names: \n" + domainList());
