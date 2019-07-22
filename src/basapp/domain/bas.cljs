(ns basapp.domain.bas
  (:require [datascript.core :as d]
            [clojure.string :as str]))


(def employee-types
  #{:drzavni-sluzbenik :zaposlenik})


(defn insert-employee [name last-name uname email phone category position department active]
  ;(js/console.log "emp-d" (type department))
  [{:employee/name       name
    :employee/last-name  last-name
    :employee/uname      uname
    :employee/email      email
    :employee/phone      phone
    :employee/type       category
    :employee/position   position
    :employee/department (js/parseInt department)
    :employee/active     active}])


(defn insert-department [name short-name sector active]
  [{:department/name       name
    :department/short-name short-name
    :department/sektor     (js/parseInt sector)
    :department/active    active}])


(defn insert-sector [name short-name active]
  [{:sector/name       name
    :sector/short-name short-name
    :sector/active    active}])



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


(def employees
  [["Enes"
    "Jakić"
    "enesj"
    "enes.jakic@bas.gov.ba"
    "11111"
    "Rukovodeći"
    "Pomoćnik Sektor 04"
    10
    true]
   ["Zvjezdan"
    "Šehovac"
    "zvjezdans"
    "zvjezdan.sehovac@bas.gov.ba"
    "22222"
    "Rukovodeći"
    "Šef Odjeljenje 03-2"
    9
    true]
   ["Dragan"
    "Lučić"
    "daraganl"
    "dragan.lucic@bas.gov.ba"
    "33333"
    "Rukovodeći"
    "Šef Odjeljenje 04-2"
    11
    true]
   ["Srđan"
    "Mršić"
    "srdjanm"
    "srdjan.mrsic@bas.gov.ba"
    "33333"
    "Zaposlenik"
    "Refernt"
    10
    true]
   ["Sanja"
    "Ćirić"
    "sanjac"
    "sanja.ciric@bas.gov.ba"
    "33333"
    "Zaposlenik"
    "Refernt"
    10
    true]
   ["Niramla"
    "Ajanović"
    "nirmalaa"
    "nirmala.ajanovic@bas.gov.ba"
    "33333"
    "Službenik"
    "Viši stručni saradnik"
    10
    true]
   ["Dragan"
    "Čurćilo"
    "draganc"
    "dragan.curcilo@bas.gov.ba"
    "87897"
    "Službenik"
    "Viši stručni saradnik"
    9
    false]
   ["Mirjana"
    "Šućur"
    "mirajnas"
    "mirjana.sucur@bas.gov.ba"
    "87897werwe"
    "Rukovodeći"
    "Šef Odjeljenje 02-2"
    9
    false]])

