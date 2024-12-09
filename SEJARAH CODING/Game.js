const questions = [
    {
      question: "Pemberontakan apa yang terjadi pada tahun 1948 di Jawa Tengah?",
      options: ["Pemberontakan DI/TII", "Pemberontakan PKI", "Pemberontakan APRA", "Pemberontakan RMS"],
      correct: 1
    },
    {
      question: "Siapa pemimpin Pemberontakan DI/TII di Jawa Barat?",
      options: ["Sutan Sjahrir", "Tan Malaka", "Kartosuwiryo", "Amir Sjarifuddin"],
      correct: 2
    },
    {
      question: "Pemberontakan apa yang terjadi di Maluku pada tahun 1950?",
      options: ["Pemberontakan PKI", "Pemberontakan DI/TII", "Pemberontakan APRA", "Pemberontakan RMS"],
      correct: 3
    },
    {
      question: "Tujuan utama Pemberontakan PKI 1948 adalah?",
      options: ["Menggulingkan pemerintahan Sukarno", "Membentuk negara komunis", "Mengusir Belanda", "Membentuk pemerintahan federal"],
      correct: 1
    },
    {
      question: "Pemberontakan APRA terjadi pada tahun?",
      options: ["1946", "1948", "1949", "1950"],
      correct: 0
    },
    {
      question: "Siapa pemimpin Pemberontakan RMS?",
      options: ["Soumokil", "Kartosuwiryo", "Tan Malaka", "Sutan Sjahrir"],
      correct: 0
    },
    {
      question: "Di mana Pemberontakan DI/TII pertama kali terjadi?",
      options: ["Jawa Tengah", "Jawa Barat", "Sumatera", "Sulawesi"],
      correct: 1
    },
    {
      question: "Pemberontakan PKI 1948 terjadi di?",
      options: ["Madiun", "Surakarta", "Yogyakarta", "Jakarta"],
      correct: 0
    },
    {
      question: "Apa nama gerakan yang dipimpin oleh Kartosuwiryo?",
      options: ["DI/TII", "PKI", "APRA", "RMS"],
      correct: 0
    },
    {
      question: "Pemberontakan DI/TII berakhir pada tahun?",
      options: ["1962", "1955", "1957", "1965"],
      correct: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  
  function startGame() {
    document.querySelector('.welcome-container').style.display = 'none';
    document.getElementById('gameContainer').style.display = 'block';
    loadQuestion();
  }
  
  function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById('question').innerText = questionData.question;
    
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';
  
    questionData.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.innerText = option;
      button.onclick = () => checkAnswer(index);
      answersContainer.appendChild(button);
    });
  
    document.getElementById('result').innerText = '';
    document.getElementById('nextButton').style.display = 'none';
  }
  
  function checkAnswer(selectedIndex) {
    const questionData = questions[currentQuestionIndex];
    const resultElement = document.getElementById('result');
    if (selectedIndex === questionData.correct) {
      resultElement.innerText = 'Jawaban benar!';
      resultElement.style.color = '#28a745';
    } else {
      resultElement.innerText = 'Jawaban salah!';
      resultElement.style.color = '#dc3545';
    }
    document.getElementById('nextButton').style.display = 'inline-block';
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      document.getElementById('question').innerText = 'Permainan selesai! Terima kasih telah bermain.';
      document.getElementById('answers').innerHTML = '';
      document.getElementById('nextButton').style.display = 'none';
    }
  }
  