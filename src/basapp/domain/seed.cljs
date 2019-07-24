(ns basapp.domain.seed
  (:require [datascript.core :as d]
            [clojure.string :as str]))


(def employee-types
  #{:drzavni-sluzbenik :zaposlenik})


(defn insert-employee [name last-name uname email phone category position department office active]
  ;(js/console.log "emp-d" (type department))
  [{:employee/name       name
    :employee/last-name  last-name
    :employee/uname      uname
    :employee/email      email
    :employee/phone      phone
    :employee/type       category
    :employee/position   position
    :employee/department (js/parseInt department)
    :employee/office office
    :employee/active     active}])


(defn insert-sector [name short-name active]
  [{:sector/name       name
    :sector/short-name short-name
    :sector/active    active}])


(defn insert-department [name short-name sector active]
  [{:department/name       name
    :department/short-name short-name
    :department/sector     (js/parseInt sector)
    :department/active    active}])


(defn insert-floor [name short-name active]
  [{:floor/name       name
    :floor/short-name short-name
    :floor/active    active}])

(defn insert-office [name short-name floor active]
  [{:office/name       name
    :office/short-name short-name
    :office/floor     (js/parseInt floor)
    :office/active    active}])



(defn insert-data [fn data]
  (->> (for [unit data]
         (apply fn unit))
       flatten))


(defn insert-departments [departments-data]
  (->> (for [department departments-data]
         (apply insert-department department))
       flatten))

(defn insert-sectors [sectors-data]
  (->> (for [sectors sectors-data]
         (apply insert-sector sectors))
       flatten))

(defn insert-employees [employees-data]
  (->> (for [employee employees-data]
         (apply insert-employee employee))
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
    true]])


(def departments
  [["Kancelarija direktora" ;5
    "01-1"
    1
    true]
   ["Pravni poslovi" ;6
    "02-1"
    2
    true]
   ["Finansijski poslovi" ;7
    "02-2"
    2
    true]
   ["ISO CEN" ;8
    "03-1"
    3
    true]
   ["IEC CENELEC" ;9
    "03-2"
    3
    true]
   ["INDOC" ;10
    "04-1"
    4
    true]
   ["IT INFO" ;11
    "04-2"
    4
    true]])

(def floors
  [["Prvi sprat" ;12
    "1"
    true]
   ["Međusprat" ;13
    "1/2"
    true]
   ["Drugi sprat" ;14
    "1"
    true]
   ["Prizemlje" ;15
    "4"
    true]])

(def offices
  [["INFO/IT" ;16
    "109"
    12
    true]
   ["Referenti Standardizacija" ;17
    "106"
    12
    true]
   ["ISO/CEN 2" ;18
    "205"
    13
    true]
   ["INDOC" ;19
    "202"
    13
    true]
   ["Prodaja" ;20
    "201"
    13
    true]
   ["Ocjena usklađenosti" ;21
    "206"
    13
    true]
   ["IEC/CENELEC" ;22
    "203"
    13
    true]
   ["ISO/CEN 1" ;23
    "204"
    13
    true]
   ["Direktor" ;24
    "209"
    14
    true]
   ["Sekretar" ;25
    "210-a"
    14
    true]
   ["Zamjenik" ;26
    "210-b"
    14
    true]
   ["Finansije" ;27
    "212"
    14
    true]
   ["Pravna služba" ;28
    "213"
    14
    true]
   ["Protokol" ;29
    "211"
    14
    true]
   ["Mala sala" ;30
    "208"
    14
    true]
   ["Mala sala" ;31
    "208"
    14
    true]
   ["Velika sala" ;32
      "P-03"
    15
    true]
   ["Arhiva" ;33
    "P-02"
    15
    true]])

(def employees
  [["Enes"
    "Jakić"
    "enesj"
    "enes.jakic@bas.gov.ba"
    "11111"
    "Rukovodeći"
    "Pomoćnik Sektor 04"
    10
    20
    true]
   ["Zvjezdan"
    "Šehovac"
    "zvjezdans"
    "zvjezdan.sehovac@bas.gov.ba"
    "22222"
    "Rukovodeći"
    "Šef Odjeljenje 03-2"
    9
    22
    true]
   ["Dragan"
    "Lučić"
    "daraganl"
    "dragan.lucic@bas.gov.ba"
    "33333"
    "Rukovodeći"
    "Šef Odjeljenje 04-2"
    11
    16
    true]
   ["Srđan"
    "Mršić"
    "srdjanm"
    "srdjan.mrsic@bas.gov.ba"
    "33333"
    "Zaposlenik"
    "Refernt"
    10
    20
    true]
   ["Sanja"
    "Ćirić"
    "sanjac"
    "sanja.ciric@bas.gov.ba"
    "33333"
    "Zaposlenik"
    "Refernt"
    10
    17
    true]
   ["Nirmala"
    "Ajanović"
    "nirmalaa"
    "nirmala.ajanovic@bas.gov.ba"
    "33333"
    "Službenik"
    "Viši stručni saradnik"
    10
    19
    true]
   ["Dragan"
    "Čurćilo"
    "draganc"
    "dragan.curcilo@bas.gov.ba"
    "87897"
    "Službenik"
    "Viši stručni saradnik"
    9
    ""
    false]
   ["Mirjana"
    "Šućur"
    "mirajnas"
    "mirjana.sucur@bas.gov.ba"
    "87897werwe"
    "Rukovodeći"
    "Šef Odjeljenje 02-2"
    9
    ""
    false]])

