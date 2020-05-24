import React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
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

export default function ImpressumDialog(props: DialogProps) {
    const [open, setOpen] = React.useState(true);
    const handleClose = () => {
        props.closeDialog();
        setOpen(false );
    };


    return (
        <div>
            <Dialog aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Impressum
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>

                        <p>
                        Verantwortlich für die Inhalte der Webseite: <br/>
                        Aidali Handmade <br/>
                        Annika Klingenberg<br/>
                            [TODO]
                        </p>


                        <p>
                        Verantwortlich für die Umsetzung der Webseite (nicht inhaltlich): <br/>
                        Dr. Tobias Kunz <br/>
                        Ampfingstraße 44 <br/>
                        81671 München <br/>
                        booking@maennerwirtschaftband.de <br/>
                        </p>

                            <h4>Haftung für Inhalte</h4>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                        nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                        Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur
                        Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                        hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                        einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
                        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.


                            <h4>Haftung für Links</h4>
                        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                        haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
                        Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                        erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                        werden wir derartige Links umgehend entfernen.

                                <h4>Urheberrecht</h4>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                        deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                        Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
                        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten,
                        nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                        erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
                        als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                        werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                        werden wir derartige Inhalte umgehend entfernen.

                                    <h4>Bild und Videomaterial</h4>
                        Inhalte von folgenden Parteien:
                        - Bilder von Instagram (Aidali.Handmade)
                        - Stoffbeispielbilder und Texte von Wikipedia


                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}
