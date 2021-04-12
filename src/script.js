'use strict';

var questions = [
  {
      "question": "What’s your most shallow reason for not going on a second date?",
      "type": "pg"
  },
  {
      "question": "What’s the worst date you’ve ever had?",
      "type": "pg"
  },
  {
      "question": "What’s your worst habit?",
      "type": "pg"
  },
  {
      "question": "Name something illegal that you’ve done and regret.",
      "type": "pg"
  },
  {
      "question": "Tell about the biggest ticket you’ve ever gotten.",
      "type": "pg"
  },
  {
      "question": "How many people in the room would you be willing to kiss?",
      "type": "pg"
  },
  {
      "question": "What’s the weirdest dream you’ve ever had?",
      "type": "pg"
  },
  {
      "question": "What do you wear when you’re hoping to go home with someone?",
      "type": "pg"
  },
  {
      "question": "What kind of underwear do you wear?",
      "type": "pg"
  },
  {
      "question": "What’s your dream first date?",
      "type": "pg"
  },
  {
      "question": "What would make you immediately swipe right?",
      "type": "pg"
  },
  {
      "question": "What would make you immediately swipe left?",
      "type": "pg"
  },
  {
      "question": "Have you ever cheated or helped someone else cheat?",
      "type": "pg"
  },
  {
      "question": "Have you ever gotten in a physical altercation with someone?",
      "type": "pg"
  },
  {
      "question": "What’s your longest relationship?",
      "type": "pg"
  },
  {
      "question": "Have you ever had a secret relationship?",
      "type": "pg"
  },
  {
      "question": "Have you ever kissed anyone in this room?",
      "type": "pg"
  },
  {
      "question": "What’s your favorite drink?",
      "type": "pg"
  },
  {
      "question": "What’s the biggest lie you’ve ever told?",
      "type": "pg"
  },
  {
      "question": "What do your current undergarments look like?",
      "type": "pg"
  },
  {
      "question": "Would you ever hook-up with someone else’s partner?",
      "type": "pg"
  },
  {
      "question": "Do you cover your eyes during the scary part of a movie?",
      "type": "pg"
  },
  {
      "question": "If you suddenly became invisible, what would you do with your newfound transparency?",
      "type": "pg"
  },
  {
      "question": "Have you ever wanted to try LARP (live-action role play)?",
      "type": "pg"
  },
  {
      "question": "Who is your favorite family member?",
      "type": "pg"
  },
  {
      "question": "What is the biggest secret you’ve kept from your parents when you were growing up?",
      "type": "pg"
  },
  {
      "question": "Tell us about the last dream you can remember. Don’t leave any details out!",
      "type": "pg"
  },
  {
      "question": "Have you ever lied about being sick so you could stay home from work or school?",
      "type": "pg"
  },
  {
      "question": "Have you ever told someone you wouldn’t be home just so they wouldn’t come over to yours?",
      "type": "pg"
  },
  {
      "question": "If anyone in your family could win an award for being the most annoying, who would it be?",
      "type": "pg"
  },
  {
      "question": "Have you ever bought something to wear to an event, and then returned it to the store when the event was over?",
      "type": "pg"
  },
  {
      "question": "Did you ever break up with someone just before a public holiday so that you didn’t have to buy them a gift?",
      "type": "pg"
  },
  {
      "question": "What is your least favorite part about family gatherings?",
      "type": "pg"
  },
  {
      "question": "What is your favorite movie that you secretly know is actually terrible?",
      "type": "pg"
  },
  {
      "question": "Have you ever bribed or flirted with a police officer to get out of a ticket?",
      "type": "pg"
  },
  {
      "question": "Do you have a bucket list? If so, what is one thing on that list?",
      "type": "pg"
  },
  {
      "question": "What is the strangest thing you have ever bought?",
      "type": "pg"
  },
  {
      "question": "Have you ever shared chewing gum with anyone?",
      "type": "pg"
  },
  {
      "question": "Have you ever danced on a table when you were drunk?",
      "type": "pg"
  },
  {
      "question": "What is the one thing you dislike about yourself?",
      "type": "pg"
  },
  {
      "question": "What is the one thing you really like about yourself?",
      "type": "pg"
  },
  {
      "question": "If you could hire someone to do one thing for you, what would it be?",
      "type": "pg"
  },
  {
      "question": "What was the most embarrassing thing that you ever did while on a date?",
      "type": "pg"
  },
  {
      "question": "What is your biggest pet peeve?",
      "type": "pg"
  },
  {
      "question": "What’s your “number?”",
      "type": "pg"
  },
  {
      "question": "What’s the shortest amount of time you’ve known someone before hooking up?",
      "type": "pg"
  },
  {
      "question": "Where is the grossest place you’ve ever hooked up?",
      "type": "pg"
  },
  {
      "question": "How far have you gone in public?",
      "type": "pg"
  },
  {
      "question": "What’s the biggest age gap you’ve had with a partner?",
      "type": "pg"
  },
  {
      "question": "What sex act are you best at?",
      "type": "pg"
  },
  {
      "question": "What sex act are you bad at?",
      "type": "pg"
  },
  {
      "question": "What’s your longest dry spell?",
      "type": "pg"
  },
  {
      "question": "How many people in this room would you be willing to hook up with?",
      "type": "pg"
  },
  {
      "question": "Who is the most inappropriate person you’ve ever had a crush on?",
      "type": "pg"
  },
  {
      "question": "Tell us your most embarrassing vomit story.",
      "type": "pg"
  },
  {
      "question": "Have you ever sexted?",
      "type": "pg"
  },
  {
      "question": "What’s the dirtiest text you’ve ever received?",
      "type": "pg"
  },
  {
      "question": "What’s your favorite position?",
      "type": "pg"
  },
  {
      "question": "Top or bottom?",
      "type": "pg"
  },
  {
      "question": "Have you ever been to a strip club?",
      "type": "pg"
  },
  {
      "question": "Have you ever given a lap dance?",
      "type": "pg"
  },
  {
      "question": "What conditions are necessary for hooking up on a first date?",
      "type": "pg"
  },
  {
      "question": "What’s the hardest drug you’ve ever done?",
      "type": "pg"
  },
  {
      "question": "What hook-up scene from a movie or TV show would you like to recreate?",
      "type": "pg"
  },
  {
      "question": "How far are you willing to go with a cute stranger that you’ll never see again?",
      "type": "pg"
  },
  {
      "question": "Would you sleep with a celebrity if you met them at a bar? What celebrity is a no-brainer?",
      "type": "pg"
  },
  {
      "question": "If you could cheat and no one would ever, ever find out, would you?",
      "type": "pg"
  },
  {
      "question": "If you could hack into your partner’s email and they’d never know, would you?",
      "type": "pg"
  },
  {
      "question": "Have you ever read your bae’s texts over their shoulder?",
      "type": "pg"
  },
  {
      "question": "If you could read all your partner’s texts with others, would you?",
      "type": "pg"
  },
  {
      "question": "Do you secretly want the password for your bae’s phone?",
      "type": "pg"
  },
  {
      "question": "If you had to choose between going naked or having your thoughts appear in thought bubbles above your head for everyone to read, which would you choose?",
      "type": "pg"
  },
  {
      "question": "When was the last time you peed in bed?",
      "type": "pg"
  },
  {
      "question": "Would you hook up with your high school crush today?",
      "type": "pg"
  },
  {
      "question": "What’s your most embarrassing fantasy?",
      "type": "r"
  },
  {
      "question": "What kind of porn do you search for?",
      "type": "r"
  },
  {
      "question": "When watching porn, what makes you turn it off?",
      "type": "r"
  },
  {
      "question": "Have you ever joined a hook-up app or any app associated with risky behavior?",
      "type": "r"
  },
  {
      "question": "How many “toys” do you own?",
      "type": "r"
  },
  {
      "question": "What’s the best sex you’ve ever had?",
      "type": "r"
  },
  {
      "question": "What’s the weirdest role play you’ve ever done?",
      "type": "r"
  },
  {
      "question": "What’s the raunchiest dream you’ve ever had?",
      "type": "r"
  },
  {
      "question": "What’s the landscaping like “down there?”",
      "type": "r"
  },
  {
      "question": "What’s the dirtiest picture you’ve ever sent?",
      "type": "r"
  },
  {
      "question": "What’s the dirtiest text you’ve sent?",
      "type": "r"
  },
  {
      "question": "Have you ever hooked up with someone you didn’t know?",
      "type": "r"
  },
  {
      "question": "What’s the most outrageous thing you can remember doing while “under the influence?”",
      "type": "r"
  },
  {
      "question": "What is something “scandalous” and sex-related that you really want to try?",
      "type": "r"
  },
  {
      "question": "Are you more dominant or submissive?",
      "type": "r"
  },
  {
      "question": "If you were a sex worker, how much would each sex act cost?",
      "type": "r"
  },
  {
      "question": "Have you ever asked for a dirty pic?",
      "type": "r"
  },
  {
      "question": "How do you initiate sex with your partner?",
      "type": "r"
  },
  {
      "question": "Would you ever film yourself “in the act?”",
      "type": "r"
  },
  {
      "question": "How likely are you to ever consider being a stripper? What about a porn star?",
      "type": "r"
  },
  {
      "question": "What’s the soonest you’ve ever had sex with someone after meeting them?",
      "type": "r"
  },
  {
      "question": "If you were going to write an erotic novel, what would it be about?",
      "type": "r"
  },
  {
      "question": "What was the last thing you masturbated to?",
      "type": "r"
  },
  {
      "question": "If you could have sex with one person in this room, who would it be?",
      "type": "r"
  },
  {
      "question": "What’s your magic number now, and what do you wish it was?",
      "type": "r"
  },
  {
      "question": "What’s the weirdest thing that’s ever turned you on?",
      "type": "r"
  },
  {
      "question": "Which sexual act are you best at?",
      "type": "r"
  },
  {
      "question": "How many sex toys do you own?",
      "type": "r"
  },
  {
      "question": "How many orgasms have you faked?",
      "type": "r"
  },
  {
      "question": "What is your biggest sexual regret?",
      "type": "r"
  },
  {
      "question": "What’s the dirtiest sext you’ve ever sent?",
      "type": "r"
  },
  {
      "question": "Who’s the most scandalous person you’ve had sex with?",
      "type": "r"
  },
  {
      "question": "Have you ever slept with someone you met online?",
      "type": "r"
  },
  {
      "question": "Have you ever been caught masturbating?",
      "type": "r"
  },
  {
      "question": "What do you like to be called in bed?",
      "type": "r"
  },
  {
      "question": "What movie always turns you on?",
      "type": "r"
  },
  {
      "question": "What’s your favorite body part on a girl?",
      "type": "r"
  },
  {
      "question": "Describe the most embarrassing time you got turned on.",
      "type": "r"
  },
  {
      "question": "Have you ever thought about sleeping with the same sex?",
      "type": "r"
  },
  {
      "question": "What is your strangest off-limits crush?",
      "type": "r"
  },
  {
      "question": "If you got to have a threesome with people in this room, who would you do it with and why?",
      "type": "r"
  },
  {
      "question": "Where is the weirdest place that you’ve ever masturbated?",
      "type": "r"
  },
  {
      "question": "Describe your, “I’m getting laid tonight” outfit?",
      "type": "r"
  },
  {
      "question": "Have you ever slept with someone from work?",
      "type": "r"
  },
  {
      "question": "What is more thrilling, makeup or angry sex?",
      "type": "r"
  },
  {
      "question": "How many times a week do you touch yourself?",
      "type": "r"
  },
  {
      "question": "Have you ever done IT at work?",
      "type": "r"
  },
  {
      "question": "Do you like telling your partner what to do in bed, or do you prefer to be told what to do?",
      "type": "r"
  },
  {
      "question": "Have you ever walked in on your parents doing it?",
      "type": "r"
  }
];
var players = ['Person 1','Person 2'];


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


