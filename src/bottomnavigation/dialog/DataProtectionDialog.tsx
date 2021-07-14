import React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {DialogProps} from "../BottomNavigationBar";

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
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
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

export default function DataProtectionDialog(props: DialogProps) {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        props.closeDialog();
        setOpen(false);
    };

    return (
        <div>
            <Dialog aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Datenschutzerklärung
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <h3>Datenschutz</h3>
                        <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich.
                            Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
                            E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis.
                            Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
                        </p>
                        <p>In Verbindung mit Ihrem Zugriff werden in unserem Server für Zwecke der Datensicherheit
                            vorübergehend Daten gespeichert, die möglicherweise eine Identifizierung zulassen
                            (zum Beispiel IP-Adresse, Datum, Uhrzeit und Name der angeforderten Datei). Eine Auswertung,
                            mit Ausnahme für statistische Zwecke in anonymisierter Form, erfolgt nicht.
                        </p>
                        <p>Sollten Sie bei uns Informationsmaterialien bestellen, benötigen wir von Ihnen Name,
                            E-Mail-Adresse sowie Angaben zur Lieferung und Rechnungsstellung. So können wir Ihre
                            Bestellung bearbeiten und ausführen. Diese Daten werden für die Dauer der Auftragsabwicklung
                            in elektronischer Form gespeichert. Eine weitergehende Nutzung personenbezogener Daten oder
                            eine Weitergabe an Dritte erfolgt ohne Ihre ausdrückliche Einwilligung nicht.
                        </p>
                        <p>Mit der Bestellung willigen Sie in die genannte Verarbeitung Ihrer personenbezogenen Daten
                            ein, soweit dies für den Zweck des Vertrages erforderlich ist. Sie können diese Einwilligung
                            schriftlich oder per E-Mail uns gegenüber jederzeit mit Wirkung für die Zukunft widerrufen.
                        </p>
                        <h3>Datenschutzerklärung für die Nutzung von Facebook-Plugins (Like-Button)</h3>
                        <p>Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, 1601 South California Avenue,
                            Palo Alto, CA 94304, USA integriert. Die Facebook-Plugins erkennen Sie an dem Facebook-Logo
                            oder dem "Like-Button" ("Gefällt mir") auf unserer Seite. Eine Übersicht über die
                            Facebook-Plugins finden Sie hier: http://developers.facebook.com/docs/plugins/. Wenn Sie
                            unsere Seiten besuchen, wird über das Plugin eine direkte Verbindung zwischen Ihrem Browser
                            und dem Facebook-Server hergestellt. Facebook erhält dadurch die Information, dass Sie mit
                            Ihrer IP-Adresse unsere Seite besucht haben.</p>
                        <p>Wenn Sie den Facebook "Like-Button"
                        anklicken während Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die Inhalte unserer
                        Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem
                        Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis
                        vom Inhalt der übermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere
                        Informationen hierzu finden Sie in der Datenschutzerklärung von facebook unter
                        http://de-de.facebook.com/policy.php Wenn Sie nicht wünschen, dass Facebook den Besuch unserer
                        Seiten Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto
                        aus.
                    </p>
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}
