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
      "asan nga yung bot, kulit mo",
      "tangina, paulit-ulit",
      "paulit-ulit ka ba?",
      "bot ka nang bot, nagiging meme ka na",
      "bobo, wala akong pake sa sinasabi mo",
      "edi bot, kwento mo 'yan",
      "amoy basang aso tong kumag na 'to",
      "puta, baho mo, layo ka nga"
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
      "baby, ang sipag mo po gumawa ng problema.",
      "baby, proud ka po talaga sa ganyang take?",
      "baby, ang confidence mo po parang unlimited data.",
      "baby, ang logic mo po naka-trial version.",
      "baby, nag-buffer po ba utak mo?",
      "baby, bakit po ikaw ang pinaka-confident na walang point?",
      "baby, ang cute po ng argument mo, pero hindi convincing.",
      "baby, sige po, explain mo pa, gusto kong marinig ang sequel.",
      "baby, ang haba po ng speech mo, nasaan ang point?",
      "baby, may point ka po ba o nagbabakasyon?",
      "baby, balik po tayo sa reality, miss na kita doon.",
      "baby, ang layo po ng sagot mo sa tanong.",
      "baby, ikaw po ba ang final boss ng unnecessary replies?",
      "baby, ang cute mo po kapag trying hard.",
      "baby, don't worry po, tutulungan kitang hanapin ang point mo.",
      "baby, nawawala po ba ang common sense mo kapag cute ka?",
      "baby, bakit po parang confidence muna bago utak?",
      "baby, ang tapang mo po, gusto mo ba ng forehead kiss?",
      "baby, wag ka po magalit, bagay sa'yo ang pikon.",
      "baby, ang cute po ng tampo mo, kaso mali ka pa rin.",
      "baby, okay po, noted ang kabobohan.",
      "baby, sige po, ikaw na ang CEO ng nonsense.",
      "baby, may citation po ba 'yang claim mo?",
      "baby, source po? o galing lang sa imagination?",
      "baby, ang effort po, pero saan napunta ang sense?",
      "baby, ang daldal mo po, pero sige, favorite kita.",
      "baby, pwede po bang tumigil ka muna? nami-miss ko kasi katahimikan.",
      "baby, ang ingay mo po, pero cute so pagbibigyan kita.",
      "baby, bakit po parang hobby mo akong inisin?",
      "baby, ikaw po ba ang scheduled interruption ko today?",
      "baby, ang dramatic mo po, gusto mo soundtrack?",
      "baby, may script po ba tayo o improv lang talaga kabobohan mo?",
      "baby, ang confident mo po, parang may backup brain.",
      "baby, ang cute mong magpanggap na tama po.",
      "baby, sige po, defend your thesis of nonsense.",
      "baby, hug muna po bago natin ayusin ang logic.",
      "baby, breathe po, hindi ka hinahabol ng facts.",
      "baby, relax po, hindi contest ang pagiging tama.",
      "baby, acceptance po muna bago confidence.",
      "baby, GPS po ba utak mo? bakit off-route?",
      "baby, turn left po sa common sense.",
      "baby, recalculating po ang logic mo.",
      "baby, destination: tamang sagot. ETA: unknown.",
      "baby, may detour po yata 'yang argument mo.",
      "baby, bakit po parang side quest lahat ng sagot mo?",
      "baby, ang reply mo po nag-lag sa landing.",
      "baby, bakit po every comeback mo may loading screen?",
      "baby, ang banat mo po cute, parang ikaw.",
      "baby, sige po, roast mo pa ako, nakakatuwa ka.",
      "baby, ang yabang mo po, gusto mo bang i-redeem sa lambing?",
      "baby, obvious po na gusto mo ng attention.",
      "baby, nakuha mo na po attention ko, happy ka na?",
      "baby, congratulations po, ikaw ang little problem of the day.",
      "baby, ang galing mong manggulo po.",
      "baby, may medal po ba sa pagiging makulit? deserve mo.",
      "baby, ang kulit mo po, pero don't stop.",
      "baby, ang cute mong magpanggap na tama.",
      "baby, ang taas po ng confidence, ang baba ng accuracy.",
      "baby, perfect po ang delivery, questionable ang content.",
      "baby, ang smooth mo po magsalita, sayang sablay ang logic.",
      "baby, ang point mo po nagtatago yata.",
      "baby, baka kailangan po natin ng search party para sa logic mo.",
      "baby, ang argumento mo po may sariling side quest.",
      "baby, saan po nag-road trip ang common sense?",
      "baby, ang reply mo po nag-lag sa landing.",
      "baby, ikaw po talaga ang definition ng cute disaster."
    ]
  },
  {
    name: "jaiden",
    triggers: ["jaiden"],
    replies: [
      "jaiden na naman",
      "al-bai-no",
      "bai-gone",
      "bai-tamins",
      "one bai one",
      "jaiden, yung mukhang paa ba?",
      "la, jaiden ulit",
      "jaiden and his broke boys era",
      "jaiden mukhang nahulugan langka e",
      "iyak si gago",
      "pake ko nga?",
      "turo mo sino nag tanong",
      "bilang ka muna",
      "moka ka libro",
      "moka ma fan",
      "moka ka mama mo",
      "moka ka lapis",
      "moka ka tiles",
      "moka ka bahay",
      "moka ka semento",
      "moka ka aspalto",
      "moka ka tanga",
      "moka ka gago"
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
