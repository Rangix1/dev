const fs = require("fs-extra");

module.exports = {
config: {
    name: "goibot",
    version: "1.0",
    author: "Samir",
    countDown: 5,
    role: 0,
    shortDescription: "no-prefix",
    longDescription: "Bot Will Reply You In Engish/Bangla Language",
    category: "no prefix",
    guide: {
      en: "{p}{n}",
    }
  },

 onStart: async function ({  }) { },
  onChat: async function ({ api, event, args, Threads, userData }) {

  var { threadID, messageID, senderID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;

  var Messages = ["Haaye Main Sadke jawa Teri Masoom Shakal pe😘🙈 " , "Bot Na Bol Oye Janu bol Mujhe🙆‍♂🙈🦋🤍🍒🕊🥀💗 " , "Han bol naa 🤬🤬🤬" , "Main Gareebon Se Bt Nhi kRta 😉😝😋🤪" , "Itna Na Pass aa Pyar h0 JayGa😝😋🤪" , "Bolo Babu Tum Mujhse Pyar Karte Ho Na 🙈 " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi🎸🎭━━•☆°•°•💗" , "Tum wahi ho na 🤔jo bazar me chappal se pit rahe the🥱🥳" , "फ़िल्टर में रहने दो….🤔फ़िल्टर ना हटाओ, 🙂फ़िल्टर जो हट गया तो…बाबू डर जाएगा।😝😝🙈" , "Kyaa ho gyaa chhpri 🙂🙏" , "Are Band kar Brna amabani se bolke tera net bnd kra dunga" , "अब से रोज़ नहाने के लिए टॉस करूँगा, हेड आया तो नहाऊंगा, टेल आया तो फिर से टॉस करूँगा..!!🙈🤣🤣🤣" , "Tumko koi aur Kam nhi ha? Pura din Khate ho Aur Messenger pe Bot Bot Karte ho" , " घरवाले मर्ज़ी से हेअरकट तक तो कराने नहीं देते 👉🙂मर्ज़ी से शादी क्या घंटा करने देंगे 🤣🙊" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Bol De koi nahi dekh rha 🙄☢━💛🌹💛" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di 😝🦋🤍🍒🕊🥀💗" , "Dur Hat Be Mujhe Aur Koi Kam Nahi Kya Har Waqt Mujhe Tang Kerte Rhte ho 😂" , "Are Bolo Meri Jaan Kya Hall Hai😚 " , "Chup Reh Nhi To Bahar Ake tera Dat Tod Dunga♡• || •___'[💔]~~🖤 " , "कुछ लोगों को मोहब्बत का ऐसा नशा चढ़ता है …की शायरी वो लिखते हैं दर्द पूरा फेसबुक सहन करता है।🙄🤦‍♂", "teri yaad na aaye aisa roj hota hai😝🙈🙈🙈 " , "ससुराल जाने का सपना तो मेरा भी था पर setting धोका दे गयी 🙊🤣" , "हे भगवान् मुझे बेशक सिंगल रखना लेकिन सेटिंग उसकी भी मत होने देना …जिस से मेरी शादी होगी।🙆‍♂🙆‍♂🙈🤣 " , "sab logo ne hug day kiss day mna liya mujhe to kisi ne puchha bhi nhi 🤔🙈😝🎸🎭━━•☆°•°•💗",  "इस दिल 👉 💖 को तो बहला कर चुप करा लूँगा पर इस #दिमाग_का_क्या_करूँ 😁😁 जिसका तुमनें 👉 👸 #दही कर दिया है..🤣😂🤣","पगली तू फेसबुक की बात करती है 😀 हम तो ‎OLX पर भी लड़की सेट कर लेते हैं 🤣😂🤣","ये जो तुम मोबाइल फ़ोन में Facebook or WhatsApp Notifications बार-बार चेक करते हो ना !! शास्त्रों में इसे ही 🥀मोह माया🦋 कहा गया है 🤣😂🤣","मेरे पिता जी का तो कोई ऐसा दोस्त भी नही जो अमरीश पुरी की तरह ये कह दे..चल इस दोस्ती को रिश्तेदारी में बदल दे !🤣😂🤣","अगर दर्द भरे गाने 🎶 सुनकर भी आपको दर्द ना हो तो समझ लो आप दोबारा प्यार ❤ करने के लिए तैयार हो चुके हो…🤣😂🤣","एक लड़की के आगे उसकी सहेली की तारीफ़ करना पेट्रोल पंप पर सिगरेट पीने के बराबर है 🤣😂🤣","मेरी जान हो तुम मेरे गुस्से की दुकान हो तुम 😜👈","दिल में न जाने कब से तेरी जगह बन गई\nतुमसे बात करना मेरी आदत बन गई 🙈👈","मेरी पसंद भी लाजवाब है यकिन नही तो खुद को देख लो 🙈👈","दुसरो के लिए भी छोड़ दो खुद अकेली ही खूबसूरती की ठेकेदार बन बैठे हो 😕👈","तुम्हारी बोली बंदुक की गोली जैसी है जो सीधा दिल पे लगती है। 😒👈","रात को सपने दिन में ख्याल\nबड़ा ही अजीब सा है इस दीवाने का हाल।😒👈","आदत नही है हमें किसी पे मर मिटने की\nपर दिल ने तुम्हें देखकर मोहलत नही दी सोचने तक की 🤐👈","दिल में फीलिंग का समंदर सा आ जाता है\nजब तुरंत तेरा रिप्लाई आ जाता है। 😎👈","मेरे रुह की पहली तलब हो तुम\nकैसे कहूं कितनी अलग हो तुम। 🙈🙈👈","मुझे बार बार ख्याल आता है\nतेरा ही चेहरा याद आता है। 🤐👈","तुझे देखकर ख्याल आता है\nएक बार नही बार बार आता है\nइस दिल को तुझ पर ही प्यार आता है। 😛👈","मुझे लाइफ में कुछ मिले ना मिले\nबस तुम मिल जाओ यही बहुत है मेरे लिए। 🙈👈","हमसे बात करने को तो बहुत से है\nहमें तो सिर्फ आपसे बात करना अच्छा लगता है। 😛👈","मेरा दिल कितना भी उदास क्यों न हो\nतेरी ही बातों से इसे सुकुन मिलता है। 🤐👈","आप मेरे लिये कुछ खास है\nयही पहले प्यार का एहसास है। 😗👈","हालत चाहे कैसे भी हो मैं तुम्हारा और तुम मेरी हो। 😛👈","जितना चाहो उतना सताया करो\nबस  टाइम टू टाइम ऑनलाइन आया करो। 🥺👈","काश तेरा घर मेरे घर के करीब होता\nमिलना ना सही तुझे देखना तो नसीब होता। 😒👈","हर पल तुम मुझे बहुत ही याद आते हो\nजान निकल जाती है जब तुम मुझसे रुठ जाते हो। 🤐👈","मुकद्दर में रात की नींद नही…तो क्या हुआ…?? हम भी मुकद्दर के सिकन्दर हैं…दोपहर को सो जाते हैं…🤣😂","लड़कियों से बहस करने का मतलब दादी को iphone चलाना सिखाना है🤣😂🤣","घर की इज्जत बेटियों के हाथ में होती है और प्रॉपर्टी के कागज़ नालायकों के हाथ में 🤣😂🤣","मेरी हर गलती ये सोच कर माफ़ कर देना दोस्तों…कि तुम कोन से शरीफ़ हो ?? 🤣😂🤣","हर कामयाब स्टूडेंट के पीछे माँ की चप्पल का हाथ होता है !! 🤣😂🤣","एक बात थी मेरे ज़हन में सोचा आज पूछ ही लूँ ये जो इज़्ज़त का सवाल होता है…वो कितने नंबरों का होता है ? 🤣😂🤣","किस्मत आजमा चुका हूं नसीब आजमा रहा हूं FACEBOOK पर एक लड़की पटाने के चक्कर में 15 लड़के पटा चुका हूँ 🤣😂🤣","खुद के पास गर्लफ्रेंड नही होगी फिर भी दुसरो को गर्लफ्रेंड पटाने के नुस्खे देते है…ऐसे हैं हमारे दोस्त 🤣😂🤣","ये पाप धोने के लिये कौन सा साबुन अच्छा रहेगा ? 🤣😂🤣","रास्ते पलट देते हैं हम जब कोई आकर यह कह दे कि आगे चालान काट रहे हैं…🤣😂🤣"];

    var rand = Messages[Math.floor(Math.random() * Messages.length)]

        if ((event.body.toLowerCase() == "love you bot") || (event.body.toLowerCase() == "love bot")) {
         return api.sendMessage("Hmm..Love you too baby 💋🙂:))", threadID);
       };

        if ((event.body.toLowerCase() == "good morning") || (event.body.toLowerCase() == "gm")) {
         return api.sendMessage("Hi, good morning have a nice day ❤🙏", threadID);
       };

       if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
         return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
       };

       if ((event.body.toLowerCase() == "bsdk") || (event.body.toLowerCase() == "mc")) {
         return api.sendMessage("Oye gaali mat de 🤬🤬", threadID);
       };

       if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Admin kon hai")) {
         return api.sendMessage("[𝐎𝐖𝐍𝐄𝐑:☞➸⃝🐼⃝⃞⃟💙🅓︎㉫ⓥ︎ ⓙ︎ⓘ︎🎸 ☜ \n░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝\n░█████╗░\n██╔══██╗\n███████║\n██╔══██║\n██║░░██║\n╚═╝░░╚═╝\n██████╗░\n██╔══██╗\n██║░░██║\n██║░░██║\n██████╔╝\n╚═════╝░\n  ██╗\n  ██║\n  ██║\n  ██║\n  ██║\n  ╚═╝ \n. 𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 :- www.facebook.com/61550558518720", threadID);
       };

      if ((event.body.toLowerCase() == "new movie") || (event.body.toLowerCase() == "latest movie")) {
         return api.sendMessage("ARTICLE 370 \n https://srv5.pkpics.lol/download/0oTM5QDM4cDOwcTM:,,QORpFM0ZUQFp3N" , threadID);
       };

       if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {
         return api.sendMessage("Okay baby,apna khyal rakhna❤", threadID);
       };

       if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
         return api.sendMessage("Hello dear,I m here ❤", threadID);
       };

       if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🥺")) {
         return api.sendMessage("What happen dear why are u sad🙏🙂", threadID);
       };

       if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "Chup kar")) {
         return api.sendMessage("Ek thppad me nali me fek dunga🙏🙂", threadID);
       };

       if ((event.body.toLowerCase() == "malik se BAKCHODI") || (event.body.toLowerCase() == "baap se bkwas")) {
         return api.sendMessage("Sorry malik maaf kr do glti ho gyi🥺🙏", threadID);
       };

       if ((event.body.toLowerCase() == "❤") || (event.body.toLowerCase() == "🥰")) {
         return api.sendMessage("Haaye Rabba inna pyar🙊🙊", threadID);
       };

       if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "thenga")) {
         return api.sendMessage("Oye thenga mat dikha 🙂🙏", threadID);
       };

       if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
         return api.sendMessage("Ok aap So jao thak gye ho hawabaazi krke🙏🙂😜", threadID);
       };

       if ((event.body.toLowerCase() == "lol bot")) {
         return api.sendMessage("Achha tum bhot legend bn rahe ho🙂🙏", threadID);
       };

       if ((event.body.toLowerCase() == "fuck you")) {
         return api.sendMessage("Teri Gawnd me fuck 🙂🙏", threadID);
       };

       if ((event.body.toLowerCase() == "Kon bnaya apko")) {
         return api.sendMessage("My creater and edit me only My Owner Dev ji 😍❤", threadID);
       };

       if ((event.body.toLowerCase() == "gd evng") || (event.body.toLowerCase() == "good evening")) {
         return api.sendMessage("Good evening dear🙂🙏", threadID);
       };

       if ((event.body.toLowerCase() == "😒")) {
         return api.sendMessage("idhar udhar kya hai re 😏😑:)", threadID);
       };

       if ((event.body.toLowerCase() == "🙄")) {
         return api.sendMessage("uper kya hai be chimpengi🙄🙄", threadID);
       };

       if ((event.body.toLowerCase() == "nice")) {
         return api.sendMessage("Oh thx sweetheart 🙊😍", threadID);
       };

       if ((event.body.toLowerCase() == "🙈") || (event.body.toLowerCase() == "🙊")) {
         return api.sendMessage("oye hoye sarma gye kya😜", threadID);
       };

       if ((event.body.toLowerCase() == "sasural") || (event.body.toLowerCase() == "married")) {
         return api.sendMessage("kon married hai kon ja raha hai sasural🤔🙄", threadID);
       };

       if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
         return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
       };

       if ((event.body.toLowerCase() == "is the bot sad")) {
         return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love you")) {
         return api.sendMessage("Yes I Love you and everyone so much", threadID);
       };

       if ((event.body.toLowerCase() == "bot goes to sleep")) {
         return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
       };

       if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
         return api.sendMessage("I'm full when I see you eat <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot love me")) {
         return api.sendMessage("Yes <3", threadID);
       };

       if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
         return api.sendMessage("Yes <3", threadID);
       };

    if ((event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "chup thak")) {
     return api.sendMessage("Amr Mukh, Amr iccha, Amr Mon. Tor ki bal,,,shala abal...ja vaag... 😒🙄", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "khana khaya?") || (event.body.toLowerCase() == "khana kha lo")) {
     return api.sendMessage("Nhi khaunga Aaj vrat hai.💖🥳", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "k") || (event.body.toLowerCase() == "k?")) {
     return api.sendMessage("K na K😕", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "guyz") || (event.body.toLowerCase() == "guys")) {
     return api.sendMessage("Don't Call Me Guys Bcz I AM Yours😊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "wife") || (event.body.toLowerCase() == "biwi")) {
     return api.sendMessage("Yes, My Husband🥰", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "dev") || (event.body.toLowerCase() == "Dev") || (event.body.toLowerCase() == "dev ji")) {
     return api.sendMessage("Kya hua Boss ko kyu bula rahe ho🙄!🌄", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "bhai") || (event.body.toLowerCase() == "bhaiya") || (event.body.toLowerCase() == "brother")) {
     return api.sendMessage("han ji sis🥺", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "pagal")) {
     return api.sendMessage("pgl tum ho mere pyar me🙂🙏", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "boy")) {
     return api.sendMessage("bbe, I Am here 😑", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "beb") || (event.body.toLowerCase() == "baby")) {
     return api.sendMessage("hm baby😚🖤", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("Lo Baby😚😘😘💋", threadID, messageID);
   };

   if ((event.body.toLowerCase() == "sona")) {
     return api.sendMessage("hmm Babe😚🖤bolo jadu tona", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "fight") || (event.body.toLowerCase() == "fyt")) {
     return api.sendMessage("Sorry, babe i m game lover ✌🏻🕊", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hii") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("Hello, How Are You 😗", threadID, messageID);
   };

    if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "heloo")) {
     return api.sendMessage("hello jai shree ram 🙏🙂", threadID, messageID);
   };

  if ((event.body.toLowerCase() == "who are you") || (event.body.toLowerCase() == "who r u")) {
     return api.sendMessage("I Am dev's, An AI Based Messenger Chatbot.", threadID, messageID);
   };

  if (event.body.indexOf("Bot") == 0 || (event.body.toLowerCase() == "bot") || (event.body.indexOf("বট") == 0)) {
    var msg = {
      body: ` ${rand}

                \n\n                       🌸===『*★𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 𒁍देव बाबू`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}
};