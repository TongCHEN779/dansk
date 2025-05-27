---
layout: archive
title: ""
permalink: /ord_og_gram/adv/
search: true
---

<script>
    function playSound(soundId) {
        var audioElement = document.getElementById(soundId);
        var profileImage = document.getElementById("profile-avatar");
        if (audioElement && profileImage) {
            // Check if the audio has valid content
            if (!audioElement.src || audioElement.readyState < 2 || audioElement.duration === 0 || isNaN(audioElement.duration)) {
                console.warn("Invalid or empty audio source.");
                return;
            }
            // Change image to "speaking" version
            profileImage.src = "https://tongchen779.github.io/dansk/images/young_man.GIF";
            // Play audio
            audioElement.play();
            // When audio ends, revert image back
            audioElement.onended = function () {
                profileImage.src = "https://tongchen779.github.io/dansk/images/young_man.png";
            };
        }
    }
</script>
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2; /* Light gray background for even rows */
    }
    tr:nth-child(odd) {
        background-color: #ffffff; /* White background for odd rows */
    }
    th, td {
        border: 1px solid #dddddd;
        padding: 8px;
        text-align: left;
    }
</style>
<h1 style="text-align: center;"> Centraladverbier: S-V-A </h1>
<table align="center" cellspacing="5" style="text-align: left" width="100%">
<tr>
<th> Adverb </th>
<th> Udtale </th>
<th> Engelsk </th>
<th> Eksempler </th>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=afsti+afsted"> afsti afsted, afsti af sted, af sti af sted, af sti afsted </a></td>
<td></td>
<td> let's go </td>
<td> Så jeg tog til Paris. Tænkte: »Jeg har da haft fransk på højt niveau. Af sti af sted med mig.« </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=afvekslende"> afvekslende </a></td>
<td>
<audio id="afvekslende" src="https://static.ordnet.dk/mp3/11000/11000882_1.mp3" style="display: none;"></audio>
<span onclick="playSound('afvekslende');" style="cursor: pointer; color: blue;">[-ˌvεgslənə]</span>
</td>
<td> alternately </td>
<td> Tambourkorpset er den del af vagtparaden, der på turen til Amalienborg spiller afvekslende med musikkorpset. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=aldeles"> aldeles </a></td>
<td>
<audio id="aldeles" src="https://static.ordnet.dk/mp3/11001/11001188_1.mp3" style="display: none;"></audio>
<span onclick="playSound('aldeles');" style="cursor: pointer; color: blue;">[alˈdeˀləs]</span>
</td>
<td> absolutely </td>
<td> Engang imellem kunne jeg blive så aldeles rasende fordi han bare sad der og lod som ingenting. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=aldrig"> (næsten) aldrig </a></td>
<td>
<audio id="aldrig" src="https://static.ordnet.dk/mp3/11001/11001219_1.mp3" style="display: none;"></audio>
<span onclick="playSound('aldrig');" style="cursor: pointer; color: blue;">[ˈɑldʁi]</span>
</td>
<td> (almost) never </td>
<td> Jeg gør det aldrig mere. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=allevegne"> allevegne, alle vegne </a></td>
<td>
<audio id="allevegne" src="" style="display: none;"></audio>
<span onclick="playSound('allevegne');" style="cursor: pointer; color: blue;">[ˈaləˌvɑjnə]</span>
</td>
<td> everywhere </td>
<td> De ledte efter hende allevegne. Under sengen, bag ved sofaen og inde i fars og mors soveværelse. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=allerede"> allerede </a></td>
<td>
<audio id="allerede" src="https://static.ordnet.dk/mp3/11001/11001322_1.mp3" style="display: none;"></audio>
<span onclick="playSound('allerede');" style="cursor: pointer; color: blue;">[ˈaləˈʁεːðə]</span>
</td>
<td> already </td>
<td> Manden var allerede kommet ind i bilen, da bilens tyverialarm gik i gang. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=altid"> (næsten) altid </a></td>
<td>
<audio id="altid" src="https://static.ordnet.dk/mp3/11001/11001443_1.mp3" style="display: none;"></audio>
<span onclick="playSound('altid');" style="cursor: pointer; color: blue;">[ˈalˀˌtiðˀ]</span>
</td>
<td> (almost) always </td>
<td> Universet har altid fascineret mennesket. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=bagpå"> bagpå </a></td>
<td>
<audio id="bagpå" src="https://static.ordnet.dk/mp3/11003/11003171_1.mp3" style="display: none;"></audio>
<span onclick="playSound('bagpå');" style="cursor: pointer; color: blue;">[ˈbæˀjˌpɔˀ]</span>
</td>
<td> from behind </td>
<td> Samler ungerne sammen og får dem ud på cyklen, Jesper sidder foran og Thomas bagpå. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=bare"> bare </a>, <a href="https://ordnet.dk/ddo/ordbog?query=lige"> lige </a></td>
<td>
<audio id="bare" src="https://static.ordnet.dk/mp3/11003/11003477_1.mp3" style="display: none;"></audio>
<span onclick="playSound('bare');" style="cursor: pointer; color: blue;">[ˈbɑːɑ]</span>, 
<audio id="lige" src="https://static.ordnet.dk/mp3/11030/11030377_1.mp3" style="display: none;"></audio>
<span onclick="playSound('lige');" style="cursor: pointer; color: blue;">[ˈliːə]</span>
</td>
<td> just </td>
<td> Jeg er tilbage om ti minutter. Jeg skal bare lige strække benene. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=deraf"> deraf </a>, <a href="https://ordnet.dk/ddo/ordbog?query=heraf"> heraf </a></td>
<td>
<audio id="deraf" src="https://static.ordnet.dk/mp3/11008/11008777_1.mp3" style="display: none;"></audio>
<span onclick="playSound('deraf');" style="cursor: pointer; color: blue;">[ˈdεˀɐ̯ˈæˀ]</span>, 
<audio id="heraf" src="https://static.ordnet.dk/mp3/11020/11020489_1.mp3" style="display: none;"></audio>
<span onclick="playSound('heraf');" style="cursor: pointer; color: blue;">[ˈhεˀɐ̯ˈæˀ]</span>
</td>
<td> thereof, hereof </td>
<td> En hyrde fandt under en bro en fin, snehvid knogle og lavede deraf et mundstykke til sit horn. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=dermed"> dermed </a></td>
<td>
<audio id="dermed" src="https://static.ordnet.dk/mp3/11008/11008809_1.mp3" style="display: none;"></audio>
<span onclick="playSound('dermed');" style="cursor: pointer; color: blue;">[ˈdεˀɐ̯ˈmεð]</span>
</td>
<td> thus </td>
<td> Det er brugeren, der styrer processen og dermed den endelige udformning af resultatet. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=dertil"> dertil </a></td>
<td>
<audio id="dertil" src="https://static.ordnet.dk/mp3/11008/11008825_2.mp3" style="display: none;"></audio>
<span onclick="playSound('dertil');" style="cursor: pointer; color: blue;">[ˈdεˀɐ̯ˈtel]</span>
</td>
<td> thereto </td>
<td> Ægteparret boede i Beirut i knap 40 år. De flyttede dertil efter Anden Verdenskrig. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=dog"> dog </a></td>
<td>
<audio id="dog" src="https://static.ordnet.dk/mp3/11009/11009418_1.mp3" style="display: none;"></audio>
<span onclick="playSound('dog');" style="cursor: pointer; color: blue;">[ˈdɒw]</span>
</td>
<td> however </td>
<td> Husk, at vi er dog danske med hud og hår; bevar og styrk vore gode og stolte traditioner. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=end"> end </a></td>
<td>
<audio id="end" src="https://static.ordnet.dk/mp3/11011/11011284_1.mp3" style="display: none;"></audio>
<span onclick="playSound('end');" style="cursor: pointer; color: blue;">[ˈεn]</span>
</td>
<td> no matter ... </td>
<td> Hvad Kreml end gør, bliver der altså ballade. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=end+ikke"> end ikke </a></td>
<td></td>
<td> not even </td>
<td> Han gav sig end ikke tid til at sætte sig ned, før han tog fat på at læse. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=endda"> endda </a></td>
<td>
<audio id="endda" src="https://static.ordnet.dk/mp3/11011/11011287_1.mp3" style="display: none;"></audio>
<span onclick="playSound('endda');" style="cursor: pointer; color: blue;">[enˈda]</span>
</td>
<td> even </td>
<td> Han havde holdt om Silpa, havde danset med hende, kysset hende, havde måske endda elsket med hende. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=forbi"> forbi </a></td>
<td>
<audio id="forbi" src="https://static.ordnet.dk/mp3/11014/11014229_1.mp3" style="display: none;"></audio>
<span onclick="playSound('forbi');" style="cursor: pointer; color: blue;">[fʌˈbiˀ]</span>
</td>
<td> by, past </td>
<td> Hun kom ud ad fordøren, lige idet Ernst gik forbi. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=forg%C3%A6ves"> forgæves </a></td>
<td>
<audio id="forgæves" src="https://static.ordnet.dk/mp3/11014/11014557_1.mp3" style="display: none;"></audio>
<span onclick="playSound('forgæves');" style="cursor: pointer; color: blue;">[fʌˈgεˀvəs]</span>
</td>
<td> in vain </td>
<td> Målmanden kastede sig forgæves efter det hårde og velplacerede venstrebensskud, der susede i netmaskerne helt ude ved den ene stolpe. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=fors%C3%A6tlig"> forsætlig </a></td>
<td>
<audio id="forsætlig" src="https://static.ordnet.dk/mp3/11015/11015282_1.mp3" style="display: none;"></audio>
<span onclick="playSound('forsætlig');" style="cursor: pointer; color: blue;">[fʌˈsεdli]</span>
</td>
<td> on purpose </td>
<td> Han er sikker på, at Lisa ikke har glemt at ringe til ham. Hun har undladt det helt forsætligt. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=fors%C3%A6tlig"> fortil </a>, <a href="https://ordnet.dk/ddo/ordbog?query=fors%C3%A6tlig"> bagtil </a></td>
<td>
<audio id="fortil" src="https://static.ordnet.dk/mp3/11015/11015340_1.mp3" style="display: none;"></audio>
<span onclick="playSound('fortil');" style="cursor: pointer; color: blue;">[ˈfɒːˌtel]</span>, 
<audio id="bagtil" src="https://static.ordnet.dk/mp3/11003/11003192_1.mp3" style="display: none;"></audio>
<span onclick="playSound('bagtil');" style="cursor: pointer; color: blue;">[ˈbæˀjˌtel]</span>
</td>
<td> at the front, at the back </td>
<td> Svælget deler sig i luftrøret, som ligger fortil og spiserøret, som ligger bagtil. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=fortsat"> fortsat </a></td>
<td>
<audio id="fortsat" src="https://static.ordnet.dk/mp3/11015/11015399_1.mp3" style="display: none;"></audio>
<span onclick="playSound('fortsat');" style="cursor: pointer; color: blue;">[ˈfɒːdˌsad]</span>
</td>
<td> still </td>
<td> Hun er den dag i dag, i en alder af 90 år, fortsat aktiv med pennen. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=forud"> forud </a></td>
<td>
<audio id="forud" src="https://static.ordnet.dk/mp3/11015/11015439_1.mp3" style="display: none;"></audio>
<span onclick="playSound('forud');" style="cursor: pointer; color: blue;">[ˈfɒˌuðˀ]</span>
</td>
<td> in advance </td>
<td> Plads kan ikke reserveres forud. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=fremad"> fremad </a></td>
<td>
<audio id="fremad" src="https://static.ordnet.dk/mp3/11015/11015842_1.mp3" style="display: none;"></audio>
<span onclick="playSound('fremad');" style="cursor: pointer; color: blue;">[ˈfʁamˀˌæˀ]</span>
</td>
<td> forward </td>
<td> Hestene løber i fuld fart fremad, og det føles, som om vognen letter fra jorden. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=fremover"> fremover </a></td>
<td>
<audio id="fremover" src="https://static.ordnet.dk/mp3/11015/11015927_1.mp3" style="display: none;"></audio>
<span onclick="playSound('fremover');" style="cursor: pointer; color: blue;">[ˈfʁamˀˌɒwˀʌ]</span>
</td>
<td> in the future </td>
<td> Vi skal anmode om, at lønnoten fremover udfyldes korrekt. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ganske"> ganske </a></td>
<td>
<audio id="ganske" src="https://static.ordnet.dk/mp3/11017/11017214_1.mp3" style="display: none;"></audio>
<span onclick="playSound('ganske');" style="cursor: pointer; color: blue;">[ˈgansgə]</span>
</td>
<td> quite </td>
<td> Bønnerne fremsiges på arabisk og følges af ganske bestemte bevægelser. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=gerne"> (også) gerne </a>, <a href="https://ordnet.dk/ddo/ordbog?query=hellere"> hellere </a>, <a href="https://ordnet.dk/ddo/ordbog?query=helst"> helst </a></td>
<td>
<audio id="gerne" src="https://static.ordnet.dk/mp3/11017/11017883_1.mp3" style="display: none;"></audio>
<span onclick="playSound('gerne');" style="cursor: pointer; color: blue;">[ˈgæɐ̯nə]</span>, 
<audio id="hellere" src="https://static.ordnet.dk/mp3/11020/11020314_1.mp3" style="display: none;"></audio>
<span onclick="playSound('hellere');" style="cursor: pointer; color: blue;">[ˈhεlʌʌ]</span>, 
<audio id="helst" src="https://static.ordnet.dk/mp3/11020/11020350_1.mp3" style="display: none;"></audio>
<span onclick="playSound('helst');" style="cursor: pointer; color: blue;">[ˈhεlˀsd]</span>
</td>
<td> (also) would like, rather, preferably </td>
<td> Jeg vil gerne vide hvor langt en sæl kan dykke uden at trække vejret? </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=givetvis"> givetvis </a></td>
<td>
<audio id="givetvis" src="https://static.ordnet.dk/mp3/11018/11018059_1.mp3" style="display: none;"></audio>
<span onclick="playSound('givetvis');" style="cursor: pointer; color: blue;">[ˈgiːvəðˈviˀs]</span>
</td>
<td> probably </td>
<td> Det var givetvis ikke hendes mening at gøre mig ondt. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=godt"> (også) godt </a></td>
<td>
<audio id="godt" src="https://static.ordnet.dk/mp3/11018/11018364_1.mp3" style="display: none;"></audio>
<span onclick="playSound('godt');" style="cursor: pointer; color: blue;">[ˈgʌd]</span>
</td>
<td> (also) well </td>
<td> Man kan godt forene god arkitektur med en ordentlig økonomi. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=grangiveligt"> grangiveligt </a></td>
<td>
<audio id="grangiveligt" src="https://static.ordnet.dk/mp3/11018/11018506_1.mp3" style="display: none;"></audio>
<span onclick="playSound('grangiveligt');" style="cursor: pointer; color: blue;">[gʁɑnˈgiˀvəlid]</span>
</td>
<td> undoubtedly </td>
<td> Tænk, jeg synes jeg kender dette her sted. Det ligner grangiveligt skoven ved sommerhuset. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=hvoraf"> hvoraf </a></td>
<td>
<audio id="hvoraf" src="https://static.ordnet.dk/mp3/11021/11021975_1.mp3" style="display: none;"></audio>
<span onclick="playSound('hvoraf');" style="cursor: pointer; color: blue;">[ˈvɒˀˈæˀ]</span>
</td>
<td> of which </td>
<td> Byrådet udpeger et nævn på 13 medlemmer, hvoraf 7 skal repræsentere det lokale foreningsliv. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=hvorfra"> hvorfra </a></td>
<td>
<audio id="hvorfra" src="https://static.ordnet.dk/mp3/11021/11021979_1.mp3" style="display: none;"></audio>
<span onclick="playSound('hvorfra');" style="cursor: pointer; color: blue;">[ˈvɒˀˈfʁɑˀ]</span>
</td>
<td> from where </td>
<td> Fra Nørreport tog jeg bussen til Rævehøjvej på Lyngbymotorvejen, hvorfra jeg gik op til DtH. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=hvorhen"> hvorhen </a></td>
<td>
<audio id="hvorhen" src="https://static.ordnet.dk/mp3/11021/11021980_1.mp3" style="display: none;"></audio>
<span onclick="playSound('hvorhen');" style="cursor: pointer; color: blue;">[ˈvɒˀˈhεn]</span>
</td>
<td> to where </td>
<td> Min far forsvandt – jeg ved ikke hvorhen. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=hvorimod"> hvorimod </a></td>
<td>
<audio id="hvorimod" src="https://static.ordnet.dk/mp3/11021/11021986_1.mp3" style="display: none;"></audio>
<span onclick="playSound('hvorimod');" style="cursor: pointer; color: blue;">[ˈvɒˀiˈmoˀð]</span>
</td>
<td> whereas </td>
<td> Stalin gik ind for "socialisme i ét land", hvorimod Trotskij var fortaler for "permanent revolution". </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=hvorp%C3%A5"> hvorpå </a></td>
<td>
<audio id="hvorpå" src="https://static.ordnet.dk/mp3/11021/11021992_1.mp3" style="display: none;"></audio>
<span onclick="playSound('hvorpå');" style="cursor: pointer; color: blue;">[ˈvɒˀˈpɔˀ]</span>
</td>
<td> whereupon, on which </td>
<td> Han fik afslag fra amtet, hvorpå vi så ankede sagen. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=hvorved"> hvorved </a></td>
<td>
<audio id="hvorved" src="https://static.ordnet.dk/mp3/11021/11021995_1.mp3" style="display: none;"></audio>
<span onclick="playSound('hvorved');" style="cursor: pointer; color: blue;">[ˈvɒˀˈveð]</span>
</td>
<td> whereby </td>
<td> Vi dalede ned mod en lufthavn og en kaj, hvorved der lå et eneste lillebitte gråt skib. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=iblandt"> iblandt </a></td>
<td>
<audio id="iblandt" src="https://static.ordnet.dk/mp3/11022/11022748_1.mp3" style="display: none;"></audio>
<span onclick="playSound('iblandt');" style="cursor: pointer; color: blue;">[iˈblanˀd]</span>
</td>
<td> among </td>
<td> Man støder kun på få skulpturer, men der er perler iblandt. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ibrugtage"> ibrugtage </a></td>
<td>
<audio id="ibrugtage" src="https://static.ordnet.dk/mp3/11022/11022752_1.mp3" style="display: none;"></audio>
<span onclick="playSound('ibrugtage');" style="cursor: pointer; color: blue;">[iˈbʁuˀˌtæˀjə]</span>
</td>
<td> taking into service </td>
<td> Gensplejsningen kan tænkes ibrugtaget på forskellige felter inden for servicesektoren. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ihjel"> ihjel </a></td>
<td>
<audio id="ihjel" src="https://static.ordnet.dk/mp3/11022/11022871_1.mp3" style="display: none;"></audio>
<span onclick="playSound('ihjel');" style="cursor: pointer; color: blue;">[iˈjεl]</span>
</td>
<td> to death </td>
<td> Severin kom i vejen for en løbsk hest og blev sparket ihjel. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ikke"> ikke, heller ikke, slet ikke / overhovedet ikke </a></td>
<td>
<audio id="ikke" src="https://static.ordnet.dk/mp3/11022/11022886_1.mp3" style="display: none;"></audio>
<span onclick="playSound('ikke');" style="cursor: pointer; color: blue;">[ˈegə]</span>
</td>
<td> not, either, not at all </td>
<td> Vi har ikke råd til at rejse. </td>
</tr>
<tr>
<td> ikke kun / blot ..., men også ... </td>
<td></td>
<td> not only ..., but also ... </td>
<td> Torben og Henrik havde ikke blot været kolleger, men også nære venner. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=imod"> imod </a></td>
<td>
<audio id="imod" src="https://static.ordnet.dk/mp3/11023/11023033_1.mp3" style="display: none;"></audio>
<span onclick="playSound('imod');" style="cursor: pointer; color: blue;">[iˈmoðˀ]</span>
</td>
<td> against </td>
<td> Det nytter ikke noget at kæmpe imod. Julen nærmer sig. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=indadtil"> indadtil </a>, <a href="https://ordnet.dk/ddo/ordbog?query=udadtil"> udadtil </a></td>
<td>
<audio id="indadtil" src="https://static.ordnet.dk/mp3/11023/11023115_1.mp3" style="display: none;"></audio>
<span onclick="playSound('indadtil');" style="cursor: pointer; color: blue;">[ˈenˀaðˌtel]</span>, 
<audio id="udadtil" src="https://static.ordnet.dk/mp3/12003/12003633_1.mp3" style="display: none;"></audio>
<span onclick="playSound('udadtil');" style="cursor: pointer; color: blue;">[ˈuðˀaðˌtel]</span>
</td>
<td> inward, outward </td>
<td> EF er ny-liberalistisk, dvs. at det er liberalt indadtil og protektionistisk udadtil. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=indefra"> indefra </a></td>
<td>
<audio id="indefra" src="https://static.ordnet.dk/mp3/11023/11023173_1.mp3" style="display: none;"></audio>
<span onclick="playSound('indefra');" style="cursor: pointer; color: blue;">[ˈenəˌfʁɑˀ]</span>
</td>
<td> from inside </td>
<td> Mange sten nedbrydes indefra af nedsivende vand, der skaber sprækker, som siden får stenen til at knække. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=indend%C3%B8rs"> indendørs </a></td>
<td>
<audio id="indendørs" src="https://static.ordnet.dk/mp3/11023/11023200_1.mp3" style="display: none;"></audio>
<span onclick="playSound('indendørs');" style="cursor: pointer; color: blue;">[ˈenənˌdɶɐ̯ˀs]</span>
</td>
<td> indoors </td>
<td> Naturligvis skal man ikke holde sig indendørs, når solen skinner. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=is%C3%A6r"> især </a></td>
<td>
<audio id="især" src="https://static.ordnet.dk/mp3/11024/11024297_1.mp3" style="display: none;"></audio>
<span onclick="playSound('især');" style="cursor: pointer; color: blue;">[iˈsεˀɐ̯]</span>
</td>
<td> especially </td>
<td> Han interesserede sig for biler, især de gamle amerikanske. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=itu"> itu </a></td>
<td>
<audio id="itu" src="https://static.ordnet.dk/mp3/11024/11024312_1.mp3" style="display: none;"></audio>
<span onclick="playSound('itu');" style="cursor: pointer; color: blue;">[iˈtuˀ]</span>
</td>
<td> broken, cracked </td>
<td> Han river alle jordknolde ind i bedets side og presser dem itu med riven. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=knap"> knap (... før ...) </a></td>
<td>
<audio id="knap" src="https://static.ordnet.dk/mp3/11026/11026577_1.mp3" style="display: none;"></audio>
<span onclick="playSound('knap');" style="cursor: pointer; color: blue;">[ˈknɑb]</span>
</td>
<td> hardly, just (... before ...) </td>
<td> Knap har den 3-årige ønsket sig en traktor, før han har fået den samt gravko, tromle og andre dyre biler. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=kun"> kun </a></td>
<td>
<audio id="kun" src="https://static.ordnet.dk/mp3/11028/11028602_1.mp3" style="display: none;"></audio>
<span onclick="playSound('kun');" style="cursor: pointer; color: blue;">[ˈkɔn]</span>
</td>
<td> only </td>
<td> I stedet for et ventet salg på 10.000 biler sidste år, blev der kun solgt 400. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=langs"> langs </a></td>
<td>
<audio id="langs" src="https://static.ordnet.dk/mp3/11029/11029752_1.mp3" style="display: none;"></audio>
<span onclick="playSound('langs');" style="cursor: pointer; color: blue;">[ˈlɑŋˀs]</span>
</td>
<td> along </td>
<td> Der var pæleværk med træbroer ikke bare langs med bredden men også vinkelret ud i vandet. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ligefrem"> ligefrem </a></td>
<td>
<audio id="ligefrem" src="https://static.ordnet.dk/mp3/11030/11030390_1.mp3" style="display: none;"></audio>
<span onclick="playSound('ligefrem');" style="cursor: pointer; color: blue;">[ˈliːəˌfʁamˀ]</span>
</td>
<td> even </td>
<td> Man har ligefrem taget baner fra bilerne og begrænset antallet af parkeringspladser. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ligesom"> ligesom </a></td>
<td>
<audio id="ligesom" src="" style="display: none;"></audio>
<span onclick="playSound('ligesom');" style="cursor: pointer; color: blue;">[ˈlisʌm]</span>
</td>
<td> as well as, just like, as if </td>
<td> Johannes daskede ligesom tilfældigt hen og så på. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ligeud"> ligeud </a></td>
<td>
<audio id="ligeud" src="https://static.ordnet.dk/mp3/11030/11030422_1.mp3" style="display: none;"></audio>
<span onclick="playSound('ligeud');" style="cursor: pointer; color: blue;">[ˈliːəˈuðˀ]</span>
</td>
<td> straight ahead </td>
<td> Vi skulle stå med samlede ben, med vægten lagt på hælene og se ligeud. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=netop"> netop </a></td>
<td>
<audio id="netop" src="https://static.ordnet.dk/mp3/11035/11035892_1.mp3" style="display: none;"></audio>
<span onclick="playSound('netop');" style="cursor: pointer; color: blue;">[ˈnεdʌb]</span>
</td>
<td> just </td>
<td> Sten Byriel har netop sunget Figaro i Wien, og skal gøre det igen efter sommerferien. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=nogensinde"> nogensinde, nogen sinde </a></td>
<td>
<audio id="nogensinde" src="https://static.ordnet.dk/mp3/11036/11036068_1.mp3" style="display: none;"></audio>
<span onclick="playSound('nogensinde');" style="cursor: pointer; color: blue;">[ˈnoːənˈsenə]</span>
</td>
<td> ever </td>
<td> Har du nogensinde set vores have så smuk som i år? </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=nærmest"> nærmest </a></td>
<td>
<audio id="nærmest" src="https://static.ordnet.dk/mp3/11036/11036538_1.mp3" style="display: none;"></audio>
<span onclick="playSound('nærmest');" style="cursor: pointer; color: blue;">[ˈnæɐ̯məsd]</span>
</td>
<td> almost </td>
<td> Det er nærmest hinsides vores kontrol. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=næppe"> næppe (... før/førend ...) </a></td>
<td>
<audio id="næppe" src="https://static.ordnet.dk/mp3/11036/11036498_1.mp3" style="display: none;"></audio>
<span onclick="playSound('næppe');" style="cursor: pointer; color: blue;">[ˈnεbə]</span>
</td>
<td> barely (... before ...) </td>
<td> Næppe var hun nået ud på fortovet, før en kvinde kom styrtende ud fra hotellet. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=også"> også </a></td>
<td>
<audio id="også" src="https://static.ordnet.dk/mp3/11036/11036883_1.mp3" style="display: none;"></audio>
<span onclick="playSound('også');" style="cursor: pointer; color: blue;">[ˈʌs]</span>
</td>
<td> also </td>
<td> Stræderne ligger stille hen, og også husene virker tomme og ubeboede. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=omtrent"> omtrent </a>, <a href="https://ordnet.dk/ddo/ordbog?query=omkring"> omkring </a>, rundt om</td>
<td>
<audio id="omtrent" src="https://static.ordnet.dk/mp3/11037/11037260_1.mp3" style="display: none;"></audio>
<span onclick="playSound('omtrent');" style="cursor: pointer; color: blue;">[ʌmˈtʁanˀd]</span>, 
<audio id="omkring" src="https://static.ordnet.dk/mp3/11037/11037160_2.mp3" style="display: none;"></audio>
<span onclick="playSound('omkring');" style="cursor: pointer; color: blue;">[ʌmˈkʁεŋˀ]</span>
</td>
<td> about, around </td>
<td> Omtrent 50 procent af dem, som arbejder i kunstig belysning, klager over hovedpine og ondt i øjnene. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ovenikøbet"> ovenikøbet, oven i købet </a></td>
<td>
<audio id="ovenikøbet" src="" style="display: none;"></audio>
<span onclick="playSound('ovenikøbet');" style="cursor: pointer; color: blue;">[ˈɒwəniˌkøˀbəð]</span>
</td>
<td> even, on top of that </td>
<td> Et medlemskort koster bare 50 kr., og det giver ovenikøbet rabat på entréerne til de forskellige arrangementer. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?select=ret,5&amp;query=ret"> ret </a></td>
<td>
<audio id="ret" src="https://static.ordnet.dk/mp3/11043/11043047_1.mp3" style="display: none;"></audio>
<span onclick="playSound('ret');" style="cursor: pointer; color: blue;">[ˈʁad]</span>
</td>
<td> quite </td>
<td> 300.000 danskere tager på skiferie hvert år, det er ret mange. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=sagtens"> sagtens </a></td>
<td>
<audio id="sagtens" src="https://static.ordnet.dk/mp3/11044/11044430_1.mp3" style="display: none;"></audio>
<span onclick="playSound('sagtens');" style="cursor: pointer; color: blue;">[ˈsɑgdəns]</span>
</td>
<td> easily </td>
<td> Vist ryger jeg, men ikke mere end jeg sagtens kan holde mig fra røgen i arbejdstiden. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=selvfølgelig"> selvfølgelig </a></td>
<td>
<audio id="selvfølgelig" src="https://static.ordnet.dk/mp3/11045/11045380_1.mp3" style="display: none;"></audio>
<span onclick="playSound('selvfølgelig');" style="cursor: pointer; color: blue;">[sεlˈføljəli]</span>
</td>
<td> of course </td>
<td> Selvfølgelig så ordner jeg mit eget værelse, og hvis hun siger: "Gå lige ned med skraldespanden" .., så gør jeg det selvfølgelig. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=snart"> snart </a></td>
<td>
<audio id="snart" src="https://static.ordnet.dk/mp3/11048/11048226_1.mp3" style="display: none;"></audio>
<span onclick="playSound('snart');" style="cursor: pointer; color: blue;">[ˈsnɑˀd]</span>
</td>
<td> soon </td>
<td> Kastrup lufthavn kommer meget snart til at trænge til aflastning, fordi dens kapacitet er tæt ved at være fuldt udnyttet. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=stedse"> stedse </a></td>
<td>
<audio id="stedse" src="https://static.ordnet.dk/mp3/11050/11050034_1.mp3" style="display: none;"></audio>
<span onclick="playSound('stedse');" style="cursor: pointer; color: blue;">[ˈsdεðsə]</span>
</td>
<td> always </td>
<td> Københavns Kommune skal stedse arbejde for en lettere/hurtigere myndighedsbehandling. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=stort+set"> stort set </a></td>
<td></td>
<td> almost </td>
<td> Sikkerheden og virkningen af de forskellige typer p-piller er stort set ens. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=straks"> straks </a></td>
<td>
<audio id="straks" src="https://static.ordnet.dk/mp3/11050/11050658_1.mp3" style="display: none;"></audio>
<span onclick="playSound('straks');" style="cursor: pointer; color: blue;">[ˈsdʁɑgs]</span>
</td>
<td> immediately </td>
<td> Klokken 11 ringede det kraftigt på døren, og jeg gik straks ud for at lukke op. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=sædvanligvis"> sædvanligvis </a></td>
<td>
<audio id="sædvanligvis" src="https://static.ordnet.dk/mp3/11052/11052193_1.mp3" style="display: none;"></audio>
<span onclick="playSound('sædvanligvis');" style="cursor: pointer; color: blue;">[səðˈvæˀnliˈviˀs]</span>
</td>
<td> usually </td>
<td> Overgangsalderen begynder sædvanligvis i 50 års alderen. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=særdeles"> særdeles </a></td>
<td>
<audio id="særdeles" src="https://static.ordnet.dk/mp3/11052/11052233_1.mp3" style="display: none;"></audio>
<span onclick="playSound('særdeles');" style="cursor: pointer; color: blue;">[sæɐ̯ˈdeˀləs]</span>
</td>
<td> extremely </td>
<td> Lugtesansen er særdeles veludviklet hos små børn. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=sågar"> sågar </a></td>
<td>
<audio id="sågar" src="https://static.ordnet.dk/mp3/11052/11052537_1.mp3" style="display: none;"></audio>
<span onclick="playSound('sågar');" style="cursor: pointer; color: blue;">[sʌˈgɑˀ]</span>
</td>
<td> even </td>
<td> I dag består moden i en blanding af mange perioder. Der er sågar tendenser helt tilbage til 30'ernes mode. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=temmelig"> temmelig </a></td>
<td>
<audio id="temmelig" src="https://static.ordnet.dk/mp3/12000/12000677_1.mp3" style="display: none;"></audio>
<span onclick="playSound('temmelig');" style="cursor: pointer; color: blue;">[ˈtεməli]</span>
</td>
<td> quite </td>
<td> Det har regnet temmelig meget de sidste ti dage. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tilbage"> tilbage </a></td>
<td>
<audio id="tilbage" src="https://static.ordnet.dk/mp3/12001/12001015_1.mp3" style="display: none;"></audio>
<span onclick="playSound('tilbage');" style="cursor: pointer; color: blue;">[teˈbæːjə]</span>
</td>
<td> back, left </td>
<td> Med blot to minutter tilbage førte Hørsholm 69-60. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tilfældigt"> tilfældigt </a></td>
<td>
<audio id="tilfældigt" src="https://static.ordnet.dk/mp3/12001/12001114_1.mp3" style="display: none;"></audio>
<span onclick="playSound('tilfældigt');" style="cursor: pointer; color: blue;">[teˈfεlˀdi]</span>
</td>
<td> by accident </td>
<td> Nogle havde vi truffet aftale med i forvejen, og andre mødte vi tilfældigt. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tilovers"> tilovers </a></td>
<td>
<audio id="tilovers" src="" style="display: none;"></audio>
<span onclick="playSound('tilovers');" style="cursor: pointer; color: blue;">[teˈɒwˀʌs]</span>
</td>
<td> left over </td>
<td> Jeg havde 5 minutter tilovers så jeg satte mig ind i vores opholdsrum og slappede lidt af. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tit"> tit </a>, <a href="https://ordnet.dk/ddo/ordbog?query=ofte"> ofte </a></td>
<td>
<audio id="tit" src="https://static.ordnet.dk/mp3/12001/12001476_1.mp3" style="display: none;"></audio>
<span onclick="playSound('tit');" style="cursor: pointer; color: blue;">[ˈtid]</span>, 
<audio id="ofte" src="https://static.ordnet.dk/mp3/11036/11036878_1.mp3" style="display: none;"></audio>
<span onclick="playSound('ofte');" style="cursor: pointer; color: blue;">[ˈʌfdə]</span>
</td>
<td> often </td>
<td> Det var ærgerligt, at de så tit skændtes. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tværs"> tværs </a></td>
<td>
<audio id="tværs" src="https://static.ordnet.dk/mp3/12003/12003082_1.mp3" style="display: none;"></audio>
<span onclick="playSound('tværs');" style="cursor: pointer; color: blue;">[ˈtvæɐ̯s]</span>
</td>
<td> across </td>
<td> Pernille fra hans klasse kom hurtigt gående tværs over den smalle gade, mens hun vinkede til ham. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=udend%C3%B8rs"> udendørs </a></td>
<td>
<audio id="udendørs" src="https://static.ordnet.dk/mp3/12003/12003752_1.mp3" style="display: none;"></audio>
<span onclick="playSound('udendørs');" style="cursor: pointer; color: blue;">[ˈuðənˌdɶɐ̯ˀs]</span>
</td>
<td> outdoors </td>
<td> Jeg interesserer mig for natur og har det bedst, når jeg er udendørs. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=udenom"> udenom </a></td>
<td>
<audio id="udenom" src="https://static.ordnet.dk/mp3/12003/12003761_1.mp3" style="display: none;"></audio>
<span onclick="playSound('udenom');" style="cursor: pointer; color: blue;">[ˈuðənˈʌmˀ]</span>
</td>
<td> around </td>
<td> Vi har kurs mod en spids klippe, som vi har overset .. Det er for sent, vi kan ikke nå at styre udenom. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=udover"> udover </a></td>
<td>
<audio id="udover" src="https://static.ordnet.dk/mp3/12004/12004011_1.mp3" style="display: none;"></audio>
<span onclick="playSound('udover');" style="cursor: pointer; color: blue;">[ˈuðˀˌɒwˀʌ]</span>
</td>
<td> besides </td>
<td> Jeg får også SU, så jeg skulle helst ikke tjene alt for meget udover. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=vistnok"> vistnok </a></td>
<td>
<audio id="vistnok" src="https://static.ordnet.dk/mp3/12007/12007112_1.mp3" style="display: none;"></audio>
<span onclick="playSound('vistnok');" style="cursor: pointer; color: blue;">[vesˈnʌg]</span>
</td>
<td> probably </td>
<td> "Der er vistnok telefon til Dem." "Vistnok," sagde han. "Er der eller er der ikke telefon til mig?" </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=v%C3%A6k"> væk (fra) </a></td>
<td>
<audio id="væk" src="https://static.ordnet.dk/mp3/12007/12007450_1.mp3" style="display: none;"></audio>
<span onclick="playSound('væk');" style="cursor: pointer; color: blue;">[ˈvεg]</span>
</td>
<td> away (from) </td>
<td> Magnetfeltets styrke bliver mindre, jo længere man kommer væk fra anlægget. </td>
</tr>
</table>
<h1 style="text-align: center;"> Frie adverbier: A-V-S, S-V-A </h1>
<table align="center" cellspacing="5" style="text-align: left" width="100%">
<tr>
<th> Adverb </th>
<th> Udtale </th>
<th> Engelsk </th>
<th> Eksempler </th>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=afslutningsvis"> afslutningsvis </a></td>
<td>
<audio id="afslutningsvis" src="https://static.ordnet.dk/mp3/49002/49002130_1.mp3" style="display: none;"></audio>
<span onclick="playSound('afslutningsvis');" style="cursor: pointer; color: blue;">[ˈɑwˌsludneŋsˌviˀs]</span>
</td>
<td> in conclusion </td>
<td> Bogudvalget skal afslutningsvist og senest 1. oktober 2008 aflevere en rapport på ministerens bord. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=alligevel"> alligevel </a></td>
<td>
<audio id="alligevel" src="https://static.ordnet.dk/mp3/11001/11001353_1.mp3" style="display: none;"></audio>
<span onclick="playSound('alligevel');" style="cursor: pointer; color: blue;">[aˈliːəˈvεl]</span>
</td>
<td> anyway </td>
<td> Det er, som om vi ikke kommer nogen vegne. Alligevel viser speedometeret 100. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=altså"> altså </a></td>
<td>
<audio id="altså" src="https://static.ordnet.dk/mp3/11001/11001460_1.mp3" style="display: none;"></audio>
<span onclick="playSound('altså');" style="cursor: pointer; color: blue;">[ˈalˀsʌ]</span>
</td>
<td> thus, so </td>
<td> En anelse varme var der stadig i ham. Han var altså ikke død. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=atter"> atter </a></td>
<td>
<audio id="atter" src="https://static.ordnet.dk/mp3/11002/11002825_1.mp3" style="display: none;"></audio>
<span onclick="playSound('atter');" style="cursor: pointer; color: blue;">[ˈadʌ]</span>
</td>
<td> again </td>
<td> Atter i år vrimlede det med breve til "Julemanden, Rensdyrvej 24, Grønland". </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=bagefter"> bagefter </a></td>
<td>
<audio id="bagefter" src="https://static.ordnet.dk/mp3/11003/11003097_1.mp3" style="display: none;"></audio>
<span onclick="playSound('bagefter');" style="cursor: pointer; color: blue;">[ˈbæˀjˌεfdʌ]</span>
</td>
<td> afterwards </td>
<td> Jeg ser altid først på øjnene, og så bagefter på hænderne. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=bagved"> bagved </a></td>
<td>
<audio id="bagved" src="https://static.ordnet.dk/mp3/11003/11003204_1.mp3" style="display: none;"></audio>
<span onclick="playSound('bagved');" style="cursor: pointer; color: blue;">[ˈbæˀjˈve]</span>
</td>
<td> behind </td>
<td> Der var en have med frugttræer, og bagved havde vi en legeplads. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=dengang"> dengang </a></td>
<td>
<audio id="dengang" src="https://static.ordnet.dk/mp3/11008/11008727_1.mp3" style="display: none;"></audio>
<span onclick="playSound('dengang');" style="cursor: pointer; color: blue;">[ˈdεnˀˌgɑŋˀ]</span>
</td>
<td> then </td>
<td> I 1871 kom jernbanen til Brønderslev, som dengang var en stor landsby med omkring 1.100 indbyggere. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=derefter"> derefter </a></td>
<td>
<audio id="derefter" src="https://static.ordnet.dk/mp3/11008/11008784_1.mp3" style="display: none;"></audio>
<span onclick="playSound('derefter');" style="cursor: pointer; color: blue;">[ˈdεˀɐ̯ˌεfdʌ]</span>
</td>
<td> thereafter </td>
<td> Hun blev først ligbleg, derefter meget rød i ansigtet. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=derfor"> derfor </a></td>
<td>
<audio id="derfor" src="https://static.ordnet.dk/mp3/11008/11008788_1.mp3" style="display: none;"></audio>
<span onclick="playSound('derfor');" style="cursor: pointer; color: blue;">[ˈdεˀɐ̯fʌ]</span>
</td>
<td> therefore </td>
<td> Jeg vidste ikke, hvor Lilly boede og kunne derfor ikke kontakte hende. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=derigennem"> derigennem </a></td>
<td>
<audio id="derigennem" src="https://static.ordnet.dk/mp3/11008/11008798_1.mp3" style="display: none;"></audio>
<span onclick="playSound('derigennem');" style="cursor: pointer; color: blue;">[ˈdεˀɐ̯iˈgεnˀəm]</span>
</td>
<td> thereby </td>
<td> Adriana er en god praktiserende katolik, der skrifter og derigennem får lettet sin samvittighed. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=derimod"> derimod </a></td>
<td>
<audio id="derimod" src="https://static.ordnet.dk/mp3/11008/11008800_1.mp3" style="display: none;"></audio>
<span onclick="playSound('derimod');" style="cursor: pointer; color: blue;">[ˈdεˀɐ̯iˈmoˀð]</span>
</td>
<td> however </td>
<td> Jeg kan godt lide at lave mad. Derimod er jeg ikke så begejstret for rengøring. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=dernæst"> dernæst </a></td>
<td>
<audio id="dernæst" src="https://static.ordnet.dk/mp3/11008/11008812_1.mp3" style="display: none;"></audio>
<span onclick="playSound('dernæst');" style="cursor: pointer; color: blue;">[ˈdεˀɐ̯ˌnεsd]</span>
</td>
<td> and then </td>
<td> Først blev kattene affodret, dernæst var det hestenes tur. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=derpå"> derpå </a></td>
<td>
<audio id="derpå" src="https://static.ordnet.dk/mp3/11008/11008821_1.mp3" style="display: none;"></audio>
<span onclick="playSound('derpå');" style="cursor: pointer; color: blue;">[ˈdεˀɐ̯ˌpɔˀ]</span>
</td>
<td> thereupon </td>
<td> Man bliver mere tilfreds ved at kunne spise op og derpå evt. bede om mere. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=derudfra"> derudfra </a></td>
<td>
<audio id="derudfra" src="https://static.ordnet.dk/mp3/11008/11008834_1.mp3" style="display: none;"></audio>
<span onclick="playSound('derudfra');" style="cursor: pointer; color: blue;">[ˈdεˀɐ̯ˈuðˀˈfʁɑˀ]</span>
</td>
<td> thence </td>
<td> Det er helt afgørende for demokratiet, at der er en åben debat, hvor mennesker frit kan danne sin egen mening og derudfra vælge side. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=derudover"> derudover </a></td>
<td>
<audio id="derudover" src="https://static.ordnet.dk/mp3/11008/11008835_1.mp3" style="display: none;"></audio>
<span onclick="playSound('derudover');" style="cursor: pointer; color: blue;">[ˈdεˀɐ̯uðˌɒwˀʌ]</span>
</td>
<td> in addition </td>
<td> Der er træning to gange om dagen i ugens første fem dage, og derudover spilles der selvfølgelig kamp i weekenden. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=desuden"> desuden </a></td>
<td>
<audio id="desuden" src="https://static.ordnet.dk/mp3/11008/11008908_1.mp3" style="display: none;"></audio>
<span onclick="playSound('desuden');" style="cursor: pointer; color: blue;">[desˈuːðən]</span>
</td>
<td> moreover </td>
<td> Tykke asparges er de fineste og desuden de letteste at skrælle. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=desværre"> desværre </a></td>
<td>
<audio id="desværre" src="https://static.ordnet.dk/mp3/11008/11008909_1.mp3" style="display: none;"></audio>
<span onclick="playSound('desværre');" style="cursor: pointer; color: blue;">[deˈsvæɐ̯ʌ]</span>
</td>
<td> unfortunately </td>
<td> Selvom der iværksættes hurtig behandling, er meningitis desværre fortsat en sygdom, som kræver flere dødsfald hvert år. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=efterf%C3%B8lgende"> efterfølgende </a></td>
<td>
<audio id="efterfølgende" src="https://static.ordnet.dk/mp3/11010/11010546_1.mp3" style="display: none;"></audio>
<span onclick="playSound('efterfølgende');" style="cursor: pointer; color: blue;">[-ˌfølˀjənə]</span>
</td>
<td> subsequently </td>
<td> Begge blev ved grundlovsforhøret lørdag varetægtsfængslet i 11 dage og kærede efterfølgende kendelsen til landsretten. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=efterh%C3%A5nden"> efterhånden </a></td>
<td>
<audio id="efterhånden" src="https://static.ordnet.dk/mp3/11010/11010556_1.mp3" style="display: none;"></audio>
<span onclick="playSound('efterhånden');" style="cursor: pointer; color: blue;">[εfdʌˈhʌnˀən]</span>
</td>
<td> gradually </td>
<td> Min bror har efterhånden fået lige så mange børn, som vi selv var derhjemme. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=eksempelvis"> eksempelvis </a></td>
<td>
<audio id="eksempelvis" src="https://static.ordnet.dk/mp3/11010/11010822_1.mp3" style="display: none;"></audio>
<span onclick="playSound('eksempelvis');" style="cursor: pointer; color: blue;">[εgˈsεmˀbəlˌviˀs]</span>
</td>
<td> for example </td>
<td> Lejlighederne holder en usædvanlig høj standard; eksempelvis er alle gulve belagt med brede brædder. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ellers"> ellers </a></td>
<td>
<audio id="ellers" src="https://static.ordnet.dk/mp3/11011/11011123_1.mp3" style="display: none;"></audio>
<span onclick="playSound('ellers');" style="cursor: pointer; color: blue;">[ˈεlˀʌs]</span>
</td>
<td> otherwise </td>
<td> Vi var nødt til at skære et sted, ellers var hele programmet blevet for langt. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=endelig"> endelig </a></td>
<td>
<audio id="endelig" src="https://static.ordnet.dk/mp3/11011/11011294_1.mp3" style="display: none;"></audio>
<span onclick="playSound('endelig');" style="cursor: pointer; color: blue;">[ˈεnəli]</span>
</td>
<td> finally </td>
<td> Den eneste lyd der hørtes var skramlen af stole, indtil alle endelig havde fået sig sat. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=endvidere"> endvidere </a></td>
<td>
<audio id="endvidere" src="https://static.ordnet.dk/mp3/11011/11011330_1.mp3" style="display: none;"></audio>
<span onclick="playSound('endvidere');" style="cursor: pointer; color: blue;">[εnˈviðʌʌ]</span>
</td>
<td> furthermore </td>
<td> Bernt Hjejle overtog ganske naturligt formandsposten og indtrådte endvidere i et såkaldt forretningsudvalg. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=faktisk"> faktisk </a></td>
<td>
<audio id="faktisk" src="https://static.ordnet.dk/mp3/11012/11012153_1.mp3" style="display: none;"></audio>
<span onclick="playSound('faktisk');" style="cursor: pointer; color: blue;">[ˈfɑgdisg]</span>
</td>
<td> actually </td>
<td> Der er opsat særskilte målere, så beboernes faktiske forbrug kan aflæses. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=forfra"> forfra </a>,  fra siden, <a href="https://ordnet.dk/ddo/ordbog?query=bagfra"> bagfra </a></td>
<td>
<audio id="forfra" src="https://static.ordnet.dk/mp3/11014/11014496_1.mp3" style="display: none;"></audio>
<span onclick="playSound('forfra');" style="cursor: pointer; color: blue;">[ˈfɒːˌfʁɑˀ]</span>, 
<audio id="bagfra" src="https://static.ordnet.dk/mp3/11003/11003114_1.mp3" style="display: none;"></audio>
<span onclick="playSound('bagfra');" style="cursor: pointer; color: blue;">[ˈbæˀjˌfʁɑˀ]</span>
</td>
<td> from the front, from the side, from behind </td>
<td> Han kunne ikke have hørt noget, havde han det var han gået faren i møde, taget angrebet forfra. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=forresten"> forresten, for resten </a></td>
<td>
<audio id="forresten" src="https://static.ordnet.dk/mp3/11043/11043009_1.mp3" style="display: none;"></audio>
<span onclick="playSound('forresten');" style="cursor: pointer; color: blue;">[ˈʁasd]</span>
</td>
<td> by the way </td>
<td> Jeg skal for resten hilse dig fra Kathrine. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=følgelig"> følgelig </a></td>
<td>
<audio id="følgelig" src="https://static.ordnet.dk/mp3/11016/11016851_1.mp3" style="display: none;"></audio>
<span onclick="playSound('følgelig');" style="cursor: pointer; color: blue;">[ˈføljəli]</span>
</td>
<td> consequently </td>
<td> De næste 40-50 år vil verdens befolkning blive næsten fordoblet ... Følgelig skal der fremstilles mindst dobbelt så mange fødevarer. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=før"> før </a></td>
<td>
<audio id="før" src="https://static.ordnet.dk/mp3/11016/11016876_1.mp3" style="display: none;"></audio>
<span onclick="playSound('før');" style="cursor: pointer; color: blue;">[ˈføˀɐ̯]</span>
</td>
<td> before </td>
<td> Før havde jeg været åben og udadvendt, nu havde jeg svært ved at se den nye situation i øjnene. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=f%C3%B8rst"> først </a></td>
<td>
<audio id="først" src="https://static.ordnet.dk/mp3/11016/11016914_1.mp3" style="display: none;"></audio>
<span onclick="playSound('først');" style="cursor: pointer; color: blue;">[ˈfɶɐ̯sd]</span>
</td>
<td> not until </td>
<td> Katastrofens omfang kan .. først afgøres om tre-fire ugers tid. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=gudskelov"> gudskelov, gud ske lov </a></td>
<td>
<audio id="gudskelov" src="https://static.ordnet.dk/mp3/11019/11019099_1.mp3" style="display: none;"></audio>
<span onclick="playSound('gudskelov');" style="cursor: pointer; color: blue;">[ˈgusgəˈlɒw]</span>
</td>
<td> thank god </td>
<td> Gudskelov det ikke var koen! Sagde kællingen, da hendes mand døde. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=heldigvis"> heldigvis </a></td>
<td>
<audio id="heldigvis" src="https://static.ordnet.dk/mp3/11020/11020264_1.mp3" style="display: none;"></audio>
<span onclick="playSound('heldigvis');" style="cursor: pointer; color: blue;">[ˈhεldiˈviˀs]</span>
</td>
<td> fortunately </td>
<td> Gulvet er iskoldt, men heldigvis har han beholdt strømperne på. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=herefter"> herefter </a></td>
<td>
<audio id="herefter" src="https://static.ordnet.dk/mp3/11020/11020499_1.mp3" style="display: none;"></audio>
<span onclick="playSound('herefter');" style="cursor: pointer; color: blue;">[ˈhεˀɐ̯ˌεfdʌ]</span>
</td>
<td> hereafter </td>
<td> Læg husblasen i koldt vand. Smelt den herefter over vandbad. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=hermed"> hermed </a></td>
<td>
<audio id="hermed" src="https://static.ordnet.dk/mp3/11020/11020529_1.mp3" style="display: none;"></audio>
<span onclick="playSound('hermed');" style="cursor: pointer; color: blue;">[ˈhεˀɐ̯ˈmεð]</span>
</td>
<td> hereby, consequently </td>
<td> Såfremt vedtægterne giver de øvrige andelshavere forkøbsret til andelen, er køberen ved modtagelsen af vedtægterne gjort bekendt hermed. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=herunder"> herunder </a></td>
<td>
<audio id="herunder" src="https://static.ordnet.dk/mp3/11020/11020613_1.mp3" style="display: none;"></audio>
<span onclick="playSound('herunder');" style="cursor: pointer; color: blue;">[ˈhεˀɐ̯ˈɔnˀʌ]</span>
</td>
<td> including </td>
<td> En del plastictyper er farlige, herunder skumplast. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=hidtil"> hidtil </a></td>
<td>
<audio id="hidtil" src="https://static.ordnet.dk/mp3/11020/11020691_1.mp3" style="display: none;"></audio>
<span onclick="playSound('hidtil');" style="cursor: pointer; color: blue;">[ˈhiðˌtel]</span>
</td>
<td> so far </td>
<td> Danmark fik i går sin hidtil yngste universitetsrektor. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=imidlertid"> imidlertid </a></td>
<td>
<audio id="imidlertid" src="https://static.ordnet.dk/mp3/11023/11023007_1.mp3" style="display: none;"></audio>
<span onclick="playSound('imidlertid');" style="cursor: pointer; color: blue;">[iˈmiðˀlʌˌtiðˀ]</span>
</td>
<td> however </td>
<td> 2. udgave, står der i hæftet. Første udgave blev imidlertid trykt i så forsvindende få eksemplarer at den så godt som ikke er udkommet. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=inden"> inden </a></td>
<td>
<audio id="inden" src="https://static.ordnet.dk/mp3/11023/11023193_1.mp3" style="display: none;"></audio>
<span onclick="playSound('inden');" style="cursor: pointer; color: blue;">[ˈenən]</span>
</td>
<td> before </td>
<td> Margrethe døde i 1953, men inden nåede hun at føde 13 børn. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ligeledes"> ligeledes </a></td>
<td>
<audio id="ligeledes" src="https://static.ordnet.dk/mp3/11030/11030398_1.mp3" style="display: none;"></audio>
<span onclick="playSound('ligeledes');" style="cursor: pointer; color: blue;">[ˈliːəˌleːðəs]</span>
</td>
<td> likewise, similarly </td>
<td> Skræl æblerne og hak dem groft. Hak ligeledes løgene groft. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=måske"> måske </a></td>
<td>
<audio id="måske" src="https://static.ordnet.dk/mp3/11035/11035201_1.mp3" style="display: none;"></audio>
<span onclick="playSound('måske');" style="cursor: pointer; color: blue;">[mɔˈsgeˀ]</span>
</td>
<td> maybe </td>
<td> Måske kommer han slet ikke hjem. Det kan være, han bliver hos Pia i nat. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=navnlig"> navnlig </a></td>
<td>
<audio id="navnlig" src="https://static.ordnet.dk/mp3/11035/11035591_1.mp3" style="display: none;"></audio>
<span onclick="playSound('navnlig');" style="cursor: pointer; color: blue;">[ˈnɑwnli]</span>
</td>
<td> in particular </td>
<td> Klokkefrøen forekommer navnlig i kystnære sumpe og vandhuller. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=nedenfor"> nedenfor </a></td>
<td>
<audio id="nedenfor" src="https://static.ordnet.dk/mp3/11035/11035643_1.mp3" style="display: none;"></audio>
<span onclick="playSound('nedenfor');" style="cursor: pointer; color: blue;">[ˈneːðənˈfʌ]</span>
</td>
<td> below </td>
<td> Du skal blot svare på spørgsmålene nedenfor og indsende kuponen. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=nogle+gange"> nogle gange </a></td>
<td></td>
<td> sometimes </td>
<td> Nogle gange ville jeg ønske min mor lignede din lidt. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=nu"> nu </a></td>
<td>
<audio id="nu" src="https://static.ordnet.dk/mp3/11036/11036235_1.mp3" style="display: none;"></audio>
<span onclick="playSound('nu');" style="cursor: pointer; color: blue;">[ˈnu]</span>
</td>
<td> now </td>
<td> Jeg har været væk en tid, men nu er jeg tilbage. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ombord"> ombord, om bord </a></td>
<td>
<audio id="ombord" src="" style="display: none;"></audio>
<span onclick="playSound('ombord');" style="cursor: pointer; color: blue;">[ʌmˈboˀɐ̯]</span>
</td>
<td> on board </td>
<td> En skitse over færgens indretning med anvisning af eventuelle flugtveje burde udleveres til hver passager inden man går eller kører om bord. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=omgående"> omgående </a></td>
<td>
<audio id="omgående" src="https://static.ordnet.dk/mp3/11037/11037132_1.mp3" style="display: none;"></audio>
<span onclick="playSound('omgående');" style="cursor: pointer; color: blue;">[-ˌgɔˀənə]</span>
</td>
<td> immediately </td>
<td> Hvis barnet bliver bevidstløs, skal lægen omgående tilkaldes, eller barnet bringes på skadestuen. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=omsider"> omsider </a></td>
<td>
<audio id="omsider" src="https://static.ordnet.dk/mp3/11037/11037205_1.mp3" style="display: none;"></audio>
<span onclick="playSound('omsider');" style="cursor: pointer; color: blue;">[ʌmˈsiðʌ]</span>
</td>
<td> finally </td>
<td> Havel ringede efter en taxi. Det tager lang tid, men omsider dukker den op dernede i den blæsende gade. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=overalt"> overalt </a></td>
<td>
<audio id="overalt" src="https://static.ordnet.dk/mp3/11038/11038173_1.mp3" style="display: none;"></audio>
<span onclick="playSound('overalt');" style="cursor: pointer; color: blue;">[ɒwʌˈalˀd]</span>
</td>
<td> everywhere </td>
<td> Overalt, hvor vikingerne kom frem, blev der holdt øje med dem inde fra kysten. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=sandsynligvis"> sandsynligvis </a></td>
<td>
<audio id="sandsynligvis" src="https://static.ordnet.dk/mp3/11044/11044880_1.mp3" style="display: none;"></audio>
<span onclick="playSound('sandsynligvis');" style="cursor: pointer; color: blue;">[sanˈsyˀnliˈviˀs]</span>
</td>
<td> probably </td>
<td> Sandsynligvis er volden Kovirke syd for Hedeby opført i 808 af kong Godfred. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=som+regel"> som regel, i reglen </a></td>
<td></td>
<td> usually </td>
<td> Gruppemøderne varede som regel en time. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=sommetider"> sommetider, somme tider </a></td>
<td>
<audio id="sommetider" src="https://static.ordnet.dk/mp3/11048/11048756_1.mp3" style="display: none;"></audio>
<span onclick="playSound('sommetider');" style="cursor: pointer; color: blue;">[ˈsʌməˈtiðʌ]</span>
</td>
<td> sometimes </td>
<td> Sommetider greb han sig selv i at tænke: Bare det var mig der var Agnete og kunne gå hjemme med børnene. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=således"> således </a></td>
<td>
<audio id="således" src="https://static.ordnet.dk/mp3/11052/11052545_1.mp3" style="display: none;"></audio>
<span onclick="playSound('således');" style="cursor: pointer; color: blue;">[ˈsʌˌleðəs]</span>
</td>
<td> so, thus, in this way </td>
<td> Skattesystemet er lagt om, således at de store indkomster slipper billigere. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=takket+v%C3%A6re"> takket være </a></td>
<td></td>
<td> thanks to </td>
<td> Hun fik ord for at være løgnagtig takket være sit usikre flakkende blik. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tilf%C3%A6ldigvis"> tilfældigvis </a></td>
<td>
<audio id="tilfældigvis" src="https://static.ordnet.dk/mp3/12001/12001116_1.mp3" style="display: none;"></audio>
<span onclick="playSound('tilfældigvis');" style="cursor: pointer; color: blue;">[teˈfεlˀdiˈviˀs]</span>
</td>
<td> coincidentally </td>
<td> Jeg kom tilfældigvis til at stå ved siden af Anette. </td>
</tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tilmed"> tilmed </a></td>
<td>
<audio id="tilmed" src="https://static.ordnet.dk/mp3/12001/12001228_1.mp3" style="display: none;"></audio>
<span onclick="playSound('tilmed');" style="cursor: pointer; color: blue;">[ˈtelˌmεð]</span>
</td>
<td> even </td>
<td> Det er sjovt og afslappende at køre med tog, og så er det tilmed billigt i Storbritannien. </td>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tilsammen"> tilsammen (med) </a></td>
<td>
<audio id="tilsammen" src="" style="display: none;"></audio>
<span onclick="playSound('tilsammen');" style="cursor: pointer; color: blue;">[teˈsɑmˀən]</span>
</td>
<td> together (with) </td>
<td> Tilsammen udgjorde de et stærkt hold. Så længe de kunne enes. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=tværtimod"> tværtimod </a></td>
<td>
<audio id="tværtimod" src="https://static.ordnet.dk/mp3/12003/12003090_1.mp3" style="display: none;"></audio>
<span onclick="playSound('tværtimod');" style="cursor: pointer; color: blue;">[ˈtvæɐ̯diˈmoˀð]</span>
</td>
<td> on the contrary </td>
<td> Jeg var slet ikke deprimeret, tværtimod, man skal se positivt på alting. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=undervejs"> undervejs </a></td>
<td>
<audio id="undervejs" src="https://static.ordnet.dk/mp3/12004/12004903_1.mp3" style="display: none;"></audio>
<span onclick="playSound('undervejs');" style="cursor: pointer; color: blue;">[ɔnʌˈvɑjˀs]</span>
</td>
<td> along the way </td>
<td> Vi købte en gammel spand af en bil og tilbagelagde i løbet af de næste ni måneder ca. 28.000 km. Undervejs arbejdede vi forskellige steder. </td>
</tr>
<tr>
<td><a href="https://ordnet.dk/ddo/ordbog?query=ydermere"> ydermere </a></td>
<td>
<audio id="ydermere" src="https://static.ordnet.dk/mp3/12007/12007786_1.mp3" style="display: none;"></audio>
<span onclick="playSound('ydermere');" style="cursor: pointer; color: blue;">[ˈyðʌˈmeːʌ]</span>
</td>
<td> Leksikonet leveres .. i en både smuk og slidstærk indbinding, som ydermere er forsynet med et smukt beskyttende yderomslag. </td>
</tr>
</table>
<h1 style="text-align: center;"> Lang og kort form </h1>
<table align="center" cellspacing="5" style="text-align: left" width="100%">
<tr>
<th> Kort form </th>
<th> Lang form </th>
<th> Eksempler </th>
</tr>
<tr>
<td> frem </td>
<td> fremme </td>
<td> Flemming fiskede whiskyflasken frem og hældte mere op i sit eget og Sonnys glas. </td>
</tr>
<tr>
<td> (her-, der-)hen </td>
<td> (her-, der-)henne </td>
<td> Jeg lod hånden glide hen over det kølige marmor. </td>
</tr>
<tr>
<td> (her-, der-)hjem </td>
<td> (her-, der-)hjemme </td>
<td> Han vendte hjem fra USA for et halvt år siden. </td>
</tr>
<tr>
<td> (her-, der-)ind </td>
<td> (her-, der-)inde </td>
<td> Hun sætter sig ind i bilen. </td>
</tr>
<tr>
<td> (her-, der-)ned </td>
<td> (her-, der-)nede </td>
<td> Under store smerter halvt kravlede, halvt gled han ned ad skrænten. </td>
</tr>
<tr>
<td> om </td>
<td> omme </td>
<td> Hun havde drejet ansigtet om mod mig, og jeg så ind i hendes øjne. </td>
</tr>
<tr>
<td> (her-, der-)op </td>
<td> (her-, der-)oppe </td>
<td> Ingen kan stige op til Gud ved hjælp af gode og smukke handlinger. </td>
</tr>
<tr>
<td> over </td>
<td> ovre </td>
<td> Skulle hun sælge gården og flytte over til sønnerne i København?. </td>
</tr>
<tr>
<td> (her-, der-)ud </td>
<td> (her-, der-)ude </td>
<td> "Nej, Bjarne, du kan ikke gå ud i det vejr!" "Sneen fyger, og man kan ikke se en hånd for sig!. </td>
</tr>
</table>
<h1 style="text-align: center;"> Om tiden </h1>
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2; /* Light gray background for even rows */
    }
    tr:nth-child(odd) {
        background-color: #ffffff; /* White background for odd rows */
    }
    th, td {
        border: 1px solid #dddddd;
        padding: 8px;
        text-align: left;
    }