shuffle(questions);



for(var i=0; i<questions.length; i++){

  var element = document.createElement("div");
  element.className = 'tinder--card';
  element.innerHTML = `<img src="images/`+questions[i].type+`.png"><h4>`+players[i%players.length]+`</h4><p>`+questions[i].question+`</p>`;
  document.getElementById('parent').appendChild(element);
}


var tinderContainer = document.querySelector('.tinder');
var allCards = document.querySelectorAll('.tinder--card');
var nope = document.getElementById('nope');
var love = document.getElementById('love');

function initCards(card, index) {
  var newCards = document.querySelectorAll('.tinder--card:not(.removed)');

  newCards.forEach(function (card, index) {
    card.style.zIndex = allCards.length - index;
    card.style.transform = 'scale(' + (20 - index) / 20 + ') translateY(-' + 30 * index + 'px)';
    card.style.opacity = (10 - index) / 10;
  });
  
  tinderContainer.classList.add('loaded');
}

initCards();

allCards.forEach(function (el) {
  var hammertime = new Hammer(el);

  hammertime.on('pan', function (event) {
    el.classList.add('moving');
  });

  hammertime.on('pan', function (event) {
    if (event.deltaX === 0) return;
    if (event.center.x === 0 && event.center.y === 0) return;

    tinderContainer.classList.toggle('tinder_love', event.deltaX > 0);
    tinderContainer.classList.toggle('tinder_nope', event.deltaX < 0);

    var xMulti = event.deltaX * 0.03;
    var yMulti = event.deltaY / 80;
    var rotate = xMulti * yMulti;

    event.target.style.transform = 'translate(' + event.deltaX + 'px, ' + event.deltaY + 'px) rotate(' + rotate + 'deg)';
  });

  hammertime.on('panend', function (event) {
    el.classList.remove('moving');
    tinderContainer.classList.remove('tinder_love');
    tinderContainer.classList.remove('tinder_nope');

    var moveOutWidth = document.body.clientWidth;
    var keep = Math.abs(event.deltaX) < 80 || Math.abs(event.velocityX) < 0.5;

    event.target.classList.toggle('removed', !keep);

    if (keep) {
      event.target.style.transform = '';
    } else {
      var endX = Math.max(Math.abs(event.velocityX) * moveOutWidth, moveOutWidth);
      var toX = event.deltaX > 0 ? endX : -endX;
      var endY = Math.abs(event.velocityY) * moveOutWidth;
      var toY = event.deltaY > 0 ? endY : -endY;
      var xMulti = event.deltaX * 0.03;
      var yMulti = event.deltaY / 80;
      var rotate = xMulti * yMulti;

      event.target.style.transform = 'translate(' + toX + 'px, ' + (toY + event.deltaY) + 'px) rotate(' + rotate + 'deg)';
      initCards();
    }
  });
});

function createButtonListener(love) {
  return function (event) {
    var cards = document.querySelectorAll('.tinder--card:not(.removed)');
    var moveOutWidth = document.body.clientWidth * 1.5;

    if (!cards.length) return false;

    var card = cards[0];

    card.classList.add('removed');

    if (love) {
      card.style.transform = 'translate(' + moveOutWidth + 'px, -100px) rotate(-30deg)';
    } else {
      card.style.transform = 'translate(-' + moveOutWidth + 'px, -100px) rotate(30deg)';
    }

    initCards();

    event.preventDefault();
  };
}

var nopeListener = createButtonListener(false);
var loveListener = createButtonListener(true);

nope.addEventListener('click', nopeListener);
love.addEventListener('click', loveListener);