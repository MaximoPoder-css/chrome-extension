document.getElementById("send").onclick = function () {
  const input1 = document.getElementById("input1").value;
  const processedInput1 = processInput(input1);

  document.getElementById("input2").value = processedInput1;
};

function processInput(input) {
  const branchType = document.querySelector(
    'input[name="option"]:checked'
  ).value;

  const branchNumberMatch = input.match(/\d*(?=:)/);
  const branchNumber = branchNumberMatch ? branchNumberMatch[0] : "";

  let processed = input
    .match(/(?<=: ).+/)[0]
    .toLowerCase()
    .replace(/\s+/g, "-");

  processed = processed.replace(/[^a-z0-9-]/g, "");
  processed = processed.replace(/-{2,}/g, "-");

  return `${branchType}/US${branchNumber}/${processed}`;
}

document.getElementById("copyTo").onclick = function () {
  const input2 = document.getElementById("input2");
  input2.select();
  document.execCommand("copy");
};