</style>
<table align="center" cellspacing="5" style="text-align: left" width="100%">
<tr>
<th> Adverb </th>
<th> Engelsk </th>
<th> Eksempler </th>
</tr>
<tr>
<td> det sidste års tid </td>
<td> the last year or so </td>
<td> I den ugentlige "karakterbog", som AIM udgiver for DRs og TV 2's programlægning, har TV 2 i det sidste års tid taget alle stikkene hjem. </td>
</tr>
<tr>
<td> engang </td>
<td> once upon a time </td>
<td> Der var engang en ung pige, der gik ud i verden for at søge sin lykke. </td>
</tr>
<tr>
<td> for nylig </td>
<td> recently </td>
<td> Jeg har for nylig tilbragt en måned i Nigeria, hvor jeg studerede landets musik. </td>
</tr>
<tr>
<td> for tiden, i øjeblikket </td>
<td> currently </td>
<td> Lene er i lære som advokatsekretær, og Mette arbejder for tiden som kassedame i et supermarked. </td>
</tr>
<tr>
<td> før i tiden </td>
<td> in the past </td>
<td> Før i tiden fik sømænd skørbug på lange rejser, fordi de ikke fik frugt og grønsager. </td>
</tr>
<tr>
<td> gennem årene </td>
<td> over the years </td>
<td> Kommissionen har endvidere gennem årene bistået en lang række ikke-statslige organisationer i det opinionsdannende arbejde. </td>
</tr>
<tr>
<td> i dagevis </td>
<td> for days </td>
<td> Jeg lå i sengen i dagevis og græd og græd og havde det virkelig dårligt </td>
</tr>
<tr>
<td> i sommerhalvåret </td>
<td> in the summer months </td>
<td> Pengene blev afdraget med 8 skilling ugentligt i sommerhalvåret og 4 skilling om vinteren. </td>
</tr>
<tr>
<td> indtil videre </td>
<td> so far </td>
<td> Min tur hernede er indtil videre gået helt fint. </td>
</tr>
<tr>
<td> på det tidspunkt </td>
<td> at that time </td>
<td> Hatte var på det tidspunkt en virkelig forbrugsvare, for ingen ordentlig dame gik barhovedet ud af sin gadedør. </td>
</tr>
<tr>
<td> somme tider </td>
<td> sometimes </td>
<td> Symptomerne er somme tider meget svage, og man behøver ikke at have dem alle, selv om man er smittet. </td>
</tr>
</table>