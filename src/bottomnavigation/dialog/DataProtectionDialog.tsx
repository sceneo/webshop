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
                    Datenschutzerkl??rung
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        <h3>Datenschutz</h3>
                        <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten m??glich.
                            Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
                            E-Mail-Adressen) erhoben werden, erfolgt dies, soweit m??glich, stets auf freiwilliger Basis.
                            Diese Daten werden ohne Ihre ausdr??ckliche Zustimmung nicht an Dritte weitergegeben.
                        </p>
                        <p>In Verbindung mit Ihrem Zugriff werden in unserem Server f??r Zwecke der Datensicherheit
                            vor??bergehend Daten gespeichert, die m??glicherweise eine Identifizierung zulassen
                            (zum Beispiel IP-Adresse, Datum, Uhrzeit und Name der angeforderten Datei). Eine Auswertung,
                            mit Ausnahme f??r statistische Zwecke in anonymisierter Form, erfolgt nicht.
                        </p>
                        <p>Sollten Sie bei uns Informationsmaterialien bestellen, ben??tigen wir von Ihnen Name,
                            E-Mail-Adresse sowie Angaben zur Lieferung und Rechnungsstellung. So k??nnen wir Ihre
                            Bestellung bearbeiten und ausf??hren. Diese Daten werden f??r die Dauer der Auftragsabwicklung
                            in elektronischer Form gespeichert. Eine weitergehende Nutzung personenbezogener Daten oder
                            eine Weitergabe an Dritte erfolgt ohne Ihre ausdr??ckliche Einwilligung nicht.
                        </p>
                        <p>Mit der Bestellung willigen Sie in die genannte Verarbeitung Ihrer personenbezogenen Daten
                            ein, soweit dies f??r den Zweck des Vertrages erforderlich ist. Sie k??nnen diese Einwilligung
                            schriftlich oder per E-Mail uns gegen??ber jederzeit mit Wirkung f??r die Zukunft widerrufen.
                        </p>
                        <h3>Datenschutzerkl??rung f??r die Nutzung von Facebook-Plugins (Like-Button)</h3>
                        <p>Auf unseren Seiten sind Plugins des sozialen Netzwerks Facebook, 1601 South California Avenue,
                            Palo Alto, CA 94304, USA integriert. Die Facebook-Plugins erkennen Sie an dem Facebook-Logo
                            oder dem "Like-Button" ("Gef??llt mir") auf unserer Seite. Eine ??bersicht ??ber die
                            Facebook-Plugins finden Sie hier: http://developers.facebook.com/docs/plugins/. Wenn Sie
                            unsere Seiten besuchen, wird ??ber das Plugin eine direkte Verbindung zwischen Ihrem Browser
                            und dem Facebook-Server hergestellt. Facebook erh??lt dadurch die Information, dass Sie mit
                            Ihrer IP-Adresse unsere Seite besucht haben.</p>
                        <p>Wenn Sie den Facebook "Like-Button"
                        anklicken w??hrend Sie in Ihrem Facebook-Account eingeloggt sind, k??nnen Sie die Inhalte unserer
                        Seiten auf Ihrem Facebook-Profil verlinken. Dadurch kann Facebook den Besuch unserer Seiten Ihrem
                        Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als Anbieter der Seiten keine Kenntnis
                        vom Inhalt der ??bermittelten Daten sowie deren Nutzung durch Facebook erhalten. Weitere
                        Informationen hierzu finden Sie in der Datenschutzerkl??rung von facebook unter
                        http://de-de.facebook.com/policy.php Wenn Sie nicht w??nschen, dass Facebook den Besuch unserer
                        Seiten Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte aus Ihrem Facebook-Benutzerkonto
                        aus.
                    </p>
                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}
