(ns basapp.domain.seed
  (:require [datascript.core :as d]
            [clojure.string :as str]))

(defn remove-nils [data]
  (->> data
       (filter second)
       (into {})))

(defn get-foreign-key [atr val app-db]
  (when val
    (if (int? val)
      val
      (->>
        (d/q '[:find ?e
               :in $ ?a ?v
               :where [?e ?a ?v]]
              app-db atr val)
        ffirst))))

(defn insert-sector [name short-name active app-db]
  [{:sector/name       name
    :sector/short-name short-name
    :sector/active     active}])

(defn insert-department [name short-name sector active app-db]
  [{:department/name       name
    :department/short-name short-name
    :department/sector     (get-foreign-key :sector/short-name sector app-db)
    :department/active     active}])

(defn insert-floor [name short-name active]
  [{:floor/name       name
    :floor/short-name short-name
    :floor/active     active}])

(defn insert-office [name short-name floor active app-db]
  [{:office/name       name
    :office/short-name short-name
    :office/floor      (get-foreign-key :floor/short-name floor app-db)
    :office/active     active}])


(defn insert-folder [link description responsible1 responsible2 parent active app-db]
  [(remove-nils
     {:folder/link         link
      :folder/description  description
      :folder/responsible1 (get-foreign-key :employee/uname responsible1 app-db)
      :folder/responsible2 (get-foreign-key :employee/uname responsible2 app-db)
      :folder/parent       (get-foreign-key :folder/link parent app-db)
      :folder/active       active})])


(defn insert-employee [name last-name uname email phone category position department office active app-db]
  ;(js/console.log "emp-d" (type department))
  [{:employee/name       name
    :employee/last-name  last-name
    :employee/uname      uname
    :employee/email      email
    :employee/phone      phone
    :employee/type       category
    :employee/position   position
    :employee/department (get-foreign-key :department/short-name department app-db)
    :employee/office     office
    :employee/active     active}])

(defn insert-data [fn data app-db]
  (->> (for [unit data]
         (apply fn (into unit [(:datascript app-db)])))
       flatten))

(def sectors
  [["Ured direktora"
    "Sektor 01"
    true]
   ["Pravno finasijski poslovi"
    "Sektor 02"
    true]
   ["Oblast standardizacije"
    "Sektor 03"
    true]
   ["INDOC i INFO"
    "Sektor 04"
    true]
   ["Ocjena uskalđenosti"
    "OU"
    true]])

(def departments
  [["Kancelarija direktora" ;5
    "01-1"
    "Sektor 01"
    true]
   ["Pravni poslovi" ;6
    "02-1"
    "Sektor 02"
    true]
   ["Finansijski poslovi" ;7
    "02-2"
    "Sektor 02"
    true]
   ["ISO CEN" ;8
    "03-1"
    "Sektor 03"
    true]
   ["IEC CENELEC" ;9
    "03-2"
    "Sektor 03"
    true]
   ["INDOC" ;10
    "04-1"
    "Sektor 04"
    true]
   ["IT INFO" ;11
    "04-2"
    "Sektor 04"
    true]
   ["Ocjena usklađenosti" ;33
    "OU-01"
    "OU"
    true]])

(def floors
  [["Prvi sprat"                                            ;12
    "1"
    true]
   ["Međusprat"                                             ;13
    "1/2"
    true]
   ["Drugi sprat"                                           ;14
    "2"
    true]
   ["Prizemlje"                                             ;15
    "0"
    true]])

(def offices
  [["INFO/IT"                                               ;16
    "109"
    "1"
    true]
   ["Referenti Standardizacija"                             ;17
    "106"
    "1"
    true]
   ["ISO/CEN 2"                                             ;18
    "205"
    "1/2"
    true]
   ["INDOC"                                                 ;19
    "202"
    "1/2"
    true]
   ["Prodaja"                                               ;20
    "201"
    "1/2"
    true]
   ["Ocjena usklađenosti"                                   ;21
    "206"
    "1/2"
    true]
   ["IEC/CENELEC"                                           ;22
    "203"
    "1/2"
    true]
   ["ISO/CEN 1"                                             ;23
    "204"
    "1/2"
    true]
   ["Direktor"                                              ;24
    "209"
    "2"
    true]
   ["Sekretar"                                              ;25
    "210-a"
    "2"
    true]
   ["Zamjenik"                                              ;26
    "210-b"
    "2"
    true]
   ["Finansije"                                             ;27
    "212"
    "2"
    true]
   ["Pravna služba"                                         ;28
    "213"
    "2"
    true]
   ["Protokol"                                              ;29
    "211"
    "2"
    true]
   ["Mala sala"                                             ;30
    "208"
    "2"
    true]
   ["Velika sala"                                           ;31
    "P-03"
    "0"
    true]
   ["Arhiva"                                                ;32
    "P-02"
    "0"
    true]])

