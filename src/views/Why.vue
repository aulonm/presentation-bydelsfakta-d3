<template>
  <div class="slides">
    <section data-background-color="#2A2859" data-background-transition="none">
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/4.png')" height="100%" width="100%" />
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/4-1.png')" height="100%" width="100%" />
        <aside class="notes">
          <p>
            Det har vært tid og ressurskrevende å oppdatere faktaarkene for hvert år. Det har som regel tatt minimum to
            år å få nyeste versjonene av faktaarkene fordi statistikken kommer ikke en gang i året, de kommer
            fortløpende gjennom året.
          </p>
        </aside>
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/4-2.png')" height="100%" width="100%" />
        <aside class="notes">
          <p>
            Før så måtte all data fra SSB og andre kilder komme fram, og så kunne POS opprette et faktaark. Hvis de
            skulle oppdatere nye data så måtte de vente til alt var på plass, hente dataen og så manuelt behandle dataen
            og så lage nytt faktaark. Så som regel så sitter kommuneansatte eller politikere med to år gamle fakta når
            de helst vil ha det nyeste asap.
          </p>
        </aside>
      </section>
    </section>
    <section data-background-color="#2A2859" data-background-transition="none">
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5.png')" height="100%" width="100%" />
        <aside class="notes">
          <p>
            Flyten vi hadde tenkt å ha var da at Data er de numeriske verdiene som samles og lagres direkte fra
            datakildene.
          </p>
        </aside>
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5-1.png')" height="100%" width="100%" />
        <aside class="notes">
          <p>Informasjonen er prosessert, rengjort, transformert, navngitt og kvalitetsikkret dataen</p>
        </aside>
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5-2.png')" height="100%" width="100%" />
        <aside class="notes">
          <p>
            Kunnskap - målet er at brukeren skal huske og lære noe av innformasjonen
          </p>
        </aside>
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5-3.png')" height="100%" width="100%" />
        <aside class="notes">
          <p>
            slik at hen kan ta informerte avgjørelser basert på ny kunnskap
          </p>
        </aside>
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5-4.png')" height="100%" width="100%" />
        <aside class="notes">
          <p>
            Dataplattformen skulle jobbe med analysen, altså prosesseringen, transformeringen og kvalitetsikringen av
            dataen.
          </p>
        </aside>
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5-5.png')" height="100%" width="100%" />
        <aside class="notes">
          <p>
            Frontenden skulle visualisere, forklare, formidle, filtrere og sette informasjonen i kontekst
          </p>
        </aside>
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/5-6.png')" height="100%" width="100%" />
        <aside class="notes">
          <p>
            SOm da skulle ende opp med innsikt for brukeren. Altså hjelpe brukeren å ta informerte beslutninger
          </p>
        </aside>
      </section>
    </section>
    <section data-background-color="#2A2859" data-background-transition="none">
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/6.png')" height="100%" width="100%" />
        <aside class="notes">
          <p>Hvordan skulle vi løse denne utfordringen da, fra faktaark til noe enkelt for brukeren.</p>
        </aside>
      </section>
      <section data-background-color="#2A2859" data-transition="none">
        <img :src="getUrl('/img/6-1.png')" height="100%" width="100%" />
        <aside class="notes">
          <p>
            Vi gikk gjennom 12 brukertester fra sommeren 2018 til sommeren 2019. Ulike bydeler og etater var med på
            brukertestene
          </p>
          <p>
            Det var jevnlige møter mellom Origo og POS
          </p>
          <p>
            Vi brukte stand-ups to ganger i uka hvor vi gikk gjennom hva vi drev med og hva vi skulle jobbe videre med.
          </p>
          <p>
            Og en ukentlig status internt i Origo hvor vi brukte trello for å holde kontroll på oppgaver osv.
          </p>
        </aside>
      </section>
      <section data-background-color="#2A2859" data-background-transition="none" data-transition="none">
        <img :src="getUrl('/img/6-8.png')" height="100%" width="100%" />
        <aside class="notes">
          <p>Så det vi fant ut til slutt etter brukertestene og dybdeintervjuene var at:</p>
          <ul>
            <li>
              Det er vanskelig å gjøre gode sammenligninger
            </li>
            <li>
              Brukerne må manuelt viderebehandle data/grafikk
            </li>
            <li>
              og all grafikk var statisk
            </li>
          </ul>
        </aside>
      </section>
    </section>
  </div>
</template>

<script>
import API from '../util/config';
export default {
  name: 'Why',
  methods: {
    getUrl(url) {
      return `${API()}${url}`;
    },
  },
};
</script>

<style scoped></style>
