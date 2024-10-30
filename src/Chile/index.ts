import { Aisen } from "./aisen";
import { Antofagasta } from "./antofagasta";
import { Araucania } from "./araucania";
import { AricaParinacota } from "./arica_parinacota";
import { Atacama } from "./atacama";
import { BioBio } from "./bio_bio";
import { Coquimbo } from "./coquimbo";
import { LosRios } from "./los_rios";
import { GeneralLibertador } from "./general_libertador";
import { MagallanesAntartica } from "./magallanes_antartica";
import { Maule } from "./maule";
import { Nuble } from "./nuble";
import { Santiago } from "./santiago";
import { Tarapaca } from "./tarapaca";
import { Valparaiso } from "./valparaiso";

export const Chile = {
	value: "CH",
	label: "Chile",
	children: [
		Aisen,
		Antofagasta,
		Araucania,
		AricaParinacota,
		Atacama,
		BioBio,
		Coquimbo,
		GeneralLibertador,
		LosRios,
		MagallanesAntartica,
		Maule,
		Nuble,
		Santiago,
		Tarapaca,
		Valparaiso,
	],
};
