"use strict";

const { rememberBanatReply, pickBanatReply } = require("./banat-memory");

// Banat-only local reply pools. Nothing here calls an AI service.
const groups = [
  {
    name: "bot",
    triggers: ["bot", "robot", "ai"],
    replies: [
      "aa supang supa ka nanaman sakin ah",
      "pag ba pag pinalamutak ko utenku sa sayo papayag ka?",
      "bugbog abot mo sakin",
      "yung utenku nde yan laruan para pag laruan mo😂",
      "papamo nagagalit sakin nung di kita pinasupapinasupa😂",
      "bisaya kaba bai na bai ka e😂",
      "ona bot nako bat aangal ka😂",
      "pag tong utenku sinagad ko sa bunganga mo😂",
      "sopsop na sopsop ka sa utenku ah😂",
      "pag young ulo mo sinapak ko baka ma comatose ka😂",
      "wag moko trollin baka pag hinampas kita ng tarubas ko tulog ka😂",
      "puro ka bot bisaya kaba😂",
      "nagiging tanga kana sa kakabot mo😂",
      "pinag sasabi mo jan?😂",
      "diko babasahen katangahan mo😂",
      "babasahen ko paba yan?😂",
      "napapagod ka naba? 😂"
    ]
  },
  {
    name: "trash-talk",
    triggers: ["weak", "laro", "tanginamo", "lala", "patawa", "gago", "bobo", "tanga", "hahahaa", "pake ko", "sino yan"],
    replies: [
      "magkano kinikita mo sa pagiging tanga mo? ",
      "yung ttko wag m ogawing squishy 😂",
      "magsusumbong kalang sa mamamo pag pinatikem ko sayo taguro ko eh",
      "baka tataymo magdabog pag nalamang pinapakain kita utenko",
      "yung papamo di kaya yan mainis pag nilamotak mo botoko",
      "yung bata mong kapatid tingnan tingnan muyan baka maagang lumaki powit nyan",
      "sabihin mo sa nanay mong badjao mag palit sya ng panty abot dito ang baho e", 
      "naiinis na young pepe mo sakin ah",
      "young mamamo pag sinapak ko yan tulog yan"
      "iniinis mo talaga buto ko pag yan pumunta sa mamamo baka lumaki butas ng pwet nan",
      "wag ka mag maktol jan porket di kita pinasupa kagabi",
      "yang bulbul ko wag mo gawing pancit canton",
      "pagsabihan mo yang papamo baka pag gising nan sobrang laki na ng pwet nya",
      "ah basta diko babasahen katangahan mong haufka ",
      "babasahen ko paba katangahan ng badap nato? ",
      "tingin nga ng dodo mo kung binata na.",
      "young nanay mo naiinis buto ko",
      "hindi ako mapapagod susupaen mo pa utenku ",
      "sabi ko sayo bawal mapagod nyahahaha.",
      "hindi ako mawawala pasopsopen pa kita ng buto ko🤣",
      "yang tatay mo binugbog ko di mo kase sinupa utenku e",
      "wag mo inisin utenku baka pumunta yan sa ilong mo",
      "yung nanaymo ingatan muyan baka mamaya pasaraduhin ko powit nyan",
      "baka mamaya utenko dumaretso yan sa bongangamo",
      "tingin tingin sa sarili baka mamaya naka supa kana saken",
      "pagod naba young daliri mong kikiam? 🤣😭",
      "huy batako pano ba mawala",
      "batako di ako mawawala no time limit tayo dito.",
      "bugbugin ko young nanay mo pag dika lumapag dito",
      "naiinis naba young pepe mo sa buto ko? 🤣.",
      "gusto mo ata lamutakin buto ko",
      "batako ang tanga mo sa part nayan",
      "maze to god mo baket aangal ka? 😂",
      "pa lala na ng pa lala na young katangahan mo batako😂",
      "bata kita aangal kaba? 😂",
      "batako supaen mo nga utenku 😂",
      "batako hampas mo nga yung bato sa ulo mo kung matigas 😂",
      "batako lamutakin mo nga buto ko kung matikas ka😂",
      "batako aangal kaba pag pinukpok ko sa pader mamamo?🔮☄️",
      "batako nagiging tangakana kakasupa sa utenku🔮☄️?",
      "batako pag ba sinuntok ko pepe ng lola mo magagalit ka sakin? 😂",
      "batako namumutla na ata young muka mo kakalamutak sa buto ko🔮☄️",
      "batako felt ko napapagod kana🔮☄️",
      "batako bawal mapagod kay boss maze ah🔮☄️ ",
      "batako wag moko trollin jan baka puntahan ka ng butoko🔮☄️",
      "batako wag ka magalit sakin ang laki laki na ng butas ng ilong mo ah🔮☄️",
      "batako moka kana ni shrek jan🔮☄️",
      "batako wagka magalit pag binugbog ko mamamo🔮☄️",
      "batako wag mo naman ipasok buto ko sa ilong mo🔮☄️",
      "batako alien kinalaban mo di ako napapagod🔮☄️",
      "batako mali kinalabam mo🔮☄️",
      "batako punta kanga dine samin supaen mo lang utenku🔮☄️",
      "batako pati young papamo batako🔮☄️",
      "batako may sipon kaba sa utak?🔮☄️",
      "batako baka mahospital ka kakasupa sa buyat ko🔮☄️",
      "par wag moko supaen lalamo🔮☄️ ",
      "par badap kaba kanina mo pa sinusupa utenku e🔮☄️",
      "par natutulog buto ko wag mo gisingin",
      "par meet up daw kayo ng buyat ko check in daw kayo🔮☄️",
      "par papunta na jan buto ko",
      "wag moko galitin pag young ulo mo inopakan ko baka ma comatose ka",
      "yohooo dito ang tingin",
      "yohoo ang pangit ng batako",
      "yohoo ang taba mo jan",
      "nagiging aso kana kakain mo sa buto ng aso namen",
      "dont chupa me because if you chupa me you gonna comatose 😂",
      "my grammar is wrong but if i punch your face susupa ka sakin🔮☄️",
      "if you wanna chupa me go in laguna to chupa me",
      "my dick is super duper big if you wanna ride it you wanna die🔮☄️",
      "naiinis ka naba sa english ko ah top 1 ako sa buong mundo wag moko hamunin 🔮☄️",
      "kahit may sipon ka sa utak bata parin kita🔮☄️",
      "loh bisaya kaba🔮☄️",
      "puro ka bot kung supaen mo nlng ako🔮☄️",
      "masasayang lang oras mo pag kinalaban moko nonstop🔮☄️",
      "chupaen mo nlng ako para di sayang oras mo🔮☄️",
      "pag ginawa kung punching bag young belbel mo 🔮☄️",
      "wag moko inisin baka umpog ko sa pader lola mo🔮☄️",
      "iniinis mo talaga utenku meetup tayo rn", 
      "wag mo gawing laruan utenku🔮☄️", 
      "naging kamuka kana ni tuloy tikla kakasupa sakin nyahaha🔮☄️",
      "masyado ka ng tumataba kakamukbang mu sa utenku hahaah🔮☄️",
      "1 muka ka ni shrek🔮☄️",
      "2 muka ka ni tikla🔮☄️",
      "3 muka ka ni dewata🔮☄️",
      "4 muka ka ni golem🔮☄️",
      "5 muka ka sigbin owshiee🔮☄️",
      "6 muka ka ni vice ganda🔮☄️",
      "pero no joke ang panget mo🔮☄️",
      "bawal mapagod supsupen mo pa buto ko🔮☄️",
      "young tamod ko di yan milktea para inumin mo🔮☄️",
      "young buto ko di yan hakdog para mukbangin mo🔮☄️",
      "young bulbul ko di yan pancit cantoon para kainin mo🔮☄️",
      "young tarub ko di yan lollipop para sopsopen mo🔮☄️",
      "young butoko di yan pagkain para kainin mo🔮☄️",
      "young mamamo sumusupa sakin di mo alam🔮☄️",
      "young papamo kasama ng mamamo sumupa sakin kagabi🔮☄️",
      "young lola mo pinag susuntok ko kanina🔮☄️",
      "sabihin mo sa nanaymo wag yung princess panty paulit ulit eh"
    ]
  },
  {
    name: "jaiden",
    triggers: ["jaiden"],
    replies: [
      "antaba mo batako🔮☄️",
      "ang panget mo🔮☄️", 
      "muka ka ni boss toyo batako🔮☄️",
      "bai na bai ka talaga ah🔮☄️",
      "batako muka ka tepaklong jan🔮☄️", 
      "batako muka ka alimasag jan🔮☄️",
      "batako muka ka pader jan🔮☄️",
      "batako muka ka tv jan🔮☄️",
      "batako muka ka unan jan🔮☄️",
      "batako muka ka kumot jan🔮☄️",
      "batako muka ka tarub ko jan🔮☄️",
      "batako muka ka kaldero jan🔮☄️",
      "batako muka brief ko jan🔮☄️",
      "batako wag ka mag tampo saken sorry di kita pinasupa kagabi🔮☄️",
      "batako ang taba mo sa part nayan🔮☄️ ",
      "batako muka ka short jan🔮☄️",
      "batako muka ka medyas jan🔮☄️",
      "batako muka sapatos jan🔮☄️",
      "batako muka ka sintas jan",
      "batako muka ka semento jan🔮☄️",
      "batako muka espalto jan",
      "batako muka ka tanga jan",
      "batako muka ka gago jan"
    ]
  }
];

