const $ = document.querySelector.bind(document);
const str = "abcdefghijklmnopqrstuvwxyz"; //plaint text
const destr = "DEFGHIJKLMNOPQRSTUVWXYZABC"; //encryption
const keys = str.split("");
const encrypKeys = destr.split("");

const plaintText = $("#plaintext");
const encryption = $("#encryption");
function enCeasar(plaintText) {
  const x = plaintText.split("");
  let ciphertext = "";
  x.map((item, index) => {
    if (item === " ") {
      ciphertext += item;
    } else {
      ciphertext = ciphertext + destr[str.indexOf(item)];
    }
  });
  return ciphertext;
  //   return x;
}

const ko = enCeasar("ech ngoi day gieng");
console.log(ko);
