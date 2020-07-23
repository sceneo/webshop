export interface Stoff {
    art: string;
    description: string;
    hashtag: string;
}

// TODO: replace by example pics & correct text
// Remember to adjust also the impressum where the source is mentionned
export const stoffe: Stoff[] = [
    {
        art: 'Jersey',
        hashtag: "#jersey",
        description: 'Ein Jersey ist ein weicher, oft elastischer Stoff, gestrickt oder gewirkt, aus Garnen, aus Viskose oder Viskosemischungen, Wolle oder Wollmischgarnen, Baumwolle oder Seide. Er wirkt ähnlich einem Gewebe mit leichter Rippenmusterung.\n' +
            '\n' +
            'Jerseystoff wird hauptsächlich für Bekleidung wie T-Shirts und Unterwäsche oder für Bettwäsche verwendet. Jersey-Bettwäsche ist geschmeidig, weich, außerdem atmungsaktiv, saugfähig und trocknergeeignet.\n'
    },
    {
        art: 'Sweat',
        hashtag: "#sweat",
        description: 'Der Stoff eines Sweatshirts besteht aus einer besonderen Strickware. Diese ist einflächig auf Rundstrickmaschinen gestrickt (Rechts/Links-Ware). Auf der Rückseite wird ein spezieller Futterfaden mitgeführt, welcher weicher gedreht ist als das Grundstrickgarn, das auf der Vorderseite sichtbar ist. Dieser wird während des Veredelungsprozesses aufgeraut, was zu der typischen flauschigen Innenseite der Sweatshirtware führt. Aus diesem Grund heißt dieser Stoff in Fachkreisen auch „Futterware“.',
    },
    {
        art: 'Fleece',
        hashtag: "#fleece",
        description: 'Fleece (englisch für Flausch, Polyestervlies oder Kunstfilz) ist ein synthetischer Wirkpelz und ähnelt dem Faserpelz, einem schlingengeschnittenen Polyamidgewirk.\n' +
            '\n' +
            'Fleece ist die englische Bezeichnung für einen Veloursstoff, der meist aus Polyester z. B. aus recycelten PET-Flaschen hergestellt wird.[1] 1979 wurde der Stoff von Malden Mills Industries Inc. (USA) vorgestellt. Das Unternehmen vertrieb seine Produkte unter der Marke Polartec. 2007 wurde nach Zahlungsunfähigkeit das Unternehmen übernommen und unter der Bezeichnung Polartec LLC fortgeführt.',
    },
    {
        art: 'Cord',
        hashtag: "#cord",
        description: 'Cord (auch Kord oder Manchester; in Österreich umgangssprachlich auch Schnürlsamt), englisch corduroy, ist ein Gewebe, das in der Cord-, (Hohlschuss-, Struck-) Bindung[1] hergestellt wird, mit samtartigen Längsrippen. Die Herkunft des Wortes ist nicht völlig geklärt. Cord wurde zunächst vor allem in Manchester (England) produziert. Der Musselin wird aus Baumwolle oder Wolle – seit Anfang des 20. Jahrhunderts auch aus Viskose-Spinnfasern – in Leinwandbindung gewebt. Durch die weich gedrehten Fäden entsteht ein fließender Stoff mit weichem Griff. In sehr hochwertiger Ausführung wird Musselin auch aus Seide hergestellt',
    },
    {
        art: 'Walk',
        hashtag: "#walk",
        description: 'Walkstoffe sind in Leinwand- oder Köperbindung gewebte Textilien, deren Oberflächen durch Walken (Drücken, Schieben, Stauchen, Pressen und Kneten in warmen, schwach alkalischen oder sauren Bädern) so verfilzt werden, dass die ursprüngliche Webbindung kaum noch oder gar nicht mehr zu erkennen ist. Im Gegensatz zum Filz wird jedoch gewebter Stoff verarbeitet.',
    },
    {
        art: 'Musselin',
        hashtag: "#musselin",
        description: 'Der Musselin (auch der Mousselin; französisch la mousseline; italienisch la mussolina; in der Schweiz die Mousseline) ist ein lockerer, feinfädiger und glatter Stoff, der wegen der ursprünglich verwendeten orientalischen Muster nach der Stadt Mosul im heutigen Nordirak benannt ist. ',
    },
    {
        art: 'Baumwolle',
        hashtag: "#baumwole",
        description: 'Stoff aus Baumwolle.',
    },
];
