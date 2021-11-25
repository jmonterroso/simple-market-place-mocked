const dotEnv = require("dotenv");
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const chalk = require("chalk");
const app = express();

// Routes

const authRouter = require("./routes/auth");
const productsRouter = require("./routes/products");

// esta linea ayuda a leer la configuracion que tenemos en el archivo .env
dotEnv.config();

// definimos el uri de la base de datos definido en el archivo .env

// se conecta a la base de datos


// se define el puerto que va a escuchar basado en el archivo de configuración .env
const port = 8080;

// usamos el middleware cors para aceptar llamadas cors en nuestro servidor
app.use(cors());
// este middleware nos sirve para loggear las llamadas al servidor
app.use(logger("dev"));

// middleware para manejar requests y respuestas json
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// todas las rutas las definimos aqui
app.use("/auth", authRouter);
app.use("/products", productsRouter);

// iniciamos nuestro servidor
app.listen(port, () => {
  console.log(
    `${chalk.green("✓")} App is running at ${chalk.bgGreen(
      `http://localhost:${port}`
    )}`
  );
  console.log("  Press CTRL-C to stop\n");
});