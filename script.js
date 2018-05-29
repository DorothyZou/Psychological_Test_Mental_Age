var questions = [
  ["Challenges to you are", "things of difficulties", "things need to overcome", "things that I don't want to think"],
  ["When you meet a sorehead colleague on your way to work, you will", "try to slow down, do not want to join him", "say hello to him, and trot faster than him", "quickly caught up with him, chat together and walk to the office"],
  ["Will you cry alone because you're feeling uncomfortable?", "Yes", "Uncertain", "No"],
  ["Will you become a moderate person?", "Absolutely impossible", "Can't answer now", "Possibly"],
  ["What age group do you usually associate with?", "Younger than myself", "People of similar age", "People older than myself"],
  ["How do you spend your weekend time?", "Sleep at home", "Go out with friends", "Do my own cleaning at home"],
  ["Do you want a luxury sports car (worth more than 5 million) than a 5 million cheque?", "Of course, a car!", "Money is more useful/important", "Doesn't matter"],
  ["Made an appointment with your friend for dinner. Right before leaving the house, your friend wants to cancel the appointment. Your reaction is:", "Complain on the phone", "Try to calm down although feeling uncomfortable", "Hang up the phone and mutter to myself"],
  ["How was your sleep before a big party?", "Can't sleep because of excitement", "I will fall asleep after getting ready for the party", "Can't sleep because thinking about the details of the party"],
  ["Would you like to move to the countryside?", "No for now", "Can be considered for vacation", "To me, countryside is more suitable for living"],
  ["Which of the following phrase is more approprite to your attitude of life?", "Life is an advanture game", "Life is a gamble", "Life is a dream"],
  ["Learning a new skill and you will feel:", "Very fun", "Easy", "Difficult"],
  ["Do you think it is difficult to change one of your habits?", "No, it is not difficult at all", "Depends on the habits", "Yes, it is really difficult to change my habits"],
  ["How frequently do you change your hairstyle?", "Within 1 month", "About every 3 months", "about every year"],
  ["Do you like to thinking about the past?", "No, I prefer to imagine the future", "When it comes to feelings, it is still necessay to remember", "Often immersed in memories"],
  ["If you play overnight with your friends. What do you do when you go to work on the next day?", "Arrived as usual", "Drinking some coffee and try to take a nap at sometime", "Being decadent for the whole day"],
  ["Has someone around you said you are stubborn?", "No", "No idea", "Someone said this."],
  ["Once you have made the decision, you will do the deed immediately, but thinking less about the consequences?", "Yes", "Sometimes", "No"],
  ["You are an emotioal person, and easy to anger?", "Yes, it is difficult to control emotions", "Depends on the situation", "No, I can control my expression of emotions"],
  ["Are you lossing interest in entertainment such as movies and novels, and considering that it is superficial?", "No", "Not sure", "Yes"],
  ["Will you be very concered about your physical health?", "Little attention", "Only paying attention if I am sick", "I am always very careful"],
  ["Are you still curious about new things?", "Yes", "If necessary", "Bacially No"],
  ["Do you think you are well understanding current trends and fashion?", "I always catch the trends", "Knowing basic of trends", "Being Amazed about what is popular"],
  ["When you have to take care of a 5-year-old child for one afternoon, you will:", "Watch cartoons or play with the child", "Give him/her food and clam him/her down", "Try to let the child fall asleep"],
  ["Do you think you often waste, including time, money, food, ect.", "Yes", "Not sure", "No"]
];

var div1 = document.getElementById("question");
var question = document.getElementById("h2");
var comment = document.getElementById("comm");
var div2 = document.getElementById("first_button");
var div3 =  document.getElementById("buttons");
var stage = document.getElementById("process");
var choice1 = document.getElementById("button_2");
var choice2 = document.getElementById("button_3");
var choice3 = document.getElementById("button_4");
var result_div = document.getElementById("result");

function quizStart(index) {
  comment.style.display = "none";
  div2.style.display = "none";
  div3.style.display = "block";
  question.style.padding = "20px";
  question.style.fontSize = "22px";
  question.innerHTML = questions[index][0];
  choice1.innerHTML = questions[index][1];
  choice2.innerHTML = questions[index][2];
  choice3.innerHTML = questions[index][3];
  stage.innerHTML = "Question " + (index+1) + " out of 25.";
  score = 0;
  newInx = index + 1;
}

function nextQue(index, cur_score) {
  if (index+1 <= questions.length) {
    question.innerHTML = questions[index][0];
    choice1.innerHTML = questions[index][1];
    choice2.innerHTML = questions[index][2];
    choice3.innerHTML = questions[index][3];
    stage.innerHTML = "Question " + (index+1) + " out of 25.";
    newInx = index + 1;
    score = cur_score;
  } else {
    score = cur_score;
    stage.innerHTML = "";
    result(score);
  }
}

function result(score) {
  console.log(score);
  div3.style.display = "none";
  div1.style.display = "none";
  result_div.style.display = "block";
  if (score>=60&&score<=75) {
    result_div.innerHTML = "Your state: Children" + "<br>" + "Keyword: childish" + "<br><br>" +
                           "Your mental age is only about 10 years old. You are full of curiosity about this world. Everything is fresh and interesting to you. Your reaction to the outside world is straightforward, but you have less control over your emotions. If you say that your physical age is over the psychological age, then you will find it difficult to adapt to the surrounding environment. People who like you think you are handsome and cute, but people who don’t like you will feel that you are self-willed and do not want to get along in the long term.";
  } else if (score>=50&&score<=59) {
    result_div.innerHTML = "Your state: Young adult" + "<br>" + "Keyword: contradiction" + "<br><br>" +
                           "Your mental age is 20 to 30 years old. You already have your own world view, you can control some emotions and take some responsibility. When your idealized world is in conflict with reality, you will feel very painful and are constantly trying to find a solution. If you say that your physical age is different from your mental age by more than 10 years, then your adaptability needs to be adjusted. You are at an age when the life group is full of fighting spirit.";
  } else if (score>=35&&score<=49) {
    result_div.innerHTML = "Your state: Mid-age adult" + "<br>" + "Keyword: mature" + "<br><br>" +
                           "Your mental age is between 35 and 50. You already know how to deal with various conflicts. You also know where your problems are. You have a wealth of social experience and the ability to deal with people. You have the abilities and skills, but the problem is that if you would like to apply them in your life. For most of the problems in life, you already have a solution. If you say that your physical age is almost the same as your mental age, then your adaptability is already very good. If your physical age is still very young, then it means that you are a mature person.";
  } else if (score>=25&&score<=34) {
    result_div.innerHTML = "Your state: Old people" + "<br>" + "Keyword: stubborn" + "<br><br>" +
                           "Your mental age is between 50 and 70 years old. You have a strong self-confidence in yourself. You think you have fully understood all the problems of the whole society. You have formed your own style of life. When facing problems, you believe that only you know the only correct answer. Deep down in your heart, you have gradually refused to accept changes. If you say that your physical age is younger than your mental age, then what you need is to break the inherent constraints and keep up with the pace of society. The world is changing every day. Don't let your strengths become a stumbling block because you are out of touch with society.";
  } else {
    alert ("Error outputted.");
  }
}
