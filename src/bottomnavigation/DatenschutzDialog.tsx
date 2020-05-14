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

export default function DatenschutzDialog(props: DialogProps) {
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
                        <h4>reCAPTCHA</h4>
                        Zum Schutz Ihrer Anfragen per Internetformular verwenden wir den Dienst reCAPTCHA des
                        Unternehmens Google Inc. (Google). Die Abfrage dient der Unterscheidung, ob die Eingabe durch
                        einen Menschen oder missbräuchlich durch automatisierte, maschinelle Verarbeitung erfolgt. Die
                        Abfrage schließt den Versand der IP-Adresse und ggf. weiterer von Google für den Dienst
                        reCAPTCHA benötigter Daten an Google ein. Zu diesem Zweck wird Ihre Eingabe an Google
                        übermittelt und dort weiter verwendet. Ihre IP-Adresse wird von Google jedoch innerhalb von
                        Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den
                        Europäischen Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an
                        einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser
                        Website wird Google diese Informationen benutzen, um Ihre Nutzung dieses Dienstes auszuwerten.
                        Die im Rahmen von reCaptcha von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen
                        Daten von Google zusammengeführt. Für diese Daten gelten die abweichenden
                        Datenschutzbestimmungen des Unternehmens Google. Weitere Informationen zu den
                        Datenschutzrichtlinien von Google finden Sie unter: https://policies.google.com/privacy?hl=de

                    </Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}
