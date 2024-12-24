// Один доллар коштує 42 гривні. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів

const usdToUah = 42;
let dataValueOfUsd = "";

for (let i = 10; i <= 100; i += 10) {
  dataValueOfUsd += `${i} USD = ` + (i * usdToUah) + " UAH" + "<br>";
}

document.write(dataValueOfUsd);
