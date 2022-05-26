const express = require("express");
const cors = require("cors"); 

const PORT = 5000;

const server = express();

const router = express.Router();

router.get ("/blancos", (req, res) => {

    const blancos = [
        {
            name: "Dulce María",
            uva: "100% Malvar",
            photo: "https://www.vinosjeromin.com/wp-content/uploads/2019/10/m-25519_jeromin_dulce-maria_alimentacion-mini.jpg"
        },
        {
            name: "Finca la Estacada",
            uva: "100 %Airén",
            photo: "https://static.carrefour.es/hd_3200x_/img_pim_food/497207_00_1_Bodega.jpg"

        },
    ];
    res.send(blancos);
   
});

router.get ("/tintos", (req, res) => {
    const tintos = [
        {
            name:"Vivanco",
            uva: "95% Tempranillo, 3% Graciano, 2% Maturana tinta",
            photo: "https://www.compra-vino.com/1142-large_default/vivanco-crianza-estuche.jpg"
        },
        {
            name:"Malleolus 2019",
            uva: "100% Tempranillo",
            photo: "https://admin.bodeboca.com/sites/default/files/vinos/2016-10/bot-malleolus-2019.jpg"
        }

    ];
    res.send(tintos)
});

server.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );

server.use("/", router);

server.listen(PORT, () => {
  console.log(`Server running in http://localhost:${PORT}`);
});
