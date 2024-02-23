const franc = require('franc');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function detectLanguage() {
  rl.question('Masukkan teks yang ingin dideteksi bahasanya: ', (text) => {
    
    const languageCode = franc(text);

    
    console.log('Bahasa teks yang dideteksi:', languageCode);

    
    rl.question('Ingin mendeteksi bahasa teks lainnya? (ya/tidak): ', (answer) => {
      if (answer.toLowerCase() === 'ya') {
        
        detectLanguage();
      } else {
        
        rl.close();
      }
    });
  });
}


detectLanguage();
