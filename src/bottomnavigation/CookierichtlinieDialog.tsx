import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {DialogProps} from "./BottomNavigationBar";

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

export default function CookierichtlinieDialog(props: DialogProps) {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        props.closeDialog();
        setOpen(false);
    };

    return (
        <div>
            <Dialog aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Cookierichtlinie
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Mit dieser Cookie-Richtlinie informiert der Website-Betreiber den Nutzer der Website über den
                        Einsatz von Cookies oder ähnlichen Speichertechnologien (nachfolgend „Cookies“) auf dieser
                        Website.
                        <p/>
                        <h4>Was sind Cookies?</h4>
                        Cookies sind kleine Textdateien, die vom Webbrowser auf dem Endgerät des Nutzers zur Speicherung
                        von bestimmten Informationen abgelegt werden. Beim nächsten Aufruf unserer Website mit demselben
                        Endgerät werden die in Cookies gespeicherten Informationen an unsere Website („First Party
                        Cookie“) oder eine andere Website, zu der das Cookie gehört („Third Party Cookie“),
                        zurückgesandt.
                        <p/>
                        Durch die im Cookie gespeicherten und zurückgesandten Informationen erkennt die jeweilige
                        Website, dass der Nutzer diese mit dem Webbrowser seines Endgeräts bereits aufgerufen und
                        besucht hat. Diese Informationen nutzen wir, um dem Nutzer die Website gemäß seinen Präferenzen
                        optimal anzeigen zu können.
                        <p/>
                        Es wird hierbei aber nur das Cookie selbst auf dem Endgerät identifiziert. Eine darüber
                        hinausgehende Speicherung von personenbezogenen Daten erfolgt nur, wenn der Nutzer uns seine
                        ausdrückliche Zustimmung dafür gibt oder wenn diese Speicherung unbedingt erforderlich ist,
                        um den angebotenen und aufgerufenen Dienst nutzen zu können.
                        <p/>
                        <h4>Zustimmung zur Verwendung von Cookies </h4>
                        Cookies, die nicht unbedingt erforderlich sind, um die Dienste auf dieser Website zur Verfügung
                        zu stellen, werden erst nach Einwilligung verwendet. Indem der Nutzer auf Grundlage eines von
                        uns auf der Website erteilten Hinweises („Cookie-Banner“) eine Einwilligung zur Verwendung von
                        Cookies erteilt hat, stimmt er der Verwendung von Cookies zu.
                        <p/>
                        Seine Cookie Einstellungen kann der Nutzer jederzeit individuell anpassen, indem er zum Beispiel
                        einzelne Cookie-Kategorien aktiviert oder deaktiviert.
                        <p/>
                        Wie der Nutzer Cookies generell (inklusive der unbedingt erforderlichen Cookies) in seinem
                        Browser deaktivieren oder löschen kann, wird unter dem Punkt "Deaktivierung oder Löschung
                        sämtlicher Cookies" beschrieben.
                        <p/>
                        <h4>Rechtsgrundlage</h4>
                        Wenn der Nutzer auf Grundlage eines von uns auf der Website erteilten Hinweises („Cookie-Banner“)
                        eine Einwilligung zur Verwendung von Cookies erteilt hat, richtet sich die Rechtmäßigkeit der
                        Datenverarbeitung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO. Wenn keine Einwilligung angefordert wird,
                        stellt unser berechtigtes Interesse (d. h. Interesse an der Analyse, Optimierung und dem
                        wirtschaftlichen Betrieb dieser Website und Leistungen) im Sinne des Art. 6 Abs. 1 S. 1 lit. f
                        DSGVO die Rechtsgrundlage für die Nutzung der Cookies dar.
                        <p/>
                        <h4>Kategorien der verwendeten Cookies</h4>
                        Je nach Verwendungszweck und Funktion unterteilen wir die von der Website verwendeten Cookies
                        in die folgenden Kategorien:
                        <p/>
                        Unbedingt erforderliche Cookies;
                        Funktionale-Cookies;
                        Performance-Cookies;
                        Marketing- / Third Party- / Zustimmungspflichtige-Cookies
                        <p/>
                        <h4>Unbedingt erforderliche Cookies</h4>
                        Unbedingt erforderliche Cookies sorgen dafür, dass diese Website, beziehungsweise der Dienst,
                        ordnungsgemäß funktioniert. Das heißt, ohne diese Cookies ist diese Website, beziehungsweise
                        der Dienst, nicht wie vorgesehen nutzbar. Diese Art von Cookies wird ausschließlich von dem
                        Betreiber der Website verwendet (First Party Cookies) und sämtliche Informationen, die in den
                        Cookies gespeichert sind, werden nur an diese Website gesendet.
                        <p/>
                        Auf unserer Webseite kommen folgende unbedingt erforderlichen Cookies zum Einsatz:
                        <p/>
                        Keine opt-in Cookies.
                        <p/>
                        Unbedingt erforderliche Cookies können nicht einzeln deaktiviert bzw. aktiviert werden. Der
                        Nutzer hat jederzeit die Möglichkeit, seine Cookie-Einstellungen anzupassen oder Cookies
                        generell in seinem Browser zu deaktivieren (siehe Punkt „Deaktivierung oder Löschung sämtlicher
                        Cookies").
                        <p/>
                        <h4>Funktionale Cookies</h4>
                        Funktionale Cookies ermöglichen dieser Webseite, getätigte Angaben, wie z. B. den Benutzernamen
                        oder die Sprachauswahl, zu speichern und dem Nutzer darauf basierend verbesserte und
                        personalisierte Funktionen anzubieten. Diese Cookies sammeln und speichern ausschließlich
                        anonymisierte Informationen.
                        <p/>
                        Auf unserer Webseite kommen folgende Funktionale Cookies zum Einsatz:
                        <p/>
                        Name	Zweck	Laufzeit
                        cookielaw	Wurde das Cookie Banner angeklickt	1 Jahr
                        shd	Wird gesetzt wenn der Nutzer sich auf seiner Jimdo-Seite anmeldet	1 Jahr
                        has_close_teaser	Zeigt an, ob der User einen Teaser geschlossen hat, damit dieser nicht
                        erneut angezeigt wird	Session Der Nutzer kann der Verwendung von Funktionalen Cookies
                        jederzeit widersprechen, indem er seine Cookie-Einstellungen entsprechend anpasst.
                        <p/>
                        <h4>Performance Cookies</h4>
                        Performance-Cookies sammeln Informationen darüber, wie unsere Webseiten genutzt werden, um
                        darauf basierend deren Attraktivität, Inhalt und Funktionalität zu verbessern. Diese Cookies
                        helfen uns beispielsweise festzustellen, ob und welche Unterseiten unserer Webseite besucht
                        werden und für welche Inhalte sich die Nutzer besonders interessieren. Wir erfassen die Anzahl
                        der Zugriffe auf eine Seite, die Anzahl der aufgerufenen Unterseiten, die auf unserer Webseite
                        verbrachte Zeit, die Reihenfolge der besuchten Seiten, welche Suchbegriffe unsere Nutzer zu uns
                        geführt haben, das Land, die Region und gegebenenfalls die Stadt aus der der Zugriff erfolgt,
                        sowie den Anteil von mobilen Endgeräten, die auf unsere Webseiten zugreifen. Die aus technischen
                        Gründen übermittelte IP-Adresse eines Rechners wird automatisch anonymisiert und ermöglicht uns
                        keinen Rückschluss auf den einzelnen Nutzer.
                        <p/>
                        Auf unserer Webseite kommen folgende Performance Cookies zum Einsatz:
                        <p/>
                        Name	Zweck	Laufzeit
                        Der Nutzer der Website kann der Verwendung von Performance-Cookies jederzeit widersprechen,
                        indem er seine Cookie-Einstellungen entsprechend anpasst.
                        <p/>
                        <h4>Marketing- / Third Party-Cookies</h4>
                        Marketing- / Third Party- / Zustimmungspflichtige-Cookies stammen unter anderem von externen
                        Werbeunternehmen und werden verwendet, um Informationen über die vom Nutzer besuchten Websites
                        zu sammeln, um z. B. zielgruppenorientierte Werbung für den Benutzer zu erstellen.
                        <p/>
                        Auf unserer Webseite kommen folgende Marketing- / Third Party- / Zustimmungspflichtige-Cookies zum Einsatz:
                        <p/>
                        Name	Zweck	Laufzeit
                        Der Nutzer kann der Verwendung von Marketing-Cookies jederzeit widersprechen, indem er seine Cookie-Einstellungen entsprechend anpasst.
                        <p/>
                        Deaktivierung oder Löschung sämtlicher Cookies
                        Der Nutzer kann seinen Webbrowser so einstellen, dass das Speichern von Cookies auf seinem Endgerät
                        generell verhindert wird beziehungsweise er jedes Mal gefragt wird, ob er mit dem Setzen von
                        Cookies einverstanden ist. Einmal gesetzte Cookies kann der Nutzer jederzeit wieder löschen.
                        Wie das Ganze funktioniert, wird in Hilfe-Funktion des jeweiligen Webbrowsers beschrieben.
                        <p/>
                        Eine generelle Deaktivierung von Cookies kann gegebenenfalls zu Funktionseinschränkungen dieser Website führen.
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}
