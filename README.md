# Käyttöönotto

---

## Sivujen asettaminen julkaisuvalmiiseen tilaan

### Tarvittavat työkalut

- **Node.js** [Lataa täältä](https://nodejs.org/)
- **npm** (sisältyy Node.js:ään)

Muista suorittaa npm install front-ja backend hakemistoissa.

## Yhteydenotto-Lomakkeen käyttöönotto

Lomake käyttää web3forms palvelua viestien käsittelyyn frontendistä, viestit ohjautuvat palvelun järjestelmäen kautta antamaasi email osoitteeseen.

1. Luo avainkoodi (access key) palveluun  [web3forms](https://web3forms.com/).
2. Navigoi hakemistoon frontend/src/pages ja avaa tiedosto Contact.jsx.
3. Rivillä 99 korvaa "/* ACCESS_KEY_HERE */" luomallasi avainkoodilla.
4. Rivillä 180 korvaa "info@example.com" yrityksen sähköpostiosoitteella.
5. Avaa terminaali (joko hakemistossa frontend tai backend) ja suorita:

    ```bash
   npm run build:ui
   ```
Backend jakaa express.staticia käyttäen frontendin staattisen sisällön. Voit julkaista backend hakemiston haluamassasi palvelussa tai halutessasi poistaa express.staticin ja käyttää haluamaasi vaihtoehtoista ratkaisua.

## Tietokanta

Backend on suunniteltu käyttämään MongoDB Atlas tietokantaa.

Tietokannassa tarvitset seuraavat dokumenttikokoelmat:

1. servicelinks
2. services
3. prices
4. qualifications

### Servicelinks

Servicelinks dokumentti näyttää seuraavalta:

    ```js
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
  

Kun linkkiä klikataan ohjelma hakee "path" (polku) kentän sisältämän osoitteen perusteella service-dokumentin jolla on identtinen "path"-kenttä.

"Icon" (ikoni) kenttä sisältää Unicode emojin ja se tulee näkyviin Home (Koti) ja Services (Palvelut) sivuilla.

"en" ja "fi" kentät sisältävät englannin ja suomenkieliset versiot "title" (otsikko) ja "summary" (lyhyt kuvaus) kentistä. Sekä otsikko että kuvaus löytyvät luonnollisesti myös Koti ja Palvelut sivuilta mutta otsikkoa käytetään myös footerista löytyvissä linkeissä ja Contact (Yhteystiedot) sivun lomakkeen valikossa.

### Services

### Prices

### Qualifications