(def employees
  [["Aleksandar"       ;34
    "Cincar"
    "aleksandarc"
    "aleksandar.cincar@bas.gov.ba"
    "057/310 561"
    "Rukovodeći"
    "Direktor"
    "01-1"
    24
    true]
   ["Borislav"       ;35
    "Kraljević"
    "borislavk"
    "borislav.kraljevic@bas.gov.ba"
    "057/310 562"
    "Rukovodeći"
    "Zamjenik direktora"
    "01-1"
    26
    true]
   ["Enes"       ;36
    "Jakić"
    "enesj"
    "enes.jakic@bas.gov.ba"
    "057/310 576"
    "Rukovodeći"
    "Pomoćnik Sektor 04"
    "04-1"
    20
    true]
   ["Nenad"       ;37
    "Bogdanović"
    "nenadb"
    "nenad.bogdanović@bas.gov.ba"
    "057/310 569"
    "Rukovodeći"
    "Pomoćnik Sektor 02"
    "02-1"
    28
    true]
   ["Goran"       ;38
    "Tešanović"
    "gorant"
    "goran.tesanović@bas.gov.ba"
    "057/310 589"
    "Rukovodeći"
    "Pomoćnik Sektor 03-3"
    "OU-01"
    21
    true]
   ["Dragan"       ;39
    "Lučić"
    "daraganl"
    "dragan.lucic@bas.gov.ba"
    "057/310 571"
    "Rukovodeći"
    "Šef Odjeljenje 04-2"
    "04-2"
    16
    true]
   ["Dejana"       ;40
    "Bogdanović"
    "dejanab"
    "dejan.bogdanović@bas.gov.ba"
    "057/310 574 "
    "Rukovodeći"
    "Šef Odjeljenje 04-1"
    "04-1"
    19
    true]
   ["Zvjezdan"       ;41
    "Šehovac"
    "zvjezdans"
    "zvjezdan.sehovac@bas.gov.ba"
    "057/310 577 "
    "Rukovodeći"
    "Šef Odjeljenje 03-2"
    "03-2"
    22
    true]
   ["Tihomir"       ;42
    "Anđelić"
    "tihomira"
    "tihomir.andjelic@bas.gov.ba"
    "057/310 598 "
    "Rukovodeći"
    "Šef Odjeljenje 03-1"
    "03-1"
    23
    true]
   ["Miljan"       ;43
    "Savić"
    "miljans"
    "miljan.savic@bas.gov.ba"
    "057/310 597 "
    "Rukovodeći"
    "Šef Odjeljenje OU"
    "OU-01"
    21
    true]
   ["Brankica"       ;44
    "Šarović"
    "brankicas"
    "brankica.sarovic@bas.gov.ba"
    "057/310 572"
    "Službenik"
    "Viši stručni saradnik"
    "04-2"
    16
    true]
   ["Nirmala"       ;45
    "Ajanović"
    "nirmalaa"
    "nirmala.ajanovic@bas.gov.ba"
    "057/310 586"
    "Službenik"
    "Viši stručni saradnik"
    "04-1"
    19
    true]
   ["Sanja"       ;46
    "Dubovina"
    "sanjad"
    "sanja.dubovina@bas.gov.ba"
    "057/310 599"
    "Službenik"
    "Viši stručni saradnik"
    "04-1"
    19
    true]
   ["Biljana"       ;47
    "Maletić"
    "biljanam"
    "biljana.maletic@bas.gov.ba"
    "057/310 591"
    "Službenik"
    "Viši stručni saradnik"
    "01-1"
    25
    true]
   ["Biljana"       ;48
    "Baljaj"
    "biljanab"
    "biljana.baljaj@bas.gov.ba"
    "057/310 593"
    "Službenik"
    "Viši stručni saradnik"
    "03-1"
    18
    true]
   ["Bojana"       ;49
    "Zecevic"
    "bojanaz"
    "bojana.zecevic@bas.gov.ba"
    "057/310 573"
    "Službenik"
    "Viši stručni saradnik"
    "03-1"
    18
    true]
   ["Mario"       ;50
    "Prka"
    "mariop"
    "mario.prka@bas.gov.ba"
    "057/310 585"
    "Službenik"
    "Viši stručni saradnik"
    "03-1"
    18
    true]
   ["Tatjana"       ;51
    "Vidović"
    "tatjanav"
    "tatajan.vidovic@bas.gov.ba"
    "057/310 592"
    "Službenik"
    "Viši stručni saradnik"
    "03-1"
    18
    true]
   ["Hafiza"       ;52
    "Zametica"
    "hafizaz"
    "hafiza.zametica@bas.gov.ba"
    "057/310 595"
    "Službenik"
    "Viši stručni saradnik"
    "03-1"
    23
    true]
   ["Stana"       ;53
    "Buha"
    "stanab"
    "stana.buha@bas.gov.ba"
    "057/310 563"
    "Službenik"
    "Viši stručni saradnik"
    "03-1"
    23
    true]
   ["Jasmina"       ;54
    "Ljubuncic"
    "jasminalj"
    "jasmina.ljubuncic@bas.gov.ba"
    "057/310 594"
    "Službenik"
    "Stručni savjetnik"
    "03-1"
    23
    true]
   ["Goran"       ;55
    "Mrakaja"
    "goranm"
    "goran.mrakaja@bas.gov.ba"
    "057/310 578"
    "Službenik"
    "Viši stručni saradnik"
    "OU-01"
    21
    true]
   ["Irfan"       ;56
    "Mutap"
    "irfanm"
    "irafan.mutap@bas.gov.ba"
    "057/310 564"
    "Službenik"
    "Stručni saradnik"
    "02-1"
    28
    true]
   ["Miljan"       ;57
    "Vasković"
    "miljanv"
    "miljan.vaskovic@bas.gov.ba"
    "057/310 565"
    "Službenik"
    "Stručni saradnik"
    "03-2"
    22
    true]
   ["Željka"       ;58
    "Popić"
    "zeljakp"
    "zeljka.popic@bas.gov.ba"
    "057/310 587"
    "Službenik"
    "Viši stručni saradnik"
    "03-2"
    22
    true]
   ["Verica"       ;59
    "Ristić"
    "vericar"
    "verica.ristic@bas.gov.ba"
    "057/310 567"
    "Službenik"
    "Viši stručni saradnik"
    "02-2"
    27
    true]
   ["Jelena"       ;60
    "Erbez"
    "jelenae"
    "jelena.erbez@bas.gov.ba"
    "057/310 568"
    "Zaposlenik"
    "Refernt"
    "02-2"
    27
    true]
   ["Ljeposava"       ;61
    "Bratić"
    "ljeposavab"
    "ljeposava.bratic@bas.gov.ba"
    "057/310 566"
    "Službenik"
    "Viši stručni saradnik"
    "02-2"
    27
    true]
   ["Neir"       ;62
    "Kilalić"
    "neirk"
    "neir.kilalic@bas.gov.ba"
    "057/310 580"
    "Zaposlenik"
    "Refernt"
    "04-1"
    20
    true]
   ["Srđan"       ;63
    "Mršić"
    "srdjanm"
    "srdjan.mrsic@bas.gov.ba"
    "057/310 583"
    "Zaposlenik"
    "Refernt"
    "04-1"
    20
    true]
   ["Sanja"       ;64
    "Ćirić"
    "sanjac"
    "sanja.ciric@bas.gov.ba"
    "057/310 581"
    "Zaposlenik"
    "Refernt"
    "04-1"
    17
    true]
   ["Mirsada"       ;65
    "Sijamić"
    "mirsadas"
    "mirsada.sijamic@bas.gov.ba"
    "057/310 590"
    "Zaposlenik"
    "Refernt"
    "03-1"
    17
    true]
   ["Emira"       ;66
    "Hodzić"
    "emirah"
    "emira.hodzic@bas.gov.ba"
    "057/310 579"
    "Zaposlenik"
    "Refernt"
    "02-1"
    17
    true]
   ["Dario"       ;67
    "Paljević"
    "dariop"
    "dario.pajevic@bas.gov.ba"
    "057/310 582"
    "Zaposlenik"
    "Refernt"
    "04-1"
    19
    true]
   ["Aleksandra"       ;68
    "Milidrag"
    "aleksandram"
    "aleksandra.milidrag@bas.gov.ba"
    "057/310 590"
    "Zaposlenik"
    "Refernt"
    "01-1"
    25
    true]
   ["Snjezana"       ;69
    "Škorić"
    "snjezanas"
    "snjezana.skoric@bas.gov.ba"
    "057/310 570"
    "Zaposlenik"
    "Refernt"
    "02-1"
    29
    true]

   ["Dragan"       ;70
    "Čurćilo"
    "draganc"
    "dragan.curcilo@bas.gov.ba"
    "87897"
    "Službenik"
    "Viši stručni saradnik"
    "03-2"
    ""
    false]
   ["Mirjana"       ;72 ???
    "Šućur"
    "mirajnas"
    "mirjana.sucur@bas.gov.ba"
    "87897werwe"
    "Rukovodeći"
    "Šef Odjeljenje 02-2"
    "03-2"
    ""
    false]])

