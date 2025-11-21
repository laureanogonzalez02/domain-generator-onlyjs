const pronouns = ["my", "your", "our", "this", "that"];
const nouns = ["cloud", "byte", "node", "data"];
const adjectives = ["bold", "brightes", "swiftar", "clever"];
const domainExtensions = [".com", ".io", ".net", ".ch", ".ar", ".es"];

function domainList() {
  let domain = "";
  const domainNames = [];
  for (const pronoun of pronouns) {
    for (const noun of nouns) {
      for (const adjective of adjectives) {
        let shortAdjective = adjective.slice(0, -2);
        for (const domainExt of domainExtensions) {
          if (adjective.endsWith("es") && domainExt == ".es") {
            domain = pronoun + noun + shortAdjective + domainExt;
            domainNames.push(domain);
          } else if (adjective.endsWith("ar") && domainExt == ".ar") {
            domain = pronoun + noun + shortAdjective + domainExt;
            domainNames.push(domain);
          } else {
            domain = pronoun + noun + adjective + domainExt;
            domainNames.push(domain);
          }
        }
      }
    }
  }
  return domainNames.join("\n");
}

console.log("Generated Domain Names: \n" + domainList());
