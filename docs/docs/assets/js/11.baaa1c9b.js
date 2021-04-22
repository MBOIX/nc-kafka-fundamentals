(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{365:function(e,r,a){"use strict";a.r(r);var s=a(44),t=Object(s.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"lab04-schema-registry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lab04-schema-registry"}},[e._v("#")]),e._v(" Lab04 - Schema Registry")]),e._v(" "),a("ul",[a("li",[e._v("Ajoutez le container Schema registry")])]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker-compose -f docker-compose-schema.yml up -d\n")])])]),a("ul",[a("li",[a("p",[e._v("Expliquer le principe d'utiliser AVRO (RPC et Sérialisation)")])]),e._v(" "),a("li",[a("p",[e._v("Présenter le projet Spring")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("consumer")])]),e._v(" "),a("li",[a("code",[e._v("producer")])]),e._v(" "),a("li",[a("code",[e._v("src/main/avro")])])])]),e._v(" "),a("li",[a("p",[e._v("Expliquer le plugin maven avro, les classes générées")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("mvn clean compile")])]),e._v(" "),a("li",[e._v("POJO générés cf. "),a("code",[e._v("target/generated-sources/avro")])])])]),e._v(" "),a("li",[a("p",[e._v("L'utilisation du POJO")])]),e._v(" "),a("li",[a("p",[e._v("Montrer dans akhq les schémas stockés côté schema registry")])]),e._v(" "),a("li",[a("p",[e._v("Pour builder et démarrer le container")])])]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker build -t vp-avro-producer .\ndocker run --name vp-avro-producer --network=tz-kafka-network -d vp-avro-producer\n")])])])])}),[],!1,null,null,null);r.default=t.exports}}]);