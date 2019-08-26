(ns basapp.domain.schema)



(def bas
  {:employee/name           {:db/cardinality :db.cardinality/one}
   :employee/last-name      {:db/cardinality :db.cardinality/one}
   :employee/uname          {:db/cardinality :db.cardinality/one
                             :db/unique      :db.unique/identity}
   :employee/email          {:db/cardinality :db.cardinality/one}
   :employee/password       {:db/cardinality :db.cardinality/one}
   :employee/phone          {:db/cardinality :db.cardinality/one}
   :employee/department     {:db/cardinality :db.cardinality/one
                             :db/valueType   :db.type/ref}
   :employee/office         {:db/cardinality :db.cardinality/one
                             :db/valueType   :db.type/ref}
   :employee/assets         {:db/cardinality :db.cardinality/many
                             :db/valueType   :db.type/ref}
   :employee/aaccess-rights {:db/cardinality :db.cardinality/many
                             :db/valueType   :db.type/ref}
   :employee/role           {:db/cardinality :db.cardinality/many
                             :db/valueType   :db.type/ref}
   :employee/type           {:db/cardinality :db.cardinality/one}
   :employee/position       {:db/cardinality :db.cardinality/one}
   :employee/active         {:db/cardinality :db.cardinality/one}

   :office/name             {:db/cardinality :db.cardinality/one}
   :office/short-name       {:db/cardinality :db.cardinality/one
                             :db/unique      :db.unique/identity}
   :office/floor            {:db/cardinality :db.cardinality/one
                             :db/valueType   :db.type/ref}

   :floor/short-name        {:db/cardinality :db.cardinality/one
                             :db/unique      :db.unique/identity}
   :floor/name              {:db/cardinality :db.cardinality/one}



   :folder/link             {:db/cardinality :db.cardinality/one
                             :db/unique      :db.unique/identity}

   :folder/description      {:db/cardinality :db.cardinality/one}

   :folder/responsible1     {:db/cardinality :db.cardinality/one
                             :db/valueType   :db.type/ref}

   :folder/responsible2     {:db/cardinality :db.cardinality/one
                             :db/valueType   :db.type/ref}

   :folder/parent           {:db/cardinality :db.cardinality/one
                             :db/valueType   :db.type/ref}

   :asset/sku               {:db/cardinality :db.cardinality/one
                             :db/unique      :db.unique/identity}
   :asset/type              {:db/cardinality :db.cardinality/one
                             :db/valueType   :db.type/ref}

   :asset/description       {:db/cardinality :db.cardinality/one}


   :asset-type/name         {:db/cardinality :db.cardinality/one
                             :db/unique      :db.unique/identity}
   :asset-type/category     {:db/cardinality :db.cardinality/many
                             :db/valueType   :db.type/ref}
   :asset-type/description  {:db/cardinality :db.cardinality/one}


   :asset-category/name     {:db/cardinality :db.cardinality/one
                             :db/unique      :db.unique/identity}


   :role/name               {:db/cardinality :db.cardinality/one
                             :db/unique      :db.unique/identity}
   :role/description        {:db/cardinality :db.cardinality/one}


   :department/name         {:db/cardinality :db.cardinality/one}

   :department/short-name   {:db/cardinality :db.cardinality/one
                             :db/unique      :db.unique/identity}

   :department/sector       {:db/cardinality :db.cardinality/one
                             :db/valueType   :db.type/ref}

   :sector/name             {:db/cardinality :db.cardinality/one}

   :sector/short-name       {:db/cardinality :db.cardinality/one
                             :db/unique      :db.unique/identity}})


