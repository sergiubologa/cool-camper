import React from "react";
import LegalLeftNavLayout from "../layouts/legal-left-navigation";
import Helmet from "react-helmet";

export default () => (
  <LegalLeftNavLayout>
    <Helmet>
      <title>CoolCamper - Termeni si Conditii</title>
      <meta
        name="description"
        content="Termeni si conditii de folosire a site-ului si a serviciilor CoolCamper!"
      />
    </Helmet>
    <h3 className="app__main__title">Termeni si conditii</h3>
    <p style={{ marginBottom: 0 }}>
      În înțelesul prezentului document de “Termen si conditii”, următorii
      termeni se definesc astfel:
    </p>
    <ul style={{ marginTop: 0, marginBottom: 0 }}>
      a) utilizator / client - orice persoană fizică sau grup de persoane fizice
      constituite în asociații, care cumpără, dobândește, utilizează ori consumă
      produse sau servicii în afara activității profesionale,
    </ul>
    <ul style={{ marginTop: 0 }}>
      b) prestator servicii - persoana fizică sau juridică autorizată să
      desfășoare activități de comercializare a produselor și serviciilor de
      piață.
    </ul>

    <p>
      COOLCAMPER S.R.L. este o societate cu raspundere limitata a carui domeniu
      de activitate este de inchirieri autorulote.
    </p>
    <p>
      1.1. COOLCAMPER S.R.L colecteaza date cu caracter personal pe paginile
      site-ului sau, numai cu acordul voluntar al Clientului, in urmatoarele
      scopuri:
    </p>
    <li>validarea, expedierea si facturarea comenzilor catre acesta </li>
    <li>
      rezolvarea anularilor sau a problemelor de orice natura referitoare la o
      comanda sau un contract, la serviciile sau produsele achizitionate de
      catre acesta;
    </li>

    <li>
      trimiterea de newslettere si/sau alerte periodice, in format exclusiv
      electronic;
    </li>
    <li>contactarea acestuia, la cererea sa voluntara;</li>
    <li>contactarea acestuia, in chestiuni de Relatii cu Clientii;</li>
    <li>scopuri statistice;</li>

    <p>
      1.2. Prin completarea datelor sale, fiecare Client isi exprima
      consimtamantul ca, COOLCAMPER S.R.L sa colecteze si sa adminstreze datele
      acestuia cu caracter personal, in conditiile si cu respectarea
      prevederilor Legii 677/2001. Acestea vor fi colectate prin intermediul
      programului Wix , Yesware, Mail Chimp, Facebook, Instagram, Youtube intr-o
      baza de date si utilizate de acesta din urma in vederea organizarii de
      activitati de marketing/transmiterii de materiale cu caracter
      publicitar/promotional, in stricta conformitate cu prevederile legale
      referitoare la protectia datelor cu caracter personal si libera circulatie
      a acestor date.
    </p>
    <p>
      1.3. Oricare Client are dreptul de a obtine de la COOLCAMPER s.r.l., prin
      intermediul unei cereri scrise ce va fi trimisa prin e-mail la adresa
      contact@coolcamper.ro, urmatoarele:
    </p>
    <ul>
      a) confirmarea faptului ca datele care il privesc sunt sau nu sunt
      prelucrate la un moment dat;
    </ul>
    <ul>
      b)dupa caz, rectificarea, actualizarea, blocarea sau stergerea datelor a
      caror prelucrare nu este conforma legii, in special a datelor incomplete
      sau inexacte;
    </ul>
    <ul>
      c) dupa caz, transformarea in date anonime a datelor a caror prelucrare nu
      este conforma legii;
    </ul>

    <p>
      1.4. Oricare Client are dreptul de a se opune in orice moment, din motive
      intemeiate si legitime legate de situatia sa particulara, prin
      transmiterea catre COOLCAMPER S.R.L a unei cereri intocmita in forma
      scrisa, ca datele care il vizeaza sa faca obiectul unei prelucrari, cu
      exceptia cazurilor in care exista dispozitii legale contrare. In caz de
      opozitie justificata prelucrarea nu mai poate viza datele in cauza.
    </p>
  </LegalLeftNavLayout>
);
