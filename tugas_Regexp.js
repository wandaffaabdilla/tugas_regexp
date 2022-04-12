function panggilRegexp(value) {
  let str =
    "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
  let tampung = "";
  //Tulis Code Jawaban Kamu Di Bawah ini
  for (var i = 0; i < str.length; i++) {
    tampung += str[i];
  }
  console.log(tampung.match(/c/gi));
  console.log(tampung.match(/k/gi));
  console.log(tampung.match(/l/gi));
}

panggilRegexp();