(def folders
  [["Interni dokumenti"
    ""
    "miljans"
    nil
    nil
    true]
   ["Obrasci"
    ""
    "mirsadas"
    nil
    nil
    true]
   ["Ocjena uskladjenosti"
    ""
    "gorant"
    nil
    nil
    true]
   ["Ostalo"
    ""
    "miljans"
    nil
    nil
    true]
   ["Prisustvo na poslu"
    ""
    "enesj"
    nil
    nil
    true]
   ["Sektor 01"
    ""
    "aleksandarc"
    nil
    nil
    true]
   ["Sektor 02"
    ""
    "nenadb"
    nil
    nil
    true]
   ["Sektor 03"
    ""
    "tihomira"
    "zvjezdans"
    nil
    true]
   ["Sektor 03/ISO_CEN"
    ""
    "tihomira"
    nil
    "Sektor 03"
    true]
   ["Sektor 03/IEC_CENELEC"
    ""
    "zvjezdans"
    nil
    "Sektor 03"
    true]
   ["Sektor 04"
    ""
    "enesj"
    nil
    nil
    true]
   ["Sjednice TC"
    ""
    "mirsadas"
    nil
    nil
    true]
   ["FUK"
    ""
    "nenadb"
    nil
    "Interni dokumenti"
    true]
   ["IMS RG1"
    ""
    "miljans"
    nil
    "Interni dokumenti"
    true]
   ["IMS RG2"
    ""
    "miljans"
    nil
    "Interni dokumenti"
    true]
   ["Izvjestaji"
    ""
    "aleksandram"
    nil
    "Interni dokumenti"
    true]
   ["Kolegij"
    ""
    "aleksandram"
    nil
    "Interni dokumenti"
    true]
   ["Pravilnici"
    ""
    "nenadb"
    nil
    "Interni dokumenti"
    true]
   ["Pravilnici"
    ""
    "nenadb"
    nil
    "Interni dokumenti"
    true]
   ["Registar Odluka"
    ""
    "nenadb"
    nil
    "Interni dokumenti"
    true]
   ["Sistem kvaliteta"
    ""
    "miljans"
    nil
    "Interni dokumenti"
    true]
   ["Uputstva i procedure"
    ""
    "miljans"
    nil
    "Interni dokumenti"
    true]
   ["Finansije"
    ""
    "vericar"
    nil
    "Sektor 02"
    true]
   ["Pravna sluzba"
    ""
    "vericar"
    nil
    "Sektor 02"
    true]
   ["Protokol"
    ""
    "neneadb"
    nil
    "Sektor 02"
    true]
   ["Izvjestaji"
    ""
    "tihomira"
    nil
    "Sektor 03"
    true]])





