import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import {Grid} from "@material-ui/core";
import {createProducts} from "./ProductList";
import ProductComponent from "../components/ProductComponent";


export interface ProductDetailDialogProps {
    closeDialog: () => void;
    url: string;
    title: string;
}

class Products extends Component {
    state = {
        showPupUp: false as boolean,
        url: "" as string,
    };

    render() {
        return (
            <div>
                <Typography component="div">
                    <h1 className={"headerText"}>Produkte & Preise</h1>
                    <div className={"mainText"}>
                        Hier findest du eine Übersicht aller Artikel, die du bei mir bestellen kannst. Ich habe mich
                        bemüht, jede Variante aufzuführen – sollten trotzdem noch Wünsche offen sein, teile sie mir
                        gerne über das Kontaktformular mit und ich prüfe, wie ich sie für dich umsetzen kann.
                    </div>
                    <div className={"mainText"}>
                        Die angegebenen Preise enthalten keine Dekoration oder eventuelle Versandkosten!
                    </div>
                </Typography>
                <p></p>
                <Grid container spacing={1}>
                    {createProducts().map(product => (
                        <Grid item sm={4}>
                            <ProductComponent bild={product.bild}
                                              title={product.title}
                                              aussenstoffe={product.aussenstoffe}
                                              futterstoffe={product.futterstoffe}
                                              groessen={product.groessen}
                                              stoffe={product.stoffe}
                                              varianten={product.varianten}
                                              details={product.details}/>

                        </Grid>
                    ))}
                </Grid>
            </div>
        )
    };
}

export default Products;