function normalize(text) { return String(text || "").toLowerCase().replace(/\s+/g, " ").trim(); }

function findGroups(body) {
  const text = normalize(body);
  return groups.filter(group => group.triggers.some(trigger => {
    const t = String(trigger).toLowerCase();
    return t.length <= 4 ? new RegExp(`\\b${t.replace(/[.*+?^${}()|[\\]\\]/g, "\\$&")}\\b`, "i").test(text) : text.includes(t);
  }));
}

function getTriggerReply(body, threadID = "") {
  const matched = findGroups(body);
  if (!matched.length) return null;
  const group = matched[Math.floor(Math.random() * matched.length)];
  const reply = pickBanatReply(threadID, group.replies);
  if (reply) rememberBanatReply(threadID, reply);
  return reply;
}

function getBanatConversationReply(body, threadID = "") {
  const direct = getTriggerReply(body, threadID);
  if (direct) return direct;

  const fallback = groups.flatMap(g => g.replies);
  // The no-repeat shuffle bag can temporarily have only recently-used items
  // left. In that edge case, pickBanatReply returns null; active Banat must
  // still answer ordinary chat instead of silently skipping the message.
  const reply =
    pickBanatReply(threadID, fallback) ||
    fallback[Math.floor(Math.random() * fallback.length)] ||
    null;

  if (reply) rememberBanatReply(threadID, reply);
  return reply;
}

module.exports = { groups, getTriggerReply, getBanatConversationReply };
