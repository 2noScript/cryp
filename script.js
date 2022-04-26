const $ = document.querySelector.bind(document);
const str = "abcdefghijklmnopqrstuvwxyz"; //plaint text
const deCeasar = "DEFGHIJKLMNOPQRSTUVWXYZABC"; //ceasar
const deAtbash = "ZYXWVUTSRQPONMLKJIHGFEDCBA"; // atbash
const keys = str.split("");
const encrypKeys = deCeasar.split("");

const plaintText = $("#plaintext");
const encryption = $("#encryption");
const btn = $(".btn");
const selectEn = $(".selectEn");
function enCiphertext(plaintText, type) {
  const x = plaintText.split("");
  let ciphertext = "";

  x.map((item, index) => {
    if (item === " ") {
      ciphertext += item;
    } else {
      if (type === "Ceasar") {
        ciphertext = ciphertext + deCeasar[str.indexOf(item)];
      } else if (type === "Atbash") {
        ciphertext = ciphertext + deAtbash[str.indexOf(item)];
      }
    }
  });
  return ciphertext;
}

function cryptography() {
  var text = plaintText.value;
  encryption.innerHTML = `${enCiphertext(plaintText.value, selectEn.value)}`;
}
btn.onclick = () => {
  cryptography();
};
// console.log(selectEn.value);
