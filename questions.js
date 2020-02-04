function MakeQuestions(text,odgovori,odgovor,bodovi,kategorija){
	this.text = text;
	this.odgovori = odgovori;
	this.odgovor = odgovor;
	this.bodovi = bodovi;
	this.kategorija = kategorija;
}
let pitanje1 = new MakeQuestions("pitanje1",["opcija1","opcija2","opcija3","opcija4"],"opcija1",5,"automobili")
let pitanje2 = new MakeQuestions("pitanje2",["opcija1","opcija2","opcija3","opcija4"],"opcija4",2,"automobili")
let pitanje3 = new MakeQuestions("pitanje3",["opcija1","opcija2","opcija3","opcija4"],"opcija2",1,"automobili")
let pitanje4 = new MakeQuestions("pitanje4",["opcija1","opcija2","opcija3","opcija4"],"opcija3",6,"automobili")
let pitanje5 = new MakeQuestions("pitanje5",["opcija1","opcija2","opcija3","opcija4"],"opcija1",3,"automobili")
let questions = [pitanje1,pitanje2,pitanje3,pitanje4,pitanje5];
