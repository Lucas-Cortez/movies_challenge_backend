import express from "express";
import "express-async-errors";
import cors from "cors";
import { routes } from "./routes";
import { errorHandler } from "./middlewares/handleError";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(errorHandler);

// export default app;
app.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}`));
