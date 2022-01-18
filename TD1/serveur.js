const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

let jsonData = [{
    "type": "collection",
    "count": 3,
    "commandes": [
        {
            "id": "AuTR4-65ZTY",
            "mail_client": "jan.neymar@yaboo.fr",
            "nom_client": "jan neymar",
            "date_commande": "2022-01-05 12:00:23",
            "date_livraison": "2022-01-06 10:30",
            "montant": 25.95
        },
        {
            "id": "657GT-I8G443",
            "mail_client": "jan.neplin@gmal.fr",
            "nom_client": "jan neplin",
            "date_commande": "2022-01-06 16:05:47",
            "date_livraison": "2022-01-07 11:30",
            "montant": 42.95
        },
        {
            "id": "K9J67-4D6F5",
            "mail_client": "claude.francois@grorange.fr",
            "nom_client": "claude francois",
            "date_commande": "2022-01-07 17:36:45",
            "date_livraison": "2022-01-08 12:30",
            "montant": 14.95
        },
    ]     
}];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/commandes', function(req, res){
    const dataIncomplet = jsonData.map(datas => {
        let commandes = [];
        datas.commandes.forEach(data => {
            commandes.push({
                id: data.id, 
                mail_client: data.mail_client, 
                date_commande: data.date_commande,
                montant: data.montant
                
            });
        });
        return { type: datas.type, count: datas.count, commandes: commandes};
    });
    res.json(dataIncomplet);
});

app.get('/commandes/:id', function(req, res){
    let id = req.params.id;
    const filteredData = jsonData[0].commandes.filter(data => data.id === id);
    res.status(200).json(filteredData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});