// UGD Airdrop

// Pengaturan env
import dotenv from 'dotenv';
dotenv.config();

// readline and forumaisdk
import readline from 'readline';
import { ModelMarket } from 'forumaisdk';

// Function to ask a question and wait for user input
const askQuestion = (question) => {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(question, answer => {
      rl.close();
      resolve(answer);
    });
  });
};

// Function to simulate delay
const sleep = (milliseconds) => {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds);
  });
};

// Function to log without adding newline
const logWithoutEndLine = (message) => {
  process.stdout.write(message);
};

// Main function
const main = async () => {
  const privateKey = process.env.PRIVATE_KEY;
  if (!privateKey) {
    throw new Error('Private key is not provided via env PRIVATE_KEY');
  }

  // Initialize ModelMarket from forumaisdk
  const model = new ModelMarket.Mixtral8x7BModelMarketTestnet(privateKey);
  const chat = [{ role: 'system', content: 'You are a helpful assistant!' }];

  // Define prompts to be processed
  const prompts = [
    'What is Bitcoin?',
    'How does blockchain technology work?',
    'What is the difference between Bitcoin and Ethereum?',
    'How can I start trading cryptocurrencies?',
    'What are the most popular cryptocurrencies right now?',
    'What is a crypto wallet?',
    'How do I secure my crypto assets?',
    'What are the risks involved in crypto trading?',
    'How does DeFi (Decentralized Finance) work?',
    'What are NFTs and how do they work?',
    'Can you explain what smart contracts are?',
    'What is the role of miners in a blockchain network?',
    'How do I choose a good crypto exchange?',
    'What is the impact of market volatility on crypto trading?',
    'How do I analyze crypto market trends?',
    'What is a crypto ICO (Initial Coin Offering)?',
    'What are the tax implications of trading cryptocurrencies?',
    'How does staking work in cryptocurrency?',
    'What is yield farming?',
    'How can I identify potential scams in the crypto space?',
    'What are the benefits of using a decentralized exchange?',
    'How do I use technical analysis in crypto trading?',
    'What are the most common mistakes new crypto traders make?',
    'How do I diversify my crypto portfolio?',
    'What are stablecoins and how are they used?',
    'Can you explain the concept of liquidity in crypto markets?',
    'What is the future of cryptocurrency?',
    'How do I keep up with the latest news in crypto?',
    'What is a DAO (Decentralized Autonomous Organization)?',
    'What are the regulatory challenges facing cryptocurrencies?',
    // Tambahkan prompt jika perlu
  ];

  // Loop prompt sebanyak 20 kali
  for (let i = 0; i < 20; i++) {
    const prompt = prompts[i % prompts.length]; // Use modulo to cycle through prompts
    console.log(`[INFO] Prompt ${i + 1}: ${prompt}`);

    chat.push({ role: 'user', content: prompt });
    console.log('[INFO] Silahkan Tunggu ...');

    // Generate response from model
    const [node_url, result_code] = await model.generateSelfRequesting(3000, chat);
    let full_resp = '';
    let done = false;
    console.log('[INFO] Respon:\n');

    // Get next output from model
    while (!done) {
      const [resp, _done] = await model.getNextOutput(node_url, result_code, full_resp);
      full_resp += resp;
      done = _done;
      logWithoutEndLine(resp);
      await sleep(100); // Simulate typing effect
    }

    logWithoutEndLine('\n');
    chat.push({ role: 'assistant', content: full_resp });
  }

  console.log('[INFO] Sesi Obrolan Sudah Selesai. Matur Suwun.');
};

main().catch(error => {
  console.error('Error in main:', error);
});
