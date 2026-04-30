# Käyttöönotto

---

## Sivujen asettaminen julkaisuvalmiiseen tilaan

### Tarvittavat työkalut

- **Node.js** [Lataa täältä](https://nodejs.org/)
- **npm** (sisältyy Node.js:ään)

Muista suorittaa npm install front- ja backend hakemistoissa.

## Yhteydenotto-Lomakkeen käyttöönotto

Lomake käyttää web3forms palvelua viestien käsittelyyn frontendistä, viestit ohjautuvat palvelun järjestelmäen kautta antamaasi email osoitteeseen.

1. Luo avainkoodi (access key) palveluun  [web3forms](https://web3forms.com/).
2. Navigoi hakemistoon frontend/src/pages ja avaa tiedosto Contact.jsx.
3. Rivillä 99 korvaa "/* ACCESS_KEY_HERE */" luomallasi avainkoodilla.
4. Rivillä 180 korvaa ```info@example.com``` yrityksen sähköpostiosoitteella.
5. Avaa terminaali (joko hakemistossa frontend tai backend) ja suorita:

    ```bash
   npm run build:ui
   ```
  Komento poistaa backendin nykyisen dist-hakemiston ja luo ja kopioi sen tilalle uuden. Vaihtoehtoisesti voit myös navigoida terminaalissa frontend-hakemistoon ja käyttää komentoa:

    ```bash
   npm run build
   ```

  ja manuaalisesti siirtää frontendin juureen luodun dist-hakemiston backendin juureen.

Backend jakaa express.staticia käyttäen frontendin staattisen sisällön backendin juuren dist-hakemistosta ja polut puristetaan compression middlewarella.

## Tietokanta

Backend on suunniteltu käyttämään MongoDB Atlas tietokantaa, backend hakee yhteyttä tietokantaan MONGODB_URI nimisen ympäristömuuttujan kautta.

Tietokannassa tarvitset seuraavat dokumenttikokoelmat:

1. servicelinks
2. services
3. prices
4. qualifications

### Servicelinks

Servicelinks dokumentti näyttää seuraavalta:

  ```json
   {
      "path": "neuropsychiatric-coaching",
      "icon": "🧠",
      "en": {
        "title": "Neuropsychiatric coaching",
        "summary": "Build mental resilience, develop focus, and cultivate a mindset that supports your goals."
      },
      "fi": {
        "title": "Neuropsykiatrinen valmennus",
        "summary": "Rakenna resilienssiä, itseluottamusta ja mielen selkeyttä tukevassa ja tavoitteellisessa prosessissa."
      }
    }
  ```

Kun linkkiä klikataan ohjelma hakee "path" (polku) kentän sisältämän osoitteen perusteella service-dokumentin jolla on identtinen "path"-kenttä.

"Icon" (ikoni) kenttä sisältää Unicode emojin ja se tulee näkyviin Home (Koti) ja Services (Palvelut) sivuilla.

"en" ja "fi" kentät sisältävät englannin ja suomenkieliset versiot "title" (otsikko) ja "summary" (lyhyt kuvaus) kentistä. Sekä otsikko että kuvaus löytyvät luonnollisesti myös Koti ja Palvelut sivuilta mutta otsikkoa käytetään myös footerista löytyvissä linkeissä ja Contact (Yhteystiedot) sivun lomakkeen valikossa.

### Services

Kun servicelink-dokumentin pohjalta luotua linkkiä klikataan frontend hakee parametrisoidun polun kautta servicelinkin "path"-kentän arvon perusteella service-dokumentin jolla on identtinen "path"-kenttä.

Esimerkki yllä olevaa servicelink-dokumenttia vastaavasta service-dokumentista:

  ```json
    { 
      "path": "neuropsychiatric-coaching",
      "en": {
        "title": "Neuropsychiatric coaching",
        "subtitle":"Build resilience, confidence, and mental clarity through a supportive and goal-oriented process.",
        "what": {
          "icon": "🧠",
          "title": "What is neuropsychiatric coaching?",
          "p1": "Neuropsychiatric coaching helps you strengthen the mindset and habits that support performance, wellbeing, and everyday life. It can help with confidence, motivation, focus, and emotional resilience.",
          "p2": "Sessions are practical, reflective, and tailored to you. Together, we identify what is getting in your way and what will move you forward.",
          "list": []
        },
        "how": {
          "icon": "⚡",
          "title": "What can it help with?",
          "p1": "",
          "p2": "",
          "list": [
            "Building confidence and self-belief",
            "Managing stress and pressure",
            "Improving focus and motivation",
            "Strengthening emotional resilience",
            "Preparing for change or challenges"
            ]
        },
        "who": {
          "icon": "🌟",
          "title": "Who is it for?",
          "p1": "Neuropsychiatric coaching is for anyone who wants support in developing their inner resources. Whether you are facing a demanding season, striving toward a goal, or simply wanting to feel stronger and clearer, this approach can help.",
          "p2": "It is suitable for individuals, students, professionals, and anyone seeking practical, supportive growth.",
          "list": []
        },
        "contactBannerTitle": "Ready to strengthen your mindset?",
        "contactBannerText": "Let us talk about what support would be most helpful for you.",
        "contactBannerButton": "Book a Session"
      },
      "fi": {
        "title": "Neuropsykiatrinen valmennus",
        "subtitle": "Vahvista henkistä resilienssiäsi, kehitä keskittymistäsi ja rakenna ajattelutapaa, joka tukee tavoitteitasi.",
        "what": {
          "icon": "🧠",
          "title": "Mitä nepsy-valmennus on?",
          "p1": "Nepsy-valmennus auttaa vahvistamaan ajattelutapaa ja tapoja, jotka tukevat suorituskykyä, hyvinvointia ja arkea. Se voi auttaa esimerkiksi itseluottamuksen, motivaation, keskittymisen ja tunne-elämän resilienssin kehittämisessä.",
          "p2": "Tapaamiset ovat käytännöllisiä, reflektoivia ja juuri sinulle räätälöityjä. Yhdessä tunnistamme, mikä estää etenemistäsi ja mikä vie sinua eteenpäin.",
          "list": []
        },
        "how": {
          "icon": "⚡",
          "title": "Missä se voi auttaa?",
          "p1": "",
          "p2": "",
          "list": [
            "Itseluottamuksen vahvistaminen",
            "Stressin ja paineen hallinta",
            "Keskittymisen ja motivaation kehittäminen",
            "Tunne-elämän resilienssin vahvistaminen",
            "Valmistautuminen muutoksiin tai haasteisiin"
          ]
        },
        "who": {
          "icon": "🌟",
          "title": "Kenelle se sopii?",
          "p1":"Nepsy-valmennus sopii kaikille, jotka haluavat kehittää sisäisiä voimavarojaan. Olitpa vaativassa elämäntilanteessa, etenemässä kohti tavoitetta tai haluamassa lisää selkeyttä ja vahvuutta, tästä voi olla hyötyä.",
          "p2": "Se sopii yksilöille, opiskelijoille, ammattilaisille ja kaikille, jotka kaipaavat käytännöllistä ja kannattelevaa kasvua.",
          "list": []
        },
        "contactBannerTitle": "Haluatko vahvistaa ajattelutapaasi?",
        "contactBannerText": "Keskustellaan siitä, millainen tuki olisi sinulle hyödyllisintä.",
        "contactBannerButton": "Varaa aika"
      }
    }
  ```

Dokumentti sisältää esittelyn palvelusta englanniksi ("en"-kenttä) ja suomeksi ("fi"-kenttä).

Kieltä lukuunottamatta "en"- ja "fi"-kenttien sisältö on sama. "title"-kenttä sisältää artikkelin otsikon ja "subtitle"-kenttä alaotsikon.

Seuraavaksi artikkelissa on kolme palvelun esittelyyn tarkoitettua kenttää "what" (mitä), "how" (miten) ja "who" (kuka). "what" kentän sisällä voit esitellä mitä palvelu on, "how" kentässä miten palvelu käytännössä toteutetaan ja "who" kentässä kenelle palvelu sopii.

Kaikki kolme esittely-kenttää ovat rakenteeltaan samanlaisia, niissä on "icon" Unicode-standardin emojille, "title" otsikolle, "p1" ja "p2" tekstiä sisältäville paragrafeille ja "list" asialistalle. Paragrafeille ja listalle tarkoitetuista voi halutessaan käyttää vain yhtä tai kahta, kaikkia ei siis tarvitse väkisin mennä täyttämään.

Lopuksi dokumentissa on vielä kentät sivun alaosassa näkyvälle kontakti-sivulle vievälle bannerille jolle voit asettaa haluamasi otsikon, tekstin ja linkki-napin tekstin. 

### Prices

Prices dokumentti näyttää seuraavalta:

  ```json
    {
      "price": "50",
      "time":"45",
      "outline": "outline",
      "en": {
        "title": "Online Session",
        "subtitle": "Coaching or therapy from the comfort of your own space.",
        "features": [
          "Video call via a secure platform",
          "Flexible scheduling",
          "Available for all service types",
          "Suitable for follow-up sessions"
        ],
        "button": "Book Online Session"
      },
      "fi": {
        "title": "Etätapaaminen",
        "subtitle": "Valmennusta tai terapiaa omasta rauhallisesta ympäristöstäsi.",
        "features": [
          "Videopuhelu turvallisen alustan kautta",
          "Joustava ajanvaraus",
          "Saatavilla kaikkiin palveluihin",
          "Sopii myös jatkotapaamisiin"
        ],
        "button": "Varaa etätapaaminen"
      }
    }
  ```

Dokumentissa on ensiksi "price" (hinta euroina) ja "time" (session kesto minuutteina). Jos "price" asetetaan arvoon "0" se korvataan frontendissä automaattisesti sanalla "Free" tai "Maksuton" kielestä riippuen, jos "price" jää jostain syystä tyhjäksi se korvataan sanalla "Error".

Jos "outline"-kentän arvoksi asetetetaan "primary" CSS profiili korostaa palvelu-kortin ulkoreunan suositelluksi.

Seuraavaksi tulevat "en" ja "fi" kentät jotka sisältävät "title" ja "subtitle" kentät otsikolle ja alaotsikolle, "features" listan hintasuunnitelman ominaisuuksista ja "button" tekstin valintanapille.

### Qualifications

Qualification-dokumentit näytetään about/tietoa sivulla ja niissä voit lyhyesti esitellä koulutusta ja osaamista.

Esimerkki dokumentista:

  ```json
    {
      "icon": "🎓",
      "en": {
        "title": "Two Master's Degrees",
        "text": "Advanced academic training providing a strong theoretical and practical foundation."
      },
      "fi": {
        "title": "Kaksi maisteritutkintoa",
        "text": "Laaja akateeminen koulutus, joka luo vahvan teoreettisen ja käytännöllisen perustan."
      }
    }
  ```

Sisältönä on jälleen paikka Unicode-standardin emojille jota käytetään pätevyys-kortin ikonina ja kunkin kielivalinnan sisällä asetetaan otsikko ja teksti.

MongoDB-content-examples kansiosta löytyy laajempi kokoelma esimerkkejä tietokannan sisällöstä.

### Julkaisu

Ennen julkaisua kannattaa tarkistaa että sivut toimivat ja näyttävät sisällön oikein.

Suorita backend-hakemistossa komento:

```bash
npm run dev
```
  
Sivujen kehitysversio avautuu osoitteeseen http://localhost:3000/.

Jos kaikki on kunnossa voit julkaista backend-hakemiston sisällön haluamassasi palvelussa tai halutessasi poistaa express.staticin ja käyttää haluamaasi vaihtoehtoista ratkaisua.