// Mini calculadora
const tiposDeAnimles = () => {
    // let opcionTipoAnimal = prompt("Seleccione el tipo de animal: \n1 - Vertebrados\n2 - Invertebrados\n3 - Herbivoros\n4 - Carnivoros");
    let opcionTipoAnimal = this.promptMenu("Seleccione el tipo de animal: \n1 - Vertebrados\n2 - Invertebrados\n3 - Herbivoros\n4 - Carnivoros");
    console.log('opcionTipoAnimal: ', opcionTipoAnimal);
    if (opcionTipoAnimal !== "1" && opcionTipoAnimal !== "2" && opcionTipoAnimal !== "3" && opcionTipoAnimal !== "4") {
        alert("Debe seleccionar una opción entre 1 y 4");
    } else {
        if (opcionTipoAnimal === "1") {
            let opcionTipoAnimalVertebrado = this.promptMenu("Seleccione el tipo de animal vertebrado: \n1 - Perro\n2 - Canguro\n3 - Gorila\n4 - Mono");
            console.log('opcionTipoAnimalVertebrado: ', opcionTipoAnimalVertebrado);
            if (opcionTipoAnimalVertebrado !== "1" && opcionTipoAnimalVertebrado !== "2" && opcionTipoAnimalVertebrado !== "3" && opcionTipoAnimalVertebrado !== "4") {
                alert("Debe seleccionar una opción entre 1 y 4");
            } else {


                if (opcionTipoAnimal === "1") {
                    let descripcionAnimal = "El perro (Canis familiaris o Canis lupus familiaris dependiendo de si se lo considera una especie por derecho propio o una subespecie del lobo),1​2​3​ llamado perro doméstico o can,4​ y en algunos lugares coloquialmente llamado chucho,5​ tuso,6​ choco,7​ entre otros; es un mamífero carnívoro de la familia de los cánidos, que constituye una especie del género Canis.8​9​ En 2013, una población mundial estimada de perros estaba entre 700 millones y 987 millones10​11​ Su tamaño (o talla), su forma y pelaje es muy diverso según la raza. Posee un oído y olfato muy desarrollados, siendo este último su principal órgano sensorial. Su longevidad media es de 10 a 13 años,12​13​14​ dependiendo de la raza."
                    alert(descripcionAnimal);
                }

                if (opcionTipoAnimal === "2") {
                    let descripcionAnimal = "El término canguro es el nombre común que se utiliza para designar a las especies de mayor tamaño de la subfamilia Macropodinae, tal como el término ualabí se utiliza para denominar a las de menor tamaño. Sin embargo, el término no responde a una clasificación científica, por lo que especies pertenecientes a un mismo género (agrupación de especies estrechamente relacionadas entre sí) pueden ser llamadas canguro, ualabí o ualarú, solo dependiendo de su tamaño. Por ejemplo, Macropus parma es conocido como el ualabí de Parma,1 mientras que Macropus antilopinus, es denominado indistintamente como canguro antílope o ualarú antílope."
                    alert(descripcionAnimal);
                }
        
                if (opcionTipoAnimal === "3") {
                    let descripcionAnimal = "Los gorilas (género Gorilla) son primates herbívoros que habitan los bosques de África central. Son los más grandes de los primates vivos. El género se compone de dos especies: el gorila occidental (Gorilla gorilla) y el oriental (Gorilla beringei), con dos subespecies cada una. Su ADN está compuesto de 3 041 976 159 pares de bases que codifican 20 962 genes proteicos compuestos de 237 216 exones.2​ Su ADN es un 97-98 % igual al humano, siendo el más cercano a este después de las dos especies de chimpancé."
                    alert(descripcionAnimal);
                }
        
                if (opcionTipoAnimal === "4") {
                    let descripcionAnimal = "La palabra mono es un término no taxonómico que designa a un amplio conjunto de primates simiiformes.";
                    alert(descripcionAnimal);
                }

            }
        }

        if (opcionTipoAnimal === "2") {
            let opcionTipoAnimalInvertebrado = this.promptMenu("Seleccione el tipo de animal invertebrado: \n1 - Orugas\n2 - Escorpiones\n3 - Arañas\n4 - Escarabajo");
            console.log('opcionTipoAnimalInvertebrado: ', opcionTipoAnimalInvertebrado);

            if (opcionTipoAnimalInvertebrado !== "1" && opcionTipoAnimalInvertebrado !== "2" && opcionTipoAnimalInvertebrado !== "3" && opcionTipoAnimalInvertebrado !== "4") {
                alert("Debe seleccionar una opción entre 1 y 4");
            } else {


                if (opcionTipoAnimal === "1") {
                    let descripcionAnimal = "Se denomina oruga a la larva de los insectos del orden Lepidoptera (incluye las mariposas diurnas y nocturnas). Las orugas son típicamente blandas y cilíndricas. Algunas poseen vistosos colores, que advierten de su toxicidad o desagradable sabor. Otras, en cambio, son de colores crípticos, similares al follaje en que se encuentran, para escapar de la detección de depredadores. En ocasiones también se les llama orugas a las larvas de algunos coleópteros grandes y a las de ciertos himenópteros, las moscas sierras. Es más correcto llamarlas larvas eruciformes (con forma de oruga)."
                    alert(descripcionAnimal);
                }

                if (opcionTipoAnimal === "2") {
                    let descripcionAnimal = "Scorpiones es un orden de artrópodos arácnidos depredadores conocidos comúnmente como escorpiones o alacranes. Se caracterizan por un contar con un par de pinzas de agarre y una cola estrecha y segmentada, a menudo formando una reconocible curva hacia delante sobre la espalda y siempre rematada con un aguijón. La historia evolutiva de los escorpiones se remonta a hace unos cuatrocientos treinta y cinco millones de años, durante el Silúrico. Viven sobre todo en los desiertos, pero se han adaptado a una amplia gama de condiciones ambientales y se encuentran en todos los continentes, excepto en la Antártida. Se han descrito más de dos mil quinientas especies, divididas en veintidós familias existentes. Su taxonomía se encuentra en proceso de revisión para tener en cuenta los estudios genómicos del siglo XXI."
                    alert(descripcionAnimal);
                }
        
                if (opcionTipoAnimal === "3") {
                    let descripcionAnimal = "Las arañas (Araneae) son el orden más numeroso de la clase Arachnida, lejanamente emparentadas con otros grupos de artrópodos, como los insectos, con los que no deben confundirse. Tienen glándulas venenosas en los quelíceros, con las que paralizan a sus presas. Producen seda (véase seda de araña), con la que tejen telas de araña o telarañas, que usan para construir redes de caza, tapizar refugios e incluso hacerse llevar por el viento."
                    alert(descripcionAnimal);
                }
        
                if (opcionTipoAnimal === "4") {
                    let descripcionAnimal = "Los coleópteros (Coleoptera) (del griego κολεός koleos: «caja o estuche», πτερον pteron: «ala»), comúnmente conocidos como escarabajos, son un orden de insectos con unas 375 000 especies descritas; tiene tantas especies como las plantas vasculares o los hongos y 66 veces más especies que los mamíferos.1​ Contiene más especies que cualquier otro orden en todo el reino animal, seguido por los lepidópteros (mariposas y polillas), himenópteros (abejas, avispas y hormigas) y dípteros (moscas, mosquitos).";
                    alert(descripcionAnimal);
                }

            }

        }

        if (opcionTipoAnimal === "3") {
            let opcionTipoAnimalHerbivoro = this.promptMenu("Seleccione el tipo de animal herbivoro: \n1 - Caballo\n2 - Cabra\n3 - Canguro\n4 - Cebra");
            console.log('opcionTipoAnimalHerbivoro: ', opcionTipoAnimalHerbivoro);

            if (opcionTipoAnimalHerbivoro !== "1" && opcionTipoAnimalHerbivoro !== "2" && opcionTipoAnimalHerbivoro !== "3" && opcionTipoAnimalHerbivoro !== "4") {
                alert("Debe seleccionar una opción entre 1 y 4");
            } else {


                if (opcionTipoAnimal === "1") {
                    let descripcionAnimal = "El caballo (Equus ferus caballus)1​2​ es un mamífero perisodáctilo domesticado de la familia de los équidos. Es un herbívoro perisodáctilo de gran porte, y cuello largo y arqueado poblado por largas crines. A la hembra del caballo se le llama yegua y a las crías, si son machos, potros o potrillos, y si son hembras, potras o potrancas. La cría y utilización del caballo por parte del hombre se conoce como ganadería equina o caballar, y su domesticación se remonta a 3600 a. C., en la región de Kazajistán.3​";
                    alert(descripcionAnimal);
                }

                if (opcionTipoAnimal === "2") {
                    let descripcionAnimal = "La cabra (Capra aegagrus hircus) es un mamífero artiodáctilo de la subfamilia Caprinae que fue domesticado alrededor del octavo milenio a. C., sobre todo por su carne y leche.1​ Al macho de la cabra se le llama cabrón (si bien en algunos países esta palabra se considera malsonante), así como también cabro, chivato, macho cabrío, irasco o chivo, y a las crías se las llama cabrito, chivo o chivito. Al conjunto de estos animales, criados por el hombre, se le conoce como ganado caprino o ganado cabrío.1​"
                    alert(descripcionAnimal);
                }
        
                if (opcionTipoAnimal === "3") {
                    let descripcionAnimal = "El término canguro es el nombre común que se utiliza para designar a las especies de mayor tamaño de la subfamilia Macropodinae, tal como el término ualabí se utiliza para denominar a las de menor tamaño. Sin embargo, el término no responde a una clasificación científica, por lo que especies pertenecientes a un mismo género (agrupación de especies estrechamente relacionadas entre sí) pueden ser llamadas canguro, ualabí o ualarú, solo dependiendo de su tamaño. Por ejemplo, Macropus parma es conocido como el ualabí de Parma,1​ mientras que Macropus antilopinus, es denominado indistintamente como canguro antílope o ualarú antílope.2"
                    alert(descripcionAnimal);
                }
        
                if (opcionTipoAnimal === "4") {
                    let descripcionAnimal = "Conócense como cebra (o zebra, grafía en desusu[1]) a trés especies del xéneru Equus mesmes d'África —Equus grevyi (cebra de Grevy), Equus quagga (cebra común) y Equus zebra (cebra de monte)— que la so carauterística más distintiva ye'l so color a base de rayes blanques y negres. Al mesmu xéneru que pertenecen tamién los caballos y los pollíns.";
                    alert(descripcionAnimal);
                }

            }

        }

        if (opcionTipoAnimal === "4") {
            let opcionTipoAnimalCarnivoro = this.promptMenu("Seleccione el tipo de animal Carnivoro: \n1 - Cocodrilo\n2 - Coyote\n3 - Aguila\n4 - Buitre");
            console.log('opcionTipoAnimalCarnivoro: ', opcionTipoAnimalCarnivoro);

            if (opcionTipoAnimalCarnivoro !== "1" && opcionTipoAnimalCarnivoro !== "2" && opcionTipoAnimalCarnivoro !== "3" && opcionTipoAnimalCarnivoro !== "4") {
                alert("Debe seleccionar una opción entre 1 y 4");
            } else {


                if (opcionTipoAnimal === "1") {
                    let descripcionAnimal = "​Los crocodilios (Crocodilia) son un orden de grandes reptiles predadores semiacuáticos. El orden incluye a los cocodrilos (familia Crocodylidae), a los gaviales (familia Gavialidae) y a los aligátores y caimanes (familia Alligatoridae). Aunque a menudo se utiliza para referirse a todos ellos, de forma estricta el término 'cocodrilo' se refiere solo a los miembros de la familia Crocodylidae.";
                    alert(descripcionAnimal);
                }

                if (opcionTipoAnimal === "2") {
                    let descripcionAnimal = "El coyote (Canis latrans, que significa «perro aullador») es una especie de mamífero carnívoro de la familia Canidae. Los coyotes solo se encuentran en América del Norte, América Central y recientemente América del Sur; desde Canadá hasta Colombia. Habita en una gran diversidad de ecosistemas, tropicales, templados y áridos. Su nombre viene de la palabra náhuatl cóyotl (AFI /ˈkojo:tɬ/). Aunque a veces se reúnen en manadas, son por lo general solitarios. Viven en promedio 6 años. No se encuentran en riesgo. A pesar de haber sido intensamente cazados, los coyotes son unos de los pocos animales grandes que han ampliado su hábitat desde la conquista de América por los europeos. Han ocupado áreas en Norteamérica previamente habitadas por los lobos, y se han adaptado al consumo de basura y animales domésticos."
                    alert(descripcionAnimal);
                }
        
                if (opcionTipoAnimal === "3") {
                    let descripcionAnimal = "Águila es el nombre dado a las aves de presa, del orden de Accipitriformes,1​ (o Falconiformes acorde a una clasificación anterior),2​ familia Accipitridae, subfamilia Buteoninae. Pertenecen a varios géneros, los cuales están sujetos a una reclasificación más adecuada puesto que los expertos no llegan a una opinión consensuada. Las águilas se caracterizan principalmente por su gran tamaño, constitución robusta, cabeza y pico pesados. Las diversas especies y subespecies de águilas pueden encontrarse en casi cualquier parte del mundo excepto en la Antártida."
                    alert(descripcionAnimal);
                }
        
                if (opcionTipoAnimal === "4") {
                    let descripcionAnimal = "Los buitres son aves rapaces del orden Falconiformes que suelen alimentarse especialmente de animales muertos, aunque a falta de estos, son capaces de cazar presas vivas. Los buitres se encuentran distribuidos por todos los continentes, excepto la Antártida y Oceanía. Los buitres del Nuevo Mundo (América) pertenecen a la familia Cathartidae, mientras que los del Viejo Mundo (el resto de continentes) son de la familia Accipitridae; sus semejanzas se deben a que están adaptados a un mismo nicho ecológico y a la convergencia evolutiva, no a que compartan un antepasado común.";
                    alert(descripcionAnimal);
                }

            }
        }
    }
};

function promptMenu (menuText) {
    return prompt(menuText);
};