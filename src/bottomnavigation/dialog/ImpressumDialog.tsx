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
                        Verantwortlich f??r die Inhalte der Webseite: <br/>
                        Aidali Handmade <br/>
                        Annika Klingenberg<br/>
                        Heitersheimer Str. 9 <br/>
                        79426 Buggingen <br/>
                        </p>


                        <p>
                        Verantwortlich f??r die Umsetzung der Webseite (nicht inhaltlich): <br/>
                        Dr. Tobias Kunz <br/>
                        Normandieweg 13 <br/>
                        79618 Rheinfelden <br/>
                        </p>

                            <h4>Haftung f??r Inhalte</h4>
                        Als Diensteanbieter sind wir gem???? ?? 7 Abs.1 TMG f??r eigene Inhalte auf diesen Seiten nach den
                        allgemeinen Gesetzen verantwortlich. Nach ???? 8 bis 10 TMG sind wir als Diensteanbieter jedoch
                        nicht verpflichtet, ??bermittelte oder gespeicherte fremde Informationen zu ??berwachen oder nach
                        Umst??nden zu forschen, die auf eine rechtswidrige T??tigkeit hinweisen. Verpflichtungen zur
                        Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
                        hiervon unber??hrt. Eine diesbez??gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
                        einer konkreten Rechtsverletzung m??glich. Bei Bekanntwerden von entsprechenden
                        Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.


                            <h4>Haftung f??r Links</h4>
                        Unser Angebot enth??lt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss
                        haben. Deshalb k??nnen wir f??r diese fremden Inhalte auch keine Gew??hr ??bernehmen. F??r die
                        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m??gliche
                        Rechtsverst????e ??berpr??ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
                        erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
                        werden wir derartige Links umgehend entfernen.

                                <h4>Urheberrecht</h4>
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                        deutschen Urheberrecht. Die Vervielf??ltigung, Bearbeitung, Verbreitung und jede Art der
                        Verwertung au??erhalb der Grenzen des Urheberrechtes bed??rfen der schriftlichen Zustimmung des
                        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f??r den privaten,
                        nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
                        erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter
                        als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
                        werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                        werden wir derartige Inhalte umgehend entfernen.

                                    <h4>Bild und Videomaterial</h4>
                        Inhalte von folgenden Parteien: <br/>
                        - Bilder von Instagram (Aidali.Handmade) <br/>

                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}
