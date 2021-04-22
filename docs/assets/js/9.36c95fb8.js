(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{367:function(e,r,a){"use strict";a.r(r);var t=a(44),o=Object(t.a)({},(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"lab02-producer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lab02-producer"}},[e._v("#")]),e._v(" Lab02 - Producer")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("Au sein de ce lab nous utilisons "),a("a",{attrs:{href:"https://spring.io/projects/spring-kafka",target:"_blank",rel:"noopener noreferrer"}},[e._v("spring-kafka"),a("OutboundLink")],1),e._v(" pour dialoguer avec Kafka au\nsein de l'écosystème Spring Boot.")])]),e._v(" "),a("li",[a("p",[e._v("Créer un topic "),a("code",[e._v("vehicle-positions")]),e._v(" en CLI si celui-ci n'est pas déjà présent.")])])]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kafka-topics --if-not-exists --bootstrap-server kafka:9092 --create --topic vehicle-positions --replication-factor 1 --partitions 1\n")])])]),a("ul",[a("li",[a("p",[e._v("Présenter le projet spring boot")]),e._v(" "),a("ul",[a("li",[e._v("La configuation présente dans le fichier application.properties")]),e._v(" "),a("li",[e._v("L'auto configuration de "),a("code",[e._v("ProducerFactory<String, String>")]),e._v(" en lien avec les properties")]),e._v(" "),a("li",[e._v("Le client mqtt qui scrap les évènements\nde "),a("a",{attrs:{href:"https://digitransit.fi/en/developers/apis/4-realtime-api/vehicle-positions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Digitransit"),a("OutboundLink")],1)])]),e._v(" "),a("blockquote",[a("p",[e._v("En effet, Spring Boot fournit une configuration automatique pour Kafka via la classe "),a("code",[e._v("KafkaAutoConfiguration")]),e._v(" ("),a("a",{attrs:{href:"https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/autoconfigure/kafka/KafkaAutoConfiguration.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("javadoc"),a("OutboundLink")],1),e._v(")\n. Lorsque vous utilisez "),a("code",[e._v("@EnableAutoConfiguration")]),e._v(" ou "),a("code",[e._v("@SpringBootApplication")]),e._v(", Spring boot configure automatiquement Kafka pour vous."),a("br"),e._v(" "),a("code",[e._v("KafkaAutoConfiguration")]),e._v(" autoconfigure pour vous (serializer "),a("code",[e._v("String")]),e._v(" par défaut) les beans suivants :")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("kafkaAdmin")])]),e._v(" "),a("li",[a("code",[e._v("kafkaJaasInitializer")])]),e._v(" "),a("li",[a("code",[e._v("kafkaTransactionManager")])]),e._v(" "),a("li",[a("code",[e._v("kafkaProducerFactory")])]),e._v(" "),a("li",[a("code",[e._v("kafkaConsumerFactory")])]),e._v(" "),a("li",[a("code",[e._v("kafkaProducerListener")])]),e._v(" "),a("li",[a("code",[e._v("kafkaTemplate")])])])])]),e._v(" "),a("li",[a("p",[e._v("Compléter la métode "),a("code",[e._v("Subscriber#messageArrived()")]),e._v(" afin de produire des evenements")])]),e._v(" "),a("li",[a("p",[e._v("Checker dans akhq que des messages sont produits")])]),e._v(" "),a("li",[a("p",[e._v("Pour builder et démarrer le container")])])]),e._v(" "),a("div",{staticClass:"language-console extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker build -t vp-producer .\ndocker run --name vp-producer --network=tz-kafka-network -d vp-producer\n")])])]),a("ul",[a("li",[a("p",[e._v("Utilisation du profil spring "),a("code",[e._v("kafka-template")]),e._v(", plutôt que de s'appuyer sur le "),a("code",[e._v("kafkaProducerFactory")]),e._v(", on peut utiliser\nle bean "),a("code",[e._v("kafkaTemplate")])]),e._v(" "),a("ul",[a("li",[e._v("Le "),a("code",[e._v("KafkaTemplate")]),e._v(" wraps un producer et fournit des méthodes pratiques pour envoyer des données aux topics Kafka.")]),e._v(" "),a("li",[e._v("Consulter la "),a("a",{attrs:{href:"https://docs.spring.io/spring-kafka/api/org/springframework/kafka/core/KafkaTemplate.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Javadoc"),a("OutboundLink")],1),e._v(" pour plus d'informations.")])])]),e._v(" "),a("li",[a("p",[e._v("Pour démarrer votre container avec le profile "),a("code",[e._v("kafka-template")])])])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Supprimer le container si déjà présent")]),e._v("\ndocker container stop vp-producer\ndocker container "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" vp-producer\ndocker run --name vp-producer --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("tz-kafka-network -e "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"SPRING_PROFILES_ACTIVE=kafka-template"')]),e._v(" -d vp-producer\n")])])])])}),[],!1,null,null,null);r.default=o.exports}}]);