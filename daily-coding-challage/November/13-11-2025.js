function generateSignature(name, title, company) {
  const karakterPertama = name[0].toLowerCase();
  let hasil = ''
    if (karakterPertama >= 'a' && karakterPertama <= 'i') {
      return `>>${name}, ${title} at ${company}`;
    }else if(karakterPertama >= 'j' && karakterPertama <= 'r'){
      return `--${name}, ${title} at ${company}`;
    }else if(karakterPertama >= 's' && karakterPertama <= 'z'){
      return `::${name}, ${title} at ${company}`;
    }
